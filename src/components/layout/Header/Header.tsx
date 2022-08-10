import { useEffect, useRef, useState } from 'react';

import { useRouter } from 'next/router';

import { menuItems } from '@/constants';
import { useMediaQuery } from 'react-responsive';
import { v4 as uuid } from 'uuid';

import useScrollDown from '@/hooks/common/useScrollDown';
import { HeaderMenuItem, TNullable } from '@/types';
import { cls } from '@/utils';

import { CustomLink } from '@/components/common';

import Logo_ablecloud_default from '@/public/images/logos/ablecloud_logo_default.svg';
import Logo_ablecloud_white from '@/public/images/logos/ablecloud_logo_white.svg';
import BurgerSVG from '@/public/images/new/burger.svg';
import CloseSVG from '@/public/images/new/close.svg';

import { MenuItem, MobileMenuItem, getSelectedItem } from './Menu';

export default function Header() {
  const { asPath } = useRouter();
  const [subMenuItems, setSubMenuItems] = useState<Array<HeaderMenuItem> | undefined>();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isBigScreen, setIsBigScreen] = useState<boolean | undefined>();
  const [isProductsAbleStackPage, setIsProductAbleStackPage] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const bigScreen = useMediaQuery({ query: '(min-width: 768px)' });

  const [selectedItem, setSelectedItem] = useState<HeaderMenuItem | undefined>();

  const headerRef = useRef<TNullable<HTMLDivElement>>(null);

  // const { darkMode, setDarkMode } = useDarkMode();

  const isCurrentScrollTop = useScrollDown(headerRef);

  useEffect(() => {
    if (asPath.includes('/products/ablestack')) {
      setIsProductAbleStackPage(true);
    } else {
      setIsProductAbleStackPage(false);
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
      className={`${
        isCurrentScrollTop && isProductsAbleStackPage && isBigScreen ? 'absolute' : 'sticky'
      } top-0 z-20 flex ${
        isBigScreen ? 'h-[110px]' : 'min-h-[60px]'
      } w-full items-center justify-center bg-white`}>
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
        <section className='relative flex w-full items-center justify-between px-4'>
          {/* Logo */}
          <div className='px-4'>
            <CustomLink href='/'>
              {isCurrentScrollTop && isProductsAbleStackPage && isBigScreen ? (
                <Logo_ablecloud_white />
              ) : (
                <Logo_ablecloud_default />
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
                    isProductsAbleStackPage={isCurrentScrollTop && isProductsAbleStackPage}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <>
              {isMobileMenu ? (
                <>
                  <div className={'cursor-pointer'} onClick={() => setIsMobileMenu(false)}>
                    <CloseSVG width={'22'} height={'22'} />
                  </div>
                  <ul
                    className={
                      'absolute top-[46px] left-0 z-30 max-h-[483px] w-full overflow-y-auto  bg-white px-[20px]'
                    }>
                    {menuItems.map(item => (
                      <li key={uuid()}>
                        <MobileMenuItem item={item} selectedItem={selectedItem} />
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div className={'cursor-pointer'} onClick={() => setIsMobileMenu(true)}>
                  <BurgerSVG width={'22'} height={'22'} />
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
