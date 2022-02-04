import { makeVar } from '@apollo/client';
import { PokemonsQueryInput } from '../Schema';

export const pokemonQuery = makeVar<PokemonsQueryInput>({
  limit: 12,
  offset: 0,
  search: null,
  filter: null,
});
