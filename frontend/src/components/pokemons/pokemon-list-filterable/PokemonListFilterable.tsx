import React from 'react';
import { PokemonListFilter } from '../pokemon-list-filter/PokemonListFilter';
import { PokemonList } from '../pokemon-list/PokemonList';
import {
  PokemonListItemFragment,
  usePokemonListFilterableQuery,
} from '../../../graphql';
import { useReactiveVar } from '@apollo/client';
import { pokemonQuery } from '../../../graphql/state/PokemonQueries';

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

export interface PokemonListFilterableConnectedProps {}

export const PokemonListFilterableConnected: React.FC<
  PokemonListFilterableConnectedProps
> = (props) => {
  const query = useReactiveVar(pokemonQuery);
  const { data } = usePokemonListFilterableQuery({
    variables: { query },
  });
  return <PokemonListFilterable items={data?.pokemons?.edges || []} />;
};
