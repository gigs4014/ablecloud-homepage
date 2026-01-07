'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { MdxMetaData } from '@/types/resource';

import ChevronLeft from '@/public/icons/common/chevron-left.svg';

import { Link } from '@/i18n/routing';
import { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
  Title: ({ className, children }) => (
    <div
      className={`text-[#111817] font-bold mt-8 mb-4 text-lg md:text-2xl md:mt-10 md:mb-5 ${className ?? ''}`}>
      {children}
    </div>
  ),
  IssueDate: ({ className, children }) => (
    <div className={`text-[#909090] text-sm md:text-base ${className ?? ''}`}>{children}</div>
  ),
  ImageWrapper: ({ className, children, text }) => (
    <figure className={`my-4 md:my-6 ${className ?? ''}`}>
      {children}
      {text && (
        <div className='flex justify-center text-[#374151] text-center text-xs md:text-sm'>
          {text}
        </div>
      )}
    </figure>
  ),
  p: ({ className, children }) => (
    <p className={`my-5 text-[#374151] text-[15px] md:text-[16px] ${className ?? ''}`}>
      {children}
    </p>
  ),
};

export interface BlogContentProps {
  post: {
    source: MDXRemoteSerializeResult;
    metaData: MdxMetaData;
  };
}

export function BlogContent({ post: { metaData, source } }: BlogContentProps) {
  return (
    <div className='max-w-[780px] w-full px-4'>
      <Link href={'/resource/blog'} className='flex items-center text-[14px]'>
        <ChevronLeft width={20} />
        <span className='ml-1'>목록보기</span>
      </Link>
      <div className='flex mt-6 text-[14px] gap-4'>
        <div>
          <span className='text-[#2bbbe6] mr-2'>작성자</span>
          에이블클라우드
        </div>
        <div>
          <span className='text-[#2bbbe6] mr-2'>날짜</span>
          {metaData.updatedAt}
        </div>
      </div>
      <div className='w-full h-[1px] bg-[#ccc] mt-4' />
      <MDXRemote {...source} components={components} />
    </div>
  );
}
