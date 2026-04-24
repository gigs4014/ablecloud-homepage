import { useTranslations } from 'next-intl';

import { InterviewHistoryData } from '@/types/interview';

export function InterViewList({ interviewList }: { interviewList: InterviewHistoryData[] }) {
  const t = useTranslations();

  return (
    <div className='flex flex-col gap-[30px] items-center'>
      <div className='font-bold text-center text-[24px] leading-[32px] md:text-[30px] md:leading-[43px] pb-5'>
        {t('interview.title')}
      </div>
      <div className='flex flex-col gap-8 max-w-[1260px] w-full'>
        {interviewList.map(({ category, data }, catIdx) => (
          <section key={catIdx} className='flex flex-col gap-4'>
            <h2 className='text-lg font-semibold text-[#222]'>{category}</h2>
            <div className='grid gap-x-3 gap-y-2 grid-cols-[repeat(auto-fit,_minmax(200px,1fr))] justify-center'>
              {data.map((item, idx) => (
                <div
                  key={idx}
                  className='flex justify-center flex-col gap-2 min-h-[150px] items-center px-6 py-4 bg-white rounded-[10px] border border-[#EBEEF5]'>
                  {item.img}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
