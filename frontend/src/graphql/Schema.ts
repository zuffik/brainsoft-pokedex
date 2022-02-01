import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Attack = {
  __typename?: 'Attack';
  damage: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type Mutation = {
  __typename?: 'Mutation';
  favoritePokemon?: Maybe<Pokemon>;
  unFavoritePokemon?: Maybe<Pokemon>;
};

export type MutationFavoritePokemonArgs = {
  id: Scalars['ID'];
};

export type MutationUnFavoritePokemonArgs = {
  id: Scalars['ID'];
};

export type Pokemon = {
  __typename?: 'Pokemon';
  attacks: PokemonAttack;
  classification: Scalars['String'];
  evolutionRequirements?: Maybe<PokemonEvolutionRequirement>;
  evolutions: Array<Pokemon>;
  fleeRate: Scalars['Float'];
  height: PokemonDimension;
  id: Scalars['ID'];
  image: Scalars['String'];
  isFavorite: Scalars['Boolean'];
  maxCP: Scalars['Int'];
  maxHP: Scalars['Int'];
  name: Scalars['String'];
  number: Scalars['Int'];
  resistant: Array<Scalars['String']>;
  sound: Scalars['String'];
  types: Array<Scalars['String']>;
  weaknesses: Array<Scalars['String']>;
  weight: PokemonDimension;
};

export type PokemonAttack = {
  __typename?: 'PokemonAttack';
  fast: Array<Attack>;
  special: Array<Attack>;
};

export type PokemonConnection = {
  __typename?: 'PokemonConnection';
  count: Scalars['Int'];
  edges: Array<Pokemon>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type PokemonDimension = {
  __typename?: 'PokemonDimension';
  maximum: Scalars['String'];
  minimum: Scalars['String'];
};

export type PokemonEvolutionRequirement = {
  __typename?: 'PokemonEvolutionRequirement';
  amount: Scalars['Int'];
  name: Scalars['String'];
};

export type PokemonFilterInput = {
  isFavorite?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
};

export type PokemonFilterType = {
  __typename?: 'PokemonFilterType';
  isFavorite?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
};

export type PokemonQueries = {
  __typename?: 'PokemonQueries';
  all: PokemonsQueryType;
  favourites: PokemonsQueryType;
};

export type PokemonsQueryInput = {
  filter?: InputMaybe<PokemonFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type PokemonsQueryType = {
  __typename?: 'PokemonsQueryType';
  filter?: Maybe<PokemonFilterType>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  pokemonById?: Maybe<Pokemon>;
  pokemonByName?: Maybe<Pokemon>;
  pokemonQueries: PokemonQueries;
  pokemonTypes: Array<Scalars['String']>;
  pokemons: PokemonConnection;
};

export type QueryPokemonByIdArgs = {
  id: Scalars['ID'];
};

export type QueryPokemonByNameArgs = {
  name: Scalars['String'];
};

export type QueryPokemonsArgs = {
  query: PokemonsQueryInput;
};

export type Root = {
  __typename?: 'Root';
  query: Query;
};

export type PokemonListFilterFragment = {
  __typename?: 'PokemonsQueryType';
  limit?: number | null;
  offset?: number | null;
  search?: string | null;
  filter?: {
    __typename?: 'PokemonFilterType';
    isFavorite?: boolean | null;
    type?: string | null;
  } | null;
};

export type PokemonListFilterableQueryVariables = Exact<{
  query: PokemonsQueryInput;
}>;

export type PokemonListFilterableQuery = {
  __typename?: 'Query';
  pokemons: {
    __typename?: 'PokemonConnection';
    limit: number;
    offset: number;
    count: number;
    edges: Array<{
      __typename?: 'Pokemon';
      id: string;
      image: string;
      name: string;
      types: Array<string>;
    }>;
  };
};

export type PokemonListItemFragment = {
  __typename?: 'Pokemon';
  id: string;
  image: string;
  name: string;
  types: Array<string>;
};

export const PokemonListFilterFragmentDoc = gql`
  fragment PokemonListFilter on PokemonsQueryType {
    filter {
      isFavorite
      type
    }
    limit
    offset
    search
  }
`;
export const PokemonListItemFragmentDoc = gql`
  fragment PokemonListItem on Pokemon {
    id
    image
    name
    types
  }
`;
export const PokemonListFilterableDocument = gql`
  query PokemonListFilterable($query: PokemonsQueryInput!) {
    pokemons(query: $query) {
      limit
      offset
      count
      edges {
        ...PokemonListItem
      }
    }
  }
  ${PokemonListItemFragmentDoc}
`;

/**
 * __usePokemonListFilterableQuery__
 *
 * To run a query within a React component, call `usePokemonListFilterableQuery` and pass it any options that fit your needs.
 * When your component renders, `usePokemonListFilterableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePokemonListFilterableQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function usePokemonListFilterableQuery(
  baseOptions: Apollo.QueryHookOptions<
    PokemonListFilterableQuery,
    PokemonListFilterableQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PokemonListFilterableQuery,
    PokemonListFilterableQueryVariables
  >(PokemonListFilterableDocument, options);
}
export function usePokemonListFilterableLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PokemonListFilterableQuery,
    PokemonListFilterableQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PokemonListFilterableQuery,
    PokemonListFilterableQueryVariables
  >(PokemonListFilterableDocument, options);
}
export type PokemonListFilterableQueryHookResult = ReturnType<
  typeof usePokemonListFilterableQuery
>;
export type PokemonListFilterableLazyQueryHookResult = ReturnType<
  typeof usePokemonListFilterableLazyQuery
>;
export type PokemonListFilterableQueryResult = Apollo.QueryResult<
  PokemonListFilterableQuery,
  PokemonListFilterableQueryVariables
>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;
