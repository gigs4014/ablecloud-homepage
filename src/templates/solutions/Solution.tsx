import React, { PropsWithChildren } from 'react';

import { BasePageProps } from '@/types';

import { Container } from '@/components/layout';

interface SolutionProps extends BasePageProps {
  title: string;
}

export default function SolutionTemplate({ title, children }: PropsWithChildren<SolutionProps>) {
  return (
    <Container.Article>
      <header>
        <Container.PageWidth>
          <h4>Solution</h4>
          <h1>{title}</h1>
        </Container.PageWidth>
      </header>

      {children}
    </Container.Article>
  );
}
