/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-props-no-spreading */
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Gd's NodeBird</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
