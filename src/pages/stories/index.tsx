import { GetStaticProps } from 'next';
import Head from 'next/head';

import { getPosts } from '@/helpers/post';
import { BasePageProps, Post } from '@/types';

import { AspectRatioImage } from '@/components/common';
import { Container } from '@/components/layout';

interface StoryHomePageProps extends BasePageProps {
  stories: Post[];
}

export default function StoryHomePage({ stories }: StoryHomePageProps) {
  return (
    <>
      <Head>
        <title>성공사례 - 에이블클라우드</title>
      </Head>

      <Container.Article>
        <header className='mt-16'>
          <Container.PageWidth>
            <h2>ABLESTACK과 함께 IT 혁신을 실현한 사례들을 확인해보세요.</h2>
          </Container.PageWidth>
        </header>

        <Container.PageWidth>
          <ul className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            {stories.map(
              ({ title, categories, slug, tags = [], header: { subtitle, thumbnail } }, index) => (
                <li key={index}>
                  {/* <CustomLink href={[...categories, slug].join('/')} hoverBehavior='none'> */}
                  <Container.Card className='flex h-full flex-col shadow-md' hoverBehavior='none'>
                    {/* image placeholder */}
                    {thumbnail ? (
                      <AspectRatioImage src={thumbnail} height={256} />
                    ) : (
                      <div className='h-64 w-full bg-slate-200' />
                    )}

                    <section className='flex flex-1 flex-col justify-between p-3 text-left'>
                      <div>
                        {/* title */}
                        <h2>{title}</h2>

                        {/* subtitle */}
                        <p className='font-thin text-gray-500'>{String(subtitle)}</p>
                      </div>

                      <div>
                        <hr className='my-2' />

                        {/* tags */}
                        <div className='flex text-sm text-gray-300'>
                          {tags.map((tag, tagIndex) => (
                            <span
                              className='after:mx-1 after:content-["/"] last:after:hidden'
                              key={tagIndex}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </section>
                  </Container.Card>
                  {/* </CustomLink> */}
                </li>
              ),
            )}
          </ul>
        </Container.PageWidth>
      </Container.Article>
    </>
  );
}

export const getStaticProps: GetStaticProps<StoryHomePageProps> = async () => {
  const stories = await getPosts(['stories']);

  return {
    props: {
      stories,
    },
  };
};
