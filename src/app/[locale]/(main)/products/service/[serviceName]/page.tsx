import { notFound } from 'next/navigation';

import {
  ablestackServices,
  getProductsContentData,
  getProductsHeaderData,
} from '@/constants/products';

import { ContentWrapper } from '@/templates/common';
import { ProductContent, ProductHeader } from '@/templates/products';

import { AbleStackServices } from '@/types/products';

export default async function AblestackService({
  params,
}: {
  params: Promise<{ serviceName: AbleStackServices }>;
}) {
  const { serviceName } = await params;

  if (!ablestackServices.includes(serviceName)) return notFound();

  const productsHeaderData = await getProductsHeaderData();
  const productsContentData = await getProductsContentData();

  return (
    <>
      <ProductHeader headerData={productsHeaderData[serviceName]} />
      <ContentWrapper type='products'>
        <ProductContent productContentData={productsContentData[serviceName]} />
      </ContentWrapper>
    </>
  );
}
