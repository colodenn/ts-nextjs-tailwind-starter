import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { positions, Provider as AlertProvider, transitions } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import 'cal-sans';

import '@/styles/globals.css';
import '@/styles/colors.css';

import Layout from '@/components/layout/Layout';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // optional configuration
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_RIGHT,
    timeout: 3000,
    offset: '15px',
    // you can also just use 'scale'
    transition: transitions.SCALE,
  };
  return (
    <SessionProvider session={session}>
      <AlertProvider template={AlertTemplate} {...options}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AlertProvider>
    </SessionProvider>
  );
}

export default MyApp;
