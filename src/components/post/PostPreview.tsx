import Image from 'next/image';

import { BaseComponentProps, Post } from '@/types';
import { cls } from '@/utils';

import { PostContextProvider } from './PostContext';
import PostMetadata from './PostMetadata';

export interface PostPreviewProps extends BaseComponentProps {
  post: Post;
}

function PostPreview({ post, className }: PostPreviewProps) {
  return (
    <PostContextProvider value={post}>
      <section
        className={cls`rounded-md bg-white p-3 shadow-md transition-all hover:-translate-y-1 hover:scale-102 hover:shadow-xl ${className}`}>
        <figure className='mb-4'>
          {post.header ? (
            <Image src={post.header.image_fullwidth} />
          ) : (
            <div className='h-64 w-full bg-gray-200' />
          )}
        </figure>

        <PostMetadata className='mb-2' linkBy='event' />

        <h2 className='text-xl font-medium'>{post.title}</h2>

        <p>{post.teaser}</p>
      </section>
    </PostContextProvider>
  );
}

export default PostPreview;
