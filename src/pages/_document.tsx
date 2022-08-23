import { Head, Html, Main, NextScript } from 'next/document';

export default function CustomDocument() {
  return (
    <Html lang='ko'>
      <Head>
        <meta
          name='description'
          content='에이블클라우드는 하이퍼컨버지드 기술을 이용해 기업에 새로운 형태의 클라우드 데이터센터 모델을 제시하는 클라우드 전문가 기업입니다.'
        />
        <meta
          name='google-site-verification'
          content='6o5Lcww7U6jkboi0ZpvyonRKDh_L8pEpUUtJFi0exOE'
        />
        <meta name='naver-site-verification' content='cd86f5c2c2f28c7155e44f08d0b23227f4f1181e' />
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
