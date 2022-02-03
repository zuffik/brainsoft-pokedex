import React from 'react';
import { Link } from 'react-router-dom';
import { PokemonListItemFragment } from '../../../graphql';
import styles from './PokemonListItem.module.scss';
import { routes } from '../../../defs/Routes';
import { FavouriteButton } from '../../favourites/favourite-button/FavouriteButton';
import classNames from 'classnames';

export interface PokemonListItemProps {
  item: PokemonListItemFragment;
  layout?: 'list' | 'grid';
}

export const PokemonListItem = React.memo<PokemonListItemProps>((props) => {
  return (
    <div
      className={classNames(styles.root, {
        [styles.list]: props.layout === 'list',
        [styles.grid]: props.layout === 'grid',
      })}
    >
      <Link
        to={routes.pokemonDetail.generate({ name: props.item.name })}
        className={styles.imageLink}
      >
        <div
          role="img"
          style={{ backgroundImage: `url(${props.item.image})` }}
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
