import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/particles/globalStyles';
import themeDefault from '../src/particles/themeDefault';

/*body에 style 먹이는법: GlobalStyles*/
export const decorators = [
  (Story) => (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
