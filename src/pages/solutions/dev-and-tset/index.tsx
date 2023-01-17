import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_9 from '@/public/images/new/solutions/article_1_9.png';
import Logo_Article_2_10 from '@/public/images/new/solutions/article_2_10.svg';
import Logo_Article_3_23 from '@/public/images/new/solutions/article_3_23.png';
import Logo_Article_3_24 from '@/public/images/new/solutions/article_3_24.png';
import Logo_Article_3_25 from '@/public/images/new/solutions/article_3_25.png';
import Logo_Article_5_1 from '@/public/images/new/solutions/article_5_1.png';
import Logo_Article_5_2 from '@/public/images/new/solutions/article_5_2.png';
import Logo_Article_5_3 from '@/public/images/new/solutions/article_5_3.png';

const headerContent: SolutionHeaderProps = {
  title: '개발/테스트',
  description: (
    <p className='max-w-[400px]'>
      효율적이고 민첩한 개발 및 테스트 환경을 통해 생산성을 높이고 출시사이클 단축을 통해 수익을
      높일수 있습니다.
    </p>
  ),

  textImage: <Logo_Article_2_10 />,
  bgImage: 'bg-[#FAFAFA]',
  image: <Image src={Logo_Article_1_9} />,
  textColor: 'text-[#444444]',
};

const DevAndTsetPage = () => {
  return (
    <>
      <NextSeo
        title='개발/테스트'
        description='개발/테스트'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/solutions/dev-and-tset',
          images: [
            {
              url: '',
              alt: '개발/테스트',
            },
          ],
        }}
      />
      <SolutionTemplate {...headerContent}>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          description={
            <p className='max-w-[610px]'>
              개발환경 및 운영환경이 모두 동일한 환경을 제공하는 클라우드 인프라를 통해 개발부터
              테스트에 이르는 전 과정을 효율적이고 빠르게 관리하고 자동화할 수 있습니다.
            </p>
          }>
          <section className='mt-12 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <SolutionContent.DescriptionCard
              containerClassName='bg-[#F6F7F9]'
              image={<Image src={Logo_Article_5_1} />}
              title='출시 사이클 단축'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  인프라부터 개발환경 및 테스트 환경에 이르는 모든 자원을 원클릭으로 배포하고
                  활용하여 전반적인 출시 사이클을 단축합니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='낮은 인력의존도'
              containerClassName='bg-[#F6F7F9]'
              image={<Image src={Logo_Article_5_2} />}
              description={
                <p className={'m-0 px-8 text-[16px] font-[400] leading-[23.17px]'}>
                  자동화 플랫폼을 통해 모든 자원을 자동 배포하여 특정 인력 결손에 의한 개발 지연을
                  최소화 합니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='민첩성 제고'
              containerClassName='bg-[#F6F7F9]'
              image={<Image src={Logo_Article_5_3} />}
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  새로운 기술을 적용한 개발 환경을 언제든지 빠르게 배포하고 개발환경에 적용하여 기업
                  애플리케이션의 민첩성이 높아집니다.
                </p>
              }
            />
          </section>
        </SolutionContent>
        <SolutionContent
          className={'bg-[#EEF4FB] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_23} />}>
          <SolutionContent.Description
            title='개발에 필요한 모든 인프라 제공'
            contents={[
              {
                title:
                  'ABLESTACK HCI는 개발/테스트에 필요한 모든 인프라를 하나의 통합 인프라로 제공하기 때문에 빠르게 개발을 수행하고 제품을 출시할 수 있습니다.',
                descriptions: [
                  '가상머신을 통해 서버 기반의 개발을 지원',
                  'Kubernetes 클러스터를 통해 컨테이너 기반의 개발 환경 지원',
                  '다양한 네트워크 옵션으로 실제 운영환경과 동일한 네트워크 구성 지원',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          imagePosition='last'
          image={<Image src={Logo_Article_3_24} />}>
          <SolutionContent.Description
            title='자동화를 통한 개발환경 제공'
            contents={[
              {
                title:
                  'ABLESTACK은 개발에 필요한 모든 자원과 환경을 자동화 플랫폼을 통해 배포하기 때문에 특정 인력에 대한 의존성을 낮춥니다.',
                descriptions: [
                  '재사용 가능한 자동화 스크립트를 통해 필요 자원 배포',
                  '배포된 자원에 대한 통합적인 모니터링 가능',
                  '사용자별로 언제든 필요한 개발환경을 독립적으로 자동 배포 지원',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#F6F7F9;] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_25} />}>
          <SolutionContent.Description
            title='이머징 워크로드의 빠른 이식 가능'
            contents={[
              {
                title:
                  'ABLESTACK은 개발자가 원하는 때에 언제든 필요한 개발환경을 탑재한 인프라를 배포할 수 있어 기업 IT 혁신을 촉진합니다.',
                descriptions: [
                  '셀프서비스를 통해 개발자가 원할 때 언제든지 새로운 환경을개발환경에 도입하고 테스트 할 수 있음',
                  '빅데이터, 인공지능, IoT 등의 다양한 개발 환경 및 향후 새롭게 주목받을 기술에 대한 테스트 환경을 언제든 생성할 수 있음',
                ],
              },
            ]}
          />
        </SolutionContent>
      </SolutionTemplate>
    </>
  );
};

export default DevAndTsetPage;
