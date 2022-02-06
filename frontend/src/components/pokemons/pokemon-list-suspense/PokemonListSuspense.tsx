import React from 'react';
import { PokemonListFilterSkeleton } from '../pokemon-list-filter-skeleton/PokemonListFilterSkeleton';
import { PokemonListSkeleton } from '../pokemon-list-skeleton/PokemonListSkeleton';

export interface PokemonListSuspenseProps {}

export const PokemonListSuspense: React.FC<PokemonListSuspenseProps> =
  React.memo<PokemonListSuspenseProps>((props) => {
    return (
      <>
        <PokemonListFilterSkeleton />
        <PokemonListSkeleton />
      </>
    );
  });

PokemonListSuspense.displayName = 'PokemonListSuspense';
