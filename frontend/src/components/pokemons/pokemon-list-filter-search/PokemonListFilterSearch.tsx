import React from 'react';
import { FormGroup, Search, SearchProps } from 'carbon-components-react';
import _ from 'lodash';
import { pokemonQuery } from '../../../graphql';
import update from 'immutability-helper';

export interface PokemonListFilterSearchProps {
  debounce?: number;
  onSearch?: (value: string) => void;
}

export const PokemonListFilterSearch: React.FC<PokemonListFilterSearchProps> =
  React.memo<PokemonListFilterSearchProps>((props) => {
    const [value, setValue] = React.useState('');
    const { onSearch, debounce } = props;
    const triggerOnSearch = React.useMemo(
      () => _.debounce((value: string) => onSearch?.(value), debounce),
      [debounce, onSearch]
    );
    const handleChange: SearchProps['onChange'] = React.useCallback(
      (e) => {
        setValue(e.target.value);
        triggerOnSearch(e.target.value);
      },
      [triggerOnSearch]
    );
    return (
      <FormGroup legendText="Search pokemon">
        <Search
          id="search"
          labelText="Search"
          placeholder="Search"
          onChange={handleChange}
          value={value}
        />
      </FormGroup>
    );
  });

PokemonListFilterSearch.displayName = 'PokemonListFilterSearch';

PokemonListFilterSearch.defaultProps = {
  debounce: 500,
};

export interface PokemonListFilterSearchConnectedProps {}

export const PokemonListFilterSearchConnected: React.FC<
  PokemonListFilterSearchConnectedProps
> = (props) => {
  const handleSearch: PokemonListFilterSearchProps['onSearch'] =
    React.useCallback((search) => {
      pokemonQuery(
        update(pokemonQuery(), {
          search: { $set: search },
        })
      );
    }, []);
  return <PokemonListFilterSearch onSearch={handleSearch} />;
};
