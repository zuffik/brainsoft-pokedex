import { ApolloClient, InMemoryCache } from '@apollo/client';
import { pokemonFields, possibleTypes } from './index';

const createApolloClient = () =>
  new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_URL,
    cache: new InMemoryCache({
      ...possibleTypes,
      typePolicies: {
        Query: {
          fields: {
            ...pokemonFields,
          },
        },
      },
    }),
    connectToDevTools: process.env.NODE_ENV === 'development',
  });

export const apolloClient = createApolloClient();
