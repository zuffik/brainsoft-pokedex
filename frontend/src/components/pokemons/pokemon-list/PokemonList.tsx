import React from 'react';
import { PokemonListItemFragment } from '../../../graphql';

export interface PokemonListProps {
  items: PokemonListItemFragment[];
}

export const PokemonList = React.memo<PokemonListProps>((props) => {
  return <></>;
});

PokemonList.displayName = 'PokemonList';
