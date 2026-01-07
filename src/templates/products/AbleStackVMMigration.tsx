import { useTranslations } from 'next-intl';
import Image from 'next/image';

import VMMigrationMainSrc from '@/public/images/products/vm-migration-main.png';
import VMMigrationSrc from '@/public/images/products/vm-migration.png';
import VMMonitorSrc from '@/public/images/products/vm-monitor.png';

export function AbleStackVMMigration() {
  const t = useTranslations('product.vm.migration');

  return (
    <div className='flex flex-col gap-3 text-white text-center'>
      <div className='font-bold text-[24px] leading-[32px] md:text-[32px] md:leading-[44.16px] '>
        {t('title')}
      </div>
      <div>{t.rich('description', { br: () => <br /> })}</div>
      <div className='flex gap-6 items-center justify-center flex-col-reverse lg:flex-row'>
        <div className='flex gap-6'>
          <div className='flex flex-col gap-[34px] items-center'>
            <Image src={VMMonitorSrc} alt='' />
            <div className='text-base md:text-lg xl:text-[22px] bg-black px-2 py-1'>
              {t('imageText1')}
            </div>
          </div>
          <div className='flex flex-col gap-[34px] items-center'>
            <Image src={VMMigrationSrc} alt='' />
            <div className='text-base md:text-lg xl:text-[22px] bg-black px-2 py-1'>
              {t('imageText2')}
            </div>
          </div>
        </div>
        <div>
          <Image src={VMMigrationMainSrc} alt='' />
        </div>
      </div>
    </div>
  );
}
