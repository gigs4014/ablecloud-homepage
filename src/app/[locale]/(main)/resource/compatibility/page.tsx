import { useCompatibilityList } from '@/constants/resource';

import { Link } from '@/i18n/routing';

export default function Compatibility() {
  return (
    <div className='flex justify-center animate-fade-in mt-6'>
      <div className='max-w-[1200px] grid gap-6 grid-cols- lg:grid-cols-2 max:grid-cols-3'>
        {useCompatibilityList().map((compatibility, idx) => {
          return (
            <Link
              key={idx}
              href={`/resource/compatibility/${compatibility.path}`}
              className='flex flex-col gap-[24px] px-8 py-10 bg-[#F6F7F8] min-h-[202px] rounded-[10px] transform transition duration-200 hover:scale-102 hover:shadow-md'>
              <div className='text-[22px] font-bold leading-[26px]'>{compatibility.title}</div>
              <div>{compatibility.description}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
