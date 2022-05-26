import { PropsWithChildren } from 'react';

import Head from 'next/head';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

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

      <article className={cls`w-full max-w-none ${className}`}>
        <ProductHeader {...headerContent} />

        {children}
      </article>
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
