import React from 'react';
import styles from '../pokemon-detail/PokemonDetail.module.scss';
import { FavouriteButtonConnected } from '../../favourites';
import { Button } from 'carbon-components-react';
import { Play20 } from '@carbon/icons-react';
import { PokemonDimensionTable } from '../pokemon-dimension-table/PokemonDimensionTable';
import { PokemonListItem, PokemonListWrapper } from '../../pokemons';
import { PokemonListViewType } from '../../../graphql';

export interface PokemonDetailLayoutProps {
  topContent?: React.ReactNode;
  mainContent?: React.ReactNode;
  actionsContent?: React.ReactNode;
  detailInfoContent?: React.ReactNode;
  bottomContent?: React.ReactNode;
}

export const PokemonDetailLayout: React.FC<PokemonDetailLayoutProps> =
  React.memo<PokemonDetailLayoutProps>((props) => {
    return (
      <div className={styles.root}>
        <div className={styles.image}>{props.topContent}</div>
        <div className={styles.main}>
          <div>{props.mainContent}</div>
          <div className={styles.actions}>{props.actionsContent}</div>
        </div>
        <div>{props.detailInfoContent}</div>
        <div>{props.bottomContent}</div>
      </div>
    );
  });

PokemonDetailLayout.displayName = 'PokemonDetailLayout';
