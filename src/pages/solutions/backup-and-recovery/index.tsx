import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_18 from '@/public/images/new/solutions/article_1_18.png';
import Logo_Article_2_17 from '@/public/images/new/solutions/article_2_17.svg';
import Logo_Article_3_49 from '@/public/images/new/solutions/article_3_49.png';
import Logo_Article_3_50 from '@/public/images/new/solutions/article_3_50.png';
import Logo_Article_3_51 from '@/public/images/new/solutions/article_3_51.png';

const headerContent: SolutionHeaderProps = {
  title: '백업 및 복구',
  description: (
    <p className='max-w-[400px]'>
      가상환경 뿐 아니라 레거시 환경에 대한 통합 백업 및 복구를 지원합니다.
    </p>
  ),

  textImage: <Logo_Article_2_17 />,
  bgImage: 'bg-[#FAFAFA]',
  image: <Image src={Logo_Article_1_18} />,
  textColor: 'text-[#444444]',
};

const ElectronicDocumentPage = () => {
  return (
    <>
      <NextSeo
        title='백업 및 복구'
        description='백업 및 복구'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/solutions/backup-and-recovery',
          images: [
            {
              url: '',
              alt: '백업 및 복구',
            },
          ],
        }}
      />
      <SolutionTemplate {...headerContent}>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          description={
            <p className='max-w-[590px]'>
              ABLESTACK HCI에 내장되어 있는 백업 및 복구 기능과 외장 백업 장치와의 연계를 통해
              어떤한 상애 상황에서도 빠르게 서비스를 복구할 수 있습니다.
            </p>
          }>
          <section className='mt-12 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <SolutionContent.DescriptionCard
              containerClassName='bg-[#F6F7F9]'
              title='저비용 백업/복구'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  내장되어 있는 백업/복구 및 외부 연계 통합 백업으로 저비용으로 재해 복구 인프라를
                  구성할 수 있습니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='장애 복구 시간 단축'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-8 text-[16px] font-[400] leading-[23.17px]'}>
                  외부 백업 및 스냅샷, 시스템, 파일 단위로 복구를 지원하여 장애 복구 시간을
                  단축합니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='백업/복구 가시성 제고'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  통합 관리시스템을 통해 백업 상황을 확인할 수 있고 바로 복구가 가능하여 높은
                  가시성을 제공합니다.
                </p>
              }
            />
          </section>
        </SolutionContent>
        <SolutionContent
          className={'bg-[#EEF4FB] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_49} />}>
          <SolutionContent.Description
            title='내장되어 있는 백업/복구 기능'
            contents={[
              {
                title:
                  'ABLESTACK HCI는 자체적으로 내장되어 있는 백업/복구 기능을 제공할 뿐 아니라 상용 외장 백업 장비와의 연동을 통해 효과적으로 백업/복구 체계를 구성할 수 있습니다.',
                descriptions: [
                  '내장되어 있는 가상머신 스냅샷 백업 및 볼륨 단위 복구 기능 제공',
                  '상용 외장 백업 장비와의 연동으로 가상머신 이미지 및 파일 단위 복구 기능 제공',
                  'Veeam, DellEMC Networker, Synology Active Backup 등의 외장 백업 지원',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          imagePosition='last'
          image={<Image src={Logo_Article_3_50} />}>
          <SolutionContent.Description
            title='다양한 형태의 복구 기능 지원'
            contents={[
              {
                title:
                  'ABLESTACK 백업/복구는 스냅샷 단위, 이미지 단위, 파일 단위 등 다양한 형태로 복구를 지원하여 복구 시간을 단축합니다.',
                descriptions: [
                  '가상머신 볼륨 스냅샷 백업 및 볼륨 복구 기능 제공',
                  '외장 백업 장비와의 연동을 통해 가상머신의 이미지, 파일 단위 백업 및라이브 리스토어 기능 제공',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#F6F7F9;] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_51} />}>
          <SolutionContent.Description
            title='가시성 높은 백업/복구 모니터링'
            contents={[
              {
                title:
                  'ABLESTACK은 내장된 백업/복구 기능 뿐 아니라 상용 외부 백업 저장장치와의 연동을 통해 관리 플랫폼에서 백업/복구 상태를 모니터링 합니다.',
                descriptions: [
                  'Mold를 통한 스냅샷 백업 상태 조회 및 정기 스냅샷 백업 실행',
                  '상용 외부 백업 저장 장치와의 API 연계를 통해 Mold UI를 통해 백업의 상태 및복원 상태를 바로 확인할 수 있는 기능 제공',
                ],
              },
            ]}
          />
        </SolutionContent>
      </SolutionTemplate>
    </>
  );
};

export default ElectronicDocumentPage;
