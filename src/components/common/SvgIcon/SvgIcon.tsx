import { Suspense } from 'react';

export default function SvgIcon({
  Svg,
}: {
  Svg: React.LazyExoticComponent<React.FC<React.SVGProps<SVGSVGElement>>>;
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Svg />
    </Suspense>
  );
}
