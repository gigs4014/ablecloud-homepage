import { BaseComponentProps, Post } from '@/types';

import { AspectRatioImage } from '../common';
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
        <figure className='mb-4 bg-gray-200'>
          <AspectRatioImage src={post.header?.thumbnail ?? '/'} height={256} />
        </figure>

        <div className='p-3'>
          <PostMetadata className='mb-2' linkBy='event' />

          <h2 className='text-xl font-medium'>{post.title}</h2>
        </div>
      </Container.Card>
    </PostContextProvider>
  );
}

export default PostPreview;
