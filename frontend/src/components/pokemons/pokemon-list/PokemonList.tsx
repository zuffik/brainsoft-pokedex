import React from 'react';
import { PokemonListItemFragment, PokemonListViewType } from '../../../graphql';
import { PokemonListItemConnected } from '../pokemon-list-item/PokemonListItem';
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
          <PokemonListItemConnected key={item.id} id={item.id} />
        ))}
      </PokemonListWrapper>
    );
  });

PokemonList.displayName = 'PokemonList';

PokemonList.defaultProps = {
  layout: PokemonListViewType.Grid,
};
