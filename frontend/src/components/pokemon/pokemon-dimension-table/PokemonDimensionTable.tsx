import React from 'react';
import { PokemonPreviewFragment } from '../../../graphql';
import { Column, Grid, Row } from 'carbon-components-react';
import styles from './PokemonDimensionTable.module.scss';

export interface PokemonDimensionTableProps {
  pokemon: PokemonPreviewFragment;
}

export const PokemonDimensionTable = React.memo<PokemonDimensionTableProps>(
  (props) => {
    return (
      <Grid fullWidth className={styles.grid}>
        <Row>
          <Column sm={8} md={4} lg={3} className={styles.column}>
            <h4>Max CP:</h4>
            <span>{props.pokemon.maxCP}</span>
          </Column>
          <Column sm={8} md={4} lg={3} className={styles.column}>
            <h4>Max HP:</h4>
            <span>{props.pokemon.maxHP}</span>
          </Column>
          <Column sm={8} md={4} lg={3} className={styles.column}>
            <h4>Weight:</h4>
            <span>
              {props.pokemon.weight.minimum} - {props.pokemon.weight.maximum}
            </span>
          </Column>
          <Column sm={8} md={4} lg={3} className={styles.column}>
            <h4>Height:</h4>
            <span>
              {props.pokemon.height.minimum} - {props.pokemon.height.maximum}
            </span>
          </Column>
        </Row>
      </Grid>
    );
  }
);

PokemonDimensionTable.displayName = 'PokemonDimensionTable';
