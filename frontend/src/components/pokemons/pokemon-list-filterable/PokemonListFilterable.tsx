import React from 'react';
import { PokemonListFilter } from '../pokemon-list-filter/PokemonListFilter';
import { PokemonList } from '../pokemon-list/PokemonList';
import {
  PokemonListItemFragment,
  pokemonListView,
  pokemonQuery,
  usePokemonListFilterableQuery,
} from '../../../graphql';
import { useReactiveVar } from '@apollo/client';
import { PokemonListItemProps } from '../pokemon-list-item/PokemonListItem';
import { PokemonListPaginationConnected } from '../pokemon-list-pagination/PokemonListPagination';
import { PokemonPreviewConnected } from '../../pokemon';

export interface PokemonListFilterableProps {
  items: PokemonListItemFragment[];
  layout?: PokemonListItemProps['layout'];
}

export const PokemonListFilterable = React.memo<PokemonListFilterableProps>(
  (props) => {
    return (
      <>
        <PokemonListFilter />
        <PokemonList items={props.items} layout={props.layout} />
        <PokemonListPaginationConnected />
        <PokemonPreviewConnected />
      </>
    );
  }
);

PokemonListFilterable.displayName = 'PokemonListFilterable';

export interface PokemonListFilterableConnectedProps {}

export const PokemonListFilterableConnected: React.FC<
  PokemonListFilterableConnectedProps
> = (props) => {
  const query = useReactiveVar(pokemonQuery);
  const layout = useReactiveVar(pokemonListView);
  const { data } = usePokemonListFilterableQuery({ variables: { query } });
  return (
    <PokemonListFilterable
      items={data?.pokemons?.edges || []}
      layout={layout}
    />
  );
};
