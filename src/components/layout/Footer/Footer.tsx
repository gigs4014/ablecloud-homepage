import { CustomLink } from '@/components/common';

export default function Footer() {
  return (
    <footer className='flex h-24 w-full items-center justify-center border-t'>
      {/* simplified logo */}
      {/* copyright */}
      {/* social logos */}
      <section className='flex space-x-4'>
        <CustomLink href='/feed'>
          <span className='rounded-sm bg-orange-400 text-white icon-round-[rss\_feed]'></span>
        </CustomLink>
      </section>
      {/* pages not in header */}
    </footer>
  );
}
