import Logo_ablecloud_gray from '@/public/images/logos/ablecloud_logo_gray.svg';

function FooterSite() {
  return (
    <section className={'h-[330px] py-[50px]'}>
      <ul className={`flex list-none justify-between`}>
        <li className={'min-w-50 float-left'}>
          <ol className={'bg-red'}>
            <li>에이블클라우드</li>
            <li>회사소개</li>
          </ol>
        </li>
        <li className={'min-w-50 min-h-30 float-left'}>
          <ol>
            <li>제품</li>
            <li>ABLESTACK의 탄생</li>
            <li>ABLESTACK 소개</li>
          </ol>
        </li>
        <li className={'min-w-50 float-left'}>
          <ol>
            <li>솔루션</li>
            <li>-</li>
            <li>-</li>
          </ol>
        </li>
        <li className={'min-w-50 float-left'}>
          <ol>
            <li>성공사례</li>
            <li>-</li>
            <li>-</li>
          </ol>
        </li>
        <li className={'min-w-50 float-left'}>
          <ol>
            <li>파트너</li>
            <li>파트너 네트워크</li>
          </ol>
        </li>
        <li className={'min-w-50 float-left'}>
          <ol>
            <li>지원</li>
            <li>데모 신청하기</li>
            <li>전문가와 상담하기</li>
            <li>기술 지원 받기</li>
          </ol>
        </li>
      </ul>
    </section>
  );
}
export default function Footer() {
  return (
    <footer className={`w-full max-w-page-full`}>
      {/* simplified logo */}
      {/* copyright */}
      {/* social logos */}
      <FooterSite />
      <div className={'mx-2.5 my-2.5 flex justify-start'}>
        <Logo_ablecloud_gray />
      </div>
      {/* pages not in header */}
    </footer>
  );
}
