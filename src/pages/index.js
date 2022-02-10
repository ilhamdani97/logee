import React, { lazy, Suspense } from 'react';
import LazyFallback from '@components/elements/LazyFallback';

const Suspensed = (Element) => function suspense(props) {
  return (
    <Suspense fallback={<LazyFallback />}>
      <Element {...props} />
    </Suspense>
  );
};

export default {
  Main: Suspensed(lazy(() => import('./Main'))),
  Login: Suspensed(lazy(() => import('./Login'))),
  PPJK: Suspensed(lazy(() => import('./Ppjk')))
};
