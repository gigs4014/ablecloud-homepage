import { NextSeo } from 'next-seo';

import { BasePageProps, Post } from '@/types';

import { PostArticle } from '@/components/post';

export interface PostDetailTemplateProps {
  post: Post;
}

function PostDetailTemplate({ post }: PostDetailTemplateProps & BasePageProps<{ path: string[] }>) {
  return (
    <>
      <NextSeo
        title='에이블클라우드 소식'
        description='에이블클라우드 소식'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/blog',
          images: [
            {
              url: '',
              alt: '에이블클라우드 소식',
            },
          ],
        }}
      />

      <PostArticle post={post} />
    </>
  );
}

export default PostDetailTemplate;
