import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { CustomSlider } from '@/components/common';
import { CompanyContent, CompanyHeaderProps, CompanyTemplate } from '@/templates';

import Logo_Article_1_1 from '@/public/images/new/company/article_1_1.svg';
import Logo_Article_2_1 from '@/public/images/new/company/article_2_1.svg';
import Logo_Article_2_2 from '@/public/images/new/company/article_2_2.svg';
import Logo_Article_2_3 from '@/public/images/new/company/article_2_3.svg';
import Logo_Article_4_1 from '@/public/images/new/company/article_4_1.svg';
import Logo_Article_4_2 from '@/public/images/new/company/article_4_2.svg';
import Logo_Article_4_3 from '@/public/images/new/company/article_4_3.svg';
import Logo_Article_4_4 from '@/public/images/new/company/article_4_4.svg';
import Logo_Article_4_5 from '@/public/images/new/company/article_4_5.svg';
import Logo_Article_4_6 from '@/public/images/new/company/article_4_6.svg';
import Logo_Article_4_7 from '@/public/images/new/company/article_4_7.png';
import Logo_Article_5_1 from '@/public/images/new/company/article_5_1.svg';
import Logo_Article_5_2 from '@/public/images/new/company/article_5_2.svg';
import Logo_Article_5_3 from '@/public/images/new/company/article_5_3.svg';
import Logo_Article_5_4 from '@/public/images/new/company/article_5_4.svg';
import Logo_Article_5_5 from '@/public/images/new/company/article_5_5.svg';
import Logo_Article_5_6 from '@/public/images/new/company/article_5_6.svg';
import Logo_Article_5_7 from '@/public/images/new/company/article_5_7.svg';
import Logo_Article_5_8 from '@/public/images/new/company/article_5_8.svg';
import Logo_Article_5_9 from '@/public/images/new/company/article_5_9.svg';
import Logo_Article_6_1 from '@/public/images/new/company/article_6_1.svg';
import Logo_Article_6_2 from '@/public/images/new/company/article_6_2.svg';
import Logo_Article_6_3 from '@/public/images/new/company/article_6_3.svg';
import Logo_Article_6_4 from '@/public/images/new/company/article_6_4.svg';

const headerContent: CompanyHeaderProps = {
  title: <Logo_Article_1_1 />,
  description: (
    <div className={'text-[18px] font-[400] leading-[26.06px] text-[#444444]'}>
      <p>
        우리는 빠르게 변화하는 세상에서, 언제나 무한한 가능성을 봅니다. 그리고 새로운 플랫폼으로 그
        가능성의 세계를 힘차게 열고 날아오릅니다.
      </p>
      <p>
        에이블클라우드는 클라우드 엔지니어의 꿈을 이루고, 또 기업이 클라우드를 통해 새로운 기회를
        만들어 나가며, 혁신적인 솔루션을 세상에 널리 퍼뜨리는 일을 돕는 기업으로 성장할 것입니다.
      </p>
    </div>
  ),
  bgImage: 'bg-company-header-bg',
};

export default function CompanyPage() {
  return (
    <>
      <NextSeo
        title='에이블클라우드'
        description='프라이빗 클라우드 플랫폼 개발 전문업체'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/company',
          images: [
            {
              url: '',
              alt: '에이블클라우드',
            },
          ],
        }}
      />
      <CompanyTemplate {...headerContent}>
        <CompanyContent
          title={
            <div className={'my-[30px] text-[30px] font-[900] leading-[37.44px] text-primary'}>
              Software Defined Data Center
            </div>
          }
          description={
            <p className={'text-[18px] font-[400] leading-[26.06px] text-[#444444]'}>
              우리는 단일 클라우드 플랫폼인 ABLESTACK을 통해 데이터센터에 필요한 인프라와 관리체계,
              그리고 다양한 플랫폼을 제공함으로써 소프트웨어로 정의된 새로운 개념의 데이터센터를
              실현하고 고객에게 제공합니다.
            </p>
          }
          className={'bg-backgroudGray text-[#444444]'}>
          <section className='mx-4 mt-8 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <CompanyContent.DescriptionCard
              title='기업 클라우드 구축 '
              image={<Logo_Article_2_1 />}
              description={
                <p className={'m-0 px-5 text-[16px] font-[400] leading-[23.17px]'}>
                  가상화, 소프트웨어 정의 기술로 단순화 되고 안정적인 인프라를 기업에 제공하여
                  레거시 인프라를 현대화 합니다.
                </p>
              }
            />

            <CompanyContent.DescriptionCard
              title='다양한 애플리케이션 제공'
              image={<Logo_Article_2_2 />}
              description={
                <p className={'m-0 px-5 text-[16px] font-[400] leading-[23.17px]'}>
                  가상머신, 컨테이너 인프라 뿐 아니라 배포 자동화, 가상데스크톱, 빅데이터, 인공지능
                  등의 다양한 플랫폼을 통합하여 제공합니다.
                </p>
              }
            />

            <CompanyContent.DescriptionCard
              title='파트너 생태계 구성'
              image={<Logo_Article_2_3 />}
              description={
                <p className={'m-0 px-5 text-[16px] font-[400] leading-[23.17px]'}>
                  다양한 파트너 솔루션 지원을 통해 ABLESTACK 만으로 모든 애플리케이션을 적용할 수
                  있도록 파트너들과 생태계를 구성합니다.
                </p>
              }
            />
          </section>
        </CompanyContent>

        <CompanyContent title={'History'}>
          <div className={'mb-[40px]'}>
            <div className='mb-[20px] flex w-full items-center justify-between'>
              <p className={'pr-3 pl-8 text-[24px] font-[700] leading-[34.75px] xsm:pl-16'}>2021</p>
              <div className='h-[1px] w-full bg-[#444]'></div>
              <p className={'pl-3 pr-8 text-[24px] font-[700] leading-[34.75px] xsm:pr-16'}>2022</p>
            </div>
            <div className={'mb-[20px] flex justify-between'}>
              <p className={'pl-8 text-[18px] font-[400] leading-[26.06px] xsm:pl-16'}>
                에이블클라우드의 출발
              </p>
              <p className={'pr-8 pl-2 text-[18px] font-[400] leading-[26.06px] xsm:pr-16'}>
                현재 업적까지 단
              </p>
            </div>
            <div className='mb-[20px] flex justify-between'>
              <p className={'my-[16px] pl-8 text-[140px] font-[400] leading-[162.4px] xsm:pl-16'}>
                21
              </p>
              <div className='my-[16px] flex justify-end whitespace-nowrap pr-8 xsm:pr-16'>
                <p className={'text-[140px] font-[400] leading-[162.4px] text-primary'}>1</p>
                <p className='ml-[20px] mt-[90px]'>년</p>
              </div>
            </div>
            <div className={'mb-[20px] flex justify-between'}>
              <p className={'leading-[26.06px pl-8 text-left text-[18px] font-[400] xsm:pl-16'}>
                에이블클라우드는
                <br />
                21년에 설립된 회사입니다.
              </p>
              <p
                className={
                  'leading-[26.06px pr-8 pl-2 text-right text-[18px] font-[400] xsm:pr-16'
                }>
                에이블클라우드의
                <br />
                이유있는 자신감,
              </p>
            </div>
          </div>
          <div className={'grid grid-cols-2 gap-[16px] sm:grid-cols-3 lg:grid-cols-6'}>
            <CompanyContent.SmallCard
              className={`bg-[#83D1FF]`}
              value={'1'}
              title={'Major Upgrade'}
            />
            <CompanyContent.SmallCard className={`bg-[#3CA3FF]`} value={'5'} title={'파트너'} />
            <CompanyContent.SmallCard className={`bg-[#3281C4]`} value={'20'} title={'고객'} />
            <CompanyContent.SmallCard className={`bg-[#104C95]`} value={'40'} title={'호스트'} />
            <CompanyContent.SmallCard className={`bg-[#12426B]`} value={'100'} title={'가상머신'} />
            <CompanyContent.SmallCard className={`bg-[#001F39]`} value={'2PB'} title={'스토리지'} />
          </div>
        </CompanyContent>

        <CompanyContent
          className={'bg-backgroudGray text-[#444444]'}
          title='ABLECLOUD가 시도하는 새로운 기업 인프라'
          description={`우리는 ABLESTACK을 어디서나 어느 애플리케이션 및 워크로드를 실행할 수 있는 클라우드
            인프라, 스토리지, 데이터베이스를 제공하며,
            
            빅데이터, 인공지능, IoT를 위한 다양한 플랫폼을 제공할 수 있는 클라우드 단일 플랫폼으로
            개발하고 발전시킵니다.`}>
          <div
            className={
              'px-auto grid grid-cols-2 place-content-center gap-[16px] sm:grid-cols-3 lg:grid-cols-6'
            }>
            <Logo_Article_4_1 className='m-auto' />
            <Logo_Article_4_2 className='m-auto' />
            <Logo_Article_4_3 className='m-auto' />
            <Logo_Article_4_4 className='m-auto' />
            <Logo_Article_4_5 className='m-auto' />
            <Logo_Article_4_6 className='m-auto' />
          </div>
          <Image src={Logo_Article_4_7} />
        </CompanyContent>
        <CompanyContent title='단순함을 추구합니다.'>
          <CustomSlider settingsOverrides={{ slidesToShow: 3, slidesToScroll: 3 }}>
            <CompanyContent.DescriptionCard
              containerClassName={'bg-[#F6F7F9]'}
              title='하이퍼 컨버징'
              image={<Logo_Article_5_1 />}
              description={
                <p className={'m-0 whitespace-nowrap p-0 text-[16px] font-[400] leading-[23.17px]'}>
                  서버, 스토리지, 네트워크 장비를 따로 구입
                  <br />
                  하여 구성하는 인프라는 더 이상 그만.
                  <br />
                  x86 서버 로만 단순하게 구성한
                  <br />
                  인프라를 추구합니다.
                </p>
              }
            />

            <CompanyContent.DescriptionCard
              containerClassName={'bg-[#F6F7F9]'}
              title='10분 내 구성'
              className='mx-4'
              image={<Logo_Article_5_2 />}
              description={
                <p className={'m-0 whitespace-nowrap p-0 text-[16px] font-[400] leading-[23.17px]'}>
                  마법사를 통해 클라우드 환경을 <br />
                  단 10분 만에, <br />
                  그리고 쉽게 구성할 수 있어야 합니다. <br />
                </p>
              }
            />

            <CompanyContent.DescriptionCard
              containerClassName={'bg-[#F6F7F9]'}
              title='원클릭 배포'
              image={<Logo_Article_5_3 />}
              description={
                <p className={'m-0 whitespace-nowrap p-0 text-[16px] font-[400] leading-[23.17px]'}>
                  사용자가 직접 단 한번의 클릭으로
                  <br />
                  가상머신과 컨테이너,
                  <br />
                  그리고 필요한 플랫폼과 애플리케이션을
                  <br />
                  배포할 수 있습니다.
                </p>
              }
            />

            <CompanyContent.DescriptionCard
              containerClassName={'bg-[#D5EAFD]'}
              title='데이터 안정성'
              image={<Logo_Article_5_4 />}
              description={
                <p className={'m-0 whitespace-nowrap p-0 text-[16px] font-[400] leading-[23.17px]'}>
                  스토리지는 자체적으로 고장을 식별하고,
                  <br />
                  스스로 고장을 복구할 수 있어야 합니다.
                  <br />
                  그리고 암호화, 원본 자료 유지, 백업 지원을 통해
                  <br />
                  안전하게 관리되어야 합니다.
                </p>
              }
            />

            <CompanyContent.DescriptionCard
              containerClassName={'bg-[#D5EAFD]'}
              title='모든 애플리케이션을 위한 스토리지 '
              image={<Logo_Article_5_5 />}
              description={
                <p className={'m-0 whitespace-nowrap p-0 text-[16px] font-[400] leading-[23.17px]'}>
                  ABLESTACK HCI 스토리지는 일반적인
                  <br />웹 서버 등의 서비스 뿐 아니라, 빅데이터,
                  <br /> 영상감시, VDI 등의 모든 서비스에서
                  <br /> 잘 동작합니다.
                </p>
              }
            />

            <CompanyContent.DescriptionCard
              containerClassName={'bg-[#D5EAFD]'}
              title='데이터베이스 자동화'
              image={<Logo_Article_5_6 />}
              description={
                <p className={'m-0 whitespace-nowrap p-0 text-[16px] font-[400] leading-[23.17px]'}>
                  애플리케이션을 실행하기 위한
                  <br />
                  다양한 데이터베이스를 자동으로 배포하고
                  <br />
                  사용할 수 있게 됩니다.
                </p>
              }
            />

            <CompanyContent.DescriptionCard
              containerClassName={'bg-[#EDEDED]'}
              title='하드웨어 선택의 자유'
              image={<Logo_Article_5_7 />}
              description={
                <p className={'m-0 whitespace-nowrap p-0 text-[16px] font-[400] leading-[23.17px]'}>
                  어떠한 브랜드의 서버에서도 잘 동작합니다.
                  <br /> 지금까지 사용한 익숙한 서버를 포기할 <br />
                  필요가 없습니다.
                </p>
              }
            />

            <CompanyContent.DescriptionCard
              containerClassName={'bg-[#EDEDED]'}
              title='가상화 소프트웨어 선택의 자유'
              image={<Logo_Article_5_8 />}
              description={
                <p className={'m-0 whitespace-nowrap p-0 text-[16px] font-[400] leading-[23.17px]'}>
                  자체 제공하는 Cell 하이퍼바이저 뿐 아니라, <br />
                  Citrix Hypervisor, Hyper V, VMWare ESXi, <br /> Linux KVM 등 다양한 <br />
                  가상화 소프트웨어와 모두 호환됩니다.
                </p>
              }
            />

            <CompanyContent.DescriptionCard
              containerClassName={'bg-[#EDEDED]'}
              title='애플리케이션 선택의 자유'
              image={<Logo_Article_5_9 />}
              description={
                <p className={'m-0 whitespace-nowrap p-0 text-[16px] font-[400] leading-[23.17px]'}>
                  가상화, 컨테이너 기술을 통해
                  <br />
                  어떤 애플리케이션도 실행할 수 있습니다.
                </p>
              }
            />
          </CustomSlider>
        </CompanyContent>
        <CompanyContent
          title='인증 및 특허권'
          className={'not-prose bg-backgroudGray py-4 text-[#444444]'}>
          <div
            className={'mt-8 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'}>
            <CompanyContent.ImageItam title='기업부설연구소 인정서' image={<Logo_Article_6_1 />} />
            <CompanyContent.ImageItam title='소프트웨어품질인정서' image={<Logo_Article_6_2 />} />
            <CompanyContent.ImageItam title='저작권 등록증' image={<Logo_Article_6_3 />} />
            <CompanyContent.ImageItam title='특허출원' image={<Logo_Article_6_4 />} />
          </div>
        </CompanyContent>
      </CompanyTemplate>
    </>
  );
}
