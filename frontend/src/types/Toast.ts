import React from 'react';

export interface Toast {
  id?: string;
  title: string;
  content: React.ReactNode;
}
