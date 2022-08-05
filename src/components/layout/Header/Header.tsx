import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { menuItems } from '@/constants';
import { useMediaQuery } from 'react-responsive';
import { v4 as uuid } from 'uuid';

import { useDarkMode } from '@/hooks/common';
import { HeaderMenuItem } from '@/types';
import { cls } from '@/utils';

import { CustomLink } from '@/components/common';

import Logo_ablecloud_default from '@/public/images/logos/ablecloud_logo_default.svg';

import { MenuItem, getSelectedItem } from './Menu';

export default function Header() {
  const { asPath } = useRouter();
  const [subMenuItems, setSubMenuItems] = useState<Array<HeaderMenuItem> | undefined>();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [focusedMenu, setFocusedMenu] = useState<HeaderMenuItem | undefined>();
  const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' });

  const [selectedItem, setSelectedItem] = useState<HeaderMenuItem | undefined>();
  const { darkMode, setDarkMode } = useDarkMode();

  useEffect(() => {
    setSelectedItem(getSelectedItem(menuItems, asPath));
  }, [asPath]);

  useEffect(() => {
    console.log({ selectedItem });
  }, [selectedItem]);
  return (
    <header className='sticky top-0 z-20 flex h-[110px] w-full items-center justify-center bg-white '>
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
        <section className='flex w-full items-center justify-between px-4'>
          {/* Logo */}
          <div className='px-4'>
            <CustomLink href='/'>
              <Logo_ablecloud_default />
            </CustomLink>
          </div>

          <ul>
            {menuItems.map(item => (
              <li
                className={cls`inline-flex w-fit`}
                onMouseEnter={() => setSubMenuItems(item.subMenuItems)}
                key={uuid()}>
                <MenuItem item={item} selectedItem={selectedItem} />
              </li>
            ))}
          </ul>

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

      {/* mobile overlay */}
      {isSubMenuOpen && !isBigScreen && (
        <div
          className={cls`fixed inset-0 z-10 bg-gray-500 bg-opacity-75 ${{
            hidden: !isSubMenuOpen,
          }}`}
          onClick={() => setIsSubMenuOpen(false)}
        />
      )}
    </header>
  );
}
