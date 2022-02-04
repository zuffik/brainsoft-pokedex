import { makeVar } from '@apollo/client';
import { PokemonListViewType } from '../Schema';

export const pokemonListView = makeVar<PokemonListViewType>(
  PokemonListViewType.Grid
);

export const pokemonPreview = makeVar<string | undefined>(undefined);
