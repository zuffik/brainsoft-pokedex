import React from 'react';
import { PokemonListFilter } from '../pokemon-list-filter/PokemonListFilter';
import { PokemonList, PokemonListProps } from '../pokemon-list/PokemonList';
import {
  PokemonListFilterableQuery,
  PokemonListFilterFragment,
  PokemonListItemFragment,
  PokemonQueries,
  usePokemonListFilterableQuery,
} from '../../../graphql';
import { useReactiveVar } from '@apollo/client';
import { pokemonsQueries } from '../../../graphql/state/PokemonQueries';

export interface PokemonListFilterableProps {
  items: PokemonListItemFragment[];
}

export const PokemonListFilterable = React.memo<PokemonListFilterableProps>(
  (props) => {
    return (
      <>
        <PokemonListFilter />
        <PokemonList items={props.items} />
      </>
    );
  }
);

PokemonListFilterable.displayName = 'PokemonListFilterable';

export interface PokemonListFilterableConnectedProps {
  id: keyof Omit<PokemonQueries, '__typename'>;
  prefetchedData?: PokemonListFilterableQuery;
}

export const PokemonListFilterableConnected: React.FC<
  PokemonListFilterableConnectedProps
> = (props) => {
  const query = useReactiveVar(pokemonsQueries)[props.id];
  const { data = props.prefetchedData } = usePokemonListFilterableQuery({
    variables: { query },
    fetchPolicy: 'network-only',
  });
  return <PokemonListFilterable items={data?.pokemons?.edges || []} />;
};
