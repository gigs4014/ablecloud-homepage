'use client';

import { useLocale, useTranslations } from 'next-intl';

import { AblestackVMCardData } from '@/types/products';

import AblestackVM from '@/public/icons/common/ablestack-vm.svg';

interface AblestackVMCardsProps {
  cardsData: AblestackVMCardData[];
}

export function AblestackVMCards({ cardsData }: AblestackVMCardsProps) {
  const t = useTranslations('product.vm.cards');
  const locale = useLocale();

  return (
    <div className='flex flex-col gap-[30px]'>
      <div className='flex flex-col justify-center gap-2 items-center xsm:flex-row xsm:gap-[10px] font-bold text-center text-[24px] leading-[32px] md:text-[32px] md:leading-[44.16px]'>
        {locale === 'ko' ? (
          <>
            <AblestackVM className='max-w-[180px] xsm:max-w-[200px] md:max-w-[250px] w-full' />
            {t('title')}
          </>
        ) : (
          <>
            {t('title')}
            <AblestackVM className='max-w-[180px] xsm:max-w-[200px] md:max-w-[250px] w-full' />
          </>
        )}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center gap-[10px] xl:gap-6'>
        {cardsData.map((cardData, idx) => {
          return (
            <div
              key={idx}
              className={`${cardData.bgClassName} flex flex-col gap-4 max-w-[600px] w-full min-h-[218px] bg-cover bg-no-repeat bg-center rounded-[10px] p-6 text-white`}>
              <div className='text-[18px] font-bold'>{`0${idx + 1}`}</div>
              <div className='flex flex-col gap-6'>
                <div className=' font-bold text-xl md:text-2xl'>{cardData.title}</div>
                <div>{cardData.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
