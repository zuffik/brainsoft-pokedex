import { FieldPolicy, Reference } from '@apollo/client';
import { PokemonListItemFragment } from '../Schema';

const pokemonByIdFieldPolicy: FieldPolicy<PokemonListItemFragment | Reference> =
  {
    read: (existing, { args, toReference }) =>
      toReference(`Pokemon:${args?.id}`),
  };

export const pokemonFields = {
  pokemonById: pokemonByIdFieldPolicy,
};
