import { useEffect, useState } from 'react';

import Image from 'next/image';

import { NextSeo } from 'next-seo';
import { SolutionSearch } from 'src/templates/solutions/SolutionContent/SolutionSearch';

import { InterViewContent, InterViewHeaderProps, InterViewTemplate } from '@/templates';

import Logo_Article_1_1 from '@/public/images/new/interview/article_1_1.png';
import Logo_Article_1_2 from '@/public/images/new/interview/article_1_2.svg';
import Logo_Article_1_3 from '@/public/images/new/interview/article_1_3.svg';
import Logo_Article_1_4 from '@/public/images/new/interview/article_1_4.svg';
import Logo_Article_1_5 from '@/public/images/new/interview/article_1_5.svg';
import Logo_Article_1_6 from '@/public/images/new/interview/article_1_6.svg';
import Logo_Article_1_7 from '@/public/images/new/interview/article_1_7.svg';
import Logo_Article_1_8 from '@/public/images/new/interview/article_1_8.svg';
import Logo_Article_1_9 from '@/public/images/new/interview/article_1_9.svg';
import Logo_Article_1_10 from '@/public/images/new/interview/article_1_10.svg';
import Logo_Article_1_11 from '@/public/images/new/interview/article_1_11.svg';
import Logo_Article_1_12 from '@/public/images/new/interview/article_1_12.svg';
import Logo_Article_1_13 from '@/public/images/new/interview/article_1_13.svg';
import Logo_Article_1_14 from '@/public/images/new/interview/article_1_14.svg';
import Logo_Article_1_15 from '@/public/images/new/interview/article_1_15.svg';
import Logo_Article_1_16 from '@/public/images/new/interview/article_1_16.svg';
import Logo_Article_1_17 from '@/public/images/new/interview/article_1_17.svg';
import Logo_Article_1_18 from '@/public/images/new/interview/article_1_18.svg';
import Logo_Article_1_19 from '@/public/images/new/interview/article_1_19.svg';

// import Logo_Article_1_20 from '@/public/images/new/interview/article_1_20.svg';

export const clients = [
  {
    title: '한국세무사회',
    image: <Logo_Article_1_2 />,
    description: <p>기존 전체 인프라 대비 HCI 도입 후 레거시 인프라 70% 감축</p>,
    href: '/interview/kacpta',
    maintype: '산업',
    subtype: 'Solution',
  },
  {
    title: '평택시청',
    image: <Logo_Article_1_3 />,
    description: <p>UNIWIDE 국산 서버에 기반한 상수로 원격 검침 시스템 구축 사업</p>,
    href: '/interview/pyeongtaek',
    maintype: '산업',
    subtype: 'Solution',
  },
  {
    title: '근로복지공단',
    image: <Logo_Article_1_4 />,
    description: <p>2U 4NODE 형태의 HCI 어플라이언스 제품 구성 제공</p>,
    href: '/interview/comwel',
    maintype: '산업',
    subtype: 'Solution',
  },
  {
    title: '경남도청',
    image: <Logo_Article_1_5 />,
    description: (
      <p>LG 헬로비젼과 P.P.P(민관협력사업)을 통해 가상화 시스템 구축 및 유지보수 진행</p>
    ),
    href: '/interview/gyeongnam',
    maintype: '산업',
    subtype: 'Solution',
  },
  {
    title: '여주대학교',
    image: <Logo_Article_1_6 />,
    description: <p>KTNF 국산서버에 기반한 혁신 지원 사업에 가상화 시스템 구축</p>,
    href: '/interview/yit',
    maintype: '나',
    subtype: '나-a',
  },
  {
    title: '특허청',
    image: <Logo_Article_1_7 />,
    description: (
      <p>Citrix : XenServer, XenDesktop으로 구성하여 가상화 시스템 및 VDI 시스템 구축</p>
    ),
    href: '/interview/kipo',
    maintype: '나',
    subtype: '나-a',
  },
  {
    title: '충남대학교병원',
    image: <Logo_Article_1_8 />,
    description: <p>VMWare 기반의 VDI 구축</p>,
    href: '/interview/cnuh',
    maintype: '나',
    subtype: '나-a',
  },
  {
    title: '지엔텔',
    image: <Logo_Article_1_9 />,
    description: <p>프라이빗 클라우드</p>,
    href: '/interview/gntel',
    maintype: '산업',
    subtype: 'Solution',
  },
  {
    title: '데이타스트림즈',
    image: <Logo_Article_1_10 />,
    description: <p>빅데이터 플랫폼 연구개발</p>,
    href: '/interview/datastreams',
    maintype: '다',
    subtype: '다-c',
  },
  {
    title: '대검찰청',
    image: <Logo_Article_1_11 />,
    description: <p>Object Storage 기반 자료관리</p>,
    href: '/interview/spo',
    maintype: '산업',
    subtype: 'Solution',
  },
  {
    title: '국방기술품질원',
    image: <Logo_Article_1_12 />,
    description: (
      <p>
        문서중앙화
        <br />
        프라이빗 클라우드
      </p>
    ),
    href: '/interview/dtaq',
    maintype: '산업',
    subtype: 'Solution',
  },
  {
    title: '고령군청',
    image: <Logo_Article_1_13 />,
    description: <p>서버 가상화</p>,
    maintype: '산업',
    subtype: 'Solution',
  },
  {
    title: '합천군청',
    image: <Logo_Article_1_14 />,
    description: <p>영상감시 통합 플랫폼</p>,
    maintype: '산업',
    subtype: 'Solution',
  },
  {
    title: '상주시청',
    image: <Logo_Article_1_15 />,
    description: <p>영상 감시 수집</p>,
    maintype: '산업',
    subtype: 'Solution',
  },
  {
    title: '전력연구원',
    image: <Logo_Article_1_16 />,
    description: <p>Citrix 가상데스크톱</p>,
    maintype: '산업',
    subtype: 'Solution',
  },
  {
    title: '방위사업청',
    image: <Logo_Article_1_17 />,
    description: <p>원가 관리 빅데이터</p>,
    maintype: '산업',
    subtype: 'Solution',
  },
  {
    title: '육군본부',
    image: <Logo_Article_1_18 />,
    description: <p>스마트부대</p>,
    maintype: '산업',
    subtype: 'Solution',
  },
  {
    title: '경상북도청',
    image: <Logo_Article_1_19 />,
    description: <p>서버 가상화</p>,
    maintype: '산업',
    subtype: 'Solution',
  },
  // {
  //   title: '한국농어촌공사',
  //   image: <Logo_Article_1_20 />,
  //   description: <p>서버 가상화</p>,
  //   maintype: '산업',
  //   subtype: 'Solution',
  // },
];

const headerContent: InterViewHeaderProps = {
  title: '성공 사례',
  description: (
    <div className={'text-[18px] font-[400] leading-[26.06px]'}>
      <p>
        에이블클라우드가 개발한 ABLESTACK의 강력한 기능을 다양하게 적용해보세요. ABLESTACK는 어떠한
        애플리케이션이든 사용환경이나 산업 환경과 상관없이 모두 처리할 수 있으며 최신의 이머징
        워크로드도 원활하게 배포하여 운영할 수 있는 유연성과 확장성, 안정성을 제공합니다.
      </p>
    </div>
  ),
  bgImage: 'bg-backgroudGray',
  image: <Image src={Logo_Article_1_1} />,
  textColor: 'text-black',
};

export interface SelectValue {
  mainType: string;
  subType: string;
}

export default function InterViewsPage() {
  useEffect(() => {
    const url = window.location.href;
    const typeValue = urlSplit(url);
    setResultValue(typeValue);
  }, []);
  const [resultValue, setResultValue] = useState<SelectValue>({
    mainType: '전체',
    subType: '-',
  });

  return (
    <>
      <NextSeo
        title='성공 사례'
        description='성공 사례'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/interview',
          images: [
            {
              url: '',
              alt: '성공 사례',
            },
          ],
        }}
      />
      <InterViewTemplate {...headerContent}>
        <InterViewContent title='ABLESTACK를 통해 혁신을 이룩한 고객사례'></InterViewContent>

        <SolutionSearch resultValue={resultValue} setResultValue={setResultValue} />
      </InterViewTemplate>
    </>
  );
}

export const urlSplit = (url: string) => {
  const href = decodeURI(url);
  const type = href.split('#');
  if (type.length > 1) {
    const typeArr = type[1].split('/');
    return {
      mainType: typeArr[0],
      subType: typeArr[1],
    };
  } else
    return {
      mainType: '전체',
      subType: '-',
    };
};
