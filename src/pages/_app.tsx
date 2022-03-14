import type { AppProps } from 'next/app';

import React from 'react';

import { ThemeProvider } from '@hooks/useTheme';

import GlobalStyle from '@styles/global';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ThemeProvider>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
