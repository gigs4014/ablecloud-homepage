import { useEffect, useMemo, useRef, useState } from 'react';

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
import WhiteCloseSVG from '@/public/images/new/white_close.svg';

import { MenuItem, MobileMenuItem, getSelectedItem } from './Menu';

export default function Header(ref: React.MutableRefObject<TNullable<HTMLDivElement>>) {
  const { asPath } = useRouter();

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isBigScreen, setIsBigScreen] = useState<boolean>(false);
  const [isTextWhitePage, setIsTextWhitePage] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const [selectedItem, setSelectedItem] = useState<HeaderMenuItem | undefined>();

  const [isCurrentScrollTop, setIsCurrentScrollTop] = useState<boolean>(false);
  const [isWhiteHeader, setIsWhiteHeader] = useState<boolean>(false);

  const headerColor = useMemo(() => {
    if (asPath.startsWith('/about')) {
      if (asPath.includes('infra')) {
        return 'bg-[#17244F]';
      }
      if (asPath.includes('performance')) {
        return 'bg-[#000000]';
      }
      if (asPath.includes('effect')) {
        return 'bg-[#000020]';
      }
    }

    return 'bg-[white]';
  }, [asPath]);

  const headerRef = useRef<TNullable<HTMLDivElement>>(null);

  const bigScreen = useMediaQuery({ query: '(min-width: 768px)' });

  const toggleMenu = () => {
    setIsWhiteHeader(prevState => !prevState);
    setIsMobileMenu(prevState => !prevState);
  };

  useEffect(() => {
    const listener = () => {
      const currentScrollPos = window.pageYOffset;
      setIsCurrentScrollTop(isSubMenuOpen ? false : currentScrollPos === 0);
    };
    listener();
    window.addEventListener('scroll', listener);

    return () => window.removeEventListener('scroll', listener);
  });

  useEffect(() => {
    setIsWhiteHeader(false);
    setIsTextWhitePage(false);
    setIsSubMenuOpen(false);

    if (asPath.startsWith('/about')) {
      setIsTextWhitePage(true);
    } else if (asPath.includes('/products')) {
      setIsTextWhitePage(
        !['mold', 'block', 'files', 'slio', 'station', 'genie'].some(name => asPath.includes(name)),
      );
    } else if (asPath.includes('/interview/')) {
      setIsTextWhitePage(![].some(name => asPath.includes(name)));
    } else {
      setIsTextWhitePage(asPath.includes('/partners') || asPath === '/');
    }

    setSelectedItem(getSelectedItem(menuItems, asPath));
  }, [asPath]);

  useEffect(() => {
    setIsBigScreen(bigScreen);
  }, [bigScreen]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 z-20 flex ${
        isBigScreen ? 'h-[110px]' : 'min-h-[60px]'
      } w-full items-center justify-center ${isSubMenuOpen && `${headerColor}`} ${
        isCurrentScrollTop ? (!isWhiteHeader ? 'bg-none' : `${headerColor}`) : `${headerColor}`
      } `}>
      <nav
        onMouseOver={() => {
          if (!isBigScreen) return;
          setIsSubMenuOpen(true);
        }}
        onMouseOut={() => {
          if (!isBigScreen) return;
          setIsSubMenuOpen(false);
        }}
        className='group relative z-20 flex h-fit max-w-page-full flex-1 flex-col flex-nowrap '>
        {/* Main menu section */}
        <section className='flex w-full items-center justify-between px-2'>
          {/* Logo */}
          <div
            className='pl-2 pt-1'
            onClick={() => {
              if (bigScreen) return;
              setIsWhiteHeader(false);
              setIsMobileMenu(false);
            }}>
            <CustomLink href='/'>
              {isCurrentScrollTop && !isWhiteHeader && isTextWhitePage && !isSubMenuOpen ? (
                // isBigScreen &&
                // !isProductsAbleStackPageException ?
                <Logo_ablecloud_white width={isBigScreen ? '180' : '125'} />
              ) : (
                <>
                  {headerColor === 'bg-[white]' ? (
                    <Logo_ablecloud_default width={isBigScreen ? '180' : '125'} />
                  ) : (
                    <Logo_ablecloud_white width={isBigScreen ? '180' : '125'} />
                  )}
                </>
              )}
            </CustomLink>
          </div>

          {isBigScreen ? (
            <ul className='flex'>
              {menuItems.map(item => (
                <li key={uuid()}>
                  <MenuItem
                    item={item}
                    selectedItem={selectedItem}
                    isProductsAbleStackPage={
                      isCurrentScrollTop && isTextWhitePage && !isSubMenuOpen
                    }
                    headerColor={headerColor}
                    isAboutPage={headerColor !== 'bg-[white]'}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <>
              {isMobileMenu ? (
                <>
                  <div className={'cursor-pointer'} onClick={toggleMenu}>
                    {headerColor === 'bg-[white]' ? (
                      <BlackCloseSVG width={'26'} height={'26'} />
                    ) : (
                      <WhiteCloseSVG width={'26'} height={'26'} />
                    )}
                  </div>
                  <ul
                    className={cls`absolute top-[46px] left-0 z-30 max-h-[483px] w-full overflow-y-auto  ${headerColor} ${
                      headerColor === 'bg-[white]' ? 'text-[#444]' : 'text-white'
                    } px-[20px] `}>
                    {menuItems.map(item => (
                      <li key={uuid()}>
                        <MobileMenuItem
                          item={item}
                          selectedItem={selectedItem}
                          setIsMobileMenu={setIsMobileMenu}
                          setIsWhiteHeader={setIsWhiteHeader}
                          isAboutPage={headerColor !== 'bg-[white]'}
                        />
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div className={'cursor-pointer'} onClick={toggleMenu}>
                  {isTextWhitePage && isCurrentScrollTop && !isSubMenuOpen ? (
                    <WhiteBurgerSVG width={'26'} height={'26'} />
                  ) : (
                    <>
                      {headerColor === 'bg-[white]' ? (
                        <BlackBurgerSVG width={'26'} height={'26'} />
                      ) : (
                        <WhiteBurgerSVG width={'26'} height={'26'} />
                      )}
                    </>
                  )}
                </div>
              )}
            </>
          )}
        </section>
      </nav>
    </header>
  );
}
