import { footerMenus } from '@/constants';
import { v4 as uuid } from 'uuid';

import { cls } from '@/utils';

import { CustomLink } from '@/components/common';

import Logo_ablecloud_white from '@/public/images/logos/ablecloud_logo_white.svg';

// 사용안함
function FooterSite() {
  return (
    <section className={'relative hidden h-56 px-5 pt-12 pb-2 lg:block'}>
      <ul className={`m-auto flex max-w-page-full list-none justify-between px-4`}>
        {footerMenus.map(menu => (
          <li key={uuid()} className={'min-w-50 float-left'}>
            <ol className={'bg-red'}>
              <li className='font-[700] text-[#555555]'>{menu.label}</li>
              {menu.subMenuItems.map(subMenu => (
                <CustomLink
                  key={uuid()}
                  href={subMenu.href}
                  className={cls`mt-2 flex h-full w-full items-center justify-between text-[#555555]`}>
                  <li>{subMenu.label}</li>
                </CustomLink>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </section>
  );
}

function FooterInformation() {
  return (
    <section className={'w-full bg-[#414141] py-8'}>
      <div className='m-auto flex h-full max-w-[1200px] flex-col justify-between px-12 text-[14px] text-white md:flex-row '>
        <div className='flex flex-col  gap-4 md:flex-row md:gap-9 '>
          <div className='flex flex-col gap-4'>
            <div>
              <span className='font-bold'>회사명 </span>
              <span>(주)에이블클라우드</span>
            </div>
            <div>
              <span className='font-bold'>본사 </span>
              <span>서울특별시 영등포구 영신로 220 KnK디지털타워 1808호</span>
            </div>
            <div>
              <span className='font-bold'>연구소 </span>
              <span>대전광역시 대덕구 대화로106번길 66 811호 </span>
            </div>
            <div>
              <span className='font-bold'>Copyright (주)에이블클라우드. All Rights Reserved. </span>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div>
              <span className='font-bold'>사업자등록번호 </span>
              <span>886-86-02158</span>
            </div>
            <div>
              <span className='font-bold'>전화 </span>
              <span>02-456-7667</span>
            </div>
            <div>
              <span className='font-bold'>팩스 </span>
              <span>02-456-7262</span>
            </div>
          </div>
        </div>
        <div className='mt-4 flex justify-end md:mt-0'>
          <Logo_ablecloud_white width={175} />
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className={`relative mt-auto w-full`}>
      {/* simplified logo */}
      {/* copyright */}
      {/* social logos */}
      {/* <FooterSite /> */}
      <FooterInformation />
      {/* pages not in header */}
    </footer>
  );
}
