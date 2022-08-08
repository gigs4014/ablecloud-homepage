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
    href: '/company',
  },
  {
    label: '제품',
    subMenuItems: [
      {
        // type: 'group',
        label: 'Ablestack HCI',
        href: '/products/ablestack',
        // subMenuItems: [
        //   { label: 'Block', href: '/products/ablestack/block' },
        //   { label: 'Cell', href: '/products/ablestack/cell' },
        //   { label: 'Files', href: '/products/ablestack/files' },
        //   { label: 'Genie', href: '/products/ablestack/genie' },
        //   { label: 'Glue', href: '/products/ablestack/glue' },
        //   { label: 'Koral', href: '/products/ablestack/koral' },
        //   { label: 'Mold', href: '/products/ablestack/mold' },
        //   { label: 'Object', href: '/products/ablestack/object' },
        //   { label: 'Slio', href: '/products/ablestack/slio' },
        //   { label: 'Station', href: '/products/ablestack/station' },
        //   { label: 'Track', href: '/products/ablestack/track' },
        //   { label: 'Wall', href: '/products/ablestack/wall' },
        //   { label: 'Works', href: '/products/ablestack/works' },
        //   { label: 'Core', href: '/products/ablestack/core' },
        //   { label: 'Management', href: '/products/ablestack/management' },
        // ],
      },
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
    href: '/appliance',
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
    label: 'Blog',
    href: '/blog',
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
        href: '/company',
      },
      {
        label: 'ABLESTACK 소개',
        href: '/company',
      },
    ],
  },
  {
    label: '솔루션',
    subMenuItems: [
      {
        label: '-',
        href: '/company',
      },
      {
        label: '-',
        href: '/company',
      },
    ],
  },
  {
    label: '성공사례',
    subMenuItems: [
      {
        label: '-',
        href: '/company',
      },
      {
        label: '-',
        href: '/company',
      },
    ],
  },
  {
    label: '파트너',
    subMenuItems: [
      {
        label: '파트너 네트워크',
        href: '/company',
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
