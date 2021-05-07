import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
// local
import { theme } from '@md-styles/styled/theme';
import { GlobalStyles } from '@md-styles/styled/global';
// global css
import 'normalize.css/normalize.css';
import { BasketModalContextProvider } from '@md-modules/appliances/basket/basket-modal-context';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Cultum Starter Kit</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
      <meta charSet='utf-8' />
    </Head>
    <BasketModalContextProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </BasketModalContextProvider>
    <GlobalStyles />
  </>
);

export default MyApp;
