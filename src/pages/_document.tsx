import { Head, Html, Main, NextScript } from 'next/document';

export default function CustomDocument() {
  return (
    <Html lang='ko'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Noto&display=optional'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
