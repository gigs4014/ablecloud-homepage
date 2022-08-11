import Image from 'next/image';

import { InterViewContent, InterViewHeaderProps, InterViewTemplate } from '@/templates';

import Logo_Article_1_1 from '@/public/images/new/interview/article_1_1.png';

const headerContent: InterViewHeaderProps = {
  title: '성공 사례',
  description: (
    <div className={'text-[18px] font-[400] leading-[26.06px]'}>
      <p>
        에이블클라우드가 개발한 ABLESTACK의
        <br />
        강력한 기능을 다양하게 적용해보세요.
        <br />
        ABLESTACK는 어떠한 애플리케이션이든 사용환경이나 산업 환경과 상관없이
        <br />
        모두 처리할 수 있으며 최신의 이머징 워크로드도 원활하게 배포하여
        <br />
        운영할 수 있는 유연성과 확장성, 안정성을 제공합니다.
      </p>
    </div>
  ),
  bgImage: 'bg-backgroudGray',
  image: <Image src={Logo_Article_1_1} />,
  textColor: 'text-black',
};

export default function InterViewsPage() {
  return (
    <>
      <InterViewTemplate {...headerContent}>
        <InterViewContent title='ABLESTACK를 통해 혁신을 이룩한 고객사례'></InterViewContent>
      </InterViewTemplate>
    </>
  );
}
