import { Dirent } from 'fs';
import fs from 'fs/promises';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import remarkGFM from 'remark-gfm';

import { Post, PostFrontmatter, RecursiveStructure } from '@/types';

export const POST_PATH = '_posts';
export const POST_EXT = 'mdx';
export const POST_EXT_REGEX = new RegExp(`(\.${POST_EXT})$`);

// Level DB?
export async function isCategoryDir(dirPath: string[]) {
  try {
    const stat = await fs.stat(path.join(POST_PATH, ...dirPath));

    return stat.isDirectory();
  } catch (e: any) {
    if (e.code === 'ENOENT') {
      return false;
    } else {
      throw e;
    }
  }
}

function isMdxFile(dirent: Dirent) {
  return POST_EXT_REGEX.test(dirent.name);
}

export async function getStructuredPostPaths(
  basePath: string[] = [],
): Promise<RecursiveStructure<string, undefined>> {
  const structuredFilePaths: RecursiveStructure<string, undefined> = {};

  try {
    const dir = await fs.opendir(path.join(POST_PATH, ...basePath));

    for await (const dirent of dir) {
      if (dirent.isDirectory()) {
        structuredFilePaths[dirent.name] = await getStructuredPostPaths([...basePath, dirent.name]);
      } else if (isMdxFile(dirent)) {
        // remove extension
        const filename = dirent.name.replace(POST_EXT_REGEX, '');
        structuredFilePaths[filename] = undefined;
      }
    }
  } catch (err) {
    console.error('In getStructuredPostPaths', err);
  }

  return structuredFilePaths;
}

export async function getAllSubPaths(basePath: string[] = []): Promise<string[][]> {
  function recursive(
    structure: RecursiveStructure<string, undefined>,
    basePath: string[] = [],
  ): string[][] {
    const paths: string[][] = [basePath];

    for (const [key, value] of Object.entries(structure)) {
      if (value === undefined) {
        paths.push([...basePath, key]);
      } else {
        paths.push(...recursive(value, [...basePath, key]));
      }
    }

    return paths;
  }

  const structuredPostPaths = await getStructuredPostPaths(basePath);

  return recursive(structuredPostPaths);
}

export function destructurizePaths(structured: RecursiveStructure<string, undefined>): string[][] {
  function recursive(structure: RecursiveStructure<string, undefined>, basePath: string[] = []) {
    const paths: string[][] = [];

    for (const [key, value] of Object.entries(structure)) {
      if (value !== undefined) {
        const currentDir = [...basePath, key];
        paths.push(currentDir, ...recursive(value, currentDir));
      }
    }

    return paths;
  }

  return recursive(structured);
}

export async function getPostPaths(basePath: string[] = []): Promise<string[][]> {
  const filePaths: string[][] = [];

  try {
    const dir = await fs.opendir(path.join(POST_PATH, ...basePath));

    for await (const dirent of dir) {
      if (dirent.isDirectory()) {
        const subFilePaths = await getPostPaths([...basePath, dirent.name]);
        filePaths.push(...subFilePaths);
      } else if (isMdxFile(dirent)) {
        filePaths.push([...basePath, dirent.name.replace(POST_EXT_REGEX, '')]);
      }
    }
  } catch (err) {
    console.error('In getPostPaths', err);
  }

  return filePaths;
}

class FileNotExistError extends Error {
  public code: string = 'ENOENT';

  constructor(message: string) {
    super(message);
    this.name = 'FileNotExistError';
  }
}

export async function getPost(slug: string, basePath: string[]): Promise<Post> {
  const filePath = `${path.join(POST_PATH, ...basePath, slug)}.${POST_EXT}`;
  try {
    const fileStat = await fs.stat(filePath);

    if (!fileStat.isFile()) {
      throw new FileNotExistError(`${filePath} is not a file`);
    }

    const content = await serialize(await fs.readFile(filePath, 'utf8'), {
      mdxOptions: { remarkPlugins: [remarkGFM] },
      parseFrontmatter: true,
    });

    if (typeof content.frontmatter !== 'object' || Array.isArray(content.frontmatter)) {
      throw new Error('Metadata is not an object');
    }

    const {
      title = 'Untitled',
      author = '',
      tags = [],
      createdAt,
      updatedAt,
    } = content.frontmatter as PostFrontmatter;

    return {
      ...content.frontmatter,
      slug,
      categories: basePath,
      title,
      author,
      tags,
      // createdAt: createdAt ?? fileStat.birthtimeMs,
      date: updatedAt ?? fileStat.mtimeMs, // updatedAt: mtimeMs,
      openGraph: {
        title,
        type: 'article',
        image: '',
        url: `${process.env.HOST_URL}/${basePath.join('/')}/${slug}`,
      },
      content,
      frontmatter: content.frontmatter ?? {},
    };
  } catch (e: any) {
    if (e.code !== 'ENOENT') {
      console.error('Unexpected error while reading post data', e);
    }

    throw e;
  }
}

export async function getPosts(basePath: string[]): Promise<Post[]> {
  const posts: Post[] = [];

  try {
    const dir = await fs.opendir(path.join(POST_PATH, ...basePath));

    for await (const dirent of dir) {
      if (dirent.isDirectory()) {
        posts.push(...(await getPosts([...basePath, dirent.name])));
      } else if (isMdxFile(dirent)) {
        posts.push(await getPost(dirent.name.replace(POST_EXT_REGEX, ''), basePath));
      }
    }
  } catch (e) {
    console.log('In getPosts', e);
  }

  return posts;
}
