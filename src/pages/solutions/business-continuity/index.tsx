import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_3 from '@/public/images/new/solutions/article_1_3.png';
import Logo_Article_2_2 from '@/public/images/new/solutions/article_2_2.svg';
import Logo_Article_3_6 from '@/public/images/new/solutions/article_3_6.png';
import Logo_Article_3_7 from '@/public/images/new/solutions/article_3_7.png';
import Logo_Article_3_8 from '@/public/images/new/solutions/article_3_8.png';

const headerContent: SolutionHeaderProps = {
  title: '비즈니스 연속성/재해복구',
  description: (
    <p className='max-w-[400px]'>
      전체 데이터 백업 및 다양한 복구 옵션을 통해 연속성을 보장함함으로써 저비용으로 SLA를
      충족하심시오.
    </p>
  ),

  textImage: <Logo_Article_2_2 />,
  bgImage: 'bg-[#FAFAFA]',
  image: <Image src={Logo_Article_1_3} />,
  textColor: 'text-[#444444]',
};

const BusinessContinuityPage = () => {
  return (
    <>
      <NextSeo
        title='비지니스 연속성/bcp'
        description='비지니스 연속성/bcp'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/solutions/business-continuity',
          images: [
            {
              url: '',
              alt: '비지니스 연속성/bcp',
            },
          ],
        }}
      />

      <SolutionTemplate {...headerContent}>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          description={
            <p className='max-w-[590px]'>
              내장되어 있는 다양한 장애 복구 기능을 통해 무중단 시스템을 구성하고 다양한 백업/복구
              옵션을 통해 신속한 재해복구 솔루션을 저비용으로 구성할 수 있습니다.
            </p>
          }>
          <section className='mt-12 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <SolutionContent.DescriptionCard
              containerClassName='bg-[#F6F7F9]'
              title='저비용 SLA 충족'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  비즈니스 연속성을 제공하는 모든 기능이 제품에 내장되어 있어 타제품에 비해
                  저비용으로 서비스의 안정성을 보증할 수 있습니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='무중단 인프라'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-8 text-[16px] font-[400] leading-[23.17px]'}>
                  내장된 고가용성 기능과 셀프 힐링 기능을 가진 스토리지, 그리고 이중화 기능을 통해
                  무중단 인프라를 구성합니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='신속한 재해복구'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  내장된 스냅샷 백업 및 실시간 가상머신 백업 등을 통해 재해가 발생하는 경우에도
                  신속하게 인프라를 복구할 수 있습니다.
                </p>
              }
            />
          </section>
        </SolutionContent>
        <SolutionContent
          className={'bg-[#EEF4FB] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_6} />}>
          <SolutionContent.Description
            title='내장된 비즈니스 연속성 보장 기능'
            contents={[
              {
                title:
                  'ABLESTACK은 사용자의 비즈니스 연속성을 보장하기 위해 제품에 다양한 연속성 보장기능을 내장하고 있습니다.',
                descriptions: [
                  '가상머신 및 HCI 호스트에 대한 고가용성 설정 기능',
                  'iSCSI, 공유스토리지 등의 가상머신 연결용 스토리지 제공',
                  '이중화를 통한 내장된 Fault Tolerance 기능을 통한 무중단 서비스 배포 기능',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          imagePosition='last'
          image={<Image src={Logo_Article_3_7} />}>
          <SolutionContent.Description
            title='셀프 힐링 스토리지 제공'
            contents={[
              {
                title:
                  'ABLESTACK Glue를 기반으로 하는 모든 스토리지 인프라는 HCI를 구성하는 노드의 장애 시에도 스스로 장애를 복구합니다.',
                descriptions: [
                  '일부 디스크 장애 자동 감지 및 자동 복구',
                  '일부 서버 장애 자동 감지 및 자동 복구',
                  'iSCSI Multipath 내장으로 노드 장애 시에도 스토리지 연결 유지',
                  'NFS Multichannel 내장으로 노드 장애 시에도 스토리지 연결 유지',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#F6F7F9;] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_8} />}>
          <SolutionContent.Description
            title='다양한 재해복구 옵션'
            contents={[
              {
                title:
                  'ABLESTACK은 재해복구를 위해  스냅샷 단위, 이미지 단위, 파일 단위 등 다양한 형태로 백업, 미러링, 복구를 지원하여 복구 시간을 단축합니다.',
                descriptions: [
                  '가상머신 볼륨 스냅샷 백업 및 볼륨 복구 기능 제공',
                  '외장 백업 장비와의 연동을 통해 가상머신의 이미지, 파일 단위 백업 및 라이브 리스토어 기능 제공',
                ],
              },
            ]}
          />
        </SolutionContent>
      </SolutionTemplate>
    </>
  );
};

export default BusinessContinuityPage;
