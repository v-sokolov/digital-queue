import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import { RootRouter } from './Root.router';
import { darkTheme } from './shared/themes';

export const Root: React.FC = () => {
  return (
    <NextUIProvider theme={darkTheme}>
      <RootRouter />
    </NextUIProvider>
  );
};
