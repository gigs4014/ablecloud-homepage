// pages/sitemap.xml.tsx
import { GetServerSidePropsContext } from 'next';

import { globby } from 'globby';
import { ISitemapField, getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const lastmod = new Date().toISOString();
  const baseUrl = 'https://www.ablecloud.io/';
  const paths = await globby(['src/pages/**/index.tsx', '!src/pages/stories']);
  // const pages = paths.map(v => v.replace('src/pages', '').replace('/index.tsx', ''));

  const mainPages = paths.filter(v => v.split('/').length <= 4);
  const subPages = paths.filter(v => v.split('/').length > 4);

  const totalPages = [...mainPages, ...subPages.sort()];

  const pages = totalPages.map(v =>
    v.replace('src/pages/', '').replace('/index.tsx', '').replace('index.tsx', ''),
  );

  console.log(pages);

  const defaultFields: ISitemapField[] = pages.map(page => {
    const loc = `${baseUrl}${page}`;
    const sitemap = {
      loc,
      lastmod,
      priority: page.includes('/') ? 0.9 : 1.0,
    };
    return sitemap;
  });
  const fields = [...defaultFields];

  return getServerSideSitemap(ctx, fields);
};
export default () => {
  return;
};
