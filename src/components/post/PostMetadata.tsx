import { useMemo } from 'react';

import moment from 'moment';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

import { CustomLink } from '../common';
import { usePostContext } from './PostContext';

export interface PostMetadataProps extends BaseComponentProps {
  linkBy?: 'anchor' | 'event';
}

function PostMetadata({ className, linkBy }: PostMetadataProps) {
  const { categories, date } = usePostContext();

  const time = useMemo(() => moment(date), [date]);

  return (
    <div
      className={cls`not-prose flex divide-x-0.5 divide-slate-300 text-sm leading-[0.875rem] ${className}`}>
      {/* category */}
      <CustomLink
        href={`/${['blog', ...categories].join('/')}`}
        hoverBehavoir='underline'
        linkBy={linkBy}
        className='pr-2 text-sky-500 first-letter:uppercase'>
        {categories.at(-1)}
      </CustomLink>

      {/* created at */}
      <time dateTime={time.toISOString()} className='pl-2'>
        {time.format('yyyy.MM.DD')}
      </time>
    </div>
  );
}

export default PostMetadata;
