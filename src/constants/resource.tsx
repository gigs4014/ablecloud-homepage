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
      date: '2025.11.03',
      imgSrc: ebook_13_Src,
    },
    {
      type: 'ABLESTACK Solution',
      title: t('data.13.title'),
      description: t('data.13.description'),
      href: 'ABLESTACK_관제 CCTV.pdf',
      date: '2025.10.16',
      imgSrc: ebook_14_Src,
    },
    {
      type: 'ABLESTACK Technical White Paper',
      title: t('data.0.title'),
      description: t('data.0.description'),
      href: 'ABLESTACK_Technical.pdf',
      date: '2025.09.15',
      imgSrc: ebook_1_Src,
    },
    {
      type: 'ABLESTACK VS VMware',
      title: t('data.5.title'),
      description: t('data.5.description'),
      href: 'ABLESTACK-VMWare_vSphere.pdf',
      imgSrc: ebook_6_Src,
      date: '2025.08.26',
    },
    {
      type: 'ABLESTACK with Oracle',
      title: t('data.2.title'),
      description: t('data.2.description'),
      href: 'ABLESTACK_for_Oracle_RAC.pdf',
      imgSrc: ebook_3_Src,
      date: '2025.07.24',
    },
    {
      type: 'ABLESTACK V2V',
      title: t('data.3.title'),
      description: t('data.3.description'),
      href: 'ABLESTACK_VMWare_Migration.pdf',
      imgSrc: ebook_4_Src,
      date: '2025.06.12',
    },
    {
      type: 'ABLESTACK P2V',
      title: t('data.4.title'),
      description: t('data.4.description'),
      href: 'ABLESTACK_P2V_Migration.pdf',
      imgSrc: ebook_5_Src,
      date: '2025.05.10',
    },
    {
      type: 'ABLESTACK V2V',
      title: t('data.1.title'),
      description: t('data.1.description'),
      href: 'ABLESTACK_VMWare.pdf',
      imgSrc: ebook_2_Src,
      date: '2025.04.24',
    },
    {
      type: 'ABLESTACK Koral',
      title: t('data.6.title'),
      description: t('data.6.description'),
      href: 'ABLESTACK_Kubernetes_Cluster.pdf',
      imgSrc: ebook_7_Src,
      date: '2025.04.17',
    },
    {
      type: 'ABLESTACK Koral',
      title: t('data.7.title'),
      description: t('data.7.description'),
      href: 'ABLESTACK_Kubernetes_Cluster_Portainer.pdf',
      imgSrc: ebook_8_Src,
      date: '2025.04.08',
    },
    {
      type: 'ABLESTACK Over',
      title: t('data.8.title'),
      description: t('data.8.description'),
      href: 'ABLESTACK_HCI_ACTIVE.pdf',
      imgSrc: ebook_9_Src,
      date: '2025.03.18',
    },
    {
      type: 'ABLESTACK Link',
      title: t('data.9.title'),
      description: t('data.9.description'),
      href: 'ABLESTACK_LINK.pdf',
      imgSrc: ebook_10_Src,
      date: '2025.03.1',
    },
    {
      type: 'ABLESTACK Link',
      title: t('data.10.title'),
      description: t('data.10.description'),
      href: 'ABLESTACK_LINK_LOAD_BALANCER.pdf',
      imgSrc: ebook_11_Src,
      date: '2025.02.23',
    },
    {
      type: 'ABLESTACK  VS VMware',
      title: t('data.11.title'),
      description: t('data.11.description'),
      href: 'ABLESTACK_VS_VMware.pdf',
      imgSrc: ebook_12_Src,
      date: '2025.02.16',
    },
  ];
};

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
            t('server.descriptionList.0.list.10'),
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
            t('virtualization.descriptionList.0.list.6'),
            t('virtualization.descriptionList.0.list.7'),
            t('virtualization.descriptionList.0.list.8'),
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
