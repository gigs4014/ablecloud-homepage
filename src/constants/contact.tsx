import { getTranslations } from 'next-intl/server';

export const getContactHeaderData = async () => {
  const t = await getTranslations('contact.header');

  return {
    title: {
      mainText: t('title'),
    },
    description: t.rich('description', {
      br: () => <br />,
    }),
    bgClassName: 'bg-contact-header',
    heightClassName: 'min-h-[350px] lg:min-h-[374px]',
  };
};
