import React from 'react';
import { PokemonListItemFragment } from '../../../graphql';
import styles from './PokemonListItem.module.scss';

export interface PokemonListItemProps {
  item: PokemonListItemFragment;
}

export const PokemonListItem = React.memo<PokemonListItemProps>((props) => {
  return <div className={styles.root}>{props.item.name}</div>;
});

PokemonListItem.displayName = 'PokemonListItem';
