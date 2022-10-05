import { footerInformation2, footerMenus } from '@/constants';
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
    <section className={'relative w-full bg-[#414141] py-8'}>
      <div className={'m-auto flex w-full max-w-page-full flex-wrap px-8 md:flex-nowrap'}>
        <div className='my-6 mr-24 flex items-center md:my-0 '>
          <Logo_ablecloud_white />
        </div>
        <div className='flex flex-col'>
          {footerInformation2.map((info, index) => {
            return (
              <div key={index}>
                {info.map((value, index) => {
                  return (
                    <div key={index} className={`mr-2 inline-flex tracking-wide text-black`}>
                      <div className='flex'>
                        <div className='text-[14px] text-white'>
                          {value.label}&nbsp;{value.description}
                        </div>
                        {info.length > 1 && index + 1 < info.length ? (
                          <div className='my-1 ml-2 hidden bg-white pr-[1px] md:flex'></div>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>
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
