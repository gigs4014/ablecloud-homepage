import { useEffect, useRef, useState } from 'react';

import { useRouter } from 'next/router';

import { menuItems } from '@/constants';
import { useMediaQuery } from 'react-responsive';
import { v4 as uuid } from 'uuid';

// import useScrollDown from '@/hooks/common/useScrollDown';
import { HeaderMenuItem, TNullable } from '@/types';
import { cls } from '@/utils';

import { CustomLink } from '@/components/common';

import Logo_ablecloud_default from '@/public/images/logos/ablecloud_logo_default.svg';
import Logo_ablecloud_white from '@/public/images/logos/ablecloud_logo_white.svg';
import BlackBurgerSVG from '@/public/images/new/burger.svg';
import BlackCloseSVG from '@/public/images/new/close.svg';
import WhiteBurgerSVG from '@/public/images/new/white_burger.svg';

import { MenuItem, MobileMenuItem, getSelectedItem } from './Menu';

export default function Header(ref: React.MutableRefObject<TNullable<HTMLDivElement>>) {
  const { asPath } = useRouter();
  const [subMenuItems, setSubMenuItems] = useState<Array<HeaderMenuItem> | undefined>();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isBigScreen, setIsBigScreen] = useState<boolean | undefined>();
  const [isTextWhitePage, setIsTextWhitePage] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const bigScreen = useMediaQuery({ query: '(min-width: 768px)' });

  const [selectedItem, setSelectedItem] = useState<HeaderMenuItem | undefined>();

  const headerRef = useRef<TNullable<HTMLDivElement>>(null);

  // let isCurrentScrollTop = useScrollDown(headerRef);
  const [isCurrentScrollTop, setIsCurrentScrollTop] = useState<boolean | undefined>();
  const [isWhiteHeader, setIsWhiteHeader] = useState<boolean | undefined>();

  useEffect(() => {
    const listener = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos == 0) {
        setIsCurrentScrollTop(true);
      } else {
        setIsCurrentScrollTop(false);
      }
    };
    listener();
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  });

  useEffect(() => {
    setIsTextWhitePage(false);
    setIsWhiteHeader(false);
    if (asPath.includes('/products')) {
      if (
        ['mold', 'block', 'files', 'slio', 'station', 'genie'].some(name => asPath.includes(name))
      ) {
        setIsTextWhitePage(false);
      } else {
        setIsTextWhitePage(true);
      }
    } else if (asPath.includes('/interview')) {
      if (['kacpta'].some(name => asPath.includes(name))) {
        setIsTextWhitePage(true);
      } else {
        setIsTextWhitePage(false);
      }
    } else {
      setIsTextWhitePage(false);
      if (asPath.includes('/partners') || asPath == '/') {
        setIsTextWhitePage(true);
      }
    }
    setSelectedItem(getSelectedItem(menuItems, asPath));
  }, [asPath]);

  useEffect(() => {
    setIsBigScreen(bigScreen);
  }, [bigScreen]);

  // useEffect(() => {
  //   console.log({ isCurrentScrollTop });
  // }, [isCurrentScrollTop]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 z-20 flex ${
        isBigScreen ? 'h-[110px]' : 'min-h-[60px]'
      } w-full items-center justify-center ${
        isCurrentScrollTop ? (!isWhiteHeader ? 'bg-none' : 'bg-white') : 'bg-white'
      }`}>
      <nav
        onMouseEnter={() => isBigScreen && setIsSubMenuOpen(true)}
        onMouseLeave={() => {
          if (isBigScreen) {
            setIsSubMenuOpen(false);
            setSubMenuItems(undefined);
          }
        }}
        className='group relative z-20 flex h-fit max-w-page-full flex-1 flex-col flex-nowrap '>
        {/* Main menu section */}
        <section className='flex w-full items-center justify-between px-2'>
          {/* Logo */}
          <div className='pl-2 pt-2'>
            <CustomLink href='/'>
              {isCurrentScrollTop && !isWhiteHeader && isTextWhitePage ? (
                // isBigScreen &&
                // !isProductsAbleStackPageException ?
                <Logo_ablecloud_white width={isBigScreen ? '180' : '125'} />
              ) : (
                <Logo_ablecloud_default width={isBigScreen ? '180' : '125'} />
              )}
            </CustomLink>
          </div>

          {isBigScreen ? (
            <ul>
              {menuItems.map(item => (
                <li className={cls`inline-flex w-fit`} key={uuid()}>
                  <MenuItem
                    item={item}
                    selectedItem={selectedItem}
                    isProductsAbleStackPage={isCurrentScrollTop && isTextWhitePage}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <>
              {isMobileMenu ? (
                <>
                  <div
                    className={'cursor-pointer'}
                    onClick={() => {
                      setIsWhiteHeader(false);
                      setIsMobileMenu(false);
                    }}>
                    <BlackCloseSVG width={'26'} height={'26'} />
                  </div>
                  <ul
                    className={
                      'absolute top-[46px] left-0 z-30 max-h-[483px] w-full overflow-y-auto  bg-white px-[20px]'
                    }>
                    {menuItems.map(item => (
                      <li key={uuid()}>
                        <MobileMenuItem
                          item={item}
                          selectedItem={selectedItem}
                          setIsMobileMenu={setIsMobileMenu}
                        />
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div
                  className={'cursor-pointer'}
                  onClick={() => {
                    setIsWhiteHeader(true);
                    setIsMobileMenu(true);
                  }}>
                  {isTextWhitePage && isCurrentScrollTop ? (
                    <WhiteBurgerSVG width={'26'} height={'26'} />
                  ) : (
                    <BlackBurgerSVG width={'26'} height={'26'} />
                  )}
                </div>
              )}
            </>
          )}

          {/* Header right section */}
          {/* <div className='hidden items-center justify-center space-x-4 md:flex'>
            <Switch
              className='bg-slate-600'
              value={Boolean(darkMode)}
              setValue={setDarkMode}
              checkedChildren={<Moon className='h-full w-full fill-slate-100' />}
              unCheckedChildren={<Sun className='h-full w-full fill-slate-100' />}
            />

            <CustomLink href='/demo' hoverBehavoir='none'>
              <Button>데모 요청하기</Button>
            </CustomLink>
          </div> */}
        </section>
      </nav>
    </header>
  );
}
