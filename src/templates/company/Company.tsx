import { PropsWithChildren } from 'react';

import { BaseComponentProps } from '@/types';

import { Container } from '@/components/layout';

import CompanyHeader, { CompanyHeaderProps } from './CompanyHeader';

export interface CompanyTemplateProps extends CompanyHeaderProps, BaseComponentProps {
  enableProseSpacing?: boolean;
}

function CompanyTemplate({
  children,
  className,
  enableProseSpacing = true,
  ...headerContent
}: PropsWithChildren<CompanyTemplateProps>) {
  return (
    <>
      <Container.Article enableProseSpacing={enableProseSpacing} className={className}>
        <CompanyHeader {...headerContent} />

        {children}
      </Container.Article>
    </>
  );
}

export default CompanyTemplate;
