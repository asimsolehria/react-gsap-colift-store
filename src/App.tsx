import { useEffect } from 'react';
import gsap from 'gsap';

import { sky } from '@images';
import Scene from '@components/Scene';
import AssetImages from '@components/sections/AssetImages';
import TextSections from '@components/sections/TextSections';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { logo1 } from '@utils/selectors';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

function App() {
  // Logo Fades In
  useEffect(() => {
    gsap.to(logo1, {
      duration: 3,
      opacity: 1,
    });
  }, []);

  return (
    <Scene duration={25000}>
      <img src={sky} alt='' id='sky' />

      <TextSections />

      <AssetImages />
    </Scene>
  );
}

export default App;
