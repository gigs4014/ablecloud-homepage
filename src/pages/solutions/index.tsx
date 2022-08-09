import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_1 from '@/public/images/new/solutions/article_1_1.svg';
import Logo_Article_2_1 from '@/public/images/new/solutions/article_2_1.svg';
import Logo_Article_2_2 from '@/public/images/new/solutions/article_2_2.svg';
import Logo_Article_2_3 from '@/public/images/new/solutions/article_2_3.svg';
import Logo_Article_2_4 from '@/public/images/new/solutions/article_2_4.svg';
import Logo_Article_2_5 from '@/public/images/new/solutions/article_2_5.svg';
import Logo_Article_2_6 from '@/public/images/new/solutions/article_2_6.svg';

const headerContent: SolutionHeaderProps = {
  title: '솔루션',
  description: (
    <div className={'text-[18px] font-[400] leading-[26.06px]'}>
      <p>
        에이블클라우드가 개발한 ABLESTACK의
        <br />
        강력한 기능을 다양하게 적용해보세요.
        <br />
        ABLESTACK는 어떠한 애플리케이션이든 사용환경이나
        <br />
        산업 환경과 상관없이 모두 처리할 수 있으며 최신의 이머징 워크로드도
        <br />
        원활하게 배포하여 운영할 수 있는 유연성과 확장성, 안정성을 제공합니다.
      </p>
    </div>
  ),
  bgImage: 'bg-backgroudGray',
  image: <Logo_Article_1_1 />,
  textColor: 'text-black',
};

export default function SolutionPage() {
  return (
    <>
      <SolutionTemplate {...headerContent}>
        <SolutionContent title='ABLESTACK이 제공하는 인프라'>
          <section className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <SolutionContent.RowCard
              title={'프라이빗 클라우드'}
              image={<Logo_Article_2_1 />}
              description={`퍼블릭 클라우드의 이점을 누리면서,
사설 인프라 수준의 자체적인
제어 환경을 제공합니다.`}
            />
            <SolutionContent.RowCard
              title={'빅데이터 분석'}
              image={<Logo_Article_2_2 />}
              description={`ABLESTACK은 빅 데이터를 위한
              고성능 환경을 제공하고, 단순화된 관리
              환경을 제공합니다.`}
            />
            <SolutionContent.RowCard
              title={'감시 시스템'}
              image={<Logo_Article_2_3 />}
              description={`ABLESTACK은 영상감시/분석 플랫폼을
              위한 단순하고, 효율적이며, 언제든 확장
              할 수 있는 인프라 환경을 제공합니다. `}
            />
            <SolutionContent.RowCard
              title={'인공지능'}
              image={<Logo_Article_2_4 />}
              description={`퍼블릭 클라우드의 이점을 누리면서,
              사설 인프라 수준의 자체적인
              제어 환경을 제공합니다. `}
            />
            <SolutionContent.RowCard
              title={'최종사용자 컴퓨팅'}
              image={<Logo_Article_2_5 />}
              description={`언제 어디서나, 어떠한 장치에서든
              액세스할 수 이는 가상 데스크톱을
              사용할 수 있습니다.`}
            />
            <SolutionContent.RowCard
              title={'엣지 컴퓨팅'}
              image={<Logo_Article_2_6 />}
              description={`기업의 각 지점, IoT의 엣지 환경의 모든
              서비스를 안전하게 실행하고, 인프라를
              통합하여 관리합니다.`}
            />
          </section>
        </SolutionContent>
      </SolutionTemplate>
    </>
  );
}
