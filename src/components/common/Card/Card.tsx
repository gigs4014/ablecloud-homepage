import { ReactNode } from '@mdx-js/react/lib';

import { BaseComponentProps } from '@/types';

import { Button } from '@/components/common';
import { Container } from '@/components/layout';

interface CardProps extends BaseComponentProps {
  title: string;
  image?: ReactNode;
  containerClassName?: string;
  description?: ReactNode;
  linkText?: ReactNode;
  hoverBehavoir?: 'none' | 'scale';
}

interface ActionCardProps extends CardProps {
  buttonTitle: string;
  href: string;
}

export function ActionCard({
  containerClassName,
  title,
  image,
  description,
  buttonTitle,
  href,
  hoverBehavoir = 'none',
}: ActionCardProps) {
  return (
    <Container.Card
      hoverBehavoir={hoverBehavoir}
      className={`border-borderGrayColor border-1 text-center ${containerClassName}`}>
      {image && <div className='min-h-[218px] w-full'>{image}</div>}

      <div className={'px-[60px] pb-10 pt-8'}>
        <div className={'mb-6 text-xl'}>{title}</div>

        {description && <div className='mb-[40px] text-base'>{description}</div>}

        {buttonTitle && (
          <Button bordered onClick={() => {}}>
            {buttonTitle}
          </Button>
        )}
      </div>
    </Container.Card>
  );
}

export function DescriptionCard({
  containerClassName,
  title,
  image,
  description,
  linkText,
  hoverBehavoir = 'none',
}: CardProps) {
  return (
    <Container.Card
      className={`h-full pt-[35px] pb-[58px] text-center shadow-none ${containerClassName}`}
      hoverBehavoir={hoverBehavoir}>
      {image && <div className='flex items-center justify-center'>{image}</div>}

      <div className={'pt-[66px]'}>
        <div className={'mb-[26px] text-[20px] font-[500] leading-[28.96px]'}>{title}</div>

        {description && description}

        {linkText && (
          <div className='flex items-center justify-center space-x-4 text-primary after:ml-2 after:icon-[east]'>
            {linkText}
          </div>
        )}
      </div>
    </Container.Card>
  );
}

export function SmallCard({
  className,
  title,
  value,
}: {
  className: string;
  title: string;
  value: string;
}) {
  return (
    <div
      className={`h-[130px] min-w-[130px] flex-col items-center justify-center rounded-[10px] bg-primary px-[8px] text-center text-white ${className}`}>
      <p className={'m-0 mt-[20px] text-[30px] font-[700]'}>{value}</p>
      <p className={'m-0 whitespace-nowrap text-[16px] font-[400]'}>{title}</p>
    </div>
  );
}

export function RowSummaryCard({
  title,
  image,
  description,
  linkText,
  hoverBehavoir = 'none',
}: CardProps) {
  return (
    <Container.Card
      hoverBehavoir={hoverBehavoir}
      className='flex h-[144px] max-w-[580px] flex-1 items-center justify-between border-0.5 border-gray-200 py-[20px]'>
      {image && (
        <div className='mx-[36px]  flex min-h-[108px] min-w-[100px] items-center justify-center'>
          {image}
        </div>
      )}

      <div className='ml-[14px]'>
        <p className={'m-0 mb-[8px] p-0 text-[16px] font-[500] leading-[23.17px]'}>{title}</p>
        {description && (
          <p className={'m-0 p-0 text-[16px] font-[400] leading-[23.17px]'}>{description}</p>
        )}
      </div>

      {linkText && <div className='flex items-center justify-center space-x-4'>{linkText}</div>}
    </Container.Card>
  );
}

export function RowSmallCard({
  title,
  image,
  description,
  containerClassName,
  hoverBehavoir = 'none',
}: CardProps) {
  return (
    <Container.Card
      hoverBehavoir={hoverBehavoir}
      className={`flex items-center justify-start border-0.5  shadow-none ${containerClassName}`}>
      {image && <div className='flex items-center justify-center'>{image}</div>}

      <div className={'text-[14px] font-[500] leading-[20.27px]'}>
        <div>{title}</div>
        {description && <div>{description}</div>}
      </div>
    </Container.Card>
  );
}

export function ItemCard({
  containerClassName,
  title,
  image,
  description,
  hoverBehavoir = 'none',
}: CardProps) {
  return (
    <Container.Card
      className={`h-full pb-[37px] text-center shadow-none ${containerClassName}`}
      hoverBehavoir={hoverBehavoir}>
      {image && <div className='flex items-center justify-center'>{image}</div>}

      <div>
        <div className={'mb-[14px] py-[13px] text-[16px] font-[700] leading-[23.17px]'}>
          {title}
        </div>

        {description && description}
      </div>
    </Container.Card>
  );
}
