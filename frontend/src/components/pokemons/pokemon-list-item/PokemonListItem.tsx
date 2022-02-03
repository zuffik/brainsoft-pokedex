import React from 'react';
import { Link } from 'react-router-dom';
import { PokemonListItemFragment } from '../../../graphql';
import styles from './PokemonListItem.module.scss';
import { routes } from '../../../defs/Routes';
import { FavouriteButton } from '../../favourites/favourite-button/FavouriteButton';

export interface PokemonListItemProps {
  item: PokemonListItemFragment;
}

export const PokemonListItem = React.memo<PokemonListItemProps>((props) => {
  return (
    <div className={styles.root}>
      <Link to={routes.pokemonDetail.generate({ name: props.item.name })}>
        <img
          src={props.item.image}
          alt={props.item.name}
          className={styles.image}
        />
      </Link>
      <div className={styles.info}>
        <Link
          to={routes.pokemonDetail.generate({ name: props.item.name })}
          className={styles.description}
        >
          <span className={styles.label}>{props.item.name}</span>
          <span>{props.item.types.join(', ')}</span>
        </Link>
        <div className={styles.actions}>
          <FavouriteButton />
        </div>
      </div>
    </div>
  );
});

PokemonListItem.displayName = 'PokemonListItem';
