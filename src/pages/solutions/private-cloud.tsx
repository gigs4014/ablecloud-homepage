import React from 'react';

import Image from 'next/image';

import SolutionTemplate from 'src/templates/solutions/Solution';

import { ProductContent } from '@/templates';

import AutoDistribute from '@/public/images/solutions/private-cloud-auto-distribute.png';
import ErrorDelete from '@/public/images/solutions/private-cloud-error-delete.png';
import ExpansionCapacity from '@/public/images/solutions/private-cloud-expansion-capacity.png';
import HighqualitySecurity from '@/public/images/solutions/private-cloud-highquality-security.png';
import LowTCO from '@/public/images/solutions/private-cloud-low-tco.png';

const PlaceholderImg = <div className='h-96 w-full bg-slate-200' />;

interface PrivateCloudPageProps {}

export default function PrivateCloudPage({}: PrivateCloudPageProps) {
  return (
    <SolutionTemplate title='프라이빗 클라우드'>
      <ProductContent title='낮은 TCO' image={<Image src={LowTCO} />}>
        전통적인 인프라에 비해 70% 이상의 TCO 절감 효과 및 5배의 투자수익(ROI)을 제공합니다.
      </ProductContent>
      <ProductContent title='자동화된 배포' image={<Image src={AutoDistribute} />}>
        자동화된 셀프 서비스를 통해 기존의 애플리케이션 개발 및 배포에 비해 훨씬 빨라집니다.
      </ProductContent>
      <ProductContent title='높은 안정성' image={<Image src={ErrorDelete} />}>
        고가용성 제공 및 단일실패지점 제거를 통해 전통적 인프라 대비 90% 이상 다운타임이 감소합니다.
      </ProductContent>
      <ProductContent title='고수준의 보안환경' image={<Image src={HighqualitySecurity} />}>
        네트워크 관리 및 보안그룹 설정 등의 마이크로세분화 지원으로 더 강한 보안 환경을 얻을 수
        있습니다.
      </ProductContent>
      <ProductContent title='선택적 확장성' image={<Image src={ExpansionCapacity} />}>
        퍼블릭클라우드와 유사하게, 확장 시점을 쉽게 예측할 수 있고, 필요한 만큼 확장할 수 있습니다.
      </ProductContent>
    </SolutionTemplate>
  );
}
