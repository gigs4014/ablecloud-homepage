import { NextSeo } from 'next-seo';

import { ClientHeader, InterViewClientContentProps, InterViewClientTemplate } from '@/templates';

import Logo_Article_1_7 from '@/public/images/new/interview/article_1_7.svg';
import KipoIntroduceImg from '@/public/images/new/interview/clientintroduceimage/KipoImage.svg';

const headerContent: ClientHeader = {
  title: '특허청',
  bgImage: 'bg-kipo-header-bg',
};

const clientContent: InterViewClientContentProps = {
  clinetImage: <Logo_Article_1_7 />,
  introduceDescription: (
    <p>
      특허청은 특허·실용신안·디자인 및 상표에 관한 사무와 이에 대한 심사·심판사무를 관장하는
      대한민국의 중앙행정기관입니다. 특허 및 실용신안 등의 심사를 위해서 특허 심사 자료를 검토하고,
      심사 업무를 수행하는 다양한 시스템이 내부적으로 운영되고 있습니다.
    </p>
  ),
  introduceImage: <KipoIntroduceImg className='mx-auto max-w-[494px]' />,
  assignmentDescription: (
    <div>
      특허청은 특허심사 업무의 효율성을 높이고, 어디서든 관련 업무를 수행할 수 있는 환경을 특허심사
      담당자에게 제공할 수 있도록 관련 시스템을 구축하고자 합니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>Citrix Hypervisor 기반의 가상화 환경</li>
        <li>NVIDIA vGPU를 활용한 XenDesktop 환경 제공</li>
        <li>고성능 그래픽 재생이 가능한 원격 업무 환경 제공</li>
      </ul>
    </div>
  ),
  solutionDescription: (
    <div>
      특허청은 HCI 인프라를 이용, Citrix Hypervisor 및 XenDesktop 기반의 가상데스크톱 환경을 NVIDIA
      vGPU 환경으로 제공하여 고성능의 그래픽 재생 환경을 제공하는 가상 업무 환경을 제공함으로써 특허
      심사 업무의 효율성을 높이고 있습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>
          Citrix Hypervisor 기반으로 ABLESTACK HCI 가상화 환경을 제공하여 고성능 가상화 환경을 제공
        </li>
        <li>
          고성능 그래픽 재생이 가능한 GPU 가상 데스트톱을 제공하여 고용량, 고수준 그래픽 특허 심사
          자료를 이용한 특허 심사 업무의 효율성 제공
        </li>
        <li>원격 업무 환경을 제공하여 언제, 어디서든 업무가 가능한 환경 제공</li>
      </ul>
    </div>
  ),
};

//특허청
export default function KipoPage() {
  return (
    <>
      <NextSeo
        title='특허청 / HCI 구축사례'
        description='특허청 / HCI 구축사례'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/interview/kipo',
          images: [
            {
              url: '',
              alt: '특허청 / HCI 구축사례',
            },
          ],
        }}
      />
      <InterViewClientTemplate headerContent={headerContent} clientContent={clientContent} />
    </>
  );
}
