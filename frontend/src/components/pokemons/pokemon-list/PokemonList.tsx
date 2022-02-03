import React from 'react';
import { PokemonListItemFragment, PokemonListViewType } from '../../../graphql';
import { PokemonListItem } from '../pokemon-list-item/PokemonListItem';
import {
  PokemonListWrapper,
  PokemonListWrapperProps,
} from '../pokemon-list-wrapper/PokemonListWrapper';

export interface PokemonListProps {
  items: PokemonListItemFragment[];
  layout?: PokemonListWrapperProps['layout'];
}

export const PokemonList: React.FC<PokemonListProps> =
  React.memo<PokemonListProps>((props) => {
    return (
      <PokemonListWrapper layout={props.layout}>
        {props.items.map((item) => (
          <PokemonListItem key={item.id} item={item} layout={props.layout} />
        ))}
      </PokemonListWrapper>
    );
  });

PokemonList.displayName = 'PokemonList';

PokemonList.defaultProps = {
  layout: PokemonListViewType.Grid,
};
