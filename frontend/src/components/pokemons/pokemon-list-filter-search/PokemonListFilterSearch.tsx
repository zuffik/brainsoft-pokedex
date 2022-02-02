import React from 'react';
import { FormGroup, Search } from 'carbon-components-react';

export interface PokemonListFilterSearchProps {}

export const PokemonListFilterSearch = React.memo<PokemonListFilterSearchProps>(
  (props) => {
    return (
      <FormGroup legendText="Search pokemon">
        <Search id="search" labelText="Search" placeholder="Search" />
      </FormGroup>
    );
  }
);

PokemonListFilterSearch.displayName = 'PokemonListFilterSearch';
