import { footerMenus } from '@/constants';
import { v4 as uuid } from 'uuid';

import { cls } from '@/utils';

import { CustomLink } from '@/components/common';

import Logo_ablecloud_gray from '@/public/images/logos/ablecloud_logo_gray.svg';

function FooterSite() {
  return (
    <section className={'hidden h-fit py-[50px] px-8 lg:block'}>
      <ul className={`flex max-w-page-full list-none justify-between`}>
        {footerMenus.map(menu => (
          <li key={uuid()} className={'min-w-50 float-left'}>
            <ol className={'bg-red'}>
              <li className='font-[700]'>{menu.label}</li>
              {menu.subMenuItems.map(subMenu => (
                <CustomLink
                  key={uuid()}
                  href={subMenu.href}
                  className={cls`mt-[8px] flex h-full w-full items-center justify-between`}>
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

export default function Footer() {
  return (
    <footer className={`hidden w-full max-w-page-full lg:block`}>
      {/* simplified logo */}
      {/* copyright */}
      {/* social logos */}
      <FooterSite />

      <div className={'my-8 flex justify-between px-8'}>
        <Logo_ablecloud_gray />

        <div className='flex space-x-4 text-xs text-neutral-500'>
          <span>서비스 이용약관</span>

          <span>개인정보 처리방침</span>

          <span>주소</span>

          <ul className='flex space-x-1'>
            <li>
              <p>{`연구소(대전)`}</p>
              <p>{`본사(서울)`}</p>
            </li>

            <li>
              <p className='before:content-["_:_"] '>{`대전광역시 대덕구 대화동 대전로 106번길 66, 펜타플렉스 811호`}</p>
              <p className='before:content-["_:_"] '>{`서울특별시 영등포구 영신로 220 KnK디지털타워 1808호`}</p>
            </li>
          </ul>
        </div>
      </div>
      {/* pages not in header */}
    </footer>
  );
}
