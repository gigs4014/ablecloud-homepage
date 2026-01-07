import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { EbookData } from '@/types/resource';

import ebook_1_Src from '@/public/images/resource/ebook/ebook_1.png';
import ebook_2_Src from '@/public/images/resource/ebook/ebook_2.png';
import ebook_3_Src from '@/public/images/resource/ebook/ebook_3.png';
import ebook_4_Src from '@/public/images/resource/ebook/ebook_4.png';
import ebook_5_Src from '@/public/images/resource/ebook/ebook_5.png';
import ebook_6_Src from '@/public/images/resource/ebook/ebook_6.png';
import ebook_7_Src from '@/public/images/resource/ebook/ebook_7.png';
import ebook_8_Src from '@/public/images/resource/ebook/ebook_8.png';
import ebook_9_Src from '@/public/images/resource/ebook/ebook_9.png';
import ebook_10_Src from '@/public/images/resource/ebook/ebook_10.png';
import ebook_11_Src from '@/public/images/resource/ebook/ebook_11.png';
import ebook_12_Src from '@/public/images/resource/ebook/ebook_12.png';
import ebook_13_Src from '@/public/images/resource/ebook/ebook_13.png';
import ebook_14_Src from '@/public/images/resource/ebook/ebook_14.png';

export const resourceType = ['blog', 'video', 'ebook'] as const;

export const useResourceTabs = () => {
  const t = useTranslations('resources.tabs');
  const locale = useLocale();

  return [
    ...(locale === 'ko' ? [{ text: t('blog'), href: '/resource/blog' }] : []),
    { text: t('video'), href: '/resource/video' },
    { text: t('ebook'), href: '/resource/ebook' },
    { text: t('compatibility'), href: '/resource/compatibility' },
  ];
};

export const useResourceHeaderData = () => {
  const t = useTranslations('resources.header');

  return {
    title: {
      mainText: t('title'),
    },
    description: t('description'),
    bgClassName: 'bg-resource-header',
    heightClassName: 'min-h-[350px] lg:min-h-[374px]',
  };
};

export const videosData: string[] = [
  'https://www.youtube.com/embed/nycSBkio2v4',
  'https://www.youtube.com/embed/6xLcY16LpgM',
  'https://www.youtube.com/embed/GHl3-2tg2b0',
  'https://www.youtube.com/embed/ury7M9NpBFE',
  'https://www.youtube.com/embed/hL9dMBIlQRE',
  'https://www.youtube.com/embed/aEZ3q1BTkmw',
  'https://www.youtube.com/embed/aYKeLLrlZ6o',
  'https://www.youtube.com/embed/hcGcB4NkmJk',
  'https://www.youtube.com/embed/ztn2Deth-yc',
  'https://www.youtube.com/embed/qyHcSTNEpAw',
  'https://www.youtube.com/embed/yjJnl-NMXiw',
  'https://www.youtube.com/embed/YskCBg_ZpPE',
  'https://www.youtube.com/embed/H1Tv5-7Pv2E',
  'https://www.youtube.com/embed/_i0oxkf_ReY',
];

export const getEbookData = async () => {
  const t = await getTranslations('resources.ebook');

  return [
    {
      type: 'ABLESTACK Solution',
      title: t('data.12.title'),
      description: t('data.12.description'),
      href: 'ABLESTACK_Commvault_백업 솔루션.pdf',
      imgSrc: ebook_13_Src,
    },
    {
      type: 'ABLESTACK Solution',
      title: t('data.13.title'),
      description: t('data.13.description'),
      href: 'ABLESTACK_관제 CCTV.pdf',
      imgSrc: ebook_14_Src,
    },
    {
      type: 'ABLESTACK Technical White Paper',
      title: t('data.0.title'),
      description: t('data.0.description'),
      href: 'ABLESTACK_Technical.pdf',
      imgSrc: ebook_1_Src,
    },
    {
      type: 'ABLESTACK VS VMware',
      title: t('data.5.title'),
      description: t('data.5.description'),
      href: 'ABLESTACK-VMWare_vSphere.pdf',
      imgSrc: ebook_6_Src,
    },
    {
      type: 'ABLESTACK with Oracle',
      title: t('data.2.title'),
      description: t('data.2.description'),
      href: 'ABLESTACK_for_Oracle_RAC.pdf',
      imgSrc: ebook_3_Src,
    },
    {
      type: 'ABLESTACK V2V',
      title: t('data.3.title'),
      description: t('data.3.description'),
      href: 'ABLESTACK_VMWare_Migration.pdf',
      imgSrc: ebook_4_Src,
    },
    {
      type: 'ABLESTACK P2V',
      title: t('data.4.title'),
      description: t('data.4.description'),
      href: 'ABLESTACK_P2V_Migration.pdf',
      imgSrc: ebook_5_Src,
    },
    {
      type: 'ABLESTACK V2V',
      title: t('data.1.title'),
      description: t('data.1.description'),
      href: 'ABLESTACK_VMWare.pdf',
      imgSrc: ebook_2_Src,
    },
    {
      type: 'ABLESTACK Koral',
      title: t('data.6.title'),
      description: t('data.6.description'),
      href: 'ABLESTACK_Kubernetes_Cluster.pdf',
      imgSrc: ebook_7_Src,
    },
    {
      type: 'ABLESTACK Koral',
      title: t('data.7.title'),
      description: t('data.7.description'),
      href: 'ABLESTACK_Kubernetes_Cluster_Portainer.pdf',
      imgSrc: ebook_8_Src,
    },
    {
      type: 'ABLESTACK Over',
      title: t('data.8.title'),
      description: t('data.8.description'),
      href: 'ABLESTACK_HCI_ACTIVE.pdf',
      imgSrc: ebook_9_Src,
    },
    {
      type: 'ABLESTACK Link',
      title: t('data.9.title'),
      description: t('data.9.description'),
      href: 'ABLESTACK_LINK.pdf',
      imgSrc: ebook_10_Src,
    },
    {
      type: 'ABLESTACK Link',
      title: t('data.10.title'),
      description: t('data.10.description'),
      href: 'ABLESTACK_LINK_LOAD_BALANCER.pdf',
      imgSrc: ebook_11_Src,
    },
    {
      type: 'ABLESTACK  VS VMware',
      title: t('data.11.title'),
      description: t('data.11.description'),
      href: 'ABLESTACK_VS_VMware.pdf',
      imgSrc: ebook_12_Src,
    },
  ];
};

export const ebooksData: EbookData[] = [
  {
    type: 'ABLESTACK Technical White Paper',
    title: 'Blade Server? 이제는 HCI',
    description: '블레이드 서버 또는 HCI 중 어떤 것을 도입해야 할까요?',
    href: 'ABLESTACK_Technical.pdf',
    imgSrc: ebook_1_Src,
  },
  {
    type: 'ABLESTACK VS VMware',
    title: 'ABLESTACK-VMware vSphere 제품 비교',
    description: 'ABLESTACK와 VMWare 주요 라이선스 기능 비교표',
    href: 'ABLESTACK-VMWare_vSphere.pdf',
    imgSrc: ebook_6_Src,
  },
  {
    type: 'ABLESTACK with Oracle',
    title: 'ABLESTACK for Oracle RAC 구성',
    description: 'ABLESTACK 가상화 환경에서 Oracle RAC을 구성하세요.',
    href: 'ABLESTACK_for_Oracle_RAC.pdf',
    imgSrc: ebook_3_Src,
  },
  {
    type: 'ABLESTACK V2V',
    title: 'ABLESTACK VMWare 가상머신 마이그레이션',
    description: '내장된 마이그레이션 도구를 통한 V2V 가상머신 이관',
    href: 'ABLESTACK_VMWare_Migration.pdf',
    imgSrc: ebook_4_Src,
  },
  {
    type: 'ABLESTACK P2V',
    title: 'ABLESTACK 물리서버를 가상머신으로',
    description: '물리서버를 가상머신으로 마이그레이션하는 방법',
    href: 'ABLESTACK_P2V_Migration.pdf',
    imgSrc: ebook_5_Src,
  },
  {
    type: 'ABLESTACK V2V',
    title: 'V사를 완벽하게 대체할 수 있는 플랫폼',
    description: '영구 라이센스를 제공하는 ABLESTACK HCI 플랫폼',
    href: 'ABLESTACK_VMWare.pdf',
    imgSrc: ebook_2_Src,
  },
  {
    type: 'ABLESTACK Koral',
    title: 'ABLESTACK Kubernetes Cluster 사용기초',
    description: '내장된 Koral 기능을 이용한  쿠버네티스 클러스터 배포 방법',
    href: 'ABLESTACK_Kubernetes_Cluster.pdf',
    imgSrc: ebook_7_Src,
  },
  {
    type: 'ABLESTACK Koral',
    title: 'ABLESTACK Kubernetes Cluster와 Portainer 플랫폼 연동',
    description: '애플리케이션 관리 플랫폼 Portainer와 연동하는 방법',
    href: 'ABLESTACK_Kubernetes_Cluster_Portainer.pdf',
    imgSrc: ebook_8_Src,
  },
  {
    type: 'ABLESTACK Over',
    title: '비즈니스 연속성을 제공하는 ABLESTACK HCI 재해복구',
    description: '내장된 기능으로 Active-Active 재해복구 환경 구성 가능',
    href: 'ABLESTACK_HCI_ACTIVE.pdf',
    imgSrc: ebook_9_Src,
  },
  {
    type: 'ABLESTACK Link',
    title: 'ABLESTACK Link를 통한 마이크로 세그먼테이션 보안관리',
    description: '내장된 Link를 이용한 보안 관리 기능',
    href: 'ABLESTACK_LINK.pdf',
    imgSrc: ebook_10_Src,
  },
  {
    type: 'ABLESTACK Link',
    title: 'ABLESTACK Link Load Balancer 어플라이언스 활용',
    description: '내장된 Link를 이용한 Load Balancer 적용 시나리오',
    href: 'ABLESTACK_LINK_LOAD_BALANCER.pdf',
    imgSrc: ebook_11_Src,
  },
  {
    type: 'ABLESTACK  VS VMware',
    title: 'ABLESTACK vs VMware 성능 비교',
    description: 'ABLESTACK와 VMware 동일 환경에서의 성능 비교',
    href: 'ABLESTACK_VS_VMware.pdf',
    imgSrc: ebook_12_Src,
  },
];

export const useCompatibilityList = () => {
  const t = useTranslations('resources.compatibility');

  return [
    {
      title: t('0.title'),
      description: t('0.description'),
      path: 'hypervisor',
    },
    {
      title: t('1.title'),
      description: t('1.description'),
      path: 'server',
    },
    {
      title: t('2.title'),
      description: t('2.description'),
      path: 'guest-os',
    },
    {
      title: t('3.title'),
      description: t('3.description'),
      path: 'virtualization',
    },
    {
      title: t('4.title'),
      description: t('4.description'),
      path: 'external-storage',
    },
    {
      title: t('5.title'),
      description: t('5.description'),
      path: 'backup',
    },
  ];
};

export const compatibilityType = [
  'hypervisor',
  'server',
  'guest-os',
  'virtualization',
  'external-storage',
  'backup',
] as const;

export const getCompatibilityData = async () => {
  const t = await getTranslations('resources.compatibilityData');

  return {
    hypervisor: {
      title: t.rich('hypervisor.title', {
        br: () => <br />,
      }),
      descriptionList: [
        {
          description: t.rich('hypervisor.descriptionList.0.description', {
            br: () => <br />,
          }),
          list: [
            t('hypervisor.descriptionList.0.list.0'),
            t('hypervisor.descriptionList.0.list.1'),
            t('hypervisor.descriptionList.0.list.2'),
            t('hypervisor.descriptionList.0.list.3'),
          ],
        },
        {
          description: t('hypervisor.descriptionList.1.description'),
          list: [
            t('hypervisor.descriptionList.1.list.0'),
            t('hypervisor.descriptionList.1.list.1'),
          ],
        },
      ],
    },
    server: {
      title: t('server.title'),
      descriptionList: [
        {
          description: t('server.descriptionList.0.description'),
          list: [
            t('server.descriptionList.0.list.0'),
            t('server.descriptionList.0.list.1'),
            t('server.descriptionList.0.list.2'),
            t('server.descriptionList.0.list.3'),
            t('server.descriptionList.0.list.4'),
            t('server.descriptionList.0.list.5'),
            t('server.descriptionList.0.list.6'),
            t('server.descriptionList.0.list.7'),
            t('server.descriptionList.0.list.8'),
            t('server.descriptionList.0.list.9'),
          ],
        },
      ],
    },
    'guest-os': {
      title: t('guest-os.title'),
      descriptionList: [
        {
          description: t('guest-os.descriptionList.0.description'),
          list: [
            t('guest-os.descriptionList.0.list.0'),
            t('guest-os.descriptionList.0.list.1'),
            t('guest-os.descriptionList.0.list.2'),
            t('guest-os.descriptionList.0.list.3'),
            t('guest-os.descriptionList.0.list.4'),
            t('guest-os.descriptionList.0.list.5'),
            t('guest-os.descriptionList.0.list.6'),
            t('guest-os.descriptionList.0.list.7'),
          ],
        },
      ],
    },
    virtualization: {
      title: t('virtualization.title'),
      descriptionList: [
        {
          description: t('virtualization.descriptionList.0.description'),
          list: [
            t('virtualization.descriptionList.0.list.0'),
            t('virtualization.descriptionList.0.list.1'),
            t('virtualization.descriptionList.0.list.2'),
            t('virtualization.descriptionList.0.list.3'),
            t('virtualization.descriptionList.0.list.4'),
            t('virtualization.descriptionList.0.list.5'),
          ],
        },
      ],
    },
    'external-storage': {
      title: t('external-storage.title'),
      descriptionList: [
        {
          description: t('external-storage.descriptionList.0.description'),
          list: [
            t('external-storage.descriptionList.0.list.0'),
            t('external-storage.descriptionList.0.list.1'),
            t('external-storage.descriptionList.0.list.2'),
            t('external-storage.descriptionList.0.list.3'),
            t('external-storage.descriptionList.0.list.4'),
            t('external-storage.descriptionList.0.list.5'),
          ],
        },
      ],
    },
    backup: {
      title: t('backup.title'),
      descriptionList: [
        {
          description: t('backup.descriptionList.0.description'),
          list: [t('backup.descriptionList.0.list.0'), t('backup.descriptionList.0.list.1')],
        },
      ],
    },
  };
};
