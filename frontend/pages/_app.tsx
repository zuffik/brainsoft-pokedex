import '../src/styles/globals.scss';
import type { AppProps } from 'next/app';
import { AppHeader } from '../src/components';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../src/graphql';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <AppHeader />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
