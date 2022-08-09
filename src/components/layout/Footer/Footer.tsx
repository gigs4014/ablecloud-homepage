import { footerMenus } from '@/constants';
import { v4 as uuid } from 'uuid';

import { cls } from '@/utils';

import { CustomLink } from '@/components/common';

import Logo_ablecloud_gray from '@/public/images/logos/ablecloud_logo_gray.svg';

function FooterSite() {
  return (
    <section className={'hidden h-[330px] py-[50px] lg:block'}>
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
    <footer className={`w-full max-w-page-full`}>
      {/* simplified logo */}
      {/* copyright */}
      {/* social logos */}
      <FooterSite />
      <div className={'mx-2.5 my-2.5 flex justify-start'}>
        <Logo_ablecloud_gray />
      </div>
      {/* pages not in header */}
    </footer>
  );
}
