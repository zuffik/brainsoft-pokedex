import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './graphql';
import { BrowserRouter } from 'react-router-dom';
import { AppRouterLayout } from './components';

export const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <AppRouterLayout />
      </BrowserRouter>
    </ApolloProvider>
  );
};
