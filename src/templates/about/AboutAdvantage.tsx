import { ReactNode } from 'react';

import { cls } from '@/utils';

interface AboutAdvantageProps {
  image: ReactNode;
  title: string;
  description: string;
}

const AboutAdvantage = ({
  advantageData,
  bgColor,
}: {
  advantageData: AboutAdvantageProps[];
  bgColor: string;
}) => {
  return (
    <div className='py-5'>
      <div className='grid grid-cols-1 border-y-1 border-solid lg:grid-cols-2'>
        {advantageData.map(({ image, title, description }, index) => {
          const dataLength = advantageData.length;
          const isNotLast = index + 2 < dataLength;

          return (
            <div
              key={index}
              className={`flex  border-dashed px-4 py-6 ${index + 1 < dataLength && 'border-b-1'} ${
                index % 2 === 0 && 'lg:border-r-1'
              } ${isNotLast && 'lg:!border-b-1'} lg:border-b-0 lg:px-14`}>
              <div
                className={cls` hidden min-h-[130px] min-w-[130px] items-center justify-center rounded-[65px] ${bgColor} xsm:flex`}>
                {image}
              </div>
              <div className='flex flex-col items-start justify-center xsm:ml-[50px] '>
                <div className='mb-[10px] text-[20px] font-bold'>{title}</div>
                <div className='text-left'>{description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutAdvantage;
