import React from 'react';
import { Button, FormGroup } from 'carbon-components-react';
import { Apps32, Menu32 } from '@carbon/icons-react';
import { useReactiveVar } from '@apollo/client';
import { pokemonListView, PokemonListViewType } from '../../../graphql';

export interface PokemonListFilterViewModeProps {
  type: PokemonListViewType;
  onTypeChange?: (type: PokemonListViewType) => void;
}

export const PokemonListFilterViewMode =
  React.memo<PokemonListFilterViewModeProps>((props) => {
    const { onTypeChange } = props;
    const changeToGrid = React.useCallback(
      () => onTypeChange?.(PokemonListViewType.Grid),
      [onTypeChange]
    );
    const changeToList = React.useCallback(
      () => onTypeChange?.(PokemonListViewType.List),
      [onTypeChange]
    );
    return (
      <FormGroup legendText="View mode">
        <Button
          hasIconOnly
          renderIcon={Apps32}
          iconDescription="Grid"
          onClick={changeToGrid}
          kind={
            props.type === PokemonListViewType.Grid ? undefined : 'tertiary'
          }
        />
        <Button
          hasIconOnly
          renderIcon={Menu32}
          iconDescription="List"
          onClick={changeToList}
          kind={
            props.type === PokemonListViewType.List ? undefined : 'tertiary'
          }
        />
      </FormGroup>
    );
  });

PokemonListFilterViewMode.displayName = 'PokemonListFilterViewMode';

export interface PokemonListFilterViewModeConnectedProps {}

export const PokemonListFilterViewModeConnected: React.FC<
  PokemonListFilterViewModeConnectedProps
> = (props) => {
  const viewType = useReactiveVar(pokemonListView);
  const handleTypeChange: PokemonListFilterViewModeProps['onTypeChange'] =
    React.useCallback((type) => {
      pokemonListView(type);
    }, []);
  return (
    <PokemonListFilterViewMode
      type={viewType}
      onTypeChange={handleTypeChange}
    />
  );
};
