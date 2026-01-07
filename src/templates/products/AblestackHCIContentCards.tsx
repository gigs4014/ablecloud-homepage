import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

import HCICard1Src from '@/public/images/products/hci-card-1.png';
import HCICard2Src from '@/public/images/products/hci-card-2.png';
import HCICard3EnSrc from '@/public/images/products/hci-card-3-en.png';
import HCICard3Src from '@/public/images/products/hci-card-3.png';
import HCICard4EnSrc from '@/public/images/products/hci-card-4-en.png';
import HCICard4Src from '@/public/images/products/hci-card-4.png';

export function AblestackHCIContentCards() {
  const t = useTranslations('product.hci.contentCards');
  const locale = useLocale();

  const cardsData = [
    {
      title: t('0.title'),
      description: t.rich('0.description', {
        br: () => <br />,
      }),
      imgSrc: HCICard1Src,
    },
    {
      title: t('1.title'),
      description: t.rich('1.description', {
        br: () => <br />,
      }),
      imgSrc: HCICard2Src,
    },
    {
      title: t('2.title'),
      description: t.rich('2.description', {
        br: () => <br />,
      }),
      imgSrc: locale === 'en' ? HCICard3EnSrc : HCICard3Src,
    },
    {
      title: t('3.title'),
      description: t.rich('3.description', {
        br: () => <br />,
      }),
      imgSrc: locale === 'en' ? HCICard4EnSrc : HCICard4Src,
    },
  ];

  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
        {cardsData.map((v, idx) => {
          return (
            <div
              key={idx}
              className='flex flex-col bg-white max-w-[654px] w-full rounded-[10px] p-6 lg:p-8'>
              <div className='flex flex-col gap-2'>
                <div className='text-[#926CFF] font-bold text-[20px] md:text-2xl'>{v.title}</div>
                <div className='tracking-tight'>{v.description}</div>
              </div>
              <div className='flex flex-1 items-end mt-6'>
                <div className='w-full flex items-center justify-center bg-[#F5F5F5]  p-4'>
                  <Image src={v.imgSrc} alt='' />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
