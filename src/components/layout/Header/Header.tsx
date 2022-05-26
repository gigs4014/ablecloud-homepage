import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { useDarkMode } from '@/hooks/common';

import { Button, CustomLink } from '@/components/common';

import Logo from '@/public/logo.png';

import { HeaderMenuItem, MenuItem, SubMenu, getSelectedItem } from './Menu';

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
          { label: 'Cube - OS', href: '/products/ablestack/cube' },
          { label: 'Glue - 분산 스토리지', href: '/products/ablestack/glue' },
          { label: 'Cell - 내장 하이퍼바이저', href: '/products/ablestack/cell' },
          { label: 'Mold - 인프라 및 IT 운영', href: '/products/ablestack/mold' },
          { label: 'Koral - 쿠버네티스 클러스터', href: '/products/ablestack/koral' },
        ],
      },
      {
        type: 'group',
        label: 'Management',
        href: '/products/ablestack/management',
        subMenuItems: [
          { label: 'Wall - Monitoring platform', href: '/products/ablestack/management/wall' },
          { label: 'Genie - Continuous Delivery', href: '/products/ablestack/management/genie' },
          {
            label: 'Station - Platform as a Service',
            href: '/products/ablestack/management/station',
          },
        ],
      },
      {
        type: 'group',
        label: 'Storage',
        href: '/products/ablestack/glue',
        subMenuItems: [
          { label: 'Volume - Block Storage', href: '/products/ablestack/glue/volume' },
          { label: 'Files - File System', href: '/products/ablestack/glue/files' },
          { label: 'Object - Object Storage', href: '/products/ablestack/glue/object' },
        ],
      },
      {
        type: 'group',
        label: 'Network & Security',
        href: '/products/ablestack/network',
        subMenuItems: [
          { label: 'Track - Virtual Networking', href: '/products/ablestack/network/track' },
          { label: 'Atom - Micro Segmentation', href: '/products/ablestack/network/atom' },
        ],
      },
      {
        type: 'group',
        label: 'End user tools',
        subMenuItems: [
          {
            label: 'Works - Desktop as a Service',
            href: '/products/ablestack/end-user-tools/works',
          },
        ],
      },
      {
        type: 'group',
        label: 'Hardware',
        subMenuItems: [
          {
            label: 'AbleStack Appliance',
            href: '/products/ablestack/hardware',
          },
        ],
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
        label: '가상화/클라우드',
        href: '/solutions/virtualization',
      },
      {
        label: '감시 시스템',
        href: '/solutions/monitoring',
      },
      {
        label: '해외지사/원격근무',
        href: '/solutions/remote-work',
      },
      {
        label: '엣지 컴퓨팅',
        href: '/solutions/edge-computing',
      },
      {
        label: '클라우드네이티브',
        href: '/solutions/cloudnative',
      },
    ],
  },
  {
    label: '성공사례',
    href: '/stories',
  },
  {
    label: '회사소개',
    href: '/about-us',
    subMenuItems: [
      {
        label: '채널 협력',
        href: '/about-us/partners',
      },
      {
        label: '문의하기',
        href: '/about-us#contact',
      },
      {
        label: '찾아오시는길',
        href: '/about-us#path',
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
    <header className='fixed z-20 flex h-16 w-full justify-center'>
      <nav
        onMouseEnter={() => setIsSubMenuOpen(true)}
        onMouseLeave={() => {
          setIsSubMenuOpen(false);
          setSubMenuItems(undefined);
        }}
        className='group relative flex h-fit max-w-page-full flex-1 flex-col rounded-b-lg bg-white shadow-md'>
        {/* Main menu section */}
        <section className='flex h-16 w-full items-center justify-between px-6'>
          {/* Logo */}
          <div className=''>
            <CustomLink href='/'>
              <div className='h-32 w-52'>
                <div className='relative h-full max-w-full'>
                  <Image
                    src={Logo}
                    alt='Ablecloud logo'
                    style={{
                      filter:
                        'brightness(0) saturate(100%) invert(56%) sepia(22%) saturate(2062%) hue-rotate(158deg) brightness(104%) contrast(75%)',
                    }}
                    layout='fill'
                    objectFit='contain'
                    quality={100}
                  />
                </div>
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
            <CustomLink href='/demo' className='hover:text-white'>
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
