import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_13 from '@/public/images/new/solutions/article_1_13.png';
import Logo_Article_2_14 from '@/public/images/new/solutions/article_2_14.svg';
import Logo_Article_3_34 from '@/public/images/new/solutions/article_3_34.png';
import Logo_Article_3_35 from '@/public/images/new/solutions/article_3_35.png';
import Logo_Article_3_36 from '@/public/images/new/solutions/article_3_36.png';

const headerContent: SolutionHeaderProps = {
  title: '보안 인프라',
  description: (
    <p className='max-w-[400px]'>
      제로 트러스트 정책을 적용하여 효과적으로 사이버 공격 및 데이터 손실을 방지 솔루션을
      제공합니다.
    </p>
  ),

  textImage: <Logo_Article_2_14 />,
  bgImage: 'bg-[#FAFAFA]',
  image: <Image src={Logo_Article_1_13} />,
  textColor: 'text-[#444444]',
};

const SecurityInfrastructurePage = () => {
  return (
    <>
      <NextSeo
        title='보안 인프라'
        description='보안 인프라'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/solutions/security-infrastructure',
          images: [
            {
              url: '',
              alt: '보안 인프라',
            },
          ],
        }}
      />
      <SolutionTemplate {...headerContent}>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          description={
            <p className='max-w-[590px]'>
              기업의 중요 애플리케이션과 데이터를 ABLESTACK HCI가 제공하는 보안환경에서 안전하게
              관리하고 운영할 수 있습니다.
            </p>
          }>
          <section className='mt-12 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <SolutionContent.DescriptionCard
              containerClassName='bg-[#F6F7F9]'
              title='보안 관리 편의성 향상'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  Zero Trust 기반 보안 관리와 정책 중심의 보안관리로 보안 관리 편의성을 향상시키고
                  보안 정책 가시성을 높입니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='높은 보안 수준 유지'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-8 text-[16px] font-[400] leading-[23.17px]'}>
                  Zero Trust 기반의 네트워크 정책과 NS/EW 전반의 보안 관리로 높은 보안 수준을 유지할
                  수 있습니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='데이터 유출 사고 방지'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  내장되어 있는 스토리지/데이터 암호화로 데이터에 대한 유출을 근본적으로 방지할 수
                  있습니다.
                </p>
              }
            />
          </section>
        </SolutionContent>
        <SolutionContent
          className={'bg-[#EEF4FB] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_34} />}>
          <SolutionContent.Description
            title='ZeroTrust 기반의 보안 정책 관리'
            contents={[
              {
                title:
                  'ABLESTACK은 가상머신 간, 외부에서의 접근 등의 모든 경로에 대해 Zero Trust 기반으로 보안정책을 관리합니다.',
                descriptions: [
                  '외부에서 가상머신으로의 접근에 대한 Gateway 키핑',
                  '가상머신에서 외부로의 접근에 대해 명시적으로 허용해야 하는 정책 제공',
                  '가상머신 간 통신에 대한 명시적 정책 설정 지원',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          imagePosition='last'
          image={<Image src={Logo_Article_3_35} />}>
          <SolutionContent.Description
            title='가시성 높은 네트워크 보안 관리'
            contents={[
              {
                title:
                  'ABLESTACK은 Mold를 통해 방화벽 및 네트워크 보안 정책을 관리할 수 있도록 기능을 제공하여 보안 관리의 높은 가시성을 제공합니다.',
                descriptions: [
                  '모든 보안 정책을 웹 기반 환경으로 제공',
                  'Egress, Ingress 정책에 대한 즉시 적용으로 높은 효율성 제공',
                  'Security Group에 의한 보안 관리를 통해 애플리케이션 수준의 보안 정책적용 및 가시성 제공',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#F6F7F9;] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_36} />}>
          <SolutionContent.Description
            title='스토리지/데이터 암호화를 통한 정보보호'
            contents={[
              {
                title:
                  'ABLESTACK은 내장되어 있는 스토리지 및 데이터 암호화 기능을 통해 사고로 인한 데이터 유출 피해를 방지할 수 있습니다.',
                descriptions: [
                  'Glue 스토리지 레벨에서 데이터 암호화 지원',
                  '가상머신에 연결하는 볼륨 디스크 레벨에서의 데이터 암호화를 지원',
                  '데이터 암호화를 통한 개인정보, 민감한 기업 정보의 유출을 사전 방지',
                ],
              },
            ]}
          />
        </SolutionContent>
      </SolutionTemplate>
    </>
  );
};

export default SecurityInfrastructurePage;
