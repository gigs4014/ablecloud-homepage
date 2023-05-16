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
        label: 'ABLESTACK HCI',
        href: '/products/ablestack',
      },
      {
        type: 'group',
        label: '인프라 스트럭처',
        subMenuItems: [
          { label: 'Glue 스토리지', href: '/products/ablestack/glue' },
          { label: 'Cell 가상화', href: '/products/ablestack/cell' },
          { label: 'Koral 쿠버네테스 엔진', href: '/products/ablestack/koral' },
          { label: 'Track 네트워크 및 보안', href: '/products/ablestack/track' },
        ],
      },
      {
        type: 'group',
        label: '관리 플랫폼',
        subMenuItems: [
          { label: 'Mold 클라우드 관리플랫폼', href: '/products/ablestack/mold' },
          { label: 'Genie 하이브리드 배포 자동화', href: '/products/ablestack/genie' },
          { label: 'Wall 통합 모니터링', href: '/products/ablestack/wall' },
        ],
      },
      {
        type: 'group',
        label: '통합 스토리지',
        subMenuItems: [
          { label: 'Block 블록스토리지', href: '/products/ablestack/block' },
          { label: 'Files 파일시스템', href: '/products/ablestack/files' },
          { label: 'Objects 오브젝트 파일 시스템', href: '/products/ablestack/object' },
          { label: 'Slio 백업 자동화', href: '/products/ablestack/slio' },
        ],
      },
      {
        type: 'group',
        label: '서비스 및 플랫폼',
        subMenuItems: [
          { label: 'Works 데스크톱 서비스', href: '/products/ablestack/works' },
          { label: 'Station 플랫폼 서비스', href: '/products/ablestack/station' },
        ],
      },
    ],
  },
  {
    label: '솔루션',
    subMenuItems: [
      {
        type: 'group',
        subMenuItems: [
          { label: '빅데이터 분석', href: '/solutions/big-data-analysis' },
          { label: '비즈니스 연속성/재해복구', href: '/solutions/business-continuity' },
          { label: '비즈니스 크리티컬 앱', href: '/solutions/business-critical' },
          { label: '하이브리드 클라우드', href: '/solutions/hybrid-cloud' },
          { label: '프라이빗 클라우드', href: '/solutions/private-cloud' },
          { label: '클라우드 네이티브', href: '/solutions/cloud-native' },
        ],
      },
      {
        type: 'group',
        subMenuItems: [
          { label: '데이터베이스', href: '/solutions/database' },
          { label: '개발/테스트', href: '/solutions/dev-and-test' },
          { label: '데브옵스/IT운영', href: '/solutions/devops-and-operations' },
          { label: '가상테스크톱/DaaS', href: '/solutions/virtual-desktop-and-daas' },
          {
            label: '인공지능/머신러닝',
            href: '/solutions/artificial-intelligence-and-machine-learning',
          },
          { label: '보안 인프라', href: '/solutions/security-infrastructure' },
        ],
      },
      {
        type: 'group',
        subMenuItems: [
          { label: '멀티클라우드', href: '/solutions/multi-cloud' },
          { label: '엣지컴퓨팅', href: '/solutions/edge-computing' },
          { label: '영상 감시', href: '/solutions/video-surveillance' },
          { label: '전자문서 유통관리', href: '/solutions/electronic-document ' },
          { label: '백업 및 복구', href: '/solutions/backup-and-recovery' },
          { label: 'CI/CD', href: '/solutions/ci-and-cd' },
        ],
      },
      {
        type: 'group',
        subMenuItems: [
          { label: '원격 및 지사 오피스', href: '/solutions/remote-and-offices' },
          { label: '콜센터 시스템', href: '/solutions/call-center' },
          { label: '서버가상화', href: '/solutions/server-virtualization' },
        ],
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
    label: '소식',
    href: '/blog',
  },
  {
    label: '제품문의',
    href: '/company/contact/inquire',
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
        href: '/company/contact/support',
      },
      {
        label: '전문가와 상담하기',
        href: '/company/contact/inquire',
      },
      {
        label: '기술 지원 받기',
        href: '/company/contact/support',
      },
    ],
  },
];
interface FooterItem {
  label: string;
  description?: string;
}

export const footerInformation: FooterItem[][] = [
  [
    {
      label: '회사명:',
      description: '(주)에이블클라우드',
    },
    {
      label: '대표:',
      description: '박동혁',
    },
  ],
  [
    {
      label: '주소 본사:',
      description: '서울특별시 영등포구 영신로 220 KnK디지털타워 1808호',
    },
  ],
  [
    {
      label: '연구소:',
      description: '대전광역시 대덕구 대화로106번길 66 811호',
    },
  ],
  [
    {
      label: '사업자등록번호:',
      description: '886-86-02158',
    },
  ],
  [
    {
      label: '전화:',
      description: '02-456-7667',
    },
    {
      label: '팩스:',
      description: '02-456-7262',
    },
  ],
  [
    {
      label: 'Copyright (주)에이블클라우드. All Rights Reserved.',
      description: '',
    },
  ],
];
