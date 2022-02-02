import React from 'react';
import { PokemonListItemFragment } from '../../../graphql';
import { PokemonListItem } from '../pokemon-list-item/PokemonListItem';
import { Column, Grid, Row } from 'carbon-components-react';

export interface PokemonListProps {
  items: PokemonListItemFragment[];
}

export const PokemonList = React.memo<PokemonListProps>((props) => {
  return (
    <Grid fullWidth>
      <Row>
        {props.items.map((item) => (
          <Column sm={2} md={2} lg={2}>
            <PokemonListItem key={item.id} item={item} />
          </Column>
        ))}
      </Row>
    </Grid>
  );
});

PokemonList.displayName = 'PokemonList';
