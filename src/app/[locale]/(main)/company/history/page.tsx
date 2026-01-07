import { getCompanyHistory } from '@/constants/company';

export default async function CompanyHistory() {
  const companyHistory = await getCompanyHistory();

  return (
    <div className='flex justify-center animate-fade-in w-full'>
      <div className='flex flex-col gap-8 md:gap-12 max-w-[640px] py-10 md:py-[60px]'>
        {companyHistory.map(
          v =>
            v.year && (
              <div className='flex flex-col md:flex-row gap-3 md:gap-9' key={v.year}>
                <div className='text-[#2582AD] font-bold text-[24px] md:text-[28px]'>{v.year}</div>
                <div className='flex flex-col gap-3 leading-[17px]'>
                  {v.history.map((h, i) => (
                    <div
                      key={i}
                      className={`${h.isHighlight ? 'text-[#2582AD]' : 'text-[#444]'} text-[14px] font-normal tracking-[-0.02em]`}>
                      {h.text}
                    </div>
                  ))}
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  );
}
