import React from 'react';
import { PaginationNav, PaginationNavProps } from 'carbon-components-react';
import { pokemonQuery, usePokemonListFilterableQuery } from '../../../graphql';
import { useReactiveVar } from '@apollo/client';
import update from 'immutability-helper';

export interface PokemonListPaginationProps extends PaginationNavProps {}

export const PokemonListPagination = React.memo<PokemonListPaginationProps>(
  (props) => {
    return <PaginationNav {...props} />;
  }
);

PokemonListPagination.displayName = 'PokemonListPagination';

export interface PokemonListPaginationConnectedProps {}

export const PokemonListPaginationConnected: React.FC<
  PokemonListPaginationConnectedProps
> = (props) => {
  const query = useReactiveVar(pokemonQuery);
  const { data } = usePokemonListFilterableQuery({
    variables: { query },
    fetchPolicy: 'cache-only',
  });
  const limit = data?.pokemons?.limit || 1;
  const page = (data?.pokemons?.offset || 0) / limit;
  const totalItems = Math.ceil((data?.pokemons?.count || 0) / limit);
  const handleChange: PokemonListPaginationProps['onChange'] =
    React.useCallback(
      (page) => {
        pokemonQuery(
          update(pokemonQuery(), {
            offset: { $set: limit * page },
          })
        );
      },
      [limit]
    );
  return (
    <PokemonListPagination
      page={page}
      totalItems={totalItems}
      onChange={handleChange}
    />
  );
};
