import { getTranslations } from 'next-intl/server';

import { getPartnerHeaderData, getPartnerTier } from '@/constants/partners';

import { ContentWrapper, MainPageHeader } from '@/templates/common';
import { PartnerList } from '@/templates/partners';

export default async function Partners() {
  const t = await getTranslations('partner');

  const partnersTier = await getPartnerTier();

  return (
    <>
      <MainPageHeader headerData={await getPartnerHeaderData()} />
      <ContentWrapper bgClassName='bg-[#171A20]'>
        <div className='flex flex-col gap-4 text-white items-center'>
          <div className='font-medium text-center text-[24px] leading-[32px] md:text-[30px] md:leading-[43px]'>
            {t('title')}
          </div>
          <div className='partners-gradient-text text-center font-medium text-[16px] md:text-[18px]'>
            {t.rich('description', {
              br: () => <br />,
            })}
          </div>
          <div className='max-w-[828px] text-center'>
            {partnersTier.map((v, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-2 py-4 ${idx === 0 ? 'border-y border-y-[#eeeeee14]' : 'border-b border-b-[#eeeeee14] '}`}>
                <div className='font-bold text-[16px] md:text-[18px]'>{v.title}</div>
                <div className='text-[14px] md:text-[16px] leading-[22px]'>{v.description}</div>
              </div>
            ))}
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper bgClassName='bg-[#F6F7F8]'>
        <PartnerList />
      </ContentWrapper>
    </>
  );
}
