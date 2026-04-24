import { getLocale, getTranslations } from 'next-intl/server';
import { headers } from 'next/headers';
import Image from 'next/image';

import { HeaderData } from '@/types/header';
import { AblestackService } from '@/types/products';

import ArrowRight from '@/public/icons/common/arrow-right.svg';
import AblestackHCI from '@/public/images/products/ablestack-hci-logo.png';
import AblestackVM from '@/public/images/products/ablestack-vm-logo.png';
import CellEnSrc from '@/public/images/products/cell-en.png';
import CellSrc from '@/public/images/products/cell.png';
import CubeEnSrc from '@/public/images/products/cube-en.png';
import CubeSrc from '@/public/images/products/cube.png';
import GenieSrc from '@/public/images/products/genie.png';
import GlueSrc from '@/public/images/products/glue.png';
import KoralSrc from '@/public/images/products/koral.png';
import LinkSrc from '@/public/images/products/link.png';
import MoldSrc from '@/public/images/products/mold.png';
import OverEnSrc from '@/public/images/products/over-en.png';
import OverSrc from '@/public/images/products/over.png';
import SiloSrc from '@/public/images/products/silo.png';
import TrackSrc from '@/public/images/products/track.png';
import WallSrc from '@/public/images/products/wall.png';

export const ablestackServices = [
  'cube',
  'cell',
  'glue',
  'mold',
  'track',
  'wall',
  'koral',
  'genie',
  'silo',
  'over',
  'link',
] as const;

export const getAblestackHciHeaderData = async (): Promise<HeaderData> => {
  const t = await getTranslations('product.hci.header');
  const locale = await getLocale();

  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const origin = `${protocol}://${host}`;

  return {
    title: {
      mainText: (
        <div className='w-full px-2 max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]'>
          <Image src={AblestackHCI} alt='' />
        </div>
      ),
    },
    description: <div className='mt-3'>{t('description')} </div>,
    bgClassName: 'bg-products-header-ablestack-hci',
    heightClassName: 'min-h-[450px] lg:min-h-[506px]',
    buttonData: {
      text: (
        <div className='flex items-center gap-[6px]'>
          {t('buttonText')} <ArrowRight height={16} />
        </div>
      ),
      href:
        locale === 'ko'
          ? `${origin}/pdf/2026_ABLESTACK_HCI.pdf`
          : `${origin}/pdf/ABLESTACK_HCI_Product_introduction.pdf`,
      target: '_blank',
    },
  };
};

export const getAblestackVmHeaderData = async (): Promise<HeaderData> => {
  const t = await getTranslations('product.vm.header');

  const locale = await getLocale();

  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const origin = `${protocol}://${host}`;

  return {
    title: {
      mainText: (
        <div className='w-full px-2 max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]'>
          <Image src={AblestackVM} alt='' />
        </div>
      ),
    },
    description: <div className='mt-3'>{t('description')}</div>,
    bgClassName: 'bg-products-header-ablestack-vm',
    heightClassName: 'min-h-[450px] lg:min-h-[506px]',
    buttonData: {
      text: (
        <div className='flex items-center gap-[6px]'>
          {t('download')} <ArrowRight height={16} />
        </div>
      ),
      href:
        locale === 'ko'
          ? `${origin}/pdf/2026_ABLESTACK_VM.pdf`
          : `${origin}/pdf/ABLESTACK_VM_Product_introduction.pdf`,
      target: '_blank',
    },
  };
};

export const getAblestackList = async (): Promise<AblestackService[]> => {
  const t = await getTranslations('product.vm.ablestack');

  return [
    {
      path: 'cube',
      title: t('service.0.title'),
      description: t('service.0.description'),
    },
    {
      path: 'cell',
      title: t('service.1.title'),
      description: t('service.1.description'),
    },
    {
      path: 'glue',
      title: t('service.2.title'),
      description: t('service.2.description'),
    },
    {
      path: 'mold',
      title: t('service.3.title'),
      description: t('service.3.description'),
    },
    {
      path: 'track',
      title: t('service.4.title'),
      description: t('service.4.description'),
    },
    {
      path: 'wall',
      title: t('service.5.title'),
      description: t('service.5.description'),
    },
    {
      path: 'koral',
      title: t('service.6.title'),
      description: t('service.6.description'),
    },
    {
      path: 'genie',
      title: t('service.7.title'),
      description: t('service.7.description'),
    },
    {
      path: 'silo',
      title: t('service.8.title'),
      description: t('service.8.description'),
    },
    {
      path: 'over',
      title: t('service.9.title'),
      description: t('service.9.description'),
    },
    {
      path: 'link',
      title: t('service.10.title'),
      description: t('service.10.description'),
    },
  ];
};

export const getProductsHeaderData = async () => {
  const t = await getTranslations('products.header');

  return {
    cube: {
      title: t('cube.title'),
      bgClassName: `bg-products-header-cube`,
      description: t('cube.description'),
      descriptionMaxWidth: 'max-w-[522px]',
    },
    cell: {
      title: t('cell.title'),
      bgClassName: `bg-products-header-cell`,
      description: t('cell.description'),
      descriptionMaxWidth: 'max-w-[746px]',
      contentMaxWidth: 'max-w-[746px]',
    },
    glue: {
      title: t('glue.title'),
      bgClassName: `bg-products-header-glue`,
      description: t('glue.description'),
      descriptionMaxWidth: 'max-w-[522px]',
    },
    mold: {
      title: t('mold.title'),
      bgClassName: `bg-products-header-mold`,
      description: t('mold.description'),
      descriptionMaxWidth: 'max-w-[522px]',
    },
    track: {
      title: t('track.title'),
      bgClassName: `bg-products-header-track`,
      description: t('track.description'),
      descriptionMaxWidth: 'max-w-[522px]',
    },
    wall: {
      title: t('wall.title'),
      bgClassName: `bg-products-header-wall`,
      description: t('wall.description'),
      descriptionMaxWidth: 'max-w-[522px]',
    },
    koral: {
      title: t('koral.title'),
      bgClassName: `bg-products-header-koral`,
      description: t('koral.description'),
      descriptionMaxWidth: 'max-w-[522px]',
    },
    genie: {
      title: t('genie.title'),
      bgClassName: `bg-products-header-genie`,
      description: t('genie.description'),
      descriptionMaxWidth: 'max-w-[522px]',
    },
    silo: {
      title: t('silo.title'),
      bgClassName: `bg-products-header-silo`,
      description: t('silo.description'),
      descriptionMaxWidth: 'max-w-[522px]',
    },
    over: {
      title: t('over.title'),
      bgClassName: `bg-products-header-over`,
      description: t('over.description'),
      descriptionMaxWidth: 'max-w-[522px]',
    },
    link: {
      title: t('link.title'),
      bgClassName: `bg-products-header-link`,
      description: t('link.description'),
      descriptionMaxWidth: 'max-w-[522px]',
    },
  };
};

export const getProductsContentData = async () => {
  const t = await getTranslations('products.content');
  const locale = await getLocale();

  return {
    cube: {
      imgSrc: locale === 'en' ? CubeEnSrc : CubeSrc,
      description: t('cube.description'),
      subDescriptions: [
        t('cube.subDescriptions.0'),
        t('cube.subDescriptions.1'),
        t('cube.subDescriptions.2'),
        t('cube.subDescriptions.3'),
      ],
    },
    cell: {
      imgSrc: locale === 'en' ? CellEnSrc : CellSrc,
      description: t('cell.description'),
      subDescriptions: [
        t('cell.subDescriptions.0'),
        t('cell.subDescriptions.1'),
        t('cell.subDescriptions.2'),
      ],
    },
    glue: {
      imgSrc: GlueSrc,
      description: t('glue.description'),
      subDescriptions: [
        t('glue.subDescriptions.0'),
        t('glue.subDescriptions.1'),
        t('glue.subDescriptions.2'),
      ],
    },
    mold: {
      imgSrc: MoldSrc,
      description: t('mold.description'),
      subDescriptions: [
        t('mold.subDescriptions.0'),
        t('mold.subDescriptions.1'),
        t('mold.subDescriptions.2'),
        t('mold.subDescriptions.3'),
      ],
    },
    track: {
      imgSrc: TrackSrc,
      description: t('track.description'),
      subDescriptions: [
        t('track.subDescriptions.0'),
        t('track.subDescriptions.1'),
        t('track.subDescriptions.2'),
        t('track.subDescriptions.3'),
      ],
    },
    wall: {
      imgSrc: WallSrc,
      description: t('wall.description'),
      subDescriptions: [
        t('wall.subDescriptions.0'),
        t('wall.subDescriptions.1'),
        t('wall.subDescriptions.2'),
        t('wall.subDescriptions.3'),
      ],
    },
    koral: {
      imgSrc: KoralSrc,
      description: t('koral.description'),
      subDescriptions: [
        t('koral.subDescriptions.0'),
        t('koral.subDescriptions.1'),
        t('koral.subDescriptions.2'),
        t('koral.subDescriptions.3'),
      ],
    },
    genie: {
      imgSrc: GenieSrc,
      description: t('genie.description'),
      subDescriptions: [
        t('genie.subDescriptions.0'),
        t('genie.subDescriptions.1'),
        t('genie.subDescriptions.2'),
        t('genie.subDescriptions.3'),
      ],
    },
    silo: {
      imgSrc: SiloSrc,
      subDescriptions: [
        t('silo.subDescriptions.0'),
        t('silo.subDescriptions.1'),
        t('silo.subDescriptions.2'),
        t('silo.subDescriptions.3'),
      ],
    },
    over: {
      imgSrc: locale === 'en' ? OverEnSrc : OverSrc,
      subDescriptions: [
        t('over.subDescriptions.0'),
        t('over.subDescriptions.1'),
        t('over.subDescriptions.2'),
      ],
    },
    link: {
      imgSrc: LinkSrc,
      subDescriptions: [
        t('link.subDescriptions.0'),
        t('link.subDescriptions.1'),
        t('link.subDescriptions.2'),
      ],
    },
  };
};

export const getAblestackVMCardsData = async () => {
  const t = await getTranslations('product.vm.cards.card');

  return [
    {
      bgClassName: 'bg-products-vm-card-1',
      title: t('0.title'),
      description: t.rich('0.description', {
        br: () => <br />,
      }),
    },
    {
      bgClassName: 'bg-products-vm-card-2',
      title: t('1.title'),
      description: t('1.description'),
    },
    {
      bgClassName: 'bg-products-vm-card-3',
      title: t('2.title'),
      description: t.rich('2.description', {
        br: () => <br />,
      }),
    },
  ];
};

export const getAblestackHCICardsData = async () => {
  const t = await getTranslations('product.hci.cards');

  return [
    {
      title: t('0.title'),
      description: t.rich('0.description', {
        br: () => <br />,
      }),
    },
    {
      title: t('1.title'),
      description: t.rich('1.description', {
        br: () => <br />,
      }),
    },
    {
      title: t('2.title'),
      description: t.rich('2.description', {
        br: () => <br />,
      }),
    },
    {
      title: t('3.title'),
      description: t.rich('3.description', {
        br: () => <br />,
      }),
    },
  ];
};
