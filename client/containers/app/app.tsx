import type { AppProps } from 'next/app';
import { GlobalStyles } from '@styles';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <GlobalStyles />
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
);

export default App;
