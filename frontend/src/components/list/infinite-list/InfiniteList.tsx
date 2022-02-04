import React from 'react';
import { passRef } from '../../../utils';

export interface InfiniteListProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onShouldLoadMore: () => void;
  loading?: boolean;
}

export const InfiniteList = React.memo(
  React.forwardRef<HTMLDivElement, InfiniteListProps>((props, ref) => {
    const { onShouldLoadMore, loading, ...rest } = props;
    const anchor = React.useRef<HTMLDivElement>(
      null
    ) as React.MutableRefObject<HTMLDivElement>;
    const loadingRef = React.useRef(!!props.loading);

    React.useEffect(() => {
      loadingRef.current = !!props.loading;
    }, [props.loading]);
    React.useEffect(() => {
      const onScroll = (e: Event) => {
        const bbox = anchor.current.getBoundingClientRect();
        if (
          bbox.y + bbox.height - window.innerHeight < 0 &&
          !loadingRef.current
        ) {
          onShouldLoadMore();
        }
      };
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, [onShouldLoadMore]);

    const setAnchor = React.useCallback(
      (div: HTMLDivElement) => {
        passRef(div, ref);
        anchor.current = div;
      },
      [ref]
    );
    return (
      <div {...rest} ref={setAnchor}>
        {props.children}
      </div>
    );
  })
);

InfiniteList.displayName = 'InfiniteList';
