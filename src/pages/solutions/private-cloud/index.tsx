import Image from 'next/image';

import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_6 from '@/public/images/new/solutions/article_1_6.png';
import Logo_Article_2_1 from '@/public/images/new/solutions/article_2_1.svg';
import Logo_Article_3_2 from '@/public/images/new/solutions/article_3_2.png';

const headerContent: SolutionHeaderProps = {
  title: '프라이빗 클라우드',
  description: (
    <p className='max-w-[430px]'>
      필요에 따라 언제든지 확장할 수 있고 모든 앱을 실행할 수 있는 HCI 기반 클라우드로 비즈니스를
      강화할 수 있습니다.
    </p>
  ),

  textImage: <Logo_Article_2_1 />,
  bgImage: 'bg-[#FAFAFA]',
  image: <Image src={Logo_Article_1_6} />,
  textColor: 'text-[#444444]',
};

const PrivateCloudPage = () => {
  return (
    <SolutionTemplate {...headerContent}>
      <SolutionContent
        className={'bg-[#FFFFFF] text-[#444444]'}
        description={
          <p className='max-w-[590px]'>
            HCI Node의 로컬 디스크를 직접 활용한 전용 데이터노드 구성 아키텍처와 자동화 지원을 통한
            신속한 구성, 가상화를 통한 높은 유연성을 가진 빅데이터 인프라
          </p>
        }>
        <section className='mt-12 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          <SolutionContent.DescriptionCard
            containerClassName='bg-[#F6F7F9]'
            title='Hadoop 전용 구성'
            description={
              <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                HDFS를 위한 전용 디스크를 선택하여 데이터 노드를 구성함으로써 기존 HCI가 가지는
                빅데이터 환경의 저장용량 이슈를 해결했습니다.
              </p>
            }
          />

          <SolutionContent.DescriptionCard
            title='신속한 구성'
            containerClassName='bg-[#F6F7F9]'
            description={
              <p className={'m-0 px-8 text-[16px] font-[400] leading-[23.17px]'}>
                사용자가 원하는 빅데이터 플랫폼을 자동화 도구를 이용해 원하는 절차와 설정으로
                원클릭으로 빠르게 구성 할 수 있습니다.
              </p>
            }
          />

          <SolutionContent.DescriptionCard
            title='파트너 생태계 구성'
            containerClassName='bg-[#F6F7F9]'
            description={
              <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                가상머신 뿐 아니라 Kubernetes 환경을 제공하여 다양한 빅데이터 애플리케이션을
                개발하고 배포할 수 있는 유연성을 제공합니다.
              </p>
            }
          />
        </section>
      </SolutionContent>
      <SolutionContent
        className={'bg-[#EEF4FB] text-[#444444]'}
        // title='기존의 SAN 또는 NAS를 뛰어넘는 고도로 자동화된 하이퍼 컨버지드 스토리지'
        imagePosition='first'
        image={<Image src={Logo_Article_3_2} />}>
        <SolutionContent.Description
          title='다양한 HDFS 옵션 제공'
          contents={[
            {
              title:
                'ABLESTACK은 HCI를 이용해 유연하게 Hadoop 데이터 저장환경을 제공하기 위해 다양한 HDFS 구성 옵션을 제공합니다.',
              descriptions: [
                '노드의 로컬 디스크를 직접 HDFS용 디스크로 사용 가능',
                'Hadoop Cluster가 HDFS 대신, 전용 어댑터를 통해 Glue Object Storage를 데이터 저장소로 사용할 수 있음',
              ],
            },
          ]}
        />
      </SolutionContent>
      <SolutionContent
        className={'bg-[#FFFFFF] text-[#444444]'}
        // title='기존의 SAN 또는 NAS를 뛰어넘는 고도로 자동화된 하이퍼 컨버지드 스토리지'
        imagePosition='last'
        image={<Image src={Logo_Article_3_2} />}>
        <SolutionContent.Description
          title='다양한 HDFS 옵션 제공'
          contents={[
            {
              title:
                'ABLESTACK은 HCI를 이용해 유연하게 Hadoop 데이터 저장환경을 제공하기 위해 다양한 HDFS 구성 옵션을 제공합니다.',
              descriptions: [
                '노드의 로컬 디스크를 직접 HDFS용 디스크로 사용 가능',
                'Hadoop Cluster가 HDFS 대신, 전용 어댑터를 통해 Glue Object Storage를 데이터 저장소로 사용할 수 있음',
              ],
            },
          ]}
        />
      </SolutionContent>
      <SolutionContent
        className={'bg-[#F6F7F9;] text-[#444444]'}
        // title='기존의 SAN 또는 NAS를 뛰어넘는 고도로 자동화된 하이퍼 컨버지드 스토리지'
        imagePosition='first'
        image={<Image src={Logo_Article_3_2} />}>
        <SolutionContent.Description
          title='다양한 HDFS 옵션 제공'
          contents={[
            {
              title:
                'ABLESTACK은 HCI를 이용해 유연하게 Hadoop 데이터 저장환경을 제공하기 위해 다양한 HDFS 구성 옵션을 제공합니다.',
              descriptions: [
                '노드의 로컬 디스크를 직접 HDFS용 디스크로 사용 가능',
                'Hadoop Cluster가 HDFS 대신, 전용 어댑터를 통해 Glue Object Storage를 데이터 저장소로 사용할 수 있음',
              ],
            },
          ]}
        />
      </SolutionContent>
    </SolutionTemplate>
  );
};

export default PrivateCloudPage;
