import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface OpenGraph {
  title: string;
  type: string;
  image: string;
  url: string;
  description?: string;
}

declare type Frontmatter = null | boolean | number | string | FrontmatterArray | FrontmatterObject;
declare type FrontmatterArray = Array<Frontmatter>;
declare type FrontmatterObject = {
  [key: string]: Frontmatter;
};

export type PostFrontmatter = FrontmatterObject & {
  title?: string;
  author?: string;
  tags?: string[];
  /**
   * Unix timestamp or ISO 8601 string
   */
  createdAt?: number | string;
  /**
   * Unix timestamp or ISO 8601 string
   */
  updatedAt?: number | string;
};

export interface Post {
  slug: string;
  title: string;
  /**
   * Subtitle of the post
   */
  subheadline?: string;
  teaser?: string;
  categories: string[];
  tags?: string[];
  header?: {
    title: string;
    image_fullwidth: string;
  };
  author?: string;
  /**
   * Unix timestamp or ISO 8601 string
   */
  date: number | string;
  openGraph: OpenGraph;
  content: MDXRemoteSerializeResult;
  frontmatter?: PostFrontmatter;
}
