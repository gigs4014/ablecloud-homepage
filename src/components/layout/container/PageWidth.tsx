import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

export interface PageWidthProps extends BaseComponentProps {
  children: React.ReactNode;
  containerClassName?: string;
  separateWithPeer?: boolean;
  invertBg?: boolean;
}

export function PageWidth({
  containerClassName,
  separateWithPeer: separateWithPeer = false,
  invertBg = false,
  className,
  children,
}: PageWidthProps) {
  return (
    <section
      className={cls`flex justify-center self-center ${
        separateWithPeer && (invertBg ? 'odd:bg-backgroudGray' : 'even:bg-backgroudGray')
      } ${containerClassName}`}>
      <div className={cls`my-[50px] flex max-w-page-full flex-1 flex-col px-8 ${className}`}>
        {children}
      </div>
    </section>
  );
}
