import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

export interface PageWidthProps extends BaseComponentProps {
  children: React.ReactNode;
  containerClassName?: string;
  seperateWithPeer?: boolean;
}

export function PageWidth({
  containerClassName,
  seperateWithPeer = false,
  className,
  children,
}: PageWidthProps) {
  return (
    <section
      className={cls`flex w-full justify-center self-center ${
        seperateWithPeer && 'even:bg-backgroudGray'
      } ${containerClassName}`}>
      <div className={cls`my-12 flex max-w-page-full flex-1 flex-col px-8 ${className}`}>
        {children}
      </div>
    </section>
  );
}
