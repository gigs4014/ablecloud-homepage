import { ReactNode } from '@mdx-js/react/lib';

import { BaseComponentProps } from '@/types';

import { Button } from '@/components/common';
import { Container } from '@/components/layout';

interface CardProps extends BaseComponentProps {
  title: string;
  image: ReactNode;
  containerClassName?: string;
  description?: ReactNode;
}

interface ActionCardProps extends CardProps {
  buttonTitle: string;
  href: string;
}

interface InfoCardProps extends CardProps {
  linkNode: ReactNode;
}

interface RowCardProps extends CardProps {
  linkText: string;
}

export function ActionCard({
  containerClassName,
  title,
  image,
  description,
  buttonTitle,
  href,
}: ActionCardProps) {
  return (
    <Container.Card
      className={`border-borderGrayColor h-full border-1 text-center ${containerClassName}`}>
      {image}

      <div className={'px-[60px] pb-10 pt-8'}>
        <div className={'mb-6 text-xl'}>{title}</div>

        <div className='mb-[40px] text-base'>{description}</div>
        <Button bordered onClick={() => {}}>
          {buttonTitle}
        </Button>
      </div>
    </Container.Card>
  );
}

export function BaseCard({ containerClassName, title, image, description }: CardProps) {
  return (
    <Container.Card
      className={`h-full pt-[35px] pb-[58px] text-center shadow-none ${containerClassName}`}>
      <div className='flex items-center justify-center'>{image}</div>

      <div className={'pt-[66px]'}>
        <div className={'mb-[26px] text-[20px] font-[500] leading-[28.96px]'}>{title}</div>

        {description}
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

export function InfoCard({ title, image, linkNode }: InfoCardProps) {
  return (
    <Container.Card className='border-borderGrayColor h-full space-y-4 border-1 p-4 text-center'>
      <h3>{title}</h3>

      {/* image */}
      {/* <div className='h-40 w-full bg-gray-400' /> */}
      <div className='flex items-center justify-center'>{image}</div>

      <div className='flex items-center justify-center space-x-4 text-primary after:ml-2 after:icon-[east]'>
        {linkNode}
      </div>
    </Container.Card>
  );
}

export function RowCard({ title, image, description, linkText }: RowCardProps) {
  return (
    <Container.Card className='flex flex-1 items-center justify-between space-x-6 border-0.5 border-gray-200 p-4'>
      {/* image */}
      <div className='flex items-center justify-center'>{image}</div>

      <div className='space-y-2 self-start text-left'>
        <h4 className='font-medium'>{title}</h4>

        <p>{description}</p>
      </div>

      <div className='flex items-center justify-center space-x-4'>{linkText}</div>
    </Container.Card>
  );
}
