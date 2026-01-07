import { useTranslations } from 'next-intl';

import { AblestackHCICardData } from '@/types/products';

interface AblestackHCICardsProps {
  cardsData: AblestackHCICardData[];
}

export function AblestackHCICards({ cardsData }: AblestackHCICardsProps) {
  const t = useTranslations('product.hci');

  return (
    <div className='flex flex-col gap-4 md:gap-8'>
      <div className='font-bold text-[24px] leading-[32px] md:text-[32px] md:leading-[44.16px] text-center'>
        {t('title')}
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 justify-items-center p-[10px] gap-[10px] xl:gap-6'>
        {cardsData.map((cardData, idx) => {
          return (
            <div
              key={idx}
              className={`flex flex-col bg-[#85ABE2] gap-4 w-full bg-cover bg-no-repeat bg-center rounded-[10px] p-6 text-white`}>
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
