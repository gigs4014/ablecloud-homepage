import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { useMediaQuery } from 'react-responsive';

import { useDarkMode } from '@/hooks/common';
import { cls } from '@/utils';

import { CustomLink } from '@/components/common';

import Logo_ablecloud_default from '@/public/images/logos/ablecloud_logo_default.svg';

import { HeaderMenuItem, MenuItem, getSelectedItem } from './Menu';

/**
## 메뉴 구성

### 제품

- Ablestack HCI
    - Core (cube, cell, glue)
    - Management (mold, koral, wall, genie, station)
- Ablestack Appliance

### 솔루션

- 프라이빗 클라우드
- 하이브리드 클라우드 (Genie 관련 내용 포함)
- 웹 애플리케이션
- 빅데이터
- 영상감시
- IoT
- 엣지 컴퓨팅
- 인공지능
- 최종 사용자 컴퓨팅 (VDI, Works 관련 내용 포함)

### 성공 사례

### 회사

- About Us
- 파트너
- 문의하기

### 자료

- Blog
- Docs
 */
const menuItems: Array<HeaderMenuItem> = [
  {
    label: '회사소개',
    href: '/company',
  },
  {
    label: '제품',
    subMenuItems: [
      {
        type: 'group',
        label: 'Ablestack HCI',
        href: '/products/ablestack',
        subMenuItems: [
          { label: 'Core', href: '/products/ablestack/core' },
          { label: 'Management', href: '/products/ablestack/management' },
        ],
      },
    ],
  },
  {
    label: '솔루션',
    subMenuItems: [
      {
        label: '프라이빗 클라우드',
        href: '/solutions/private-cloud',
      },
      {
        label: '하이브리드 클라우드',
        href: '/solutions/hybrid-cloud',
      },
      {
        label: '웹 애플리케이션',
        href: '/solutions/webapp',
      },
      {
        label: '빅데이터',
        href: '/solutions/bigdata',
      },
      {
        label: '영상감시',
        href: '/solutions/monitoring',
      },
      {
        label: 'IoT',
        href: '/solutions/iot',
      },
      {
        label: '엣지 컴퓨팅',
        href: '/solutions/edge-computing',
      },
      {
        label: '인공지능',
        href: '/solutions/ai',
      },
      {
        label: '최종 사용자 컴퓨팅',
        href: '/solutions/euc',
      },
    ],
  },
  {
    label: '성공사례',
    href: '/appliance',
  },
  {
    label: '파트너',
    href: '/partners',
  },
  {
    label: '제품문의',
    href: '/company/contact',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
];

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
        className='group relative z-20 flex h-fit max-w-page-full flex-1 flex-col '>
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
                key={item.href}>
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
