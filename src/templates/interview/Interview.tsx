import { PropsWithChildren } from 'react';

import Head from 'next/head';

import { BaseComponentProps } from '@/types';

import { Container } from '@/components/layout';

import InterViewHeader, { InterViewHeaderProps } from './InterviewHeader';

export interface InterViewTemplateProps extends InterViewHeaderProps, BaseComponentProps {
  enableProseSpacing?: boolean;
}

function InterViewTemplate({
  children,
  className,
  enableProseSpacing = true,
  ...headerContent
}: PropsWithChildren<InterViewTemplateProps>) {
  return (
    <>
      <InterViewTemplateHead {...headerContent} />

      <Container.Article enableProseSpacing={enableProseSpacing} className={className}>
        <InterViewHeader {...headerContent} />

        {children}
      </Container.Article>
    </>
  );
}

export default InterViewTemplate;

function InterViewTemplateHead({ title, description }: InterViewTemplateProps) {
  return (
    <Head>
      <title>{[title, description].filter(Boolean).join(' - ')}</title>
    </Head>
  );
}
