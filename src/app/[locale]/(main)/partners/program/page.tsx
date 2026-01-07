import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { usePartnerProgramHeaderData } from '@/constants/partners';

import { ContentWrapper, MainPageHeader } from '@/templates/common';

import { Button } from '@/components/ui';

import program1Src from '@/public/images/partners/program-1.png';
import program2Src from '@/public/images/partners/program-2.png';
import program3Src from '@/public/images/partners/program-3.png';
import program4Src from '@/public/images/partners/program-4.png';

export default function PartnerProgram() {
  const t = useTranslations('partner.program');

  const data = [
    {
      imgSrc: program1Src,
      title: t('data.0.title'),
      description: t.rich('data.0.description', {
        br: () => <br />,
      }),
    },
    {
      imgSrc: program2Src,
      title: t('data.1.title'),
      description: t.rich('data.1.description', {
        br: () => <br />,
      }),
    },
    {
      imgSrc: program3Src,
      title: t('data.2.title'),
      description: t.rich('data.2.description', {
        br: () => <br />,
      }),
    },
    {
      imgSrc: program4Src,
      title: t('data.3.title'),
      description: t.rich('data.3.description', {
        br: () => <br />,
      }),
    },
  ];
  return (
    <>
      <MainPageHeader headerData={usePartnerProgramHeaderData()} />
      <ContentWrapper bgClassName='bg-[#171A20]'>
        <div className='flex flex-col gap-4 text-white items-center'>
          <div className='font-medium text-center text-[24px] leading-[32px] md:text-[30px] md:leading-[43px]'>
            {t('title')}
          </div>
          <div className='partner-program-gradient-text text-center font-medium text-[16px] md:text-[18px]'>
            {t('description')}
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4'>
            {data.map((v, idx) => (
              <div key={idx} className='flex flex-col gap-2 text-center py-4'>
                <Image src={v.imgSrc} alt='' className='rounded-xl' />
                <div className='font-bold'>{v.title}</div>
                <div className='text-[14px] leading-[22px]'>{v.description}</div>
              </div>
            ))}
          </div>
          <Button text={t('contact')} href='/contact' className='!bg-[#B26EFE] mt-3' />
        </div>
      </ContentWrapper>
    </>
  );
}
