import { PropsWithChildren } from 'react';

import { BaseComponentProps } from '@/types';

import { Container } from '@/components/layout';

import HomeHeader, { HomeHeaderProps } from './HomeHeader';

export interface HomeTemplateProps extends HomeHeaderProps, BaseComponentProps {
  enableProseSpacing?: boolean;
}

function HomeTemplate({
  children,
  className,
  enableProseSpacing = true,
  ...headerContent
}: PropsWithChildren<HomeTemplateProps>) {
  return (
    <>
      <Container.Article enableProseSpacing={enableProseSpacing} className={className}>
        <HomeHeader {...headerContent} />

        {children}
      </Container.Article>
    </>
  );
}

export default HomeTemplate;
