import { Post } from '@/types';

import { CustomLink } from '../common';
import PostBreadcrumb from './PostBreadCrumb';
import PostCategorySelector from './PostCategorySelector';
import PostPreview from './PostPreview';

export interface PostListProps {
  posts: Post[];
  categories: string[];
}

function PostList({ posts, categories }: PostListProps) {
  console.log('category', categories);
  return (
    <article className='w-full max-w-page-full px-8 py-16'>
      {/* categories */}
      <header className='mb-8 flex items-center space-x-4'>
        <h2 className='text-3xl'>
          {categories.length === 0 ? '모든 글' : <PostBreadcrumb paths={categories} />}
        </h2>
        <hr className='flex-1' />
        <PostCategorySelector value={categories.join('/')} />
      </header>

      <ul className='grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {posts.map(post => (
          <li className='w-full' key={post.slug}>
            <CustomLink
              href={`/blog/${[...post.categories, post.slug].join('/')}`}
              hoverBehavoir='none'>
              <PostPreview post={post} />
            </CustomLink>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default PostList;
