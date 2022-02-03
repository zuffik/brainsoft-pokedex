import React from 'react';
import { PokemonListItemFragment } from '../../../graphql';
import { PokemonListItem } from '../pokemon-list-item/PokemonListItem';

export interface PokemonListProps {
  items: PokemonListItemFragment[];
}

export const PokemonList = React.memo<PokemonListProps>((props) => {
  return (
    <div>
      {props.items.map((item) => (
        <PokemonListItem key={item.id} item={item} />
      ))}
    </div>
  );
});

PokemonList.displayName = 'PokemonList';
