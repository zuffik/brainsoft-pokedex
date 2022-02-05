import React from 'react';
import styles from './PokemonDetailLayout.module.scss';

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
