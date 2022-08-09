import { PropsWithChildren } from 'react';

import Head from 'next/head';

import { BaseComponentProps } from '@/types';

import { Container } from '@/components/layout';

import SolutionHeader, { SolutionHeaderProps } from './SolutionHeader';

export interface SolutionTemplateProps extends SolutionHeaderProps, BaseComponentProps {
  enableProseSpacing?: boolean;
}

function SolutionTemplate({
  children,
  className,
  enableProseSpacing = true,
  ...headerContent
}: PropsWithChildren<SolutionTemplateProps>) {
  return (
    <>
      <SolutionTemplateHead {...headerContent} />

      <Container.Article enableProseSpacing={enableProseSpacing} className={className}>
        <SolutionHeader {...headerContent} />

        {children}
      </Container.Article>
    </>
  );
}

export default SolutionTemplate;

function SolutionTemplateHead({ title, description }: SolutionTemplateProps) {
  return (
    <Head>
      <title>{[title].filter(Boolean).join(' - ')}</title>
    </Head>
  );
}
