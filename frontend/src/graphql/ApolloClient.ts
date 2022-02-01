import { ApolloClient, InMemoryCache } from '@apollo/client';
import { possibleTypes } from './index';
import { pokemonsQueriesFields } from './state/PokemonQueries';

const createApolloClient = () =>
  new ApolloClient({
    uri: process.env.GRAPHQL_URL,
    cache: new InMemoryCache({
      ...possibleTypes,
      typePolicies: {
        Query: {
          fields: {
            ...pokemonsQueriesFields,
          },
        },
      },
    }),
    connectToDevTools: process.env.NODE_ENV === 'development',
  });

export const apolloClient = createApolloClient();
