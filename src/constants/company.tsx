import { getTranslations } from 'next-intl/server';

import { HeaderData } from '@/types/header';

import aboutCard1Src from '@/public/images/company/about-card-1.png';
import aboutCard2Src from '@/public/images/company/about-card-2.png';
import aboutCard3Src from '@/public/images/company/about-card-3.png';
import certificates1Src from '@/public/images/company/certificates-1.png';
import certificates2Src from '@/public/images/company/certificates-2.png';
import certificates3Src from '@/public/images/company/certificates-3.png';
import certificates4Src from '@/public/images/company/certificates-4.png';
import certificates5Src from '@/public/images/company/certificates-5.png';

export const getCompanyHeaderData = async (): Promise<HeaderData> => {
  const t = await getTranslations('company.header');

  return {
    title: {
      mainText: t('title'),
    },
    description: t('description'),
    bgClassName: 'bg-company-header',
    heightClassName: 'min-h-[350px] lg:min-h-[374px]',
  };
};

export const getCompanyTabs = async () => {
  const t = await getTranslations('company');

  return [
    { text: t('tab.0.text'), href: '/company/about' },
    { text: t('tab.1.text'), href: '/company/history' },
    { text: t('tab.2.text'), href: '/company/certifications' },
    { text: t('tab.3.text'), href: '/company/location' },
  ];
};

export const getCompanyHistory = async () => {
  const t = await getTranslations('company.history');

  return [
    {
      year: t('2025.year'),
      history: [
        { text: t('2025.history.0'), isHighlight: true },
        { text: t('2025.history.1') },
        { text: t('2025.history.2') },
        { text: t('2025.history.3') },
        { text: t('2025.history.4') },
        { text: t('2025.history.5') },
        { text: t('2025.history.6') },
        { text: t('2025.history.7') },
        { text: t('2025.history.8') },
        { text: t('2025.history.9') },
        { text: t('2025.history.10') },
        { text: t('2025.history.11') },
        { text: t('2025.history.12') },
        { text: t('2025.history.13') },
        { text: t('2025.history.14') },
        { text: t('2025.history.15') },
        { text: t('2025.history.16') },
        { text: t('2025.history.17') },
        { text: t('2025.history.18') },
        { text: t('2025.history.19') },
        { text: t('2025.history.20') },
      ],
    },
    {
      year: t('2024.year'),
      history: [
        { text: t('2024.history.0') },
        { text: t('2024.history.1') },
        { text: t('2024.history.2'), isHighlight: true },
        { text: t('2024.history.3') },
        { text: t('2024.history.4') },
        { text: t('2024.history.5') },
        { text: t('2024.history.6') },
        { text: t('2024.history.7') },
        { text: t('2024.history.8') },
        { text: t('2024.history.9') },
        { text: t('2024.history.10') },
        { text: t('2024.history.11') },
        { text: t('2024.history.12') },
        { text: t('2024.history.13') },
        { text: t('2024.history.14') },
        { text: t('2024.history.15') },
      ],
    },
    {
      year: t('2023.year'),
      history: [
        { text: t('2023.history.0') },
        { text: t('2023.history.1') },
        { text: t('2023.history.2'), isHighlight: true },
        { text: t('2023.history.3') },
        { text: t('2023.history.4') },
        { text: t('2023.history.5') },
        { text: t('2023.history.6') },
        { text: t('2023.history.7') },
        { text: t('2023.history.8') },
        { text: t('2023.history.9') },
        { text: t('2023.history.10') },
        { text: t('2023.history.11') },
        { text: t('2023.history.12') },
      ],
    },
    {
      year: t('2022.year'),
      history: [
        { text: t('2022.history.0') },
        { text: t('2022.history.1') },
        { text: t('2022.history.2') },
        { text: t('2022.history.3') },
        { text: t('2022.history.4') },
        { text: t('2022.history.5') },
        { text: t('2022.history.6') },
        { text: t('2022.history.7') },
      ],
    },
    {
      year: t('2021.year'),
      history: [
        { text: t('2021.history.0') },
        { text: t('2021.history.1') },
        { text: t('2021.history.2') },
        { text: t('2021.history.3') },
        { text: t('2021.history.4') },
      ],
    },
  ];
};

export const getCompanyCertifications = async () => {
  const t = await getTranslations('company');

  return [
    {
      imgSrc: certificates1Src,
      description: t.rich('certification.0', { br: () => <br /> }),
    },
    {
      imgSrc: certificates2Src,
      description: t.rich('certification.1', { br: () => <br /> }),
    },
    {
      imgSrc: certificates3Src,
      description: <>{t.rich('certification.2', { br: () => <br /> })}</>,
    },
    {
      imgSrc: certificates4Src,
      description: <>{t.rich('certification.3', { br: () => <br /> })}</>,
    },
    { imgSrc: certificates5Src, description: t.rich('certification.4', { br: () => <br /> }) },
  ];
};

export const getCompanyAboutCardsData = async () => {
  const t = await getTranslations('company.about');

  return [
    {
      title: t('card.0.title'),
      description: t('card.0.description'),
      bgClassName: 'bg-company-about-card-1',
      imgSrc: aboutCard1Src,
    },
    {
      title: t('card.1.title'),
      description: t.rich('card.1.description', { br: () => <br /> }),
      bgClassName: 'bg-company-about-card-2',
      imgSrc: aboutCard2Src,
    },
    {
      title: t('card.2.title'),
      description: t('card.2.description'),
      bgClassName: 'bg-company-about-card-3',
      imgSrc: aboutCard3Src,
    },
  ];
};
