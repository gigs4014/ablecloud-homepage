import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import ablestoreSrc from '@/public/images/partners/ablestor.png';
import acornsoftSrc from '@/public/images/partners/acornsoft.png';
import ajictSrc from '@/public/images/partners/ajict.png';
import citrixSrc from '@/public/images/partners/citrix.png';
import dellSrc from '@/public/images/partners/dell.png';
import dwctsSrc from '@/public/images/partners/dwcts.png';
import fujitsuSrc from '@/public/images/partners/fujitsu.png';
import geomexSrc from '@/public/images/partners/geomex.png';
import gntelSrc from '@/public/images/partners/gntel.png';
import hdnSrc from '@/public/images/partners/hdn.png';
import hpSrc from '@/public/images/partners/hp.png';
import hsSrc from '@/public/images/partners/hs.png';
import innodepSrc from '@/public/images/partners/innodep.png';
import innogridSrc from '@/public/images/partners/innogrid.png';
import innotiumSrc from '@/public/images/partners/innotium.png';
import itcenSrc from '@/public/images/partners/itcen.png';
import ktnfSrc from '@/public/images/partners/ktnf.png';
import lenovoSrc from '@/public/images/partners/lenovo.png';
import nhncrossentSrc from '@/public/images/partners/nhncrossent.png';
import oceanSrc from '@/public/images/partners/ocean.png';
import skshieldusSrc from '@/public/images/partners/skshieldus.png';
import snaSrc from '@/public/images/partners/sna.png';
import superSrc from '@/public/images/partners/super.png';
import supermicrSrc from '@/public/images/partners/supermicr.png';
import t3qSrc from '@/public/images/partners/t3q.png';
import tilonSrc from '@/public/images/partners/tilon.png';
import uniwideSrc from '@/public/images/partners/uniwide.png';
import xenoSrc from '@/public/images/partners/xeno.png';
import xslabSrc from '@/public/images/partners/xslab.png';
import zungwonSrc from '@/public/images/partners/zungwon.png';

export const getPartnerHeaderData = async () => {
  const t = await getTranslations('partner.header');

  return {
    title: {
      mainText: t('title'),
    },
    description: t.rich('description', {
      br: () => <br />,
    }),
    bgClassName: 'bg-partners-header',
    heightClassName: 'min-h-[350px] lg:min-h-[404px]',
  };
};

export const usePartnerProgramHeaderData = () => {
  const t = useTranslations('partner.program.header');

  return {
    title: {
      mainText: t('title'),
    },
    description: t.rich('description', {
      br: () => <br />,
    }),
    bgClassName: 'bg-partners-header',
    heightClassName: 'min-h-[350px] lg:min-h-[404px]',
  };
};

export const getPartnerTier = async () => {
  const t = await getTranslations('partner');

  return [
    {
      title: t('tier.0.title'),
      description: t('tier.0.description'),
    },
    {
      title: t('tier.1.title'),
      description: t('tier.1.description'),
    },
    {
      title: t('tier.2.title'),
      description: t('tier.2.description'),
    },
    {
      title: t('tier.3.title'),
      description: t('tier.3.description'),
    },
  ];
};

export const usePartnerList = () => {
  const t = useTranslations('partner.partnerList');

  return [
    { img: <Image src={ablestoreSrc} alt='' />, text: t('list.0.text') },
    { img: <Image src={dellSrc} alt='' />, text: t('list.1.text') },
    { img: <Image src={hpSrc} alt='' />, text: t('list.2.text') },
    { img: <Image src={fujitsuSrc} alt='' />, text: t('list.3.text') },
    { img: <Image src={lenovoSrc} alt='' />, text: t('list.4.text') },
    { img: <Image src={supermicrSrc} alt='' />, text: t('list.5.text') },
    { img: <Image src={superSrc} alt='' />, text: t('list.6.text') },
    { img: <Image src={ktnfSrc} alt='' />, text: t('list.7.text') },
    { img: <Image src={uniwideSrc} alt='' />, text: t('list.8.text') },
    { img: <Image src={oceanSrc} alt='' />, text: t('list.9.text') },
    { img: <Image src={citrixSrc} alt='' />, text: t('list.10.text') },
    { img: <Image src={tilonSrc} alt='' />, text: t('list.11.text') },
    { img: <Image src={xenoSrc} alt='' />, text: t('list.12.text') },
    { img: <Image src={nhncrossentSrc} alt='' />, text: t('list.13.text') },
    { img: <Image src={hdnSrc} alt='' />, text: t('list.14.text') },
    { img: <Image src={innogridSrc} alt='' />, text: t('list.15.text') },
    { img: <Image src={acornsoftSrc} alt='' />, text: t('list.16.text') },
    { img: <Image src={innotiumSrc} alt='' />, text: t('list.17.text') },
    { img: <Image src={t3qSrc} alt='' />, text: t('list.18.text') },
    { img: <Image src={innodepSrc} alt='' />, text: t('list.19.text') },
    { img: <Image src={xslabSrc} alt='' />, text: t('list.20.text') },
    { img: <Image src={hsSrc} alt='' />, text: t('list.21.text') },
    { img: <Image src={zungwonSrc} alt='' />, text: t('list.22.text') },
    { img: <Image src={ajictSrc} alt='' />, text: t('list.23.text') },
    { img: <Image src={skshieldusSrc} alt='' />, text: t('list.24.text') },
    { img: <Image src={gntelSrc} alt='' />, text: t('list.25.text') },
    { img: <Image src={itcenSrc} alt='' />, text: t('list.26.text') },
    { img: <Image src={snaSrc} alt='' />, text: t('list.27.text') },
    { img: <Image src={dwctsSrc} alt='' />, text: t('list.28.text') },
    { img: <Image src={geomexSrc} alt='' />, text: t('list.29.text') },
  ];
};
