import React from 'react';

export const passRef = <T>(value: T, passRef?: React.Ref<T>) => {
  if (typeof passRef === 'function') {
    passRef?.(value);
  } else if (passRef) {
    (passRef as React.MutableRefObject<T>).current = value;
  }
};
