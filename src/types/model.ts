import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface OpenGraph {
  title: string;
  type: string;
  image: string;
  url: string;
  description?: string;
}

export interface PostFrontmatter {
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
}

export interface Post {
  slug: string;
  categories: string[];
  title: string;
  summary?: string;
  author?: string;
  /**
   * Unix timestamp or ISO 8601 string
   */
  date: number | string;
  openGraph: OpenGraph;
  content: MDXRemoteSerializeResult;
  tags?: string[];
  frontmatter?: PostFrontmatter;
}
