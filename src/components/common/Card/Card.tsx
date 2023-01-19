import Link from 'next/link';

import { ReactNode } from '@mdx-js/react/lib';

import { BaseComponentProps } from '@/types';

import { Button, CustomLink } from '@/components/common';
import { Container } from '@/components/layout';

interface CardProps extends BaseComponentProps {
  title: string;
  image?: ReactNode;
  containerClassName?: string;
  description?: ReactNode;
  linkText?: ReactNode;
  imageClassName?: string;
  hoverBehavior?: 'none' | 'scale';
}

interface ActionCardProps extends CardProps {
  buttonTitle: string;
  href: string;
}

interface NormalCard extends CardProps {
  href: string;
}

export function ActionCard({
  containerClassName,
  title,
  image,
  description,
  buttonTitle,
  href,
  hoverBehavior = 'none',
}: ActionCardProps) {
  return (
    <Container.Card
      hoverBehavior={hoverBehavior}
      className={`not-prose border-borderGrayColor m-auto w-full max-w-[400px] border-1 ${containerClassName}`}>
      {image && <div className='max-h-[218px] max-w-[400px]'>{image}</div>}

      <div className={'flex flex-col justify-center px-[30px] pb-[40px] pt-[32px] text-center'}>
        <p className={'m-0 mb-6 p-0 text-[20px] font-[500] leading-[28.96px]'}>{title}</p>

        {typeof description === 'string' ? (
          <p className='m-0 h-[69px] p-0 text-[16px] font-[400] leading-[23.17px]'>{description}</p>
        ) : (
          description
        )}

        {buttonTitle && (
          <CustomLink href={href}>
            <Button
              className={'mt-5 w-full max-w-[240px] border-[#3281C4] text-[#3281C4]'}
              bordered>
              {buttonTitle}
            </Button>
          </CustomLink>
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
  hoverBehavior: hoverBehavior = 'none',
}: CardProps) {
  return (
    <Container.Card
      className={`h-[436px] w-[95%] pt-[35px] pb-[58px] text-center shadow-none ${containerClassName}`}
      hoverBehavior={hoverBehavior}>
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
      className={`m-auto h-[130px] w-full min-w-[130px] max-w-[150px] flex-col items-center justify-center rounded-[10px] px-[8px] text-center text-white ${className}`}>
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
  hoverBehavior: hoverBehavior = 'none',
  containerClassName,
}: CardProps) {
  return (
    <Container.Card
      hoverBehavior={hoverBehavior}
      className={`flex h-full items-center justify-start border-0.5 border-gray-200 py-4 px-6 shadow-none ${containerClassName}`}>
      {image && (
        <div className='hidden min-h-[108px] min-w-[100px] items-center justify-center xsm:flex'>
          {image}
        </div>
      )}

      <div className='ml-[14px] '>
        <p className={'m-0 mb-[8px] p-0 text-[16px] font-[500] leading-[23.17px]'}>{title}</p>
        {description && (
          <p className={'m-0 p-0 text-[16px] font-[400]  leading-[23.17px]'}>{description}</p>
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
  imageClassName,
  hoverBehavior: hoverBehavior = 'none',
}: CardProps) {
  return (
    <Container.Card
      hoverBehavior={hoverBehavior}
      className={`flex w-full items-center justify-start border-0.5 shadow-none ${containerClassName}`}>
      {image && <div className={`flex items-center justify-center ${imageClassName}`}>{image}</div>}

      <div className={' px-1 text-[14px] font-[500] leading-[20.27px]'}>
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
  hoverBehavior: hoverBehavior = 'none',
}: CardProps) {
  return (
    <Container.Card
      className={`h-full px-8 pb-[37px] text-center shadow-none ${containerClassName}`}
      hoverBehavior={hoverBehavior}>
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

export function NormalCard({ title, image, description, href }: NormalCard) {
  return (
    <Link href={href}>
      <div
        className={
          'not-prose flex max-h-[320px] w-full items-center justify-center rounded-[10px] border-2 transition-all hover:translate-y-1 hover:scale-102 hover:shadow-ic xl:border-0'
        }>
        <div>
          <div className='flex h-[150px] w-full items-center justify-center'>{image}</div>
          <div className='m-auto max-w-[380px] pb-4 text-center'>
            <p className='my-2 text-[20px] font-medium'>{title}</p>
            <div className='px-6'>{description}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
