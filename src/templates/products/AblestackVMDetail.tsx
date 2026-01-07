import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

import EN_VMDetailSrc from '@/public/images/products/en-vm-detail.png';
import VMDetailSrc from '@/public/images/products/vm-detail.png';

export function AblestackVMDetail() {
  const t = useTranslations('product.vm.detail');
  const locale = useLocale();

  return (
    <div className='flex flex-col items-center gap-3 text-center'>
      <div className='font-bold text-[24px] leading-[32px] md:text-[32px] md:leading-[44.16px] '>
        {t('title')}
      </div>
      <div>{t.rich('description', { br: () => <br /> })}</div>
      <div
        className={`flex justify-center bg-[#F9F9F9] py-[38px] px-2 ${locale === 'en' ? 'max-w-[911px]' : ''}`}>
        <Image src={locale === 'ko' ? VMDetailSrc : EN_VMDetailSrc} alt='' />
      </div>
    </div>
  );
}
