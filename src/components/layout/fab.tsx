'use client';

import { useLocale } from 'next-intl';

import { useRef, useState } from 'react';

import FabCloseIcon from '@/public/icons/common/fab-close.svg';
import FabIcon from '@/public/icons/common/fab.svg';

import { Link } from '@/i18n/routing';

const items = [
  { label: '딜 등록 신청', href: 'https://forms.gle/8Pf78qMunpjsmkt88' },
  { label: '견적 문의', href: 'https://forms.gle/cCXhjx9gdgBYKM7Y9' },
  {
    label: '파트너 교육 신청',
    href: 'https://forms.gle/vBJQrMViMQLyMD826',
  },
];

export function Fab() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const locale = useLocale();

  return locale === 'ko' ? (
    <div className='fixed bottom-8 right-6 z-[100]'>
      <div
        className={`fixed inset-0 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        onClick={() => setOpen(false)}
      />

      <div
        ref={panelRef}
        className={`absolute bottom-[4.5rem] right-0 origin-bottom-right
          rounded-2xl bg-white shadow-xl ring-1 ring-black/5
          px-4 py-3 w-40
          transition-all duration-200
          ${open ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95 pointer-events-none'}`}>
        <nav className='flex flex-col'>
          {items.map(it => (
            <Link
              target='_blank'
              key={it.href}
              href={it.href}
              className='py-2 text-center text-gray-700 hover:bg-gray-50 rounded-md'>
              {it.label}
            </Link>
          ))}
        </nav>
      </div>
      <div
        onClick={() => setOpen(v => !v)}
        className={`flex items-center justify-center w-16 h-16 rounded-full
          bg-black text-white shadow-xl
          transition-transform duration-200 ${open ? 'bg-black rotate-45' : 'bg-white rotate-0'}`}>
        {open ? <FabCloseIcon /> : <FabIcon />}
      </div>
    </div>
  ) : (
    <></>
  );
}
