import '../../styles/globals.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../styles/theme';
import initMockAPI from '@/mocks';

const App = ({ Component, pageProps }: AppProps) => {
  if (process.env.NODE_ENV === 'development') {
    initMockAPI();
  }

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
