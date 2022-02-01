import React from 'react';

export const useContext = <T>(context: React.ContextType<T | undefined>): T => {
  const ctx = React.useContext<T>(context);
  if (!ctx) {
    throw new Error(`Must provide '${context.displayName}' context.`);
  }
  return ctx;
};
