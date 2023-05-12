import Head from 'next/head';

import { BasePageProps, Post } from '@/types';

import { Meta, OpenGraphProps } from '@/components/head';
import { PostList } from '@/components/post';

export interface PostListTemplateProps {
  posts: Post[];
}

function PostListTemplate({
  posts,
  params: { path: categories = [] } = { path: [] },
}: PostListTemplateProps & BasePageProps<{ path: string[] }>) {
  const sortingPosts = posts.sort((a, b) => {
    return Number(b.date) - Number(a.date);
  });

  return (
    <div className='w-full bg-[#EEF7FF]'>
      {/* <PostListTemplateHead posts={posts} categories={categories} /> */}
      <PostList posts={sortingPosts} categories={categories} />
    </div>
  );
}

export default PostListTemplate;

export interface PostListTemplateHeadProps {
  posts: Post[];
  categories: string[];
}

export function PostListTemplateHead({ posts, categories = [] }: PostListTemplateHeadProps) {
  const title = ['블로그', categories.slice(1).join('/'), '에이블클라우드']
    .filter(Boolean)
    .join(' - ');
  const openGraph: OpenGraphProps = {
    title,
    image: posts.at(0)?.openGraph.image ?? '',
    type: 'website',
    url: [process.env.HOST_URL, 'blog', ...categories.slice(1)].join('/'),
    description: `에이블클라우드 블로그${
      categories.length ? ` ${categories}에 해당하는` : ''
    } 게시글들을 보여줍니다.`,
  };

  return (
    <Head>
      <title>{title}</title>
      <Meta.OpenGraph {...openGraph} />
    </Head>
  );
}
