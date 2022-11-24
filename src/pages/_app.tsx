import '../../styles/globals.css';

import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../styles/theme';
import { PHASE } from '~/const/system';
import initMockAPI from '~/mocks';

const App = ({ Component, pageProps }: AppProps) => {
  const [isLoading, setIsLoading] = useState(true);

  if (process.env.NODE_ENV === 'development') {
    initMockAPI();
  }

  useEffect(() => {
    (async () => {
      if (PHASE === 'LOCAL') {
        await initMockAPI();
      }
      setIsLoading(false);
    })();
  });

  if (isLoading) return <div>loading...</div>;

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
