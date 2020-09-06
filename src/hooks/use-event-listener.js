/**
 * See https://www.youtube.com/watch?v=eoVJQ6lcc7E for details
 *
 * Example of how to use this hook:
 *
 * import { useGraphQL } from './src/hooks';
 *
 * const isBrowser = typeof document !== 'undefined';
 *
 * const handleEscape = (e) => {
 *   if (e.key === 'Escape') {
 *     handleClose();
 *   }
 * };
 *
 * useEventListener('keydown', handleEscape, {
 *   target: isBrowser ? document : null,
 * });
 */

import { useRef, useEffect } from 'react';

function useEventListener(
  eventType,
  handler,
  { enabled = true, target = document } = {}
) {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    if (!enabled) {
      return;
    }
    function internalHandler(e) {
      return handlerRef.current(e);
    }

    target.addEventListener(eventType, internalHandler);

    return () => {
      target.removeEventListener(eventType, internalHandler);
    };
  }, [eventType, enabled, target]);
}

export { useEventListener };
