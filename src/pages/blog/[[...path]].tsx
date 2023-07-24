import { GetStaticPaths, GetStaticProps } from 'next';

import { NextSeo } from 'next-seo';
import { ParsedUrlQuery } from 'querystring';

import { getAllSubPaths, getPost, getPosts, isCategoryDir } from '@/helpers/post';
import { BasePageProps } from '@/types';

import {
  PostDetailTemplate,
  PostDetailTemplateProps,
  PostListTemplate,
  PostListTemplateProps,
} from '@/templates';

interface PostPageParams extends ParsedUrlQuery {
  path: string[];
}
interface BasePostPageProps extends BasePageProps<PostPageParams> {
  isDirectory?: boolean;
}
interface PostListPageProps extends BasePostPageProps, PostListTemplateProps {
  isDirectory: true;
}
interface PostDetailPageProps extends BasePostPageProps, PostDetailTemplateProps {
  isDirectory?: false;
}

type PostPageProps = PostDetailPageProps | PostListPageProps;

export default function PostPage(props: Readonly<PostPageProps>) {
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
  />;

  if (props.isDirectory) {
    return <PostListTemplate {...props} />;
  } else {
    return <PostDetailTemplate {...props} />;
  }
}

export const getStaticProps: GetStaticProps<PostPageProps, PostPageParams> = async ({
  params = { path: [] },
}) => {
  const { path = [] } = params;
  path.unshift('blog');

  try {
    const isDirectory = await isCategoryDir(path);
    const slug = path.at(-1);

    if (slug === undefined || isDirectory) {
      // post list
      // TODO: get posts from directory
      const posts = await getPosts(path);

      return { props: { isDirectory: true, posts, params } };
    } else {
      path.pop();
      const post = await getPost(slug, path);

      return { props: { post, params } };
    }
  } catch (e) {
    console.log(e, '\nIn src/pages/blog/[...path].tsx getStaticProps');
    return { props: {}, notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths<PostPageParams> = async () => {
  const postPaths = await getAllSubPaths(['blog']);

  return {
    paths: postPaths.map(postPath => {
      return {
        params: {
          path: postPath,
        },
      };
    }),
    fallback: false,
  };
};
