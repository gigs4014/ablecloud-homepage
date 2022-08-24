import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { ParsedUrlQuery } from 'querystring';

import { getAllSubPaths, getPost } from '@/helpers/post';
import { BasePageProps } from '@/types';

import { PostDetailTemplate, PostDetailTemplateProps } from '@/templates';

interface PostPageParams extends ParsedUrlQuery {
  path: string;
}
interface BasePostPageProps extends BasePageProps<PostPageParams> {
  isDirectory?: boolean;
}
interface PostDetailPageProps extends BasePostPageProps, PostDetailTemplateProps {
  isDirectory?: false;
}

export default function PostPage({ params, ...props }: Readonly<PostDetailPageProps>) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const path = params?.path.split('/') ?? [];

  return <PostDetailTemplate {...{ params: { ...params, path }, ...props }} />;
}

export const getStaticProps: GetStaticProps<PostDetailPageProps, PostPageParams> = async ({
  params = { path: '' },
}) => {
  const { path: slug } = params;
  // path.unshift('stories');
  console.log(params);

  try {
    if (!slug) throw new Error('slug is undefined');

    const post = await getPost(slug, ['stories']);

    return { props: { post, params } };
  } catch (e) {
    console.log(e, '\nIn src/pages/stories/[...path].tsx getStaticProps');
    return { props: {}, notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths<PostPageParams> = async () => {
  const postPaths = await getAllSubPaths(['stories']);

  return {
    paths: postPaths
      .filter(path => path.length > 0)
      .map(postPath => {
        return {
          params: {
            path: postPath.join('/'),
          },
        };
      }),
    fallback: false,
  };
};
