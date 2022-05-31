import { ReactNode } from 'react';

import { CustomLink, CustomLinkProps } from '../CustomLink';

interface BoxProps {
  title: string;
  image: ReactNode;
  description: string;
  linkProps: CustomLinkProps;
}

export function Box({ title, image, description, linkProps }: BoxProps) {
  return (
    <CustomLink
      hoverBehavoir='none'
      className='flex flex-1 flex-col justify-between space-y-4 rounded-md border-0.5 border-gray-200 bg-white p-4 shadow-md transition-all hover:-translate-y-1 hover:scale-102 hover:shadow-xl'>
      <div className='space-y-4'>
        <h3>{title}</h3>

        {/* image */}
        {/* {image} */}
        <div className='h-40 w-full bg-gray-400' />

        <p>{description}</p>
      </div>

      <div className='flex items-center justify-center space-x-4 text-sky-500'>
        {linkProps.children}

        {/* right arrow */}
        <p>go</p>
      </div>
    </CustomLink>
  );
}

export function RowBoxSmall({ title, image, description }: BoxProps) {
  return (
    <CustomLink
      hoverBehavoir='none'
      className='flex flex-1 items-center justify-between space-x-6 rounded-md border-0.5 border-gray-200 bg-white p-4 shadow-md transition-all hover:-translate-y-1 hover:scale-102 hover:shadow-xl'>
      {/* image */}
      {/* {image} */}
      <div className='h-32 w-32 flex-shrink-0 bg-gray-400' />

      <div className='space-y-2 self-start text-left'>
        <h4>{title}</h4>

        <p>{description}</p>
      </div>

      <div className='flex items-center justify-center space-x-4 text-sky-500'>
        {/* right arrow */}
        <p>go</p>
      </div>
    </CustomLink>
  );
}
