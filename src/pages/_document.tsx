import { Head, Html, Main, NextScript } from 'next/document';

export default function CustomDocument() {
  return (
    <Html lang='ko'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Noto&display=optional'
          rel='stylesheet'
        />
        {/* filled icon */}
        <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons+Round'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons+Outlined'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons+Sharp'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons+Two+Tone'
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
