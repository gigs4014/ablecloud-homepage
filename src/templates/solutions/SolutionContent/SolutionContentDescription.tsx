import { PropsWithChildren, memo } from 'react';

import { v4 as uuid } from 'uuid';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

interface SolutionDescription {
  title: string;
  descriptions: string[];
}
interface SolutionContentDescriptionProps extends BaseComponentProps {
  title: string;
  contents: SolutionDescription[];
}

const SolutionDescription = memo<PropsWithChildren<SolutionContentDescriptionProps>>(
  ({ title, contents, className }) => {
    return (
      <div className={cls`m-auto mx-4 ${className}`}>
        <p className='mb-[71px] text-[30px] font-[500] leading-9'>{title}</p>
        {contents.map(content => (
          <div key={uuid()}>
            <p className='mb-4 text-[16px] font-[400]'>{content.title}</p>
            <ul className={'ml-2 list-disc py-[20px]'}>
              {content.descriptions.map(description => (
                <li key={uuid()} className='ml-4 text-[16px] font-[400]'>
                  {description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  },
);

SolutionDescription.displayName = 'SolutionDescription';

export default SolutionDescription;
