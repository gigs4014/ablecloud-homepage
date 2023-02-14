import { ReactNode, memo } from 'react';

import { BaseComponentProps } from '@/types';

import { Container } from '@/components/layout';

export interface SolutionContentBoxProps extends BaseComponentProps {
  title: string;
  image: ReactNode;
  description?: ReactNode;
}

const SolutionContentRowCard = memo<SolutionContentBoxProps>(
  ({ title, image, description, className }) => {
    return (
      <Container.Card
        hoverBehavoir={'scale'}
        className={`not-prose flex items-center border-2 p-4 shadow-none xl:border-0  ${className}`}>
        <div className='mx-[15px] flex min-h-[80px] min-w-[90px] items-center justify-center'>
          {image}
        </div>

        <div>
          <p className={'mb-[6px] p-0 text-[16px] font-[700] leading-[23.17px]'}>{title}</p>

          {typeof description === 'string' ? (
            <p className={'m-0 p-0  text-[16px] font-[400] leading-[23.17px]'}>{description}</p>
          ) : (
            description
          )}
        </div>
      </Container.Card>
    );
  },
);

SolutionContentRowCard.displayName = 'SolutionContentRowCard';

export default SolutionContentRowCard;
