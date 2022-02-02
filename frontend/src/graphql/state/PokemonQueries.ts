import { FieldPolicy, makeVar } from '@apollo/client';
import { PokemonQueries } from '../Schema';

export const pokemonsQueries = makeVar<PokemonQueries>({
  all: {
    limit: 10,
    offset: 0,
  },
  favourites: {
    limit: 10,
    offset: 0,
    filter: { isFavorite: true },
  },
});

const pokemonQueriesFieldPolicy: FieldPolicy<PokemonQueries> = {
  read: () => pokemonsQueries(),
};

export const pokemonsQueriesFields = {
  pokemonQueries: pokemonQueriesFieldPolicy,
};
