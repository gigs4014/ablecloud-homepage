import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

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

export default function PostPage(props: PostPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (props.isDirectory) {
    return <PostListTemplate {...props} />;
  } else {
    return <PostDetailTemplate {...props} />;
  }
}

export const getStaticProps: GetStaticProps<PostPageProps, PostPageParams> = async ({
  params = { path: [] },
}) => {
  const { path } = params;

  try {
    // TODO: use fs.stat to path is a directory
    const isDirectory = await isCategoryDir(path);
    const slug = path.pop();

    if (slug === undefined || isDirectory) {
      console.log('isDirectory');
      // post list
      // TODO: get posts from directory
      const posts = await getPosts(path);

      return { props: { isDirectory: true, posts, params } };
    } else {
      const post = await getPost(slug, path);

      return { props: { post, params } };
    }
  } catch (e) {
    console.log(e, '\nIn src/pages/blog/[...path].tsx getStaticProps');
    return { props: {}, notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths<PostPageParams> = async () => {
  const postPaths = await getAllSubPaths();

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
