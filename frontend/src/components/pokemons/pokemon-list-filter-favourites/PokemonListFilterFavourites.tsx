import React from 'react';
import {
  ContentSwitcher,
  ContentSwitcherProps,
  Switch,
} from 'carbon-components-react';
import { useReactiveVar } from '@apollo/client';
import { pokemonQuery } from '../../../graphql';
import update from 'immutability-helper';

export interface PokemonListFilterFavouritesProps
  extends Omit<ContentSwitcherProps, 'selectedIndex'> {
  selected?: 'all' | 'favourites';
}

export const PokemonListFilterFavourites: React.FC<PokemonListFilterFavouritesProps> =
  React.memo<PokemonListFilterFavouritesProps>((props) => {
    const { selected, ...rest } = props;
    return (
      <ContentSwitcher
        {...rest}
        selectedIndex={['all', 'favourites'].indexOf(props.selected as string)}
      >
        <Switch name="all" text="All pokemons" />
        <Switch name="favourites" text="Favourites" />
      </ContentSwitcher>
    );
  });

PokemonListFilterFavourites.displayName = 'PokemonListFilterFavourites';

PokemonListFilterFavourites.defaultProps = {
  selected: 'all',
};

export interface PokemonListFilterFavouritesConnectedProps {}

export const PokemonListFilterFavouritesConnected: React.FC<
  PokemonListFilterFavouritesConnectedProps
> = (props) => {
  const query = useReactiveVar(pokemonQuery);
  const selected = !!query?.filter?.isFavorite ? 'favourites' : 'all';
  const handleChange: PokemonListFilterFavouritesProps['onChange'] =
    React.useCallback((data) => {
      pokemonQuery(
        update(pokemonQuery(), {
          offset: { $set: 0 },
          filter: (f) =>
            update(f || {}, {
              ...(data.name === 'all'
                ? {
                    $unset: ['isFavorite'],
                  }
                : {
                    isFavorite: { $set: true },
                  }),
            }),
        })
      );
    }, []);
  return (
    <PokemonListFilterFavourites onChange={handleChange} selected={selected} />
  );
};
