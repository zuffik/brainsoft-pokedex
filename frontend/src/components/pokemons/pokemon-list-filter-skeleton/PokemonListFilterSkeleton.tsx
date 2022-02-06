import React from 'react';
import { SkeletonFullWidth } from '../../elements/skeleton-full-width/SkeletonFullWidth';
import { PokemonListFilterWrapper } from '../pokemon-list-filter-wrapper/PokemonListFilterWrapper';
import styles from './PokemonListFilterSkeleton.module.scss';
import classNames from 'classnames';

export interface PokemonListFilterSkeletonProps {}

export const PokemonListFilterSkeleton: React.FC<PokemonListFilterSkeletonProps> =
  React.memo<PokemonListFilterSkeletonProps>((props) => {
    return (
      <PokemonListFilterWrapper
        topRow={
          <SkeletonFullWidth
            className={classNames(styles.skeleton, styles.topSkeleton)}
          />
        }
        bottomRight={
          <SkeletonFullWidth
            className={classNames(styles.skeleton, styles.bottomSkeleton)}
          />
        }
        bottomMiddle={
          <SkeletonFullWidth
            className={classNames(styles.skeleton, styles.bottomSkeleton)}
          />
        }
        bottomLeft={
          <SkeletonFullWidth
            className={classNames(styles.skeleton, styles.bottomSkeleton)}
          />
        }
      />
    );
  });

PokemonListFilterSkeleton.displayName = 'PokemonListFilterSkeleton';
