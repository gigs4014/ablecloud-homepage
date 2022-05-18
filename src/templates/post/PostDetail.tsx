import Head from 'next/head';

import { MDXRemote } from 'next-mdx-remote';

import { BasePageProps, Post } from '@/types';

import { Meta } from '@/components/head';

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

      <article className='prose flex h-full w-full flex-col dark:prose-invert lg:prose-xl lg:prose-p:my-2'>
        <header className='flex flex-col space-y-4 pb-8'>
          {/* breadcrumb */}
          <nav className='flex items-center last:after:content-[""]'>
            {post.categories.map(category => (
              <span key={category} className='after:content-[" > "]'>
                {category}
              </span>
            ))}
          </nav>

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
