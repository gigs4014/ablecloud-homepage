import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_10 from '@/public/images/new/solutions/article_1_10.png';
import Logo_Article_2_11 from '@/public/images/new/solutions/article_2_11.svg';
import Logo_Article_3_26 from '@/public/images/new/solutions/article_3_26.png';
import Logo_Article_3_27 from '@/public/images/new/solutions/article_3_27.png';
import Logo_Article_3_28 from '@/public/images/new/solutions/article_3_28.png';
import Logo_Article_5_1 from '@/public/images/new/solutions/article_5_1.png';
import Logo_Article_5_2 from '@/public/images/new/solutions/article_5_2.png';
import Logo_Article_5_3 from '@/public/images/new/solutions/article_5_3.png';

const headerContent: SolutionHeaderProps = {
  title: '데브옵스/IT운영',
  description: (
    <p className='max-w-[400px]'>
      IT 자동화 및 DevOps를 위한 모범사례를 통해 기업 클라우드의 비용을 절감하고 IT서비스를
      가속화합니다.
    </p>
  ),

  textImage: <Logo_Article_2_11 />,
  bgImage: 'bg-[#FAFAFA]',
  image: <Image src={Logo_Article_1_10} />,
  textColor: 'text-[#444444]',
};
const DevopsAndOperationsPage = () => {
  return (
    <>
      <NextSeo
        title='데브옵스/ DevOps'
        description='데브옵스/ DevOps'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/solutions/devops-and-operations',
          images: [
            {
              url: '',
              alt: '데브옵스/ DevOps',
            },
          ],
        }}
      />
      <SolutionTemplate {...headerContent}>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          description={
            <p className='max-w-[590px]'>
              기업의 IT 생산성을 높여줄 Full Type Developer를 향한 여정에 ABLESTACK HCI의 셀프서비스
              매니징, 자동화, 모니터링 등이 동반자가 될 것입니다.
            </p>
          }>
          <section className='mt-12 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <SolutionContent.DescriptionCard
              containerClassName='bg-[#F6F7F9]'
              title='개발 및 운영 투명성 제고'
              image={<Image src={Logo_Article_5_1} />}
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  셀프서비스 클라우드 환경은 개발과 운영의 경계를 허물어 개발자/운영자가 투명하게
                  인프라를 운영하는데 도움을 줍니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='운영비용 절감'
              containerClassName='bg-[#F6F7F9]'
              image={<Image src={Logo_Article_5_2} />}
              description={
                <p className={'m-0 px-8 text-[16px] font-[400] leading-[23.17px]'}>
                  Full Type Developer를 통한 개발에서 배포/운영에 이르는 모든 과정을 관리하고 통제할
                  수 있어 운영비용이 절감됩니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='전공정 자동화'
              containerClassName='bg-[#F6F7F9]'
              image={<Image src={Logo_Article_5_3} />}
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  개발에서 테스트, 배포, 그리고 운영과 피드백에 이르는 모든 생명주기를 자동화할 수
                  있습니다.
                </p>
              }
            />
          </section>
        </SolutionContent>
        <SolutionContent
          className={'bg-[#EEF4FB] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_26} />}>
          <SolutionContent.Description
            title='개발과 운영을 동일 인프라에서 제공'
            contents={[
              {
                title:
                  'ABLESTACK HCI는 Zone 단위의 통합 인프라 관리 및 모니터링을 제공하여 개발과 운영 인프라를 통합하여 제공함으로써 개발/운영 사이의 간극을 최소화 합니다. ',
                descriptions: [
                  'Mold 하나로 Zone 전체의 인프라를 관리',
                  '클러스터 단위로 운영 인프라 및 개발 인프라를 분리하여 관리',
                  '개발 인프라를 그대로 운영 인프라로 이식할 수 있는 기능 제공',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          imagePosition='last'
          image={<Image src={Logo_Article_3_27} />}>
          <SolutionContent.Description
            title='Full Type 개발자를 위한 인프라'
            contents={[
              {
                title:
                  'ABLESTACK은 셀프서비스 클라우드 환경을 제공하고 다양한 인프라를 사용할 수 있도록 함으로써 한 개발자가 전공정을 통제하는데 유용한 환경을 제공합니다. ',
                descriptions: [
                  '셀프서비스 및 자동화를 지원하는 클라우드 플랫폼',
                  '가상머신 및 컨테이너 개발, 운영 환경 제공',
                  '모든 자원을 하나의 윈도우에서 통제할 수 있는 인프라 기능',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#F6F7F9;] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_28} />}>
          <SolutionContent.Description
            title='자동화 플랫폼을 통한 라이프사이클 자동화'
            contents={[
              {
                title:
                  'ABLESTACK은 내장된 자동화 플랫폼을 통해 개발에서 운영에 이르는 애플리케이션 생명주기를 관리할 수 있도록 합니다.',
                descriptions: [
                  'Genie를 이용해 워크플로우 기반으로 사용자의 개발, 테스트, 배포, 운영환경을 지원',
                  'Station을 이용해 애플리케이션 생명주기 관리에 필요한 모든 자원을 어플라이언스 형태로 제공',
                ],
              },
            ]}
          />
        </SolutionContent>
      </SolutionTemplate>
    </>
  );
};

export default DevopsAndOperationsPage;
