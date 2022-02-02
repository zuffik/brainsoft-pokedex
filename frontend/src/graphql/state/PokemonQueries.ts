import { FieldPolicy, makeVar } from '@apollo/client';
import { PokemonsQueryType } from '../Schema';

export const pokemonQuery = makeVar<PokemonsQueryType>({
  limit: 10,
  offset: 0,
});

const pokemonQueryFieldPolicy: FieldPolicy<PokemonsQueryType> = {
  read: () => pokemonQuery(),
};

export const pokemonsQueryFields = {
  pokemonQuery: pokemonQueryFieldPolicy,
};
