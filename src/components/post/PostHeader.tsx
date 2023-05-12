import { DetailedHTMLProps, HTMLAttributes, useMemo } from 'react';

import dayjs from 'dayjs';

import { cls } from '@/utils';

import { usePostContext } from './PostContext';

function PostHeader({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
  const { date } = usePostContext();

  const convertDate = useMemo(() => {
    return dayjs(date).format('YYYY-MM-DD');
  }, [date]);

  return (
    <header {...props} className={cls`flex items-center ${className}`}>
      {/* <h3>{slug}</h3> */}
      <div className='flex text-[14px]'>
        <div className='mr-4 '>
          <span className='mr-1 text-[#2bbbe6]'>작성자</span> 에이블클라우드
        </div>
        <div>
          <span className='mr-1 text-[#2bbbe6]'>날짜</span>
          {convertDate}
        </div>
      </div>

      {/* share */}
    </header>
  );
}

export default PostHeader;
