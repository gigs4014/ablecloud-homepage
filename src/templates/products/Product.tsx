import { PropsWithChildren } from 'react';

import Head from 'next/head';

import { BaseComponentProps } from '@/types';

import { Container } from '@/components/layout';

import ProductHeader, { ProductHeaderProps } from './ProductHeader';

export interface ProductTemplateProps extends ProductHeaderProps, BaseComponentProps {
  enableProseSpacing?: boolean;
}

function ProductTemplate({
  children,
  className,
  enableProseSpacing = true,
  ...headerContent
}: PropsWithChildren<ProductTemplateProps>) {
  return (
    <>
      {/* <ProductTemplateHead {...headerContent} /> */}

      <Container.Article enableProseSpacing={enableProseSpacing} className={className}>
        <ProductHeader {...headerContent} />

        {children}
      </Container.Article>
    </>
  );
}

export default ProductTemplate;

function ProductTemplateHead({ title, description }: ProductTemplateProps) {
  return (
    <Head>
      <title>{[title, description].filter(Boolean).join(' - ')}</title>
    </Head>
  );
}
