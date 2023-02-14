import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_8 from '@/public/images/new/solutions/article_1_8.png';
import Logo_Article_2_9 from '@/public/images/new/solutions/article_2_9.svg';
import Logo_Article_3_20 from '@/public/images/new/solutions/article_3_20.png';
import Logo_Article_3_21 from '@/public/images/new/solutions/article_3_21.png';
import Logo_Article_3_22 from '@/public/images/new/solutions/article_3_22.png';
import Logo_Article_5_1 from '@/public/images/new/solutions/article_5_1.png';
import Logo_Article_5_2 from '@/public/images/new/solutions/article_5_2.png';
import Logo_Article_5_3 from '@/public/images/new/solutions/article_5_3.png';

const headerContent: SolutionHeaderProps = {
  title: '데이터베이스',
  description: (
    <p className='max-w-[400px]'>
      다양한 상용 데이터베이스 배포를 위한 ABLESTACK 솔루션을 통해 안정적인 운영 및 통찰력을
      확보하십시오.
    </p>
  ),

  textImage: <Logo_Article_2_9 />,
  bgImage: 'bg-[#FAFAFA]',
  image: <Image src={Logo_Article_1_8} />,
  textColor: 'text-[#444444]',
};

const DatabasePage = () => {
  return (
    <>
      <NextSeo
        title='데이터베이스'
        description='데이터베이스'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/solutions/database',
          images: [
            {
              url: '',
              alt: '데이터베이스',
            },
          ],
        }}
      />
      <SolutionTemplate {...headerContent}>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          description={
            <p className='max-w-[620px]'>
              내장된 자동화 플랫폼과 폭넓은 고가용성 기능을 내장한 ABLESTACK HCI 플랫폼을 통해
              효과적으로 데이터베이스를 관리하고, 데이터베이스 운영 비용을 절감할 수 있습니다.
            </p>
          }>
          <section className='mt-12 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <SolutionContent.DescriptionCard
              containerClassName='bg-[#F6F7F9]'
              image={<Image src={Logo_Article_5_1} />}
              title='80% 빠른 배포'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  내장된 자동화 플랫폼을 통해 다양한 데이터베이스 플랫폼을 자동으로 배포하기 때문에
                  기존 대비 최대 80% 빠르게 배포합니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='저비용 고가용성'
              containerClassName='bg-[#F6F7F9]'
              image={<Image src={Logo_Article_5_2} />}
              description={
                <p className={'m-0 px-8 text-[16px] font-[400] leading-[23.17px]'}>
                  내장되어 있는 고가용성 기능과 데이터베이스 플랫폼에 대한 이중화 구성을 지원하여
                  저비용으로 무중단 환경을 제공합니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='운영환경 효율성 제고'
              containerClassName='bg-[#F6F7F9]'
              image={<Image src={Logo_Article_5_3} />}
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  배포에서부터 운영 까지, 그리고 통합된 데이터베이스 모니터링 환경을 통해 전반적인
                  운영환경 효율성을 제고합니다.
                </p>
              }
            />
          </section>
        </SolutionContent>
        <SolutionContent
          className={'bg-[#EEF4FB] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_20} />}>
          <SolutionContent.Description
            title='내장된 배포 자동화'
            contents={[
              {
                title:
                  'ABLESTACK HCI는 자동화 플랫폼이 내장되어 있어 사용자가 원하는 데이터베이스를 원하는 구성으로 빠르게 배포할 수 있습니다.',
                descriptions: [
                  '데이터베이스 구성을 위한 모든 구성요소 자동으로 배포',
                  '단일 구성 및 고가용성 구성 등, 원하는 구성으로 선택 가능한 기능',
                  '다양한 상용, 오픈소스 데이터베이스 구성을 지원',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          imagePosition='last'
          image={<Image src={Logo_Article_3_21} />}>
          <SolutionContent.Description
            title='내장된 고가용성 구조'
            contents={[
              {
                title:
                  'ABLESTACK HCI는 내장되어 있는 다양한 고가용성 구조를 통해 안정적으로 SLA를 달성할 수 있는 데이터베이스 인프라를 제공합니다.',
                descriptions: [
                  '데이터베이스 서버에 대한 이중화 구성 제공',
                  '노드 장애 시에도 중단 되지 않는 서비스',
                  'Affinity 정책에 의해 동일 역할 가상머신이 동일 노드에 배포되지않도록 하여 안정성 제공',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#F6F7F9;] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_22} />}>
          <SolutionContent.Description
            title='통합된 관리와 모니터링'
            contents={[
              {
                title:
                  'ABLESTACK은 가상머신 및 컨테이너, 그리고 그 안에서 실행되고 있는 데이터베이스모두에 대한 통합 관리와 모니터링을 제공합니다.',
                descriptions: [
                  'Mold를 통해 데이터베이스를 배포하고, 배포된 서비스가 정상적으로실행되고 있는지를 모니터링',
                  'Wall을 통해 배포된 데이터베이스에 대한 모니터링을 제공하여 효과적으로데이터베이스 서버의 운영 상황을 확인할 수 있도록 통합 기능 제공',
                ],
              },
            ]}
          />
        </SolutionContent>
      </SolutionTemplate>
    </>
  );
};

export default DatabasePage;
