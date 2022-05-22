import React from 'react';
import { AppProps } from 'next/app';
import { GlobalStyles } from '@styles';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <GlobalStyles />
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
);
export default MyApp;
