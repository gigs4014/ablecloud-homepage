import { PropsWithChildren } from 'react';

import Head from 'next/head';

import { BaseComponentProps } from '@/types';

import { Container } from '@/components/layout';

import PartnerHeader, { PartnerHeaderProps } from './PartnerHeader';

export interface PartnerTemplateProps extends PartnerHeaderProps, BaseComponentProps {
  enableProseSpacing?: boolean;
}

function PartnerTemplate({
  children,
  className,
  enableProseSpacing = true,
  ...headerContent
}: PropsWithChildren<PartnerTemplateProps>) {
  return (
    <>
      <PartnerTemplateHead {...headerContent} />

      <Container.Article enableProseSpacing={enableProseSpacing} className={className}>
        <PartnerHeader {...headerContent} />

        {children}
      </Container.Article>
    </>
  );
}

export default PartnerTemplate;

function PartnerTemplateHead({ title, description }: PartnerTemplateProps) {
  return (
    <Head>
      <title>{[title].filter(Boolean).join(' - ')}</title>
    </Head>
  );
}
