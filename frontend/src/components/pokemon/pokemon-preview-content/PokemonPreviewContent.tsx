import React from 'react';
import { PokemonPreviewFragment } from '../../../graphql';
import styles from './PokemonPreviewContent.module.scss';
import { PokemonDimensionTable } from '../pokemon-dimension-table/PokemonDimensionTable';

export interface PokemonPreviewContentProps {
  pokemon: PokemonPreviewFragment;
}

export const PokemonPreviewContent = React.memo<PokemonPreviewContentProps>(
  (props) => {
    return (
      <div className={styles.root}>
        <img
          src={props.pokemon.image}
          alt={props.pokemon.name}
          className={styles.image}
        />
        <PokemonDimensionTable pokemon={props.pokemon} />
      </div>
    );
  }
);

PokemonPreviewContent.displayName = 'PokemonPreviewContent';
