import Image from 'next/image';

import { BaseComponentProps, Post } from '@/types';

import { Container } from '../layout';
import { PostContextProvider } from './PostContext';
import PostMetadata from './PostMetadata';

export interface PostPreviewProps extends BaseComponentProps {
  post: Post;
}

function PostPreview({ post, className }: PostPreviewProps) {
  return (
    <PostContextProvider value={post}>
      <Container.Card className={className}>
        <figure className='mb-4'>
          {post.header ? (
            <Image src={post.header.image_fullwidth} />
          ) : (
            <div className='h-64 w-full bg-gray-200' />
          )}
        </figure>

        <div className='p-3'>
          <PostMetadata className='mb-2' linkBy='event' />

          <h2 className='text-xl font-medium'>{post.title}</h2>

          <p>{post.teaser}</p>
        </div>
      </Container.Card>
    </PostContextProvider>
  );
}

export default PostPreview;
