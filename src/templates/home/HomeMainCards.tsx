import { useTranslations } from 'next-intl';

import { HomeMainCardData } from '@/types/home';

import ArrowRight from '@/public/icons/common/arrow-right.svg';

import { Link } from '@/i18n/routing';

interface HomeMainCardsProps {
  title: string;
  cardsData: HomeMainCardData[];
}

export function HomeMainCards({ title, cardsData }: HomeMainCardsProps) {
  const t = useTranslations('home');

  return (
    <div className='hidden flex-col gap-[30px] mb-[30px] lg:flex'>
      <div className='font-bold text-center text-[24px] leading-[32px] md:text-[32px] md:leading-[44.16px]'>
        {title}
      </div>
      <div className='flex justify-center gap-[10px] xl:gap-[30px]'>
        {cardsData.map((cardData, idx) => {
          return (
            <div
              key={idx}
              className={`${cardData.bgClassName} flex flex-col flex-1 max-w-[460px] w-full h-[250px] bg-cover bg-no-repeat bg-center rounded-[20px] px-6 py-9`}>
              <div className='flex-1 text-white font-bold text-[24px] leading-[36px]'>
                {cardData.title}
              </div>
              <Link href={cardData.href}>
                <div className='flex gap-1 items-center text-white '>
                  {t('card.detail')} <ArrowRight width={24} />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
