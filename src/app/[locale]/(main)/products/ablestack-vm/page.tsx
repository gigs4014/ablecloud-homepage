import {
  getAblestackList,
  getAblestackVMCardsData,
  getAblestackVmHeaderData,
} from '@/constants/products';

import { ContentWrapper, MainPageHeader } from '@/templates/common';
import {
  AbleStackVMMigration,
  AblestackList,
  AblestackVMCards,
  AblestackVMDetail,
} from '@/templates/products';

export default async function AbleVM() {
  return (
    <>
      <MainPageHeader headerData={await getAblestackVmHeaderData()} />
      <ContentWrapper>
        <AblestackVMCards cardsData={await getAblestackVMCardsData()} />
      </ContentWrapper>
      <ContentWrapper bgClassName='bg-[#292929]'>
        <AbleStackVMMigration />
      </ContentWrapper>
      <ContentWrapper>
        <AblestackVMDetail />
      </ContentWrapper>
      <ContentWrapper isNonePaddingTop={true}>
        <AblestackList
          ablestackList={(await getAblestackList()).filter(
            v => v.path !== 'glue' && v.path !== 'over' && v.path !== 'silo',
          )}
          type='vm'
        />
      </ContentWrapper>
    </>
  );
}
