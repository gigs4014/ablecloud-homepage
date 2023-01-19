import { memo } from 'react';

import Image from 'next/image';

import { BaseComponentProps } from '@/types';

import { ActionCard } from '@/components/common';

import Logo_Article_5_8 from '@/public/images/new/home/article_5_8.png';
import Logo_Article_5_9 from '@/public/images/new/home/article_5_9.png';
import Logo_Article_5_10 from '@/public/images/new/home/article_5_10.png';

const ProductsDemoContent = memo<BaseComponentProps>(({ className }) => {
  return (
    <div
      className={`mx-4 grid max-w-page-full grid-cols-1 gap-[40px] py-[43.5px] md:grid-cols-2 lg:grid-cols-3 ${className}`}>
      <ActionCard
        hoverBehavior={'scale'}
        title={'기술노트'}
        image={<Image src={Logo_Article_5_8} />}
        description={'에이블스택을 좀더 자세하게 설명한 기술개요'}
        buttonTitle={'지금 시작하기'}
        href={'/'}
      />
      <ActionCard
        hoverBehavior={'scale'}
        title={'데모 체험'}
        image={<Image src={Logo_Article_5_9} />}
        description={'에이블스택을 먼저 체험하고, 사용해보세요.'}
        buttonTitle={'기술 지원 및 데모 요청'}
        href={'/company/contact/inquire'}
      />
      <ActionCard
        hoverBehavior={'scale'}
        title={'전문가와 상담'}
        image={<Image src={Logo_Article_5_10} />}
        description={
          '에이블스택 전문가와 직접 상담해보세요. 여러분에게 최적화된 솔루션 구축을 약속드려요.'
        }
        buttonTitle={'문의하러 가기'}
        href={'/company/contact/inquire'}
      />
    </div>
  );
});

ProductsDemoContent.displayName = 'ProductsDemoContent';

export default ProductsDemoContent;
