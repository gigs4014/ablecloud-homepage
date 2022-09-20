import { footerInformation, footerMenus } from '@/constants';
import { v4 as uuid } from 'uuid';

import { cls } from '@/utils';

import { CustomLink } from '@/components/common';

import Logo_ablecloud_white from '@/public/images/logos/ablecloud_logo_white.svg';

function FooterSite() {
  return (
    <section className={'relative hidden h-[227px] pt-[49px] pb-[7px] lg:block'}>
      <ul className={` m-auto flex w-[1200px] max-w-page-full list-none justify-between`}>
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

function FooterInformation() {
  return (
    <section className={'relative flex min-h-[150px] bg-[#414141]'}>
      <div className={'m-auto flex items-center justify-center p-[20px]'}>
        <div>
          <Logo_ablecloud_white className='mx-[22.5px]' />
        </div>
        <div>
          {footerInformation.map((info, index) => {
            return (
              <div key={index} className='flex flex-wrap justify-between gap-x-4'>
                {info.map(({ label, description }, i) => {
                  return (
                    <p
                      key={i}
                      className={`keep-all mb-[0px] inline-block tracking-wide text-white`}>
                      <label className={'font-bold'}>{label}</label>
                      <label className={'font-normal'}>{description}</label>
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className={`relative w-full`}>
      {/* simplified logo */}
      {/* copyright */}
      {/* social logos */}
      <FooterSite />
      <FooterInformation />
      {/* pages not in header */}
    </footer>
  );
}
