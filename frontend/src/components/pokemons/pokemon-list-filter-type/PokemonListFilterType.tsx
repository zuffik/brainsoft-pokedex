import React from 'react';
import { Select, SelectItem } from 'carbon-components-react';

export interface PokemonListFilterTypeProps {}

export const PokemonListFilterType = React.memo<PokemonListFilterTypeProps>(
  (props) => {
    return (
      <Select id="pokemon-type" size="lg" labelText="Pokemon type">
        <SelectItem value="" text="Choose a type" />
      </Select>
    );
  }
);

PokemonListFilterType.displayName = 'PokemonListFilterType';
