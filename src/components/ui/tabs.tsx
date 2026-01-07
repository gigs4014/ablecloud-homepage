'use client';

import { useEffect, useRef, useState } from 'react';

import { Link, usePathname } from '@/i18n/routing';

interface TabsProps {
  tabs: { text: string; href: string }[];
}

export function Tabs({ tabs }: TabsProps) {
  const pathname = usePathname();

  const activeIndex = tabs.findIndex(tab => pathname.startsWith(tab.href));

  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [bgStyle, setBgStyle] = useState<{ width: string; left: string } | undefined>(undefined);

  useEffect(() => {
    const activeTab = tabRefs.current[activeIndex];
    if (activeIndex !== -1 && activeTab) {
      const container = activeTab.parentElement?.parentElement;

      if (container) {
        const rect = activeTab.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const padding = window.innerWidth >= 768 ? 24 : 16; // md 이상이면 24, 아니면 16
        const extraWidth = window.innerWidth >= 768 ? 48 : 32;

        setBgStyle({
          width: `${rect.width + extraWidth}px`,
          left: `${rect.left - containerRect.left - padding}px`,
        });
      }
    }
  }, [activeIndex]);

  return (
    <div className='flex justify-center'>
      <div className='p-2 bg-[#F6F7F8] rounded-full'>
        <div className='relative flex'>
          <div
            className={`absolute top-0 h-full bg-[#202020] transition-all rounded-full duration-300 shadow-md`}
            style={bgStyle}
          />
          {tabs.map((tab, idx) => (
            <Link
              key={idx}
              href={tab.href}
              className={`flex items-center px-4 xsm:px-6 rounded-full ${
                !bgStyle && activeIndex === idx ? 'bg-[#202020]' : ''
              }`}>
              <div
                ref={el => {
                  tabRefs.current[idx] = el;
                }}
                className={`relative py-[10px] text-sm transition-all font-bold duration-200 z-10 ${
                  activeIndex === idx ? 'text-white' : 'text-[#787878]'
                }`}>
                {tab.text}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
