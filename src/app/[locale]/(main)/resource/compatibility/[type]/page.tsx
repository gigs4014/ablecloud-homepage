import { notFound } from 'next/navigation';

import { compatibilityType, getCompatibilityData } from '@/constants/resource';

import { CompatibilityType } from '@/types/resource';

export default async function CompatibilityDetail({
  params,
}: {
  params: Promise<{ type: CompatibilityType }>;
}) {
  const { type } = await params;

  if (!compatibilityType.includes(type)) return notFound();

  const { title, descriptionList } = (await getCompatibilityData())[type];

  return (
    <div className='flex justify-center'>
      <div className='max-w-[1200px] w-full flex items-start flex-col gap-8 pt-8 pb-20'>
        <div className='font-bold text-[30px] leading-[36px]'>{title}</div>
        <div className='flex flex-col gap-12'>
          {descriptionList.map(({ description, list }, idx) => {
            return (
              <div key={idx} className='flex flex-col gap-8'>
                <div>{description}</div>
                <ul className='list-disc pl-5'>
                  {list.map((v, i) => (
                    <li key={i}>{v}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
