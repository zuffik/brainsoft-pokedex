import React from 'react';
import { Button, FormGroup } from 'carbon-components-react';
import { Apps32, Menu32 } from '@carbon/icons-react';

export interface PokemonListFilterViewModeProps {}

export const PokemonListFilterViewMode =
  React.memo<PokemonListFilterViewModeProps>((props) => {
    return (
      <FormGroup legendText="View mode">
        <Button
          hasIconOnly
          renderIcon={Apps32}
          iconDescription="Tiles"
          kind="tertiary"
        />
        <Button hasIconOnly renderIcon={Menu32} iconDescription="List" />
      </FormGroup>
    );
  });

PokemonListFilterViewMode.displayName = 'PokemonListFilterViewMode';
