import { Suspense } from 'react';

export default function LazyComponent({ Component }: { Component: any }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
}
