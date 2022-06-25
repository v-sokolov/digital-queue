import { createTheme } from '@nextui-org/react';
import { CreateTheme } from '@nextui-org/react/types/theme/types';

export const darkTheme: CreateTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      cardBackground: '#00000054'
    },
    space: {},
    fonts: {}
  }
});
