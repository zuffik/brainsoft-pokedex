import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './graphql';
import { BrowserRouter } from 'react-router-dom';
import { AppRouterLayout, ToastNotification } from './components';
import { ToastQueueProvider } from './contexts';

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
