import { PropsWithChildren } from 'react';

import Head from 'next/head';

import { BaseComponentProps } from '@/types';

import { Container } from '@/components/layout';

import ProductHeader, { ProductHeaderProps } from './ProductHeader';

export interface ProductTemplateProps extends ProductHeaderProps, BaseComponentProps {}

function ProductTemplate({
  children,
  className,
  ...headerContent
}: PropsWithChildren<ProductTemplateProps>) {
  return (
    <>
      <ProductTemplateHead {...headerContent} />

      <Container.Article enableHeadingMargin className={className}>
        <ProductHeader {...headerContent} />

        {children}
      </Container.Article>
    </>
  );
}

export default ProductTemplate;

function ProductTemplateHead({ title, description, summary }: ProductTemplateProps) {
  return (
    <Head>
      <title>{[title, summary].filter(Boolean).join(' - ')}</title>
    </Head>
  );
}
