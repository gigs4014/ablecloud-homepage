import Image from 'next/image';

import { NextSeo } from 'next-seo';

import {
  CommonDemoContent,
  ProductContent,
  ProductHeaderProps,
  ProductTemplate,
} from '@/templates';

import Logo_Article_2_1 from '@/public/images/new/product/ablestack/ablestackCell/article_2_1.png';
import Logo_Article_3_2 from '@/public/images/new/product/ablestack/ablestackCell/article_3_2.svg';
import Logo_Article_3_3 from '@/public/images/new/product/ablestack/ablestackCell/article_3_3.svg';
import Logo_Article_3_4 from '@/public/images/new/product/ablestack/ablestackCell/article_3_4.svg';
import Logo_Article_4_5 from '@/public/images/new/product/ablestack/ablestackCell/article_4_5.svg';
import Logo_Article_4_6 from '@/public/images/new/product/ablestack/ablestackCell/article_4_6.svg';
import Logo_Article_4_7 from '@/public/images/new/product/ablestack/ablestackCell/article_4_7.svg';
import Logo_Article_4_8 from '@/public/images/new/product/ablestack/ablestackCell/article_4_8.svg';
import Logo_Article_3_1 from '@/public/images/new/product/ablestack/ablestackGlue/article_3_1.png';

const headerContent: ProductHeaderProps = {
  title: 'Cell 가상화',
  description: `
      Cell은 '세포, 방' 등의 의미를 가진 명사로, 하나의 개체를 구성하기 위한
      요소가 각자의 역할을 수행하는 상태를 묘사합니다. ABLESTACK은 호스트 
      내에서 구역을 정해 실행되는 가상머신 또는 컨테이너를 실행하기 위한
      하이퍼바이저에 이 이름을 붙였습니다. 말 그대로 하나의 호스트의 자원을
      쪼개서 각각의 역할을 수행하는 작은 단위의 세포 또는 방인 가상머신을 
      실행하기 위한 환경을 제공하는 플랫폼입니다.`,
  bgImage: 'bg-ablestack-cell-header-bg',
  imagePosition: 'last',
};

export default function AblestackCellPage() {
  return (
    <>
      <NextSeo
        title='Cell 가상화'
        description='vm 가상화'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/products/ablestack/cell',
          images: [
            {
              url: '',
              alt: '스토리지 가상화',
            },
          ],
        }}
      />
      <ProductTemplate {...headerContent}>
        <ProductContent
          title='아키텍처 개요'
          description={`Cell은 CentOS KVM을 기반으로 ABLESTACK 운영에 최적화된 기능을 추가한 내장된 하이퍼바이저입니다.
        Cell 하이퍼바이저는 다음과 같은 주요 컴포넌트로 구성됩니다.`}>
          <div className={'flex w-full items-center justify-center'}>
            <Image src={Logo_Article_2_1} loading={'lazy'} />
          </div>
        </ProductContent>

        <ProductContent
          className={'bg-backgroudGray text-[#444444]'}
          title='에이블클라우드가 무상으로 제공하는 하이퍼바이저'
          imagePosition='first'
          image={<Image src={Logo_Article_3_1} />}>
          <ProductContent.Description
            contents={[
              {
                title: '내장된 베어메탈 하이퍼바이저',
                descriptions: ['커널 기반 가상화', '최신 커널 적용을 통한 고성능 IO 구현'],
              },
              {
                title: '다양한 형식의 디바이스 지원',
                descriptions: [
                  '기본적인 가상 디바이스 및 Dassthrough 디바이스 지원',
                  'GPU, USB 등의 폭넓은 장치 연결 가능',
                ],
              },
              {
                title: '사용자의 선택 자유 보장',
                descriptions: [
                  'Cell뿐만 아니라 VM ware, Hyper V, Xen 등 기존의 하이퍼바이저도 호환 가능',
                ],
              },
            ]}
          />
          <div className=' hidden gap-6 pl-8 lg:flex'>
            <Logo_Article_3_2 />
            <Logo_Article_3_3 />
            <Logo_Article_3_4 />
          </div>
        </ProductContent>

        <ProductContent title='유즈케이스'>
          <div className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2'>
            <ProductContent.RowSummaryCard
              title={'서버 가상화'}
              description={`내장된 Cell 하이퍼바이저는 기업을 위한 최적의 가상화
              플랫폼으로 광범위한 Linux 배포판 운영체제 및 
              Microsoft Windows 운영체제를 지원합니다.`}
              image={<Logo_Article_4_5 />}
            />
            <ProductContent.RowSummaryCard
              title={'데이터베이스'}
              description={`최신 커널 기반의 베어메탈급 IO 성능을 제공하여
              Oracle, MS-SQL, MySQL, Tibero 등의
              데이터베이스 운영에 적합합니다.`}
              image={<Logo_Article_4_6 />}
            />

            <ProductContent.RowSummaryCard
              title={'데스크톱/애플리케이션 가상화'}
              description={`다양한 가상데스크톱 환경에 모두 적용이 가능하고
              단순한 구성을 제공함으로써 비대면 업무 환경 및 
              지사별 업무 환경을 구성할 수 있습니다.`}
              image={<Logo_Article_4_7 />}
            />
            <ProductContent.RowSummaryCard
              title={'멀티 클라우드'}
              description={`Cell 하이퍼바이저 및 VMWare, Citrix, Hyper-V 등의
              다양한 하이퍼바이저 환경을 구성할 수 있습니다.`}
              image={<Logo_Article_4_8 />}
            />
          </div>
        </ProductContent>

        <ProductContent className={'bg-backgroudGray text-[#444444]'} title='최신 리소스 살펴보기'>
          <CommonDemoContent />
        </ProductContent>
      </ProductTemplate>
    </>
  );
}
