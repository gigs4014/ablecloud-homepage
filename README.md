# ablecloud-homepage

에이블클라우드 홈페이지 리파지터리입니다.

홈페이지 소스를 관리합니다.

## Getting Started

[Yarn berry](https://github.com/yarnpkg/berry)를 사용한 리파지터리이므로 만약 yarn이 설치되어있지 않다면 아래 명령어를 통해 yarn을 먼저 설치해야 합니다

```bash
npm i -g yarn
```

소스 코드를 클론해온 후 아래 명령어를 통해 개발 서버를 실행할 수 있습니다.

- 도커 컨테이너 환경에서 실행할 때

  ```bash
  yarn docker:dev
  ```

- 로컬 환경에서 실행할 때

  ```bash
  yarn dev
  ```

[http://localhost:3000](http://localhost:3000) 로 접속해 결과물을 볼 수 있습니다.

## Blog post 추가

`_post`폴더에 마크다운 파일을 추가해 blog에 게시글을 추가할 수 있습니다.

현재 [MDX](https://mdxjs.com/)를 통한 리액트 컴포넌트 사용과 [Github Flavored Markdown](https://github.github.com/gfm/)문법을 지원합니다.

폴더를 만들어 게시글을 카테고리별로 관리할 수 있습니다.
