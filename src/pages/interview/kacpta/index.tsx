import { ClientHeader, InterViewClientContentProps, InterViewClientTemplate } from '@/templates';

import Logo_Article_1_2 from '@/public/images/new/interview/article_1_2.svg';

const headerContent: ClientHeader = {
  title: '한국세무사회',
  bgImage: 'bg-kacpta-header-bg',
  bgColor: 'bg-kacptaHeaderColor',
};

const clientContent: InterViewClientContentProps = {
  clinetImage: <Logo_Article_1_2 />,
  description: (
    <p>
      가상화 및 소프트웨어 정의 기술을 이용한 하이퍼 컨버지드 인프라 플랫폼 ABLESTACK을 통해 컴퓨팅,
      스토리지, 가상화, 네트워크를 사용하고 관리할 수 있는 엔터프라이즈 클라우드 데이터센터를 구축할
      수 있습니다.
    </p>
  ),
};

export default function KacptaPage() {
  return (
    <>
      <InterViewClientTemplate headerContent={headerContent} clientContent={clientContent} />
    </>
  );
}
