import React from 'react';
import { PokemonListItemWrapperProps } from '../pokemon-list-item-wraper/PokemonListItemWrapper';
import { PokemonListWrapper } from '../pokemon-list-wrapper/PokemonListWrapper';

export interface PokemonListItemSkeletonProps {
  layout?: PokemonListItemWrapperProps['layout'];
}

export const PokemonListItemSkeleton: React.FC<PokemonListItemSkeletonProps> =
  React.memo<PokemonListItemSkeletonProps>((props) => {
    return <PokemonListWrapper></PokemonListWrapper>;
  });

PokemonListItemSkeleton.displayName = 'PokemonListItemSkeleton';
