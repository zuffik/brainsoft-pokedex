import React from 'react';
import { Favorite16, FavoriteFilled16 } from '@carbon/icons-react';
import styles from './FavouriteButton.module.scss';
import classNames from 'classnames';
import {
  useFavouriteButtonIsFavouriteQuery,
  useFavouriteButtonMakeFavouriteMutation,
  useFavouriteButtonMakeNotFavouriteMutation,
} from '../../../graphql';

export interface FavouriteButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const FavouriteButton: React.FC<FavouriteButtonProps> =
  React.memo<FavouriteButtonProps>((props) => {
    const { active, ...rest } = props;
    return (
      <button {...rest} className={classNames(styles.root, props.className)}>
        {active ? (
          <FavoriteFilled16 color={styles.redColor} />
        ) : (
          <Favorite16 color={styles.redColor} />
        )}
      </button>
    );
  });

FavouriteButton.displayName = 'FavouriteButton';

export interface FavouriteButtonConnectedProps {
  id: string;
}

export const FavouriteButtonConnected: React.FC<
  FavouriteButtonConnectedProps
> = (props) => {
  const { data } = useFavouriteButtonIsFavouriteQuery({
    variables: { id: props.id },
  });
  const [makeFavourite] = useFavouriteButtonMakeFavouriteMutation({
    variables: { id: props.id },
  });
  const [makeNotFavourite] = useFavouriteButtonMakeNotFavouriteMutation({
    variables: { id: props.id },
  });
  const isFavourite = !!data?.pokemonById?.isFavorite;
  const handleClick = React.useCallback(() => {
    if (isFavourite) {
      makeNotFavourite();
    } else {
      makeFavourite();
    }
  }, [isFavourite, makeFavourite, makeNotFavourite]);
  return <FavouriteButton active={isFavourite} onClick={handleClick} />;
};
