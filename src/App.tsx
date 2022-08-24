import { useEffect } from 'react';
import gsap from 'gsap';
import { beeStand, beeHike, logo1, logo2, logo3, logo4 } from '@utils/selectors';
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

  const [elRef, q] = useSelector();

  const tlRef = useRef<gsap.core.Timeline>();

  useEffect(() => {
    tlRef.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: elRef.current,
          pin: q('.scene'),
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          markers: true,
        },
      })
      .add(
        gsap.to(logo1, {
          motionPath: motionPaths.logoFlightPath,
        })
      )
      .add(
        gsap.to(logo2, {
          opacity: 1,
        })
      )
      .add(
        gsap.to(beeHike, {
          motionPath: motionPaths.beeFlightPath1,
        })
      )
      .add(
        gsap.to(logo2, {
          opacity: 0,
        })
      )
      .add(
        gsap.to(logo3, {
          opacity: 1,
        })
      )
      .add(
        gsap.to(beeHike, {
          motionPath: motionPaths.beeFlightPath2,
        })
        // '-=3'
      )
      .add(
        gsap.to(logo3, {
          opacity: 0,
        })
      )
      .add(
        gsap.to(beeHike, {
          motionPath: motionPaths.beeFlightPath3,
        }),
        '-=1'
      )
      .add(
        gsap.to(beeStand, {
          motionPath: motionPaths.beeStandFlightPath,
        }),
        'simultaneous'
      )
      .add(
        gsap.to(logo4, {
          opacity: 1,
        }),
        'simultaneous'
      );
  });

  return (
    <div className='wrapper' ref={elRef} style={{ height: 3000 }}>
      <section className='scene'>
        <img src={sky} alt='' id='sky' />

        <TextSections />

        <AssetImages />
      </section>
    </div>
  );
}

export default App;
