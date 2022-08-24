import gsap from 'gsap';
import { useMemo } from 'react';

function useMyTimeline() {
  const tl = useMemo(() => gsap.timeline(), []);

  return tl;
}

export default useMyTimeline;
