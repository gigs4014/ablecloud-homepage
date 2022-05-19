import { PropsWithChildren } from 'react';

export interface PageContainerProps extends PropsWithChildren<{}> {}

function PageContainer({ children }: PageContainerProps) {
  return <section className='w-page-full self-center'>{children}</section>;
}

export default PageContainer;
