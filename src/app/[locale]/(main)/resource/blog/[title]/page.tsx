import { notFound } from 'next/navigation';

import { getPost } from '@/util/getPost';

import { BlogContent } from '@/templates/resource';

export default async function BlogDetail({ params }: { params: Promise<{ title: string }> }) {
  const { title } = await params;
  const post = await getPost(title);

  if (!post) return notFound();

  return (
    <div className='flex justify-center pt-8 md:pt-[120px] pb-20'>
      <BlogContent post={post} />
    </div>
  );
}
