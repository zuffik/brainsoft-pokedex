import React from 'react';
import { Select, SelectItem, SelectProps } from 'carbon-components-react';
import { pokemonQuery, usePokemonListFilterTypesQuery } from '../../../graphql';
import { useReactiveVar } from '@apollo/client';
import update from 'immutability-helper';

export interface PokemonListFilterTypeProps {
  types: string[];
  selected?: string;
  onChange?: (type: string) => void;
}

export const PokemonListFilterType = React.memo<PokemonListFilterTypeProps>(
  (props) => {
    const { onChange } = props;
    const handleChange: SelectProps['onChange'] = React.useCallback(
      (e) => onChange?.(e.target.value),
      [onChange]
    );
    return (
      <Select
        id="pokemon-type"
        size="lg"
        labelText="Pokemon type"
        value={props.selected}
        onChange={handleChange}
      >
        <SelectItem value="" text="Choose a type" />
        {props.types.map((type) => (
          <SelectItem value={type} text={type} key={type} />
        ))}
      </Select>
    );
  }
);

PokemonListFilterType.displayName = 'PokemonListFilterType';

export interface PokemonListFilterTypeConnectedProps {}

export const PokemonListFilterTypeConnected: React.FC<
  PokemonListFilterTypeConnectedProps
> = (props) => {
  const { data } = usePokemonListFilterTypesQuery();
  const selected = useReactiveVar(pokemonQuery).filter?.type || undefined;
  const handleChange: PokemonListFilterTypeProps['onChange'] =
    React.useCallback((type) => {
      pokemonQuery(
        update(pokemonQuery(), {
          offset: { $set: 0 },
          filter: (f) =>
            update(f || {}, {
              type: { $set: type },
            }),
        })
      );
    }, []);
  return (
    <PokemonListFilterType
      types={data?.pokemonTypes || []}
      selected={selected}
      onChange={handleChange}
    />
  );
};
