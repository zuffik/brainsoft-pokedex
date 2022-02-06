import React from 'react';
import {
  PokemonListItemWrapper,
  PokemonListItemWrapperProps,
} from '../pokemon-list-item-wraper/PokemonListItemWrapper';
import { SkeletonPlaceholder } from 'carbon-components-react';
import styles from './PokemonListItemSkeleton.module.scss';

export interface PokemonListItemSkeletonProps {
  layout?: PokemonListItemWrapperProps['layout'];
}

export const PokemonListItemSkeleton: React.FC<PokemonListItemSkeletonProps> =
  React.memo<PokemonListItemSkeletonProps>((props) => {
    return (
      <PokemonListItemWrapper layout={props.layout}>
        <div className={styles.placeholder}>
          <SkeletonPlaceholder />
        </div>
        <SkeletonPlaceholder className={styles.info} />
      </PokemonListItemWrapper>
    );
  });

PokemonListItemSkeleton.displayName = 'PokemonListItemSkeleton';
