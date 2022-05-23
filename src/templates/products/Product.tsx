import { PropsWithChildren } from 'react';

import Head from 'next/head';

import { BaseComponentProps } from '@/types';

import { ProductHeaderProps } from './ProductHeader';

export interface ProductTemplateProps extends ProductHeaderProps, BaseComponentProps {}

function ProductTemplate({
  children,
  className,
  ...headerContent
}: PropsWithChildren<ProductTemplateProps>) {
  return (
    <>
      <ProductTemplateHead {...headerContent} />

      <article className={`flex w-full max-w-none flex-col py-32 ${className}`}>
        <section>{children}</section>
      </article>
    </>
  );
}

export default ProductTemplate;

function ProductTemplateHead({ title, description, summary }: ProductTemplateProps) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
