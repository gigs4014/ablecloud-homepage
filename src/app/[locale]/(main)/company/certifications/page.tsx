import Image from 'next/image';

import { getCompanyCertifications } from '@/constants/company';

export default async function CompanyCertifications() {
  const companyCertifications = await getCompanyCertifications();

  return (
    <div className='flex justify-center animate-fade-in w-full pt-8'>
      <div className='grid max-w-[1292px] gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-8 xl:gap-12 xl:grid-cols-5 items-start text-[#444] text-center text-[14px]'>
        {companyCertifications.map((v, idx) => (
          <div key={idx} className='flex flex-col gap-5 items-center'>
            <Image src={v.imgSrc} alt='' className='border border-[#bcbcbc] shadow-md' />
            <div>{v.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
