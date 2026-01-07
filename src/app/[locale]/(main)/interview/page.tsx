import { getInterviewHeaderData, interviewList } from '@/constants/interview';

import { ContentWrapper, MainPageHeader } from '@/templates/common';
import { InterViewList } from '@/templates/interview';

export default async function Interview() {
  return (
    <>
      <MainPageHeader headerData={await getInterviewHeaderData()} />
      <ContentWrapper type='interview' bgClassName='bg-[#F9F9F9]'>
        <InterViewList interviewList={interviewList} />
      </ContentWrapper>
    </>
  );
}
