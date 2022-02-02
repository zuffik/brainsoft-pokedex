import React from 'react';
import { PokemonListFilter } from '../pokemon-list-filter/PokemonListFilter';
import { PokemonList } from '../pokemon-list/PokemonList';
import {
  PokemonListFilterableQuery,
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
}

export const PokemonListFilterableConnected: React.FC<
  PokemonListFilterableConnectedProps
> = (props) => {
  const query = useReactiveVar(pokemonsQueries)[props.id];
  const { data } = usePokemonListFilterableQuery({
    variables: { query },
  });
  return <PokemonListFilterable items={data?.pokemons?.edges || []} />;
};
