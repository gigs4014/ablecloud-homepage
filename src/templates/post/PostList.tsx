import Head from 'next/head';

import { BasePageProps, Post } from '@/types';

import { Meta, OpenGraphProps } from '@/components/head';

export interface PostListTemplateProps {
  posts: Post[];
}

function PostListTemplate({
  posts,
  params: { path: category },
}: PostListTemplateProps & BasePageProps<{ path: string[] }>) {
  return (
    <>
      <PostListTemplateHead posts={posts} category={category} />

      <section>
        {/* categories */}
        <header>test</header>
      </section>
    </>
  );
}

export default PostListTemplate;

export interface PostListTemplateHeadProps {
  posts: Post[];
  category: string[];
}

export function PostListTemplateHead({ posts, category }: PostListTemplateHeadProps) {
  const title = `에이블클라우드 블로그 - ${category}`;
  const openGraph: OpenGraphProps = {
    title,
    image: posts.at(0)?.openGraph.image ?? '',
    type: 'website',
    url: `${process.env.HOST_URL}/blog/${category}`,
    description: `에이블클라우드 블로그 ${category}에 해당하는 게시글들을 보여줍니다.`,
  };

  return (
    <Head>
      <title>{title}</title>
      <Meta.OpenGraph {...openGraph} />
    </Head>
  );
}
