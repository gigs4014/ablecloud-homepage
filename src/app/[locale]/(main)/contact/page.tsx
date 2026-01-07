import { getTranslations } from 'next-intl/server';

import { getContactHeaderData } from '@/constants/contact';

import { ContentWrapper, MainPageHeader } from '@/templates/common';
import { ContactForm } from '@/templates/contact';

export default async function Contact() {
  const t = await getTranslations('contact');

  return (
    <>
      <MainPageHeader headerData={await getContactHeaderData()} />
      <ContentWrapper type='contact' bgClassName='bg-[#F9F9F9]'>
        <ContactForm />
      </ContentWrapper>
      <ContentWrapper type='contact'>
        <div className='flex flex-col items-center text-center gap-4'>
          <div className='font-bold text-[22px] lg:text-[24px]'>{t('footer.title')}</div>
          <div className='font-medium'>
            {t('footer.contact.0')}
            <br />
            {t('footer.contact.1')}
          </div>
        </div>
      </ContentWrapper>
    </>
  );
}
