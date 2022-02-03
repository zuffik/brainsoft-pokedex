import React from 'react';
import { Column, Grid, Row } from 'carbon-components-react';
import { PokemonListFilterSearch } from '../pokemon-list-filter-search/PokemonListFilterSearch';
import { PokemonListFilterTypeConnected } from '../pokemon-list-filter-type/PokemonListFilterType';
import { GridDefaultProps } from 'carbon-components-react/lib/components/Grid/Grid';
import classNames from 'classnames';
import styles from './PokemonListFilter.module.scss';
import { PokemonListFilterViewModeConnected } from '../pokemon-list-filter-view-mode/PokemonListFilterViewMode';
import { PokemonListFilterFavourites } from '../pokemon-list-filter-favourites/PokemonListFilterFavourites';

export interface PokemonListFilterProps extends GridDefaultProps {}

export const PokemonListFilter = React.memo<PokemonListFilterProps>((props) => {
  return (
    <>
      <Grid
        fullWidth
        narrow
        {...props}
        className={classNames(props.className, styles.root)}
      >
        <Row className={styles.firstRow}>
          <Column>
            <PokemonListFilterFavourites />
          </Column>
        </Row>
        <Row>
          <Column sm={8} md={4} lg={4}>
            <PokemonListFilterSearch />
          </Column>
          <Column sm={4} md={4} lg={6}>
            <PokemonListFilterTypeConnected />
          </Column>
          <Column sm={2} md={2} lg={2} className={styles.lastCol}>
            <PokemonListFilterViewModeConnected />
          </Column>
        </Row>
      </Grid>
    </>
  );
});

PokemonListFilter.displayName = 'PokemonListFilter';
