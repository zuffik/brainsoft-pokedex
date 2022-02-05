import React from 'react';
import classNames from 'classnames';
import { Column, Grid, Row } from 'carbon-components-react';
import { GridDefaultProps } from 'carbon-components-react/lib/components/Grid/Grid';
import styles from './PokemonListFilterWrapper.module.scss';

export interface PokemonListFilterWrapperProps extends GridDefaultProps {
  topRow?: React.ReactNode;
  bottomLeft?: React.ReactNode;
  bottomMiddle?: React.ReactNode;
  bottomRight?: React.ReactNode;
}

export const PokemonListFilterWrapper: React.FC<PokemonListFilterWrapperProps> =
  React.memo<PokemonListFilterWrapperProps>((props) => {
    const { topRow, bottomLeft, bottomMiddle, bottomRight, ...rest } = props;
    return (
      <Grid
        fullWidth
        narrow
        {...rest}
        className={classNames(props.className, styles.root)}
      >
        <Row className={styles.firstRow}>
          <Column>{topRow}</Column>
        </Row>
        <Row>
          <Column sm={8} md={4} lg={4}>
            {bottomLeft}
          </Column>
          <Column sm={4} md={4} lg={6}>
            {bottomMiddle}
          </Column>
          <Column sm={2} md={2} lg={2} className={styles.lastCol}>
            {bottomRight}
          </Column>
        </Row>
      </Grid>
    );
  });

PokemonListFilterWrapper.displayName = 'PokemonListFilterWrapper';
