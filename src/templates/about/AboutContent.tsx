import { PropsWithChildren } from 'react';

import { cls } from '@/utils';

import { Button, CustomLink } from '@/components/common';

interface AboutContentProps {
  title: string;
  titleDescription: string;
  subDescription: string;
  buttonText: string;
  href: string;
}

const AboutContent = ({
  children,
  buttonText,
  subDescription,
  title,
  titleDescription,
  href,
}: PropsWithChildren<AboutContentProps>) => {
  return (
    <div className={cls`m-auto max-w-page-full px-6 py-[50px] text-center text-white`}>
      <div className='mb-6 text-[30px] font-bold'>{title}</div>
      <div className='m-auto mb-[50px] max-w-[780px]'>{titleDescription}</div>
      {children}
      <div className='mt-6 mb-[60px]'>{subDescription}</div>
      <CustomLink href={href}>
        <Button className={'w-full max-w-[220px] !border-[white] !text-[white]'} bordered>
          {buttonText}
        </Button>
      </CustomLink>
    </div>
  );
};

export default AboutContent;
