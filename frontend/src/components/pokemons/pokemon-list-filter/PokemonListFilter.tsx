import React from 'react';
import { PokemonListFilterSearchConnected } from '../pokemon-list-filter-search/PokemonListFilterSearch';
import { PokemonListFilterTypeConnected } from '../pokemon-list-filter-type/PokemonListFilterType';
import { GridDefaultProps } from 'carbon-components-react/lib/components/Grid/Grid';
import { PokemonListFilterViewModeConnected } from '../pokemon-list-filter-view-mode/PokemonListFilterViewMode';
import { PokemonListFilterFavouritesConnected } from '../pokemon-list-filter-favourites/PokemonListFilterFavourites';
import { PokemonListFilterWrapper } from '../pokemon-list-filter-wrapper/PokemonListFilterWrapper';

export interface PokemonListFilterProps extends GridDefaultProps {}

export const PokemonListFilter = React.memo<PokemonListFilterProps>((props) => {
  return (
    <PokemonListFilterWrapper
      topRow={<PokemonListFilterFavouritesConnected />}
      bottomLeft={<PokemonListFilterSearchConnected />}
      bottomMiddle={<PokemonListFilterTypeConnected />}
      bottomRight={<PokemonListFilterViewModeConnected />}
    />
  );
});

PokemonListFilter.displayName = 'PokemonListFilter';
