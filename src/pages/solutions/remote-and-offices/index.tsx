import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_20 from '@/public/images/new/solutions/article_1_20.png';
import Logo_Article_2_18 from '@/public/images/new/solutions/article_2_18.svg';
import Logo_Article_3_55 from '@/public/images/new/solutions/article_3_55.png';
import Logo_Article_3_56 from '@/public/images/new/solutions/article_3_56.png';
import Logo_Article_3_57 from '@/public/images/new/solutions/article_3_57.png';

const headerContent: SolutionHeaderProps = {
  title: '원격 및 지사 오피스',
  description: (
    <p className='max-w-[430px]'>
      단일 HCI 플랫폼에서 지사의 모든 로컬 앱과 가상 데스크톱 등을 안전하게 실행 하여 비용, 복잡성
      등을 모두 낮춥니다.
    </p>
  ),

  textImage: <Logo_Article_2_18 />,
  bgImage: 'bg-[#FAFAFA]',
  image: <Image src={Logo_Article_1_20} />,
  textColor: 'text-[#444444]',
};

const RemoteAndOfficesPage = () => {
  return (
    <>
      <NextSeo
        title='원격 및 지사 오피스'
        description='원격 및 지사 오피스'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/solutions/remote-and-offices',
          images: [
            {
              url: '',
              alt: '원격 및 지사 오피스',
            },
          ],
        }}
      />
      <SolutionTemplate {...headerContent}>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          description={
            <p className='max-w-[640px]'>
              ABLESTACK HCI는 내장된 DaaS 플랫폼인 Works와 Kubernetes Cluster 자동화 도구인 Koral을
              통해 어디서든 일할 수 있는 원격 오피스 및 지사별 워크로드를 처리하는 인프라를
              효과적으로 제공합니다.
            </p>
          }>
          <section className='mt-12 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <SolutionContent.DescriptionCard
              containerClassName='bg-[#F6F7F9]'
              title='업무 접근성 향상'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  직원들에게 원격 업무 환경을 데스크톱을 이용해 제공하여 어디서든지 일할 수 있도록
                  업무 접근성을 향상합니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='효과적인 워크로드 분산'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-8 text-[16px] font-[400] leading-[23.17px]'}>
                  지사 인프라 자원을 HCI를 통해 제공하고 통합관리하여 지사에서 발생하는 워크로드를
                  효과적으로 분산합니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='성능 향상'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  지사 업무를 위한 인프라를 지사 측에 적용하여 빠르게 접근할 수 있고 성능을 보장할
                  수 있습니다.
                </p>
              }
            />
          </section>
        </SolutionContent>
        <SolutionContent
          className={'bg-[#EEF4FB] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_55} />}>
          <SolutionContent.Description
            title='내장된 DaaS를 통한 원격/지사 업무 환경 제공'
            contents={[
              {
                title:
                  'ABLESTACK은 내장된 DaaS인 Works를 제공하여 언제든지 원격 업무 및 지사 업무 환경을 생성하여 최종 사용자에게 제공할 수 있습니다.',
                descriptions: [
                  '원클릭 데스크톱 환경을 제공하는 Works 내장',
                  '클라이언트리스 데스크톱으로 웹 브라우저만 있으면 어디서든 업무 가능',
                  '지사 업무 환경을 마스터 이미지를 이용해 본사와 동일한 업무 환경으로 제공',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          imagePosition='last'
          image={<Image src={Logo_Article_3_56} />}>
          <SolutionContent.Description
            title='지사 인프라의 분산을 통한 워크로드 분산'
            contents={[
              {
                title:
                  'ABLESTACK HCI는 컴팩트한 구성으로 본사의 중앙 데이터 센터가 아닌 지사에 직접 인프라를 배치하여 본사 워크로드를 분산할 수 있습니다.',
                descriptions: [
                  '소형 3노드 HCI 구성 지원',
                  '지사 인프라를 활용하여 본사 워크로드 분산 및 네트워크 분산 가능',
                  'Mold를 통해 본사에서 통합 관리하여 안정적 운영 환경 제공',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#F6F7F9;] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_57} />}>
          <SolutionContent.Description
            title='고성능 제공을 통한 원격/지사 업무 지원'
            contents={[
              {
                title:
                  'ABLESTACK은 고성능 스토리지 제공 및 분산 환경을 제공하여 어디서 업무를 하든 원활하게 업무를 수행할 수 있는 환경을 제공합니다.',
                descriptions: [
                  'Glue 스토리지의 고성능을 활용하여 원격 업무 및 지사 업무의 접속 및 업무 성능이 지연되지 않도록 기능 지원',
                  '지사용 소형 HCI의 경우에도 높은 성능을 보장하여 안정적인 업무 인프라 지원',
                ],
              },
            ]}
          />
        </SolutionContent>
      </SolutionTemplate>
    </>
  );
};

export default RemoteAndOfficesPage;
