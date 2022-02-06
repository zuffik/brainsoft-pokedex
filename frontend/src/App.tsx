import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './graphql';
import { BrowserRouter } from 'react-router-dom';
import { ToastQueueProvider } from './contexts';
import { AppRouterLayout } from './components/page/app-router-layout/AppRouterLayout';
import { ToastNotification } from './components/elements/toast-notification/ToastNotification';

export const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <ToastQueueProvider toastComponent={ToastNotification}>
          <AppRouterLayout />
        </ToastQueueProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
};
