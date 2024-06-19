import { ReactNode } from 'react';

import { useMediaQuery } from 'react-responsive';

import { cls } from '@/utils';

interface Card {
  image: ReactNode;
  title: string;
}

interface AboutExampleProps {
  mainImage: ReactNode;
  clientName: string;
  title: string;
  cards: Card[];
  bgColor: string;
}

const AboutExample = ({ mainImage, clientName, title, cards, bgColor }: AboutExampleProps) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <div className='flex items-center justify-center'>
      {isBigScreen && <div>{mainImage}</div>}
      <div className='px-[36px] text-left'>
        <div className='mb-[24px] text-[14px] font-medium text-[#0085F2]'>{clientName}</div>
        <div className='mb-[20px] text-[24px] font-bold'>{title}</div>
        <div className='flex flex-row flex-wrap items-center justify-center gap-[20px]'>
          {cards.map(({ image, title }, index) => {
            return (
              <div key={index} className={cls`flex h-[170px] w-[170px] rounded-[20px] ${bgColor}`}>
                <div className='flex w-full flex-col items-center justify-center'>
                  {image}
                  <div className='mt-[14px] max-w-[125px] text-center'>{title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutExample;
