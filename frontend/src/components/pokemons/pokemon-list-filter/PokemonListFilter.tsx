import React from 'react';

export interface PokemonListFilterProps {}

export const PokemonListFilter = React.memo<PokemonListFilterProps>((props) => {
  return <>filter</>;
});

PokemonListFilter.displayName = 'PokemonListFilter';
