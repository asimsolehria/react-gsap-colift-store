import { useEffect } from 'react';
import gsap from 'gsap';
import { beeHike, logo1, logo2 } from '@utils/selectors';
import { sky } from '@images';
import AssetImages from '@components/sections/AssetImages';
import TextSections from '@components/sections/TextSections';
import { useRef } from 'react';
import motionPaths from '@utils/motionPaths';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useSelector } from '@hooks/gsap';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

function App() {
  // Logo Fades In
  useEffect(() => {
    gsap.to(logo1, {
      duration: 3,
      opacity: 1,
    });
  }, []);

  const [elRef] = useSelector();

  const tlRef = useRef<gsap.core.Timeline>();

  useEffect(() => {
    tlRef.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: elRef.current,
          pin: true,
          // start: 'top top',
          // end: 'bottom 10000px',
          scrub: true,
          markers: true,
        },
      })
      .add(
        gsap.to(logo1, {
          duration: 1,
          motionPath: motionPaths.logoFlightPath,
          // ease: Power1.easeInOut,
        })
      )
      .add(
        gsap.to(logo2, {
          duration: 3,
          opacity: 1,
        })
      )
      .add(
        gsap.to(beeHike, {
          duration: 1,
          motionPath: motionPaths.beeFlightPath1,
        })
      );
  });

  return (
    <section className='animation' ref={elRef}>
      <img src={sky} alt='' id='sky' />

      <TextSections />

      <AssetImages />
    </section>
  );
}

export default App;
