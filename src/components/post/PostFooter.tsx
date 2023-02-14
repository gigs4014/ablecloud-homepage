import { useMemo } from 'react';

import { Post } from '@/types';

import { usePostContext } from './PostContext';
import PostPreview from './PostPreview';

function PostFooter() {
  const { categories, tags, slug } = usePostContext();

  const suggestPosts = useMemo(() => {
    const getSuggestPosts = (...args: any): Post[] => [];

    return getSuggestPosts(slug, categories, tags);
  }, [slug, categories, tags]);

  return (
    <footer>
      {/* suggest post */}
      <div>
        {suggestPosts.map(post => (
          <PostPreview post={post} key={post.slug} />
        ))}
      </div>
    </footer>
  );
}

export default PostFooter;
