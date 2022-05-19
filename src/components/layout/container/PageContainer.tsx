import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

export interface PageContainerProps extends BaseComponentProps {
  children: React.ReactNode;
  containerClassName?: string;
}

function PageContainer({ children, className, containerClassName }: PageContainerProps) {
  return (
    <section className={cls`flex w-full justify-center self-center ${containerClassName}`}>
      <div className={cls`max-w-page-full flex-1 px-6 ${className}`}>{children}</div>
    </section>
  );
}

export default PageContainer;
