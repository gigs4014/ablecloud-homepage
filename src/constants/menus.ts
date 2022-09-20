import { HeaderMenuItem } from '@/types';

/**
## 메뉴 구성

### 제품

- Ablestack HCI
    - Core (cube, cell, glue)
    - Management (mold, koral, wall, genie, station)
- Ablestack Appliance

### 솔루션

- 프라이빗 클라우드
- 하이브리드 클라우드 (Genie 관련 내용 포함)
- 웹 애플리케이션
- 빅데이터
- 영상감시
- IoT
- 엣지 컴퓨팅
- 인공지능
- 최종 사용자 컴퓨팅 (VDI, Works 관련 내용 포함)

### 성공 사례

### 회사

- About Us
- 파트너
- 문의하기

### 자료

- Blog
- Docs
 */

export const menuItems: Array<HeaderMenuItem> = [
  {
    label: '회사소개',
    subMenuItems: [
      {
        label: 'About US',
        href: '/company',
      },
      {
        label: '파트너',
        href: '/company',
      },
      {
        label: '문의하기',
        href: '/company',
      },
      {
        label: '찾아오시는 길',
        href: '/company',
      },
    ],
  },
  {
    label: '제품',
    subMenuItems: [
      {
        // type: 'group',
        label: 'Ablestack HCI',
        href: '/products/ablestack',
      },
      {
        label: 'Core',
        href: 'products/ablestack',
      },
      {
        label: 'management',
        href: 'products/ablestack',
      },
      {
        label: 'AbleStack 어플라이언스',
        href: '/products/ablestack',
      },
      // {
      // type: 'group',
      // label: '인프라 스트럭처',
      // href: '/products/ablestack',
      // subMenuItems: [
      //   { label: 'Glue 스토리지', href: '/products/ablestack/glue' },
      //   { label: 'Cell 가상화', href: '/products/ablestack/cell' },
      //   { label: 'Koral 쿠버네테스 엔진', href: '/products/ablestack/koral' },
      //   { label: 'Track 네트워크 보안', href: '/products/ablestack/track' },
      // ],
      // subMenuItems: [
      //   { label: 'Block 블록스토리지', href: '/products/ablestack/block' },
      //   { label: 'Cell 가상화', href: '/products/ablestack/cell' },
      //   { label: 'Files 파일시스템', href: '/products/ablestack/files' },
      //   { label: 'Genie 하이브리드 배포 자동화', href: '/products/ablestack/genie' },
      //   { label: 'Glue 스토리지', href: '/products/ablestack/glue' },
      //   { label: 'Koral 쿠버네테스 엔진', href: '/products/ablestack/koral' },
      //   { label: 'Mold 클라우드 관리', href: '/products/ablestack/mold' },
      //   { label: 'Object 오브젝트 스토리지', href: '/products/ablestack/object' },
      //   { label: 'Slio', href: '/products/ablestack/slio' },
      //   { label: 'Station 플랫폼서비스', href: '/products/ablestack/station' },
      //   { label: 'Track 네트워크 보안', href: '/products/ablestack/track' },
      //   { label: 'Wall 통합 모니터링', href: '/products/ablestack/wall' },
      //   { label: 'Works 가상데스크톱', href: '/products/ablestack/works' },
      //   { label: 'Core', href: '/products/ablestack/core' },
      //   { label: 'Management', href: '/products/ablestack/management' },
      // ],
      // },
      // {
      //   type: 'group',
      //   label: '관리플랫폼',
      //   href: '/products/ablestack',
      //   subMenuItems: [
      //     { label: 'Mold 클라우드 관리', href: '/products/ablestack/mold' },
      //     { label: 'Genie 하이브리드 배포 자동화', href: '/products/ablestack/genie' },
      //     { label: 'Wall 통합 모니터링', href: '/products/ablestack/wall' },
      //   ],
      // },
      // {
      //   type: 'group',
      //   label: '통합스토리지',
      //   href: '/products/ablestack',
      //   subMenuItems: [
      //     { label: 'Block 블록스토리지', href: '/products/ablestack/block' },
      //     { label: 'Files 파일시스템', href: '/products/ablestack/files' },
      //     { label: 'Object 오브젝트 스토리지', href: '/products/ablestack/object' },
      //     { label: 'Slio 백업 자동화', href: '/products/ablestack/slio' },
      //   ],
      // },
      // {
      //   type: 'group',
      //   label: '서비스 및 플랫폼',
      //   href: '/products/ablestack',
      //   subMenuItems: [
      //     { label: 'Works 가상데스크톱', href: '/products/ablestack/works' },
      //     { label: 'Station 플랫폼서비스', href: '/products/ablestack/station' },
      //   ],
      // },
      // {
      //   label: 'ABLESTACK 어플라이언스',
      //   href: '/products/ablestack',
      // },
      // {
      //   label: 'ABLESTACK 조달제품',
      //   href: '/products/ablestack',
      // },
    ],
  },
  {
    label: '솔루션',
    subMenuItems: [
      {
        label: '프라이빗 클라우드',
        href: '/solutions/private-cloud',
      },
      {
        label: '하이브리드 클라우드',
        href: '/solutions/hybrid-cloud',
      },
      {
        label: '웹 애플리케이션',
        href: '/solutions/webapp',
      },
      {
        label: '빅데이터',
        href: '/solutions/bigdata',
      },
      {
        label: '영상감시',
        href: '/solutions/monitoring',
      },
      {
        label: 'IoT',
        href: '/solutions/iot',
      },
      {
        label: '엣지 컴퓨팅',
        href: '/solutions/edge-computing',
      },
      {
        label: '인공지능',
        href: '/solutions/ai',
      },
      {
        label: '최종 사용자 컴퓨팅',
        href: '/solutions/euc',
      },
    ],
  },
  {
    label: '성공사례',
    href: '/interview',
  },
  {
    label: '파트너',
    href: '/partners',
  },
  {
    label: '제품문의',
    href: '/company/contact',
  },
  {
    label: '자료',
    subMenuItems: [
      {
        label: 'Blog',
        href: '/blog',
      },
      {
        label: 'Docs',
        href: '/blog',
      },
    ],
  },
];

export const footerMenus = [
  {
    label: '에이블클라우드',
    subMenuItems: [
      {
        label: '회사소개',
        href: '/company',
      },
    ],
  },
  {
    label: '제품',
    subMenuItems: [
      {
        label: 'ABLESTACK의 탄생',
        href: '/products',
      },
      {
        label: 'ABLESTACK 소개',
        href: '/products/ablestack',
      },
    ],
  },
  {
    label: '솔루션',
    subMenuItems: [
      {
        label: '-',
        href: '/solutions',
      },
      {
        label: '-',
        href: '/solutions',
      },
    ],
  },
  {
    label: '성공사례',
    subMenuItems: [
      {
        label: '-',
        href: '/interview',
      },
      {
        label: '-',
        href: '/interview',
      },
    ],
  },
  {
    label: '파트너',
    subMenuItems: [
      {
        label: '파트너 네트워크',
        href: '/partners',
      },
    ],
  },
  {
    label: '지원',
    subMenuItems: [
      {
        label: '데모 신청하기',
        href: '/company',
      },
      {
        label: '전문가와 상담하기',
        href: '/company',
      },
      {
        label: '기술 지원 받기',
        href: '/company',
      },
    ],
  },
];
interface FooterItem {
  label: string;
  description: string;
}

export const footerInformation: FooterItem[][] = [
  [
    {
      label: '회사명  ',
      description: '(주)에이블클라우드',
    },
    {
      label: '주소 본사 ',
      description: '서울특별시 영등포구 영신로 220 KnK디지털타워 1808호',
    },
    {
      label: '연구소 ',
      description: '대전광역시 대덕구 대화로106번길 66 811호  ',
    },
  ],
  [
    {
      label: '사업자등록번호 ',
      description: '886-86-02158',
    },
    {
      label: '대표 ',
      description: '박동혁',
    },
    {
      label: '전화 ',
      description: '02-456-7667',
    },
    {
      label: '팩스 ',
      description: '02-456-7262',
    },

    {
      label: 'Copyright (주)에이블클라우드. All Rights Reserved.',
      description: '',
    },
  ],
];
