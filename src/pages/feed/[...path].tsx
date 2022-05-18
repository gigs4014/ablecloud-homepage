import { GetStaticPaths, GetStaticProps } from 'next';

import { destructurizePaths, getPosts, getStructuredPostPaths } from '@/helpers/post';
import { BasePageProps, Post } from '@/types';

type FeedPageParams = {
  path: string[];
};

interface FeedPageProps extends BasePageProps<FeedPageParams> {
  posts: Post[];
}

export default function FeedPage() {
  return null;
}

export const getStaticProps: GetStaticProps<FeedPageProps, FeedPageParams> = async ({
  params = { path: [] },
}) => {
  try {
    const posts = await getPosts(params.path);

    return { props: { posts, noLayout: true, params } };
  } catch (e) {
    console.log(e);
    return { props: {}, notFound: true, params };
  }
};

export const getStaticPaths: GetStaticPaths<FeedPageParams> = async () => {
  const structuredCategories = await getStructuredPostPaths();
  const categoriePaths = destructurizePaths(structuredCategories).reduce<string[][]>(
    (acc, cur) => [...acc, [...cur, 'rss'], [...cur, 'atom']],
    [],
  );

  return {
    paths: categoriePaths.map(categoriePath => {
      return {
        params: {
          path: categoriePath,
        },
      };
    }),
    fallback: false,
  };
};
