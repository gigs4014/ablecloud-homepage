import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { MDXRemote } from 'next-mdx-remote';

import { usePostContext } from './PostContext';

function PostContent(props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
  const { content } = usePostContext();
  console.log(content);

  return (
    <section {...props}>
      <MDXRemote {...content} />
    </section>
  );
}

export default PostContent;
