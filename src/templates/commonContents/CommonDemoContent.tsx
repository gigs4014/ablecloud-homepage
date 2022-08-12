import { memo } from 'react';

import Image from 'next/image';

import { BaseComponentProps } from '@/types';

import { ActionCard } from '@/components/common';

import Logo_Article_5_1 from '@/public/images/new/home/article_5_1.png';
import Logo_Article_5_2 from '@/public/images/new/home/article_5_2.png';
import Logo_Article_5_3 from '@/public/images/new/home/article_5_3.png';

const CommonDemoContent = memo<BaseComponentProps>(({ className }) => {
  return (
    <div
      className={`grid w-full grid-cols-1 gap-[40px] md:grid-cols-2 lg:grid-cols-3 ${className}`}>
      <ActionCard
        title={'Case Study'}
        image={<Image src={Logo_Article_5_1} objectFit={'cover'} height={218} />}
        description={'에이블스택을 최대로 활용하는 파트너사들의 케이스를 확인해보세요.'}
        buttonTitle={'지금 시작하기'}
        href={''}
      />
      <ActionCard
        title={'데모 체험'}
        image={<Image src={Logo_Article_5_2} objectFit={'cover'} height={218} />}
        description={'에이블스택을 먼저 체험하고, 사용해보세요.'}
        buttonTitle={'기술 지원 및 데모 요청'}
        href={''}
      />
      <ActionCard
        title={'전문가와 상담'}
        image={<Image src={Logo_Article_5_3} objectFit={'cover'} height={218} />}
        description={
          '에이블스택 전문가와 직접 상담해보세요. 여러분에게 최적화된 솔루션 구축을 약속드려요.'
        }
        buttonTitle={'문의하러 가기'}
        href={''}
      />
    </div>
  );
});

CommonDemoContent.displayName = 'CommonDemoContent';

export default CommonDemoContent;
