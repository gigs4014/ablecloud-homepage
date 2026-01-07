import { getTranslations } from 'next-intl/server';

import Call from '@/public/icons/common/call.svg';
import Pin from '@/public/icons/common/pin.svg';

export default async function CompanyLocation() {
  const t = await getTranslations('company.location');

  return (
    <div className='flex flex-col items-center justify-center animate-fade-in gap-8 md:gap-12 pt-12'>
      <div className='flex flex-col gap-4 max-w-[780px] w-full'>
        <iframe
          src='https://map.mommoss.com/?&lat=37.5268460691441&lng=126.9042119165590'
          loading='lazy'
          width='100%'
          height='280'
        />
        <div className='flex flex-col gap-4'>
          <div className='text-[24px] font-bold'>{t('headOffice.label')}</div>
          <div className='flex flex-col gap-[6px]'>
            <div className='flex items-center gap-[6px]'>
              <Pin /> {t('headOffice.value')}
            </div>
            <div className='flex items-center gap-[6px]'>
              <Call /> {t('headOffice.call')}
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 max-w-[780px] w-full'>
        <iframe
          src='https://map.mommoss.com/?&lat=36.36950965624036&lng=127.40761276988948'
          loading='lazy'
          width='100%'
          height='280'
        />
        <div className='flex flex-col gap-4'>
          <div className='text-[24px] font-bold'>{t('rndCenter.label')}</div>
          <div className='flex flex-col gap-[6px]'>
            <div className='flex items-center gap-[6px]'>
              <Pin /> {t('rndCenter.value')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
