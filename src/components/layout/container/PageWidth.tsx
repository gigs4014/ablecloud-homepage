import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

export interface PageWidthProps extends BaseComponentProps {
  children: React.ReactNode;
  containerClassName?: string;
}

export function PageWidth({ children, className, containerClassName }: PageWidthProps) {
  return (
    <section
      className={cls`flex w-full justify-center self-center even:bg-slate-100 ${containerClassName}`}>
      <div className={cls`my-12 flex max-w-page-full flex-1 flex-col px-8 ${className}`}>
        {children}
      </div>
    </section>
  );
}
