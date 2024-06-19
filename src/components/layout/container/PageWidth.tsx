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
      className={cls`flex w-full justify-center self-center ${
        separateWithPeer && 'even:bg-backgroudGray'
      } ${containerClassName}`}>
      <div className={cls`flex max-w-page-full flex-1  flex-col py-[70px] ${className}`}>
        {children}
      </div>
    </section>
  );
}
