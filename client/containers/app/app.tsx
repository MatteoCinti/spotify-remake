import type { AppProps } from 'next/app';
import { GlobalStyles } from '@styles';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}

export default App;
