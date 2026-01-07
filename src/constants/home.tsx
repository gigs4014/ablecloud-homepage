import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { HeaderData } from '@/types/header';
import { HomeApplicationCardData, HomeFooterCardData, HomeMainCardData } from '@/types/home';

import armySrc from '@/public/images/common/army.png';
import changwonSrc from '@/public/images/common/changwon.png';
import comwelSrc from '@/public/images/common/comwel.png';
import cooconSrc from '@/public/images/common/coocon.png';
import dapaSrc from '@/public/images/common/dapa.png';
import datqSrc from '@/public/images/common/datq.png';
import ekrSrc from '@/public/images/common/ekr.png';
import gbSrc from '@/public/images/common/gb.png';
import goryeongSrc from '@/public/images/common/goryeong.png';
import gwangjuSrc from '@/public/images/common/gwangju.png';
import gyeongnamSrc from '@/public/images/common/gyeongnam.png';
import hcSrc from '@/public/images/common/hc.png';
import kacptaSrc from '@/public/images/common/kacpta.png';
import kepcoSrc from '@/public/images/common/kepco.png';
import pyeongtaekSrc from '@/public/images/common/pyeongtaek.png';
import sangjuSrc from '@/public/images/common/sangju.png';
import spoSrc from '@/public/images/common/spo.png';
import t3qSrc from '@/public/images/common/t3q.png';
import uscSrc from '@/public/images/common/usc.png';
import ycgSrc from '@/public/images/common/ycg.png';

export const getHomeSliderData = async (): Promise<HeaderData[]> => {
  const t = await getTranslations('home');

  return [
    {
      title: {
        mainText: t('sliderHeader1.mainText'),
        subText: t('sliderHeader1.subText'),
      },
      description: <>{t.rich('sliderHeader1.description', { br: () => <br /> })}</>,
      bgClassName: 'bg-home-mobile-header-1 lg:bg-home-header-1',
      heightClassName: 'min-h-[450px] lg:min-h-[506px]',
      buttonData: {
        text: t('sliderHeaderDetail'),
        href: '/resource/blog/21',
      },
    },
    {
      title: {
        mainText: t.rich('sliderHeader2.mainText', { br: () => <br /> }),
      },
      description: <>{t.rich('sliderHeader2.description', { br: () => <br /> })}</>,
      bgClassName: 'bg-home-mobile-header-2 lg:bg-home-header-2',
      heightClassName: 'min-h-[450px] lg:min-h-[506px]',
      buttonData: {
        text: t('sliderHeaderDetail'),
        href: '/products/ablestack-vm',
      },
    },
    {
      title: {
        mainText: t.rich('sliderHeader3.mainText', { br: () => <br /> }),
      },
      description: <>{t.rich('sliderHeader3.description', { br: () => <br /> })}</>,
      bgClassName: 'bg-home-mobile-header-3 lg:bg-home-header-3',
      heightClassName: 'min-h-[450px] lg:min-h-[506px]',
      buttonData: {
        text: t('sliderHeaderDetail'),
        href: '/products/ablestack-hci',
        color: 'white',
      },
    },
    {
      title: {
        mainText: t.rich('sliderHeader4.mainText', { br: () => <br /> }),
      },
      description: <>{t.rich('sliderHeader4.description', { br: () => <br /> })}</>,
      bgClassName: 'bg-home-mobile-header-4 lg:bg-home-header-4',
      heightClassName: 'min-h-[450px] lg:min-h-[506px]',
      buttonData: {
        text: t('sliderHeaderDetail'),
        href: '/about/performance',
        color: 'white',
      },
    },
    {
      title: {
        mainText: t.rich('sliderHeader5.mainText', { br: () => <br /> }),
      },
      description: <>{t.rich('sliderHeader5.description', { br: () => <br /> })}</>,
      bgClassName: 'bg-home-mobile-header-5 lg:bg-home-header-5',
      heightClassName: 'min-h-[450px] lg:min-h-[506px]',
      buttonData: {
        text: t('sliderHeaderDetail'),
        href: '/about/effect',
        color: 'white',
      },
    },
  ];
};

export const getHomeMainCardsData = async (): Promise<HomeMainCardData[]> => {
  const t = await getTranslations('home');

  return [
    {
      title: (
        <>
          {t.rich('card.main1', {
            br: () => <br />,
          })}
        </>
      ),
      href: '/company/about',
      bgClassName: 'bg-home-main-card-1',
    },
    {
      title: (
        <>
          {t.rich('card.main2', {
            br: () => <br />,
          })}
        </>
      ),
      href: '/products/ablestack-vm',
      bgClassName: 'bg-home-main-card-2',
    },
    {
      title: (
        <>
          {t.rich('card.main3', {
            br: () => <br />,
          })}
        </>
      ),
      href: '/products/ablestack-hci',
      bgClassName: 'bg-home-main-card-3',
    },
  ];
};

export const getHomeApplicationCards = async (): Promise<HomeApplicationCardData[]> => {
  const t = await getTranslations('home.applicationCard');

  return [
    {
      title: t('application1.title'),
      description: <>{t.rich('application1.description', { br: () => <br /> })}</>,
      bgClassName: 'bg-home-application-1',
    },
    {
      title: t('application2.title'),
      description: <>{t.rich('application2.description', { br: () => <br /> })}</>,
      bgClassName: 'bg-home-application-2',
    },
    {
      title: t('application3.title'),
      description: <>{t.rich('application3.description', { br: () => <br /> })}</>,
      bgClassName: 'bg-home-application-3',
    },
    {
      title: t('application4.title'),
      description: <>{t.rich('application4.description', { br: () => <br /> })}</>,
      bgClassName: 'bg-home-application-4',
    },
    {
      title: t('application5.title'),
      description: <>{t.rich('application5.description', { br: () => <br /> })}</>,
      bgClassName: 'bg-home-application-5',
    },
  ];
};

export const homeInterviewIcons1 = [
  <Image src={changwonSrc} alt='' width={96} />,
  <Image src={spoSrc} alt='' width={80} />,
  <Image src={dapaSrc} alt='' width={96} />,
  <Image src={comwelSrc} alt='' width={86} />,
  <Image src={ekrSrc} alt='' width={137} />,
  <Image src={gyeongnamSrc} alt='' width={114} />,
  <Image src={hcSrc} alt='' width={85} />,
  <Image src={sangjuSrc} alt='' width={105} />,
  <Image src={kepcoSrc} alt='' width={120} />,
  <Image src={datqSrc} alt='' width={120} />,
];

export const homeInterviewIcons2 = [
  <Image src={ycgSrc} alt='' width={111} />,
  <Image src={goryeongSrc} alt='' width={102} />,
  <Image src={pyeongtaekSrc} alt='' width={56} />,
  <Image src={uscSrc} alt='' width={112} />,
  <Image src={gbSrc} alt='' width={110} />,
  <Image src={cooconSrc} alt='' width={120} />,
  <Image src={gwangjuSrc} alt='' width={120} />,
  <Image src={armySrc} alt='' width={120} />,
  <Image src={t3qSrc} alt='' width={100} />,
  <Image src={kacptaSrc} alt='' width={115} />,
];

export const getHomeFooterCards = async (): Promise<HomeFooterCardData[]> => {
  const t = await getTranslations('home.footerCard');

  return [
    {
      category: 'Partner',
      bgColor: 'bg-[#117CE9]',
      text: <>{t.rich('partner.description', { br: () => <br /> })}</>,
      buttonData: { text: t('partner.buttonText'), href: '/contact' },
    },
    {
      category: 'About us',
      bgColor: 'bg-[#07B4EB]',
      text: <>{t.rich('aboutUs.description', { br: () => <br /> })}</>,
      buttonData: { text: t('aboutUs.buttonText'), href: '/company/about' },
    },
    {
      category: 'News',
      bgColor: 'bg-[#007BA1]',
      text: <>{t.rich('news.description', { br: () => <br /> })}</>,
      buttonData: { text: t('news.buttonText'), href: '/resource/blog' },
    },
    {
      category: t('newsLetter.title'),
      bgColor: 'bg-[#4B86FF]',
      text: <>{t.rich('newsLetter.description', { br: () => <br /> })}</>,
      buttonData: {
        text: t('newsLetter.buttonText'),
        href: 'https://naver.me/Gn006R6Y',
        target: '_blank',
      },
    },
  ];
};
