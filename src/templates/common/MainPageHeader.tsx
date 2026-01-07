import { useLocale } from 'next-intl';

import { Button } from '@/components/ui';

import { HeaderData } from '@/types/header';

const HIDE_BUTTON_PATHS = ['/resource/blog/21', '/about/performance', '/about/effect'];

export function MainPageHeader({ headerData }: { headerData: HeaderData }) {
  const locale = useLocale();

  const { title, description, bgClassName, heightClassName, buttonData } = headerData;

  const isHidden =
    locale === 'en' && buttonData && HIDE_BUTTON_PATHS.includes(buttonData.href as string);

  const shouldShowButton = buttonData && !isHidden;

  return (
    <div
      className={`flex items-center justify-center px-4 bg-cover bg-no-repeat bg-center text-white text-center break-keep md:pt-[60px] ${bgClassName} ${heightClassName}`}>
      <div className='flex flex-col items-center'>
        <div className='text-[28px] leading-tight font-bold lg:text-[48px] lg:leading-[48px]'>
          {title.mainText}
          {title.subText && (
            <span className='text-[24px] leading-[28.8px] lg:text-[36px] lg:leading-[40px]'>
              {` ${title.subText}`}
            </span>
          )}
        </div>
        <div className='mt-[12px] font-medium text-[16px] leading-[20px] lg:text-[18px] lg:leading-[24px] '>
          {description}
        </div>
        {shouldShowButton && (
          <Button className={`mt-4 ${buttonData.className ?? ''}`} {...buttonData} />
        )}
      </div>
    </div>
  );
}
