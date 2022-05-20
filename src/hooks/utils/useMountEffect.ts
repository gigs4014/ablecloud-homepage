import { EffectCallback, useEffect } from 'react';

/**
 * @summary Hook that calls a callback when mounted and execute cleanup when unmounted.
 */
export function useMountEffect(callback: EffectCallback): void {
  // eslint-disable-next-line
  useEffect(callback, []);
}
