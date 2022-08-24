import gsap from 'gsap';

import { useSelector } from '@hooks/gsap';
import { useEffect } from 'react';

import motionPaths from '@utils/motionPaths';
import * as selectors from '@utils/selectors';
import { Ease, TimelineLabels } from '@utils/types';

function Scene({ duration, children }: Props) {
  const [elRef, q] = useSelector();

  useEffect(() => {
    gsap
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
        gsap.to(selectors.logo1, {
          duration: 1,
          motionPath: motionPaths.logoFlightPath,
          ease: Ease.easeInOut,
        })
      )

      // Text Fades
      .add(
        gsap.to(selectors.logo2, {
          duration: 3,
          opacity: 1,
        })
      )
      .add(
        gsap.to(selectors.beeHike, {
          duration: 1,
          motionPath: motionPaths.beeFlightPath1,
          ease: Ease.easeInOut,
        }),
        '-=3'
      )
      .add(
        gsap.to(selectors.logo2, {
          duration: 3,
          opacity: 0,
        })
      )
      .add(
        gsap.to(selectors.logo3, {
          duration: 3,
          opacity: 1,
        })
      )
      .add(
        gsap.to(selectors.beeHike, {
          duration: 1,
          motionPath: motionPaths.beeFlightPath2,
          ease: Ease.easeInOut,
        }),
        '-=3'
      )
      .add(
        gsap.to(selectors.logo3, {
          duration: 3,
          opacity: 0,
        })
      )
      .add(
        gsap.to(selectors.beeHike, {
          duration: 1,
          motionPath: motionPaths.beeFlightPath3,
          ease: Ease.easeInOut,
        }),
        '-=1'
      )
      .add(
        gsap.to(selectors.beeStand, {
          duration: 1,
          motionPath: motionPaths.beeStandFlightPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.simultaneous
      )

      .add(
        gsap.to(selectors.logo4, {
          duration: 3,
          opacity: 1,
        }),
        TimelineLabels.simultaneous
      )
      .add(
        gsap.to(selectors.logo4, {
          duration: 3,
          opacity: 0,
        }),
        TimelineLabels.simultaneousBack
      )
      .add(
        gsap.to(selectors.beeStand, {
          duration: 1,
          motionPath: motionPaths.beeStandBackPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.simultaneousBack
      )
      .add(
        gsap.to(selectors.beeCycle, {
          duration: 7,
          motionPath: motionPaths.beeCycleFlightPath,
          ease: Ease.easeInOut,
        })
      )

      .add(
        gsap.to(selectors.logo5, {
          duration: 3,
          opacity: 1,
          visibility: 'visible',
        }),
        '-=5'
      )
      .add(
        gsap.to(selectors.logo5, {
          duration: 3,
          opacity: 0,
        }),
        '-=2'
      )
      .add(
        gsap.to(selectors.logo5, {
          duration: 1,
          visibility: 'hidden',
        })
      )
      .add(
        gsap.to(selectors.beeBoard, {
          duration: 7,
          motionPath: motionPaths.beeBoardFlightPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.simultaneous2
      )
      .add(
        gsap.to(selectors.logo6, {
          duration: 1,
          opacity: 1,
        }),
        TimelineLabels.simultaneous2
      )

      .add(
        gsap.to(selectors.logo6, {
          duration: 1,
          opacity: 0,
        }),
        '-=1'
      )

      .add(
        gsap.to(selectors.beeSki, {
          duration: 7,
          motionPath: motionPaths.beeSkiFlightPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.simultaneous3
      )
      .add(
        gsap.to(selectors.logo7, {
          duration: 3,
          opacity: 1,
        }),
        TimelineLabels.simultaneous3
      )
      .add(
        gsap.to(selectors.logo7, {
          duration: 3,
          opacity: 0,
        }),
        '-=2'
      )

      .add(
        gsap.to(selectors.mountain1, {
          duration: 7,
          motionPath: motionPaths.mountainsRightPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.open
      )
      .add(
        gsap.to(selectors.mountain3, {
          duration: 7,
          motionPath: motionPaths.mountainsRightPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.open
      )
      .add(
        gsap.to(selectors.trees1, {
          duration: 7,
          motionPath: motionPaths.mountainsRightPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.open
      )
      .add(
        gsap.to(selectors.trees2, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.open
      )
      // Left movement of left side objects
      .add(
        gsap.to(selectors.mountain2, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.open
      )
      .add(
        gsap.to(selectors.mountainPartial, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.open
      )
      .add(
        gsap.to(selectors.bushes, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.open
      )
      .add(
        gsap.to(selectors.ground, {
          duration: 7,
          motionPath: motionPaths.foregroundUpward,
          ease: Ease.easeInOut,
        })
      )
      .add(
        gsap.to(selectors.logo8, {
          duration: 10,
          opacity: 1,
          visibility: 'visible',
        })
      )
      .add(
        gsap.to(selectors.logo8, {
          duration: 10,
          opacity: 0,
        })
      )
      .add(
        gsap.to(selectors.logo8, {
          duration: 1,
          visibility: 'hidden',
        })
      )
      .add(
        gsap.to(selectors.ground, {
          duration: 7,
          motionPath: motionPaths.foregroundDown,
          ease: Ease.easeInOut,
        })
      )

      // Mountains close back
      .add(
        gsap.to(selectors.mountain1, {
          duration: 7,
          motionPath: motionPaths.mountainsRightReturn,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.close
      )
      .add(
        gsap.to(selectors.mountain3, {
          duration: 7,
          motionPath: motionPaths.mountainsRightReturn,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.close
      )
      .add(
        gsap.to(selectors.trees1, {
          duration: 7,
          motionPath: motionPaths.mountainsRightReturn,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.close
      )
      .add(
        gsap.to(selectors.trees2, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftReturn,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.close
      )
      // Left movement of left side objects
      .add(
        gsap.to(selectors.mountain2, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftReturn,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.close
      )
      .add(
        gsap.to(selectors.mountainPartial, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftReturn,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.close
      )
      .add(
        gsap.to(selectors.bushes, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftReturn,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.close
      )
      .add(
        gsap.to(selectors.beeClimb, {
          duration: 7,
          motionPath: motionPaths.beeClimbPath,
          ease: Ease.easeInOut,
        })
      )
      .add(
        gsap.to(selectors.logo9, {
          duration: 7,
          opacity: 1,
          visibility: 'visible',
        })
      )
      .add(
        gsap.to(selectors.logo9, {
          duration: 7,
          opacity: 0,
        })
      )
      .add(
        gsap.to(selectors.beeClimb, {
          duration: 7,
          motionPath: motionPaths.beeReturnPath,
          ease: Ease.easeInOut,
        })
      )
      .add(
        gsap.to(selectors.mountain1, {
          duration: 7,
          motionPath: motionPaths.mountainsRightPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.openAgain
      )
      .add(
        gsap.to(selectors.mountain3, {
          duration: 7,
          motionPath: motionPaths.mountainsRightPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.openAgain
      )
      .add(
        gsap.to(selectors.trees1, {
          duration: 7,
          motionPath: motionPaths.mountainsRightPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.openAgain
      )
      .add(
        gsap.to(selectors.trees2, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.openAgain
      )
      // Left movement of left side objects
      .add(
        gsap.to(selectors.mountain2, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.openAgain
      )
      .add(
        gsap.to(selectors.mountainPartial, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.openAgain
      )
      .add(
        gsap.to(selectors.bushes, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.openAgain
      )
      .add(
        gsap.to(selectors.treeGround, {
          duration: 7,
          motionPath: motionPaths.treeGroundUpward,
          ease: Ease.easeInOut,
        })
      )
      .add(
        gsap.to(selectors.logo10, {
          duration: 7,
          visibility: 'visible',
          opacity: 1,
        })
      )
      .add(
        gsap.to(selectors.logo10, {
          duration: 7,
          opacity: 0,
        })
      )
      .add(
        gsap.to(selectors.logo10, {
          duration: 7,
          visibility: 'hidden',
        })
      )
      .add(
        gsap.to(selectors.treeGround, {
          duration: 7,
          motionPath: motionPaths.treeGroundDown,
          ease: Ease.easeInOut,
        })
      )
      .add(
        gsap.to(selectors.mountain1, {
          duration: 7,
          motionPath: motionPaths.mountainsRightReturn,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.closeAgain
      )
      .add(
        gsap.to(selectors.mountain3, {
          duration: 7,
          motionPath: motionPaths.mountainsRightReturn,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.closeAgain
      )
      .add(
        gsap.to(selectors.trees1, {
          duration: 7,
          motionPath: motionPaths.mountainsRightReturn,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.closeAgain
      )
      .add(
        gsap.to(selectors.trees2, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftReturn,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.closeAgain
      )
      // Left movement of left side objects
      .add(
        gsap.to(selectors.mountain2, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftReturn,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.closeAgain
      )
      .add(
        gsap.to(selectors.mountainPartial, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftReturn,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.closeAgain
      )
      .add(
        gsap.to(selectors.bushes, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftReturn,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.closeAgain
      )
      .add(
        gsap.to(selectors.logo11, {
          duration: 7,
          visibility: 'visible',
          opacity: 1,
        })
      )
      .add(
        gsap.to(selectors.logo11, {
          duration: 7,
          opacity: 0,
        })
      )
      .add(
        gsap.to(selectors.logo10, {
          duration: 7,
          visibility: 'hidden',
        })
      )
      .add(
        gsap.to(selectors.mountain1, {
          duration: 7,
          motionPath: motionPaths.mountainsRightPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.openThirdTime
      )
      .add(
        gsap.to(selectors.mountain3, {
          duration: 7,
          motionPath: motionPaths.mountainsRightPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.openThirdTime
      )
      .add(
        gsap.to(selectors.trees1, {
          duration: 7,
          motionPath: motionPaths.mountainsRightPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.openThirdTime
      )
      .add(
        gsap.to(selectors.trees2, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.openThirdTime
      )
      // Left movement of left side objects
      .add(
        gsap.to(selectors.mountain2, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.openThirdTime
      )
      .add(
        gsap.to(selectors.mountainPartial, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.openThirdTime
      )
      .add(
        gsap.to(selectors.bushes, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.openThirdTime
      )
      .add(
        gsap.to(selectors.greenGround, {
          duration: 7,
          motionPath: motionPaths.greenGroundUpward,
          ease: Ease.easeInOut,
        })
      )
      .add(
        gsap.to(selectors.beeStand, {
          duration: 7,
          motionPath: motionPaths.beeStandFlightPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.sync
      )
      .add(
        gsap.to(selectors.beeCow, {
          duration: 7,
          motionPath: motionPaths.beeCowFlightPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.sync
      )
      .add(
        gsap.to(selectors.logo12, {
          duration: 7,
          visibility: 'visible',
          opacity: 1,
        })
      )
      .add(
        gsap.to(selectors.logo12, {
          duration: 7,
          opacity: 0,
        })
      )
      .add(
        gsap.to(selectors.logo12, {
          duration: 7,
          visibility: 'hidden',
        })
      )

      .add(
        gsap.to(selectors.beeStand, {
          duration: 7,
          motionPath: motionPaths.beeStandBackPath,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.backSync
      )

      .add(
        gsap.to(selectors.beeCow, {
          duration: 7,
          motionPath: motionPaths.beeCowBack,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.backSync
      )
      .add(
        gsap.to(selectors.greenGround, {
          duration: 7,
          motionPath: motionPaths.greenGroundDown,
          ease: Ease.easeInOut,
        })
      )
      .add(
        gsap.to(selectors.mountain1, {
          duration: 7,
          motionPath: motionPaths.mountainsRightReturn,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.closeLastTime
      )
      .add(
        gsap.to(selectors.mountain3, {
          duration: 7,
          motionPath: motionPaths.mountainsRightReturn,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.closeLastTime
      )
      .add(
        gsap.to(selectors.trees1, {
          duration: 7,
          motionPath: motionPaths.mountainsRightReturn,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.closeLastTime
      )
      .add(
        gsap.to(selectors.trees2, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftReturn,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.closeLastTime
      )
      // Left movement of left side objects
      .add(
        gsap.to(selectors.mountain2, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftReturn,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.closeLastTime
      )
      .add(
        gsap.to(selectors.mountainPartial, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftReturn,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.closeLastTime
      )
      .add(
        gsap.to(selectors.bushes, {
          duration: 7,
          motionPath: motionPaths.mountainsLeftReturn,
          ease: Ease.easeInOut,
        }),
        TimelineLabels.closeLastTime
      )
      .add(
        gsap.to(selectors.logo13, {
          duration: 7,
          opacity: 1,
        })
      );
  }, [elRef, q]);

  return (
    <div className='wrapper' ref={elRef} style={{ height: duration }}>
      <section className='scene'>{children}</section>
    </div>
  );
}

type Props = {
  duration: number;
  children: React.ReactElement | React.ReactElement[];
};

export default Scene;
