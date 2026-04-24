import { getInterviewHeaderData, getInterviewlist } from '@/constants/interview';

import { ContentWrapper, MainPageHeader } from '@/templates/common';
import { InterViewList } from '@/templates/interview';

export default async function Interview() {
  const interviewList = await getInterviewlist();
  return (
    <>
      <MainPageHeader headerData={await getInterviewHeaderData()} />
      <ContentWrapper type='interview' bgClassName='bg-[#F9F9F9]'>
        <InterViewList interviewList={interviewList} />
      </ContentWrapper>
    </>
  );
}
