import { ProductContent, ProductHeaderProps, ProductTemplate } from '@/templates';

const PlaceholderImg = <div className='h-128 w-full bg-slate-200' />;

const headerContent: ProductHeaderProps = {
  title: 'Ablestack 클라우드 핵심 인프라',
  summary: '소프트웨어로 정의된 단일 플랫폼',
  description:
    '소프트웨어 정의 기술을 이용한 하이퍼 컨버지드 플랫폼인 ABLESTACK을 통해 컴퓨팅, 스토리지, 가상화, 네트워킹을 핵심으로 제공하는 엔터프라이즈 클라우드를 구축할 수 있습니다.',
  image: PlaceholderImg,
};

export default function AblestackPage() {
  return (
    <ProductTemplate {...headerContent}>
      <ProductContent title='Cell 하이퍼바이저' image={PlaceholderImg}>
        <ProductContent.Box title='사용자 투명성'>
          Mold 및 Glue에 완벽하게 통합되어 있기 때문에 사용자는 퍼블릭 클라우드와 같이 가상화 환경을
          의식할 필요가 없습니다.
        </ProductContent.Box>

        <ProductContent.Box title='단일 제어 플랫폼'>
          Mold를 통해 가상화, 인프라 관리, 네트워킹, 보안, 셀프 서비스를 모두 사용할 수 있습니다.
        </ProductContent.Box>

        <ProductContent.Box title='최적의 성능과 기능'>
          PCI Passthrough, NVIDIA GPU 등의 최신 기술 지원을 통해 이머징 워크로드에서 필요한 성능과
          기능을 제공합니다.
        </ProductContent.Box>

        <ProductContent.GoDetail href='/products/ablestack/cell'>
          Ablestack Cell
        </ProductContent.GoDetail>
      </ProductContent>

      <ProductContent title='Glue 분산스토리지' imagePosition='first' image={PlaceholderImg}>
        <ProductContent.Box title=''></ProductContent.Box>
        <ProductContent.Box title=''></ProductContent.Box>

        <ProductContent.GoDetail href='/products/ablestack/glue'>
          Ablestack Glue
        </ProductContent.GoDetail>
      </ProductContent>

      <ProductContent title='Mold 클라우드센터' image={PlaceholderImg}>
        <ProductContent.GoDetail href='/products/ablestack/mold'>
          Ablestack Mold
        </ProductContent.GoDetail>
      </ProductContent>

      <ProductContent title='Koral 쿠버네테스 클러스터' image={PlaceholderImg}>
        <ProductContent.GoDetail href='/products/ablestack/koral'>
          Ablestack Koral
        </ProductContent.GoDetail>
      </ProductContent>

      <ProductContent title='Track 가상 네트워킹' image={PlaceholderImg}>
        <ProductContent.GoDetail href='/products/ablestack/network/track'>
          Ablestack Track
        </ProductContent.GoDetail>
      </ProductContent>

      <ProductContent title='Atom Micro Segmentation' image={PlaceholderImg}>
        <ProductContent.GoDetail href='/products/ablestack/network/atom'>
          Ablestack Atom
        </ProductContent.GoDetail>
      </ProductContent>
    </ProductTemplate>
  );
}
