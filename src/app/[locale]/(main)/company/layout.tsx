import { getCompanyHeaderData, getCompanyTabs } from '@/constants/company';

import { ContentWrapper, MainPageHeader } from '@/templates/common';

import { ScrollTop } from '@/components/layout';
import { Tabs } from '@/components/ui';

export default async function CompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ScrollTop />
      <MainPageHeader headerData={await getCompanyHeaderData()} />
      <ContentWrapper type='company'>
        <Tabs tabs={await getCompanyTabs()} />
        {children}
      </ContentWrapper>
    </>
  );
}
