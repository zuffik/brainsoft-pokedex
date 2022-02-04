import React from 'react';
import { Toast } from '../../types';
import update from 'immutability-helper';
import { useContext } from '../../hooks';

export interface ToastQueueContext {
  enqueue: (toast: Toast) => void;
  remove: (id: string) => void;
}

const ctx = React.createContext<ToastQueueContext | undefined>(undefined);
ctx.displayName = 'ToastQueue';

export interface ToastQueueProviderProps {
  defaultTimeout?: number;
  maxToasts?: number;

  toastComponent: React.ComponentType<{
    toast: Toast;
    index: number;
    timeout: number;
  }>;
}

export const ToastQueueProvider: React.FC<ToastQueueProviderProps> = (
  props
) => {
  const idleQueueRef = React.useRef<Toast[]>([]);
  const [activeQueue, setActiveQueue] = React.useState<Toast[]>([]);

  const pushToIdleQueue = React.useCallback((toast: Toast) => {
    idleQueueRef.current = update(idleQueueRef.current, { $push: [toast] });
  }, []);
  const popFromIdleQueue = React.useCallback((): Toast => {
    const item = idleQueueRef.current[0];
    idleQueueRef.current = update(idleQueueRef.current, { $splice: [[0, 1]] });
    return item;
  }, []);
  const popFromActiveQueue = React.useCallback((): Toast => {
    setActiveQueue((activeQueue) =>
      update(activeQueue, {
        $splice: [[0, 1]],
      })
    );
    return activeQueue[0];
  }, [activeQueue]);
  const pushToActiveQueue = React.useCallback(
    (toast: Toast) => {
      setActiveQueue((activeQueue) => update(activeQueue, { $push: [toast] }));
      setTimeout(() => {
        popFromActiveQueue();
      }, props.defaultTimeout);
    },
    [popFromActiveQueue, props.defaultTimeout]
  );

  const checkQueues = React.useCallback(() => {
    if (
      activeQueue.length < props.maxToasts! &&
      idleQueueRef.current.length > 0
    ) {
      pushToActiveQueue(popFromIdleQueue());
    }
  }, [
    activeQueue.length,
    popFromIdleQueue,
    props.maxToasts,
    pushToActiveQueue,
  ]);
  const enqueue = React.useCallback(
    (toast: Toast) => {
      pushToIdleQueue(
        update(toast, {
          id: (id) => id || Date.now().toString(),
        })
      );
      checkQueues();
    },
    [checkQueues, pushToIdleQueue]
  );
  React.useEffect(() => {
    checkQueues();
  }, [activeQueue, checkQueues]);
  const remove = React.useCallback(
    (id: string) =>
      setActiveQueue((activeQueue) =>
        activeQueue.filter((toast) => toast.id !== id)
      ),
    []
  );
  const value: ToastQueueContext = React.useMemo(
    () => ({ enqueue, remove }),
    [enqueue, remove]
  );
  const ToastComponent = props.toastComponent;
  return (
    <ctx.Provider value={value}>
      {props.children}
      {activeQueue.map((toast, i) => (
        <ToastComponent
          key={toast.id}
          toast={toast}
          index={i}
          timeout={props.defaultTimeout!}
        />
      ))}
    </ctx.Provider>
  );
};

ToastQueueProvider.defaultProps = {
  defaultTimeout: 5000,
  maxToasts: 3,
};

export const useToastQueue = () => useContext(ctx);
