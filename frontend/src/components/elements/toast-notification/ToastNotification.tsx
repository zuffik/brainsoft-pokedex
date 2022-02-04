import React from 'react';
import styles from './ToastNotification.module.scss';
import { ToastNotification as CarbonToastNotification } from 'carbon-components-react';
import { Toast } from '../../../types';
import classNames from 'classnames';
import { useToastQueue } from '../../../contexts';

export interface ToastNotificationProps {
  toast: Toast;
  index: number;
  timeout: number;
}

export const ToastNotification = React.memo<ToastNotificationProps>((props) => {
  const [mounted, setMounted] = React.useState(false);
  const { remove } = useToastQueue();
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  React.useEffect(() => {
    setTimeout(() => setMounted(true));
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      setMounted(false);
    }, props.timeout - parseInt(styles.transitionDuration));
    return () => clearTimeout(timeoutRef.current!);
  }, [props.timeout]);
  const handleClose = React.useCallback(() => {
    setMounted(false);
    remove(props.toast.id!);
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    return true;
  }, [props.toast.id, remove]);
  return (
    <div
      className={classNames(styles.root, {
        [styles.in]: mounted,
      })}
      style={{ bottom: 20 + props.index * 120 + 'px' }}
    >
      <CarbonToastNotification
        onClose={handleClose}
        title={props.toast.title}
        subtitle={props.toast.content}
        kind="info"
      />
    </div>
  );
});

ToastNotification.displayName = 'ToastNotification';
