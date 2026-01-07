import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { getCompanyAboutCardsData } from '@/constants/company';

export default async function CompanyAbout() {
  const t = await getTranslations('company.about');

  return (
    <div className='animate-fade-in w-full pt-8 text-[#222]'>
      <div className='flex flex-col md:flex-row bg-[#F9F9F9] px-5 py-6 md:px-10 md:py-9 rounded-[20px]'>
        <div className='flex flex-col justify-center gap-[19px] max-w-full md:max-w-[396px] w-full'>
          <div className='font-bold text-[24px] leading-[32px] md:text-[32px] md:leading-[44.16px]'>
            CLOUD PLATFORM
          </div>
          <div className='text-[16px] leading-[24px]'>
            {t.rich('description.0', {
              br: () => <br />,
            })}
          </div>
        </div>
        <div className='leading-[30px] tracking-tighter'>
          {t.rich('content', {
            br: () => <br />,
          })}
          <div className='text-[18px] leading-[24px] font-bold'>
            <br />
            <br />
            {t('dear')}
          </div>
        </div>
      </div>
      <div className='flex flex-col xl:flex-row md:px-10 pt-6'>
        <div className='flex flex-col justify-center gap-[19px] max-w-full md:max-w-[396px] w-full px-5 md:px-0'>
          <div className='font-bold text-[24px] leading-[32px] md:text-[32px] md:leading-[44.16px]'>
            ALL ABOUT DATA & CLOUD
          </div>
          <div>{t.rich('description.1', { br: () => <br /> })}</div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px]'>
          {(await getCompanyAboutCardsData()).map((v, idx) => (
            <div
              key={idx}
              className={`${v.bgClassName} flex flex-col gap-4 p-6 text-white bg-cover bg-no-repeat bg-center rounded-[20px]`}>
              <Image src={v.imgSrc} alt='' className='pt-8' />
              <div className='text-[20px] md:text-[24px] font-bold'>{v.title}</div>
              <div className='text-[14px] md:text-[16px] tracking-tighter'>{v.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
