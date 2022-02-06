import React from 'react';
import { PokemonListWrapper } from '../pokemon-list-wrapper/PokemonListWrapper';
import { PokemonListViewType } from '../../../graphql';
import _ from 'lodash';
import { PokemonListItemSkeleton } from '../pokemon-list-item-skeleton/PokemonListItemSkeleton';

export interface PokemonListSkeletonProps {
  itemCount?: number;
}

export const PokemonListSkeleton: React.FC<PokemonListSkeletonProps> =
  React.memo<PokemonListSkeletonProps>((props) => {
    return (
      <PokemonListWrapper layout={PokemonListViewType.Grid}>
        {_.times(props.itemCount!, (i) => (
          <PokemonListItemSkeleton key={i} layout={PokemonListViewType.Grid} />
        ))}
      </PokemonListWrapper>
    );
  });

PokemonListSkeleton.displayName = 'PokemonListSkeleton';

PokemonListSkeleton.defaultProps = {
  itemCount: 12,
};
