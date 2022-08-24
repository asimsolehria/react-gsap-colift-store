import gsap from 'gsap';
import { useMemo, useRef } from 'react';

function useSelector(): [React.RefObject<HTMLElement>, gsap.utils.SelectorFunc] {
  const ref = useRef<HTMLElement>(null);
  const q = useMemo(() => gsap.utils.selector(ref), [ref]);

  return [ref, q];
}

export default useSelector;
