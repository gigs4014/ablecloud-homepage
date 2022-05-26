import { GetServerSideProps } from 'next';

import { FeedGenerator, getPosts, isCategoryDir } from '@/helpers/post';
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

// TODO: ISR을 활용할 수 있도록 고민해보기
export const getServerSideProps: GetServerSideProps<{}, FeedPageParams> = async ({
  res,
  params = { path: [] },
}) => {
  const { path = [] } = params;

  if (!(await isCategoryDir(path))) {
    return { props: {}, notFound: true };
  }

  if (!res) {
    return { props: {}, notFound: true };
  }

  try {
    const posts = await getPosts(path);
    const feed = FeedGenerator.fromPosts(posts);

    res.setHeader('Content-Type', 'text/xml');
    res.write(feed.rss2());
  } catch (e) {
    console.log('In feed page', e);
  } finally {
    res.end();
  }

  return { props: {} };
};
