import gsap from 'gsap';
import { useMemo, useRef } from 'react';

function useSelector(): [
  React.RefObject<HTMLDivElement>,
  gsap.utils.SelectorFunc
] {
  const ref = useRef<HTMLDivElement>(null);
  const q = useMemo(() => gsap.utils.selector(ref), [ref]);

  return [ref, q];
}

export default useSelector;
