import { applicationsTabs, getApplicationHeaderData } from '@/constants/applications';

import { ContentWrapper, MainPageHeader } from '@/templates/common';

import { ScrollTop } from '@/components/layout';
import { Tabs } from '@/components/ui';

export default async function ApplicationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ScrollTop />
      <MainPageHeader headerData={await getApplicationHeaderData()} />
      <ContentWrapper type='applications'>
        <Tabs tabs={applicationsTabs} />
        {children}
      </ContentWrapper>
    </>
  );
}
