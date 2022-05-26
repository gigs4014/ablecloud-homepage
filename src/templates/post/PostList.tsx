import Head from 'next/head';

import { BasePageProps, Post } from '@/types';

import { CustomLink } from '@/components/common';
import { Meta, OpenGraphProps } from '@/components/head';

import Breadcrumb from './PostBreadCrumb';

export interface PostListTemplateProps {
  posts: Post[];
}

function PostListTemplate({
  posts,
  params: { path: category = [] },
}: PostListTemplateProps & BasePageProps<{ path: string[] }>) {
  return (
    <>
      <PostListTemplateHead posts={posts} category={category} />

      <article className='w-page-full py-32'>
        {/* categories */}
        <header className='prose mb-16 max-w-none'>
          <h2>
            <>
              Category <Breadcrumb paths={['blog', ...category]} />
            </>
          </h2>
        </header>

        <ul className='space-y-4'>
          {posts.map(post => (
            <li className='flex justify-between' key={post.slug}>
              <CustomLink
                href={`/blog/${[...post.categories, post.slug].join('/')}`}
                className='flex-1'>
                <h2>{post.title}</h2>
              </CustomLink>
              <p>{new Date(post.date).toISOString()}</p>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}

export default PostListTemplate;

export interface PostListTemplateHeadProps {
  posts: Post[];
  category: string[];
}

export function PostListTemplateHead({ posts, category = [] }: PostListTemplateHeadProps) {
  const title = ['에이블클라우드 블로그', category.join('/')].filter(Boolean).join(' - ');
  const openGraph: OpenGraphProps = {
    title,
    image: posts.at(0)?.openGraph.image ?? '',
    type: 'website',
    url: [process.env.HOST_URL, 'blog', ...category].join('/'),
    description: `에이블클라우드 블로그${
      category.length ? ` ${category}에 해당하는` : ''
    } 게시글들을 보여줍니다.`,
  };

  return (
    <Head>
      <title>{title}</title>
      <Meta.OpenGraph {...openGraph} />
    </Head>
  );
}
