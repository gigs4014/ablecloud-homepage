import { useLocale, useTranslations } from 'next-intl';

export const useHeaderMenuData = () => {
  const t = useTranslations('header');
  const locale = useLocale();

  return [
    {
      title: t('menu1.title'),
      href: '/products/ablestack-vm',
      subMenu: [
        { title: t('menu1.subMenu.0.title'), href: '/products/ablestack-vm' },
        { title: t('menu1.subMenu.1.title'), href: '/products/ablestack-hci' },
      ],
    },
    { title: t('menu2.title'), href: '/applications/infra' },
    { title: t('menu3.title'), href: '/interview' },
    {
      title: t('menu4.title'),
      href: '/partners',
      subMenu: [
        { title: t('menu4.subMenu.0.title'), href: '/partners/program' },
        { title: t('menu4.subMenu.1.title'), href: '/partners' },
      ],
    },
    {
      title: t('menu5.title'),
      href: '/resource/blog',
      subMenu: [
        ...(locale === 'ko' ? [{ title: t('menu5.subMenu.0.title'), href: '/resource/blog' }] : []),
        { title: t('menu5.subMenu.1.title'), href: '/resource/video' },
        { title: t('menu5.subMenu.2.title'), href: '/resource/ebook' },
        { title: t('menu5.subMenu.3.title'), href: '/resource/compatibility' },
      ],
    },
    {
      title: t('menu6.title'),
      href: '/company/about',
      subMenu: [
        { title: t('menu6.subMenu.0.title'), href: '/company/about' },
        { title: t('menu6.subMenu.1.title'), href: '/company/history' },
        { title: t('menu6.subMenu.2.title'), href: '/company/certifications' },
        { title: t('menu6.subMenu.3.title'), href: '/company/location' },
      ],
    },
  ];
};

export const pageHeaderHeight = {
  small: 374,
  smallMedium: 404,
  productService: 434,
  common: 506,
};

export const bgGrayPage = ['/interview', '/contact', '/partners'];

export const withoutHeaderPage = ['/resource/blog/'];
