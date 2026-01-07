import {
  getAblestackHCICardsData,
  getAblestackHciHeaderData,
  getAblestackList,
} from '@/constants/products';

import { ContentWrapper, MainPageHeader } from '@/templates/common';
import { AblestackHCICards, AblestackHCIContentCards, AblestackList } from '@/templates/products';

export default async function Ablestack() {
  return (
    <>
      <MainPageHeader headerData={await getAblestackHciHeaderData()} />
      <ContentWrapper>
        <AblestackHCICards cardsData={await getAblestackHCICardsData()} />
      </ContentWrapper>
      <ContentWrapper bgClassName='bg-products-hci-content-wrapper bg-cover bg-no-repeat bg-center'>
        <AblestackHCIContentCards />
      </ContentWrapper>
      <ContentWrapper>
        <AblestackList ablestackList={await getAblestackList()} type='hci' />
      </ContentWrapper>
    </>
  );
}
