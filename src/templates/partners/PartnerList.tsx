import { useTranslations } from 'next-intl';

import { usePartnerList } from '@/constants/partners';

export function PartnerList() {
  const t = useTranslations('partner.partnerList');

  const partnerList = usePartnerList();

  return (
    <div className='flex flex-col gap-4 items-center'>
      <div className='font-bold text-center text-[24px] leading-[32px] md:text-[30px] md:leading-[43px]'>
        {t('title')}
      </div>
      <div>{t('description')}</div>
      <div className='grid max-w-[1300px] w-full gap-x-3 gap-y-4 grid-cols-[repeat(auto-fit,_minmax(240px,1fr))] justify-center py-8'>
        {partnerList.map((v, idx) => (
          <div
            key={idx}
            className='flex flex-col justify-center border border-[#eee] items-center bg-white rounded-[15px]'>
            <div className='flex items-center h-[95px]'>{v.img}</div>
            <div className='w-full break-all text-[#444] text-[18px] font-medium leading-[21px] py-[11px] text-center bg-[#DDE8FF] rounded-b-[15px]'>
              {v.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
