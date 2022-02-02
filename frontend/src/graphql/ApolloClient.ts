import { ApolloClient, InMemoryCache } from '@apollo/client';
import { possibleTypes } from './index';
import { pokemonsQueryFields } from './state/PokemonQueries';

const createApolloClient = () =>
  new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_URL,
    cache: new InMemoryCache({
      ...possibleTypes,
      typePolicies: {
        Query: {
          fields: {
            ...pokemonsQueryFields,
          },
        },
      },
    }),
    connectToDevTools: process.env.NODE_ENV === 'development',
  });

export const apolloClient = createApolloClient();
