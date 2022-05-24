import { cls } from '@/utils';

import { CustomLink } from '@/components/common';

export default function ProductContentGoDetail({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cls`not-prose mt-8 ${className}`}>
      <CustomLink
        href={href}
        className='flex items-center font-bold text-sky-600 after:ml-1 after:icon-[east]'>
        {children}에 대해 자세히 알아보기
      </CustomLink>
    </div>
  );
}
