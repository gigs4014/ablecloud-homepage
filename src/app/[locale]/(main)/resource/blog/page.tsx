import { getLocale } from 'next-intl/server';

import { getPosts } from '@/util/getPost';

import { BlogList } from '@/templates/resource';

import { redirect } from '@/i18n/routing';

export default async function Blog() {
  const { postsData } = await getPosts();
  const locale = await getLocale();

  if (locale === 'en') {
    redirect({
      href: '/resource/video',
      locale: locale,
    });
  }

  // <div className=''>
  return (
    <div className='flex justify-center animate-fade-in mt-6'>
      <BlogList postsData={postsData} />
    </div>
  );
}
