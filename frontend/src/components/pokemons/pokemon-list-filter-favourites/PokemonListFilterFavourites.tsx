import React from 'react';
import { ContentSwitcher, Switch } from 'carbon-components-react';

export interface PokemonListFilterFavouritesProps {}

export const PokemonListFilterFavourites =
  React.memo<PokemonListFilterFavouritesProps>((props) => {
    return (
      <ContentSwitcher>
        <Switch name="all" text="All pokemons" />
        <Switch name="favourites" text="Favourites" />
      </ContentSwitcher>
    );
  });

PokemonListFilterFavourites.displayName = 'PokemonListFilterFavourites';
