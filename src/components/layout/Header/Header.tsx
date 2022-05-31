import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { useDarkMode } from '@/hooks/common';

import { Button, CustomLink } from '@/components/common';

import { HeaderMenuItem, MenuItem, SubMenu, getSelectedItem } from './Menu';

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
    label: '제품',
    href: '/products',
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
      {
        label: 'Ablestack Appliance',
        href: '/products/ablestack/management',
      },
    ],
  },
  {
    label: '솔루션',
    href: '/solutions',
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
        href: '/solutions/web-app',
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
    label: '성공 사례',
    href: '/stories',
  },
  {
    label: '회사',
    href: '/company',
    subMenuItems: [
      {
        label: 'About Us',
        href: '/company',
      },
      {
        label: '파트너',
        href: '/company/partners',
      },
      {
        label: '문의하기',
        href: '/company/contact',
      },
    ],
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

  const [selectedItem, setSelectedItem] = useState<HeaderMenuItem | undefined>();
  const { darkMode, setDarkMode } = useDarkMode();

  useEffect(() => {
    setSelectedItem(getSelectedItem(menuItems, asPath));
  }, [asPath]);

  return (
    <header className='sticky top-0 z-20 flex h-16 w-full justify-center'>
      <nav
        onMouseEnter={() => setIsSubMenuOpen(true)}
        onMouseLeave={() => {
          setIsSubMenuOpen(false);
          setSubMenuItems(undefined);
        }}
        className='group relative flex h-fit max-w-page-full flex-1 flex-col rounded-b-lg bg-white shadow-md'>
        {/* Main menu section */}
        <section className='flex h-16 w-full items-center justify-between px-8'>
          {/* Logo */}
          <div className=''>
            <CustomLink href='/'>
              <div className='flex items-center'>
                <span className='text-2xl font-bold text-sky-400'>ABLECLOUD</span>
              </div>
            </CustomLink>
          </div>

          <div className='flex h-full flex-1 md:flex'>
            <ul className='flex h-full flex-1 justify-between'>
              {menuItems.map(item => (
                <li
                  className='flex-1'
                  onMouseEnter={() => setSubMenuItems(item.subMenuItems)}
                  key={item.href}>
                  <MenuItem {...item} selectedItem={selectedItem} />
                </li>
              ))}
            </ul>
          </div>

          {/* Header right section */}
          <div className='flex items-center justify-center space-x-4 '>
            {/* <Switch
              className='bg-slate-600'
              value={Boolean(darkMode)}
              setValue={setDarkMode}
              checkedChildren={<Moon className='h-full w-full fill-slate-100' />}
              unCheckedChildren={<Sun className='h-full w-full fill-slate-100' />}
            /> */}

            {/* Demo button */}
            <CustomLink href='/demo' hoverBehavoir='none'>
              <Button>데모 요청하기</Button>
            </CustomLink>
          </div>
        </section>

        {/* Sub menu section */}
        {isSubMenuOpen && subMenuItems && (
          <section className='flex h-full w-full items-center border-t-0.5 border-slate-200 px-32 md:flex'>
            <SubMenu items={subMenuItems} selectedItem={selectedItem} />
          </section>
        )}
      </nav>
    </header>
  );
}
