import React from 'react';

export interface App404Props {}

export const App404: React.FC<App404Props> = React.memo<App404Props>(
  (props) => {
    return (
      <h1>
        <strong>404</strong> not found
      </h1>
    );
  }
);

App404.displayName = 'App404';
