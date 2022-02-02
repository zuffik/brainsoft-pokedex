import React from 'react';

export const useContext = <T>(context: React.Context<T | undefined>): T => {
  const ctx = React.useContext<T | undefined>(context);
  if (!ctx) {
    throw new Error(`Must provide '${context.displayName}' context.`);
  }
  return ctx;
};
