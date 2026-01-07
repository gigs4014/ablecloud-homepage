import { headers } from 'next/headers';

import { getEbookData } from '@/constants/resource';

import { EbookList } from '@/templates/resource';

export default async function Ebook() {
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const origin = `${protocol}://${host}`;

  return (
    <div className='flex justify-center animate-fade-in mt-6'>
      <EbookList ebooksData={await getEbookData()} origin={origin} />
    </div>
  );
}
