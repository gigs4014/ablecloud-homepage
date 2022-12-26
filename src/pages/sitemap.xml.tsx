// pages/sitemap.xml.tsx
import { GetServerSidePropsContext } from 'next';

import { globby } from 'globby';
import { ISitemapField, getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const lastmod = new Date().toISOString();
  const baseUrl = 'https://www.ablecloud.io';
  const paths = await globby(['src/pages/**/index.tsx', '!src/pages/stories']);
  const pages = paths.map(v => v.replace('src/pages', '').replace('/index.tsx', ''));

  pages.sort();

  const defaultFields: ISitemapField[] = pages.map(page => {
    let loc;
    if (!page) loc = `${baseUrl}/`;
    else loc = `${baseUrl}${page}`;
    const sitemap = {
      loc,
      lastmod,
    };
    return sitemap;
  });
  const fields = [...defaultFields];

  return getServerSideSitemap(ctx, fields);
};
export default () => {
  return;
};
