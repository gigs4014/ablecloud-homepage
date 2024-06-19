import { ReactNode } from 'react';

import { cls } from '@/utils';

interface Card {
  title: string;
  image: ReactNode;
}

interface AboutProduct {
  className?: string;
  title: string;
  description: string;
  bgColor: string;
  cards: Card[];
}

const AboutProduct = ({ className, title, description, cards, bgColor }: AboutProduct) => {
  return (
    <div className={`w-full`}>
      <div className='text-[24px] font-bold'>{title}</div>
      <div className='my-[24px]'>{description}</div>
      <div className={cls`flex flex-row flex-wrap justify-center gap-[20px] ${className}`}>
        {cards.map(({ image, title }, index) => {
          return (
            <div key={index} className={cls`flex h-[170px] w-[170px] rounded-[20px] ${bgColor}`}>
              <div className='flex w-full flex-col items-center justify-center'>
                {image}
                <div className='mt-[14px] max-w-[135px]'>{title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutProduct;
