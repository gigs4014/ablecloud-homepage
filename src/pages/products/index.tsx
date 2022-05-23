import Image from 'next/image';

import { CustomLink } from '@/components/common';
import { ProductContent, ProductHeader, ProductHeaderProps, ProductTemplate } from '@/templates';

import TaskIcon from '@/public/icons/task_alt_black_24dp.svg';
import Ablestack from '@/public/images/products/ablestack/ablestack.png';

const headerContent: ProductHeaderProps = {
  summary: 'ABLESTACK - HCI 플랫폼',
  description:
    'ABLESTACK은 엔터프라이즈 클라우드 환경을 구축하는 HCI 플랫폼입니다. 단 하나의 플랫폼으로 어떤 가상머신이든, 어떠한 앱이든, 어떠한 가상화/클라우드 환경이든 사용하고 관리할 수 있습니다. 상용 x86 서버에 10G Network에 연결하고 ABLESTACK을 설치하면 지금 바로 핵심 인프라를 포함하여 모든 서비스를 시작할 수 있습니다.',
  image: <Image src={Ablestack} alt='' />,
};

export default function AblestackPage() {
  return (
    <ProductTemplate {...headerContent} className='prose'>
      <ProductHeader {...headerContent} />

      <ProductContent
        title='ABLESTACK은 어떻게 클라우드 환경을 제공할까요?'
        description='ABLESTACK은 단지, 상용 x86 서버에 ABLESTACK Cube OS를 설치하여 활성화 됩니다. 3대 이상의 서버에 Cube OS를 설치하면 제공되는 모든 기능을 사용할 수 있으며, 고가용성을 제공하는 안정적이고 고성능의 클라우드 인프라를 확보할 수 있습니다. 이 모든 과정은 마법사를 통해 단 수십분 내에 완료됩니다.'
        image={<div className='h-64 w-full bg-slate-200' />}>
        <section>
          <h4 className='text-gray-500'>Ablestack 클라우드 핵심 인프라</h4>
          <h2>소프트웨어로 정의된 단일 플랫폼</h2>
          <p>
            소프트웨어 정의 기술을 이용한 하이퍼 컨버지드 플랫폼인 ABLESTACK을 통해 컴퓨팅,
            스토리지, 가상화, 네트워킹을 핵심으로 제공하는 엔터프라이즈 클라우드를 구축할 수
            있습니다.
          </p>

          <div className='not-prose py-8'>
            <ul className=' grid grid-cols-2 gap-x-8 gap-y-2'>
              {[
                { title: 'Glue - 분산스토리지', href: '/products/ablestack/glue' },
                { title: 'Cell - 하이퍼바이저', href: '/products/ablestack/cell' },
                { title: 'Mold - 클라우드센터', href: '/products/ablestack/mold' },
                { title: 'Koral - 쿠버네테스 클러스터', href: '/products/ablestack/koral' },
                { title: 'Track - 가상 네트워킹', href: '/products/ablestack/network/track' },
                { title: 'Atom - Micro Segmentation', href: '/products/ablestack/network/atom' },
              ].map(({ title, href }, index) => (
                <li key={`${title}-${index}`}>
                  <CustomLink href={href} className='flex items-center font-bold'>
                    <TaskIcon className='mr-2 fill-lime-500' />
                    {title}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>

          <div className='not-prose'>
            <CustomLink href='/products/ablestack' className='text-lg font-bold text-sky-600'>
              Ablestack 클라우드 인프라들에 대해 자세히 알아보기
            </CustomLink>
          </div>
        </section>
      </ProductContent>

      <ProductContent image={<div className='h-64 w-full bg-slate-200' />}>
        <section>
          <h4 className='text-gray-500'>Ablestack 클라우드 관리</h4>
          <h2>IT운영 및 DevOps</h2>
          <p>
            클라우드 관리 플랫폼을 통해 언제든 필요한 애플리케이션을 개발하고 테스트 할 수 있고
            배포할 수 있으며, 라이프 사이클을 관리하고 자동화 합니다.
          </p>

          <div className='not-prose py-8'>
            <ul className=' grid grid-cols-2 gap-x-8 gap-y-2'>
              {[
                { title: 'Wall - 인프라 및 App 모니터링', href: 'wall' },
                { title: 'Genie - 애플리케이션 관리', href: 'genie' },
                { title: 'Station - Kubernetes 기반 PaaS', href: 'station' },
              ].map(({ title, href }, index) => (
                <li key={`${title}-${index}`}>
                  <CustomLink
                    href={`/products/ablestack/management/${href}`}
                    className='flex items-center font-bold'>
                    <TaskIcon className='mr-2 fill-lime-500' />
                    {title}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>

          <div className='not-prose'>
            <CustomLink
              href='/products/ablestack/management'
              className='text-lg font-bold text-sky-600'>
              Ablestack 클라우드 관리 플랫폼들에 대해 자세히 알아보기
            </CustomLink>
          </div>
        </section>
      </ProductContent>

      <ProductContent image={<div className='h-64 w-full bg-slate-200' />}>
        <section>
          <h4 className='text-gray-500'>Ablestack 클라우드 스토리지</h4>
          <h2>고도로 자동화된 소프트웨어 정의 스토리지</h2>
          <p>
            Ablestack Glue는 Ablestack상의 모든 가상머신과 모든 애플리케이션, 그리고 외부
            서버인프라를 위한 확장 가능한 고가용성 스토리지를 제공합니다.
          </p>

          <div className='not-prose py-8'>
            <ul className=' grid grid-cols-2 gap-x-8 gap-y-2'>
              {[
                { title: 'Volume - 확장형 블록 스토리지', href: 'volume' },
                { title: 'Files - Glue 파일 시스템', href: 'files' },
                { title: 'Objects - 오브젝트 스토리지', href: 'objects' },
              ].map(({ title, href }, index) => (
                <li key={`${title}-${index}`}>
                  <CustomLink
                    href={`/products/ablestack/glue/${href}`}
                    className='flex items-center font-bold'>
                    <TaskIcon className='mr-2 fill-lime-500' />
                    {title}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>

          <div className='not-prose'>
            <CustomLink href='/products/ablestack/glue' className='text-lg font-bold text-sky-600'>
              Ablestack Glue에 대해 자세히 알아보기
            </CustomLink>
          </div>
        </section>
      </ProductContent>

      <ProductContent image={<div className='h-64 w-full bg-slate-200' />}>
        <section>
          <h4 className='text-gray-500'>Ablestack 엔드 유저 서비스 - Works</h4>
          <h2>모든 장치와 위치에서 필요한 데스크톱 앱에 액세스</h2>
          <p>
            Works는 사용자에게 가상 앱과 데스크톱을 제공합니다. 언제 어디서나 어떠한 환경에서든
            주어진 업무를 수행할 수 있는 환경을 제공하며, 사용자에게 격리된 환경에서 작업할 수
            있도록 도와줍니다. 조직에 가상 데스트톱 환경을 수분 내에 구성하여 바로 사용할 수
            있습니다.
          </p>

          <div className='not-prose'>
            <CustomLink
              href='/products/ablestack/end-user-tools/works'
              className='text-lg font-bold text-sky-600'>
              Ablestack Works에 대해 자세히 알아보기
            </CustomLink>
          </div>
        </section>
      </ProductContent>
    </ProductTemplate>
  );
}
