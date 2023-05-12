import Head from 'next/head';

import { BasePageProps, Post } from '@/types';

import { Meta } from '@/components/head';
import { PostArticle } from '@/components/post';

export interface PostDetailTemplateProps {
  post: Post;
}

function PostDetailTemplate({ post }: PostDetailTemplateProps & BasePageProps<{ path: string[] }>) {
  return (
    <>
      <Head>
        <title>{post.slug}</title>
        {Meta.OpenGraph(post.openGraph)}
      </Head>

      <PostArticle post={post} />
    </>
  );
}

export default PostDetailTemplate;
