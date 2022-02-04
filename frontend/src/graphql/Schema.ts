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

export enum PokemonListViewType {
  Grid = 'grid',
  List = 'list',
}

export type PokemonsQueryInput = {
  filter?: InputMaybe<PokemonFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  pokemonById?: Maybe<Pokemon>;
  pokemonByName?: Maybe<Pokemon>;
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

export type FavouriteButtonIsFavouriteQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type FavouriteButtonIsFavouriteQuery = {
  __typename?: 'Query';
  pokemonById?: {
    __typename?: 'Pokemon';
    id: string;
    isFavorite: boolean;
  } | null;
};

export type FavouriteButtonMakeFavouriteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type FavouriteButtonMakeFavouriteMutation = {
  __typename?: 'Mutation';
  favoritePokemon?: {
    __typename?: 'Pokemon';
    id: string;
    isFavorite: boolean;
  } | null;
};

export type FavouriteButtonMakeNotFavouriteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type FavouriteButtonMakeNotFavouriteMutation = {
  __typename?: 'Mutation';
  unFavoritePokemon?: {
    __typename?: 'Pokemon';
    id: string;
    isFavorite: boolean;
  } | null;
};

export type PokemonDetailQueryVariables = Exact<{
  name: Scalars['String'];
}>;

export type PokemonDetailQuery = {
  __typename?: 'Query';
  pokemonByName?: {
    __typename?: 'Pokemon';
    id: string;
    sound: string;
    maxCP: number;
    maxHP: number;
    image: string;
    name: string;
    types: Array<string>;
    isFavorite: boolean;
    evolutions: Array<{
      __typename?: 'Pokemon';
      id: string;
      isFavorite: boolean;
      name: string;
      image: string;
    }>;
    weight: {
      __typename?: 'PokemonDimension';
      minimum: string;
      maximum: string;
    };
    height: {
      __typename?: 'PokemonDimension';
      minimum: string;
      maximum: string;
    };
  } | null;
};

export type PokemonFullFragment = {
  __typename?: 'Pokemon';
  id: string;
  sound: string;
  maxCP: number;
  maxHP: number;
  image: string;
  name: string;
  types: Array<string>;
  isFavorite: boolean;
  evolutions: Array<{
    __typename?: 'Pokemon';
    id: string;
    isFavorite: boolean;
    name: string;
    image: string;
  }>;
  weight: { __typename?: 'PokemonDimension'; minimum: string; maximum: string };
  height: { __typename?: 'PokemonDimension'; minimum: string; maximum: string };
};

export type PokemonPreviewFragment = {
  __typename?: 'Pokemon';
  id: string;
  maxCP: number;
  maxHP: number;
  image: string;
  name: string;
  types: Array<string>;
  isFavorite: boolean;
  weight: { __typename?: 'PokemonDimension'; minimum: string; maximum: string };
  height: { __typename?: 'PokemonDimension'; minimum: string; maximum: string };
};

export type PokemonPreviewQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type PokemonPreviewQuery = {
  __typename?: 'Query';
  pokemonById?: {
    __typename?: 'Pokemon';
    id: string;
    maxCP: number;
    maxHP: number;
    image: string;
    name: string;
    types: Array<string>;
    isFavorite: boolean;
    weight: {
      __typename?: 'PokemonDimension';
      minimum: string;
      maximum: string;
    };
    height: {
      __typename?: 'PokemonDimension';
      minimum: string;
      maximum: string;
    };
  } | null;
};

export type PokemonListFilterTypesQueryVariables = Exact<{
  [key: string]: never;
}>;

export type PokemonListFilterTypesQuery = {
  __typename?: 'Query';
  pokemonTypes: Array<string>;
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
      isFavorite: boolean;
    }>;
  };
};

export type PokemonListItemFragment = {
  __typename?: 'Pokemon';
  id: string;
  image: string;
  name: string;
  types: Array<string>;
  isFavorite: boolean;
};

export type PokemonListItemQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type PokemonListItemQuery = {
  __typename?: 'Query';
  pokemonById?: {
    __typename?: 'Pokemon';
    id: string;
    image: string;
    name: string;
    types: Array<string>;
    isFavorite: boolean;
  } | null;
};

export const PokemonListItemFragmentDoc = gql`
  fragment PokemonListItem on Pokemon {
    id
    image
    name
    types
    isFavorite
  }
`;
export const PokemonPreviewFragmentDoc = gql`
  fragment PokemonPreview on Pokemon {
    id
    ...PokemonListItem
    maxCP
    maxHP
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
  }
  ${PokemonListItemFragmentDoc}
`;
export const PokemonFullFragmentDoc = gql`
  fragment PokemonFull on Pokemon {
    id
    ...PokemonPreview
    sound
    evolutions {
      id
      isFavorite
      name
      image
    }
  }
  ${PokemonPreviewFragmentDoc}
`;
export const FavouriteButtonIsFavouriteDocument = gql`
  query FavouriteButtonIsFavourite($id: ID!) {
    pokemonById(id: $id) {
      id
      isFavorite
    }
  }
`;

/**
 * __useFavouriteButtonIsFavouriteQuery__
 *
 * To run a query within a React component, call `useFavouriteButtonIsFavouriteQuery` and pass it any options that fit your needs.
 * When your component renders, `useFavouriteButtonIsFavouriteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFavouriteButtonIsFavouriteQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFavouriteButtonIsFavouriteQuery(
  baseOptions: Apollo.QueryHookOptions<
    FavouriteButtonIsFavouriteQuery,
    FavouriteButtonIsFavouriteQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    FavouriteButtonIsFavouriteQuery,
    FavouriteButtonIsFavouriteQueryVariables
  >(FavouriteButtonIsFavouriteDocument, options);
}
export function useFavouriteButtonIsFavouriteLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FavouriteButtonIsFavouriteQuery,
    FavouriteButtonIsFavouriteQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    FavouriteButtonIsFavouriteQuery,
    FavouriteButtonIsFavouriteQueryVariables
  >(FavouriteButtonIsFavouriteDocument, options);
}
export type FavouriteButtonIsFavouriteQueryHookResult = ReturnType<
  typeof useFavouriteButtonIsFavouriteQuery
>;
export type FavouriteButtonIsFavouriteLazyQueryHookResult = ReturnType<
  typeof useFavouriteButtonIsFavouriteLazyQuery
>;
export type FavouriteButtonIsFavouriteQueryResult = Apollo.QueryResult<
  FavouriteButtonIsFavouriteQuery,
  FavouriteButtonIsFavouriteQueryVariables
>;
export const FavouriteButtonMakeFavouriteDocument = gql`
  mutation FavouriteButtonMakeFavourite($id: ID!) {
    favoritePokemon(id: $id) {
      id
      isFavorite
    }
  }
`;
export type FavouriteButtonMakeFavouriteMutationFn = Apollo.MutationFunction<
  FavouriteButtonMakeFavouriteMutation,
  FavouriteButtonMakeFavouriteMutationVariables
>;

/**
 * __useFavouriteButtonMakeFavouriteMutation__
 *
 * To run a mutation, you first call `useFavouriteButtonMakeFavouriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFavouriteButtonMakeFavouriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [favouriteButtonMakeFavouriteMutation, { data, loading, error }] = useFavouriteButtonMakeFavouriteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFavouriteButtonMakeFavouriteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    FavouriteButtonMakeFavouriteMutation,
    FavouriteButtonMakeFavouriteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    FavouriteButtonMakeFavouriteMutation,
    FavouriteButtonMakeFavouriteMutationVariables
  >(FavouriteButtonMakeFavouriteDocument, options);
}
export type FavouriteButtonMakeFavouriteMutationHookResult = ReturnType<
  typeof useFavouriteButtonMakeFavouriteMutation
>;
export type FavouriteButtonMakeFavouriteMutationResult =
  Apollo.MutationResult<FavouriteButtonMakeFavouriteMutation>;
export type FavouriteButtonMakeFavouriteMutationOptions =
  Apollo.BaseMutationOptions<
    FavouriteButtonMakeFavouriteMutation,
    FavouriteButtonMakeFavouriteMutationVariables
  >;
export const FavouriteButtonMakeNotFavouriteDocument = gql`
  mutation FavouriteButtonMakeNotFavourite($id: ID!) {
    unFavoritePokemon(id: $id) {
      id
      isFavorite
    }
  }
`;
export type FavouriteButtonMakeNotFavouriteMutationFn = Apollo.MutationFunction<
  FavouriteButtonMakeNotFavouriteMutation,
  FavouriteButtonMakeNotFavouriteMutationVariables
>;

/**
 * __useFavouriteButtonMakeNotFavouriteMutation__
 *
 * To run a mutation, you first call `useFavouriteButtonMakeNotFavouriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFavouriteButtonMakeNotFavouriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [favouriteButtonMakeNotFavouriteMutation, { data, loading, error }] = useFavouriteButtonMakeNotFavouriteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFavouriteButtonMakeNotFavouriteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    FavouriteButtonMakeNotFavouriteMutation,
    FavouriteButtonMakeNotFavouriteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    FavouriteButtonMakeNotFavouriteMutation,
    FavouriteButtonMakeNotFavouriteMutationVariables
  >(FavouriteButtonMakeNotFavouriteDocument, options);
}
export type FavouriteButtonMakeNotFavouriteMutationHookResult = ReturnType<
  typeof useFavouriteButtonMakeNotFavouriteMutation
>;
export type FavouriteButtonMakeNotFavouriteMutationResult =
  Apollo.MutationResult<FavouriteButtonMakeNotFavouriteMutation>;
export type FavouriteButtonMakeNotFavouriteMutationOptions =
  Apollo.BaseMutationOptions<
    FavouriteButtonMakeNotFavouriteMutation,
    FavouriteButtonMakeNotFavouriteMutationVariables
  >;
export const PokemonDetailDocument = gql`
  query PokemonDetail($name: String!) {
    pokemonByName(name: $name) {
      ...PokemonFull
    }
  }
  ${PokemonFullFragmentDoc}
`;

/**
 * __usePokemonDetailQuery__
 *
 * To run a query within a React component, call `usePokemonDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `usePokemonDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePokemonDetailQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function usePokemonDetailQuery(
  baseOptions: Apollo.QueryHookOptions<
    PokemonDetailQuery,
    PokemonDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PokemonDetailQuery, PokemonDetailQueryVariables>(
    PokemonDetailDocument,
    options
  );
}
export function usePokemonDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PokemonDetailQuery,
    PokemonDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PokemonDetailQuery, PokemonDetailQueryVariables>(
    PokemonDetailDocument,
    options
  );
}
export type PokemonDetailQueryHookResult = ReturnType<
  typeof usePokemonDetailQuery
>;
export type PokemonDetailLazyQueryHookResult = ReturnType<
  typeof usePokemonDetailLazyQuery
>;
export type PokemonDetailQueryResult = Apollo.QueryResult<
  PokemonDetailQuery,
  PokemonDetailQueryVariables
>;
export const PokemonPreviewDocument = gql`
  query PokemonPreview($id: ID!) {
    pokemonById(id: $id) {
      ...PokemonPreview
    }
  }
  ${PokemonPreviewFragmentDoc}
`;

/**
 * __usePokemonPreviewQuery__
 *
 * To run a query within a React component, call `usePokemonPreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `usePokemonPreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePokemonPreviewQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePokemonPreviewQuery(
  baseOptions: Apollo.QueryHookOptions<
    PokemonPreviewQuery,
    PokemonPreviewQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PokemonPreviewQuery, PokemonPreviewQueryVariables>(
    PokemonPreviewDocument,
    options
  );
}
export function usePokemonPreviewLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PokemonPreviewQuery,
    PokemonPreviewQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PokemonPreviewQuery, PokemonPreviewQueryVariables>(
    PokemonPreviewDocument,
    options
  );
}
export type PokemonPreviewQueryHookResult = ReturnType<
  typeof usePokemonPreviewQuery
>;
export type PokemonPreviewLazyQueryHookResult = ReturnType<
  typeof usePokemonPreviewLazyQuery
>;
export type PokemonPreviewQueryResult = Apollo.QueryResult<
  PokemonPreviewQuery,
  PokemonPreviewQueryVariables
>;
export const PokemonListFilterTypesDocument = gql`
  query PokemonListFilterTypes {
    pokemonTypes
  }
`;

/**
 * __usePokemonListFilterTypesQuery__
 *
 * To run a query within a React component, call `usePokemonListFilterTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePokemonListFilterTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePokemonListFilterTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePokemonListFilterTypesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PokemonListFilterTypesQuery,
    PokemonListFilterTypesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PokemonListFilterTypesQuery,
    PokemonListFilterTypesQueryVariables
  >(PokemonListFilterTypesDocument, options);
}
export function usePokemonListFilterTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PokemonListFilterTypesQuery,
    PokemonListFilterTypesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PokemonListFilterTypesQuery,
    PokemonListFilterTypesQueryVariables
  >(PokemonListFilterTypesDocument, options);
}
export type PokemonListFilterTypesQueryHookResult = ReturnType<
  typeof usePokemonListFilterTypesQuery
>;
export type PokemonListFilterTypesLazyQueryHookResult = ReturnType<
  typeof usePokemonListFilterTypesLazyQuery
>;
export type PokemonListFilterTypesQueryResult = Apollo.QueryResult<
  PokemonListFilterTypesQuery,
  PokemonListFilterTypesQueryVariables
>;
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
export const PokemonListItemDocument = gql`
  query PokemonListItem($id: ID!) {
    pokemonById(id: $id) {
      ...PokemonListItem
    }
  }
  ${PokemonListItemFragmentDoc}
`;

/**
 * __usePokemonListItemQuery__
 *
 * To run a query within a React component, call `usePokemonListItemQuery` and pass it any options that fit your needs.
 * When your component renders, `usePokemonListItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePokemonListItemQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePokemonListItemQuery(
  baseOptions: Apollo.QueryHookOptions<
    PokemonListItemQuery,
    PokemonListItemQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PokemonListItemQuery, PokemonListItemQueryVariables>(
    PokemonListItemDocument,
    options
  );
}
export function usePokemonListItemLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PokemonListItemQuery,
    PokemonListItemQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PokemonListItemQuery,
    PokemonListItemQueryVariables
  >(PokemonListItemDocument, options);
}
export type PokemonListItemQueryHookResult = ReturnType<
  typeof usePokemonListItemQuery
>;
export type PokemonListItemLazyQueryHookResult = ReturnType<
  typeof usePokemonListItemLazyQuery
>;
export type PokemonListItemQueryResult = Apollo.QueryResult<
  PokemonListItemQuery,
  PokemonListItemQueryVariables
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
