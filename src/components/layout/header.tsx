'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import { useEffect, useMemo, useState } from 'react';

import { pageHeaderHeight, useHeaderMenuData, withoutHeaderPage } from '@/constants/common';

import Ablestack from '@/public/icons/common/ablestack.svg';
import Close from '@/public/icons/common/close.svg';
import Hamburger from '@/public/icons/common/hamburger.svg';
import englishSrc from '@/public/images/language/english.png';
import koreaSrc from '@/public/images/language/korea.png';

import { Link, usePathname, useRouter } from '@/i18n/routing';

interface HeaderProps {
  isBgBlack?: boolean;
}

export function Header({ isBgBlack }: HeaderProps) {
  const t = useTranslations('header');

  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const searchParams = useSearchParams();
  const isMenuOpen = searchParams.get('menu') === 'open';

  const toggleMenu = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (isMenuOpen) {
      newParams.delete('menu');
    } else {
      newParams.set('menu', 'open');
    }
    router.push(`${pathname}?${newParams.toString()}`);
  };

  const toggleLanguage = () => {
    const newLang = locale === 'en' ? 'ko' : 'en';
    const newParams = new URLSearchParams(searchParams.toString());

    router.replace(`${pathname}?${newParams.toString()}`, { locale: newLang });
  };

  const headerMenu = useHeaderMenuData();

  const [scrollPosition, setScrollPosition] = useState<'top' | 'middle' | 'bottom'>('top');
  const [openMenus, setOpenMenus] = useState<number[]>([]);

  const isWithoutHeaderPage = withoutHeaderPage.findIndex(v => pathname.startsWith(v)) > -1;

  const headerHeight = useMemo(() => {
    if (
      pathname.startsWith('/resource') ||
      pathname.startsWith('/contact') ||
      pathname.startsWith('/company') ||
      pathname.startsWith('/about')
    )
      return pageHeaderHeight.small;
    if (
      pathname.startsWith('/interview') ||
      pathname.startsWith('/partners') ||
      pathname.startsWith('/applications')
    )
      return pageHeaderHeight.smallMedium;
    if (pathname.startsWith('/products/service/')) return pageHeaderHeight.productService;

    return pageHeaderHeight.common;
  }, [pathname]);

  const bgStyle = useMemo(() => {
    if (isBgBlack) return 'md:bg-[#202020] md:text-white';

    if (isWithoutHeaderPage) return 'md:bg-white md:text-black';

    if (scrollPosition === 'top') return 'md:bg-black md:bg-opacity-10';
    if (scrollPosition === 'middle') return 'md:bg-black md:bg-opacity-10 md:backdrop-blur-2xl';
    return 'md:bg-white md:text-black';
  }, [isBgBlack, scrollPosition, isWithoutHeaderPage]);

  useEffect(() => {
    const listener = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos === 0) {
        setScrollPosition('top');
      } else if (currentScrollPos < headerHeight - 60) {
        setScrollPosition('middle');
      } else {
        setScrollPosition('bottom');
      }
    };
    listener();
    window.addEventListener('scroll', listener);

    return () => window.removeEventListener('scroll', listener);
  }, [headerHeight]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <div
      className={`flex flex-col z-50 w-full items-center ${isMenuOpen ? 'bg-white text-black' : 'text-white bg-[#202020]'} md:fixed ${bgStyle}`}>
      <div
        className={`flex max-w-[1440px] w-full items-center ${isMenuOpen ? 'justify-end' : 'justify-between'} px-[19px] h-[60px]`}>
        {!isMenuOpen && (
          <Link href={'/'} className='w-[130px] lg:w-[160px]'>
            <Ablestack />
          </Link>
        )}
        <div className='gap-10 px-[10px] font-bold hidden cursor-pointer md:flex'>
          {headerMenu.map((v, index) => (
            <div className='relative group' key={index}>
              <Link
                href={v.href}
                className={`${scrollPosition === 'bottom' || isWithoutHeaderPage ? 'hover:text-[#202020]' : 'hover:text-[#f5f5f5]'} py-2 block`}>
                {v.title}
              </Link>
              {v.subMenu && (
                <div className='absolute p-[14px] rounded-lg left-1/2 -translate-x-1/2 w-[170px] bg-black text-white opacity-0 transform pointer-events-none group-hover:pointer-events-auto translate-y-4 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0'>
                  {v.subMenu?.map((subItem, subIndex) => (
                    <div key={subIndex}>
                      <Link
                        href={subItem.href}
                        className='block py-2 text-[#ddd] text-[14px] duration-100 hover:text-white rounded'>
                        {subItem.title}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='cursor-pointer flex flex-row items-center gap-4'>
          <Image
            src={locale === 'ko' ? koreaSrc : englishSrc}
            alt=''
            className='w-[30px] h-[30px] hidden md:flex '
            onClick={toggleLanguage}
          />
          <Link
            href={'/contact'}
            className='cursor-pointer h-[30px] w-[96px] items-center justify-center select-none border px-[17px] text-[13px] rounded-md hidden md:flex transition duration-300 hover:brightness-90'>
            {t('contact')}
          </Link>
        </div>

        <div className='cursor-pointer flex md:hidden' onClick={toggleMenu}>
          {isMenuOpen ? <Close className='w-[28px] md:w-[32px]' /> : <Hamburger />}
        </div>
      </div>
      {isMenuOpen && (
        <div className='fixed top-[60px] left-0 right-0 w-full h-[calc(100%-60px)] bg-white z-50 flex flex-col px-[19px] pb-6 overflow-auto'>
          <div className='flex flex-col flex-1 text-[#7B7B7B]'>
            {headerMenu.map((v, index) => (
              <div
                key={index}
                className={`flex flex-col w-full ${index === 0 ? 'border-y border-y-[#EEEEEE]' : 'border-b border-b-[#EEEEEE]'}`}>
                <div className='flex items-center font-bold w-full'>
                  <Link href={v.href} className='flex-1 py-[18px]' onClick={toggleMenu}>
                    {v.title}
                  </Link>
                  {v.subMenu && (
                    <div
                      onClick={() =>
                        setOpenMenus(prev =>
                          prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index],
                        )
                      }
                      className='flex items-center px-4 focus:outline-none text-xl font-light'>
                      {openMenus.includes(index) ? '-' : '+'}
                    </div>
                  )}
                </div>
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    openMenus.includes(index) ? 'max-h-[300px]' : 'max-h-0'
                  }`}>
                  <div className='flex flex-col pl-6 py-1'>
                    {v.subMenu?.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        className='py-2'
                        href={subItem.href}
                        onClick={() => toggleMenu}>
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='flex justify-end my-4 gap-4'>
            <Image
              src={locale === 'ko' ? koreaSrc : englishSrc}
              alt=''
              className='w-[30px] h-[30px] '
              onClick={toggleLanguage}
            />
            <Link
              href={'/contact'}
              onClick={() => toggleMenu}
              className='flex cursor-pointer h-[30px] text-black items-center select-none border px-[17px] text-[13px] rounded-md transition duration-300 hover:brightness-90'>
              {t('contact')}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
