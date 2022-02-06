import React from 'react';
import {
  SkeletonPlaceholder,
  SkeletonPlaceholderProps,
} from 'carbon-components-react';
import classNames from 'classnames';
import styles from './SkeletonFullWidth.module.scss';

export interface SkeletonFullWidthProps extends SkeletonPlaceholderProps {}

export const SkeletonFullWidth: React.FC<SkeletonFullWidthProps> =
  React.memo<SkeletonFullWidthProps>((props) => {
    return (
      <SkeletonPlaceholder
        {...props}
        className={classNames(props.className, styles.root)}
      />
    );
  });

SkeletonFullWidth.displayName = 'SkeletonFullWidth';
