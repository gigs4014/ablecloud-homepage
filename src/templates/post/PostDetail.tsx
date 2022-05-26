import Head from 'next/head';

import { MDXRemote } from 'next-mdx-remote';

import { BasePageProps, Post } from '@/types';

import { Meta } from '@/components/head';

import Breadcrumb from './PostBreadCrumb';

export interface PostDetailTemplateProps {
  post: Post;
}

function PostDetailTemplate({ post }: PostDetailTemplateProps & BasePageProps<{ path: string[] }>) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        {Meta.OpenGraph(post.openGraph)}
      </Head>

      <article className='prose flex h-full w-full flex-col py-32 dark:prose-invert lg:prose-xl lg:prose-p:my-2'>
        <header className='flex flex-col space-y-4 pb-8'>
          {/* breadcrumb */}
          <Breadcrumb paths={['blog', ...post.categories]} />

          <h1>{post.title}</h1>

          {post.summary && <p>{post.summary}</p>}

          <div className='flex space-x-4 self-end'>
            {post.author && <p>{post.author}</p>}

            <p className='not-prose'>{new Date(post.date).toISOString()}</p>
          </div>
        </header>

        <section className='w-full flex-1'>
          <MDXRemote {...post.content} />
        </section>

        <footer>
          {/* more readable posts */}
          {/* pagenation */}
        </footer>
      </article>
    </>
  );
}

export default PostDetailTemplate;
