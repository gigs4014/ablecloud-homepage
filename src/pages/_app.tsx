import type { AppProps } from 'next/app';
import Head from 'next/head';
import Image from 'next/image';

import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from 'mdx/types';

import { Layout } from '@/components/layout';
import '@/styles/globals.css';

const ResponsiveImage = (props: any) => <Image alt={props.alt} layout='responsive' {...props} />;

const components: MDXComponents = {
  img: ResponsiveImage,
};

export default function CustomApp({ Component, pageProps, router }: AppProps) {
  return (
    <MDXProvider components={components}>
      {/* <DarkModeProvider> */}
      <Head>
        <title>에이블클라우드</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      {pageProps.noLayout ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
      {/* </DarkModeProvider> */}
    </MDXProvider>
  );
}
