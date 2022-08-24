const motionPaths: Record<PathName, MotionPath.Vars> = {
  // flight path of Logo
  logoFlightPath: {
    curviness: 1.25,
    autoRotate: false,
    path: [{ x: 0, y: -500 }],
  },

  // flight path1 of bee-hike
  beeFlightPath1: {
    curviness: 1.25,
    autoRotate: true,
    path: [{ x: 300, y: 0 }],
  },

  // flight path1 of bee-hike
  beeFlightPath2: {
    curviness: 1.25,
    autoRotate: true,
    path: [{ x: 750, y: 0 }],
  },

  // flight path1 of bee-hike
  beeFlightPath3: {
    curviness: 1.25,
    autoRotate: true,
    path: [{ x: window.innerWidth + 500, y: 20 }],
  },

  // bee-stand flight path
  beeStandFlightPath: {
    curviness: 1.25,
    autoRotate: false,
    path: [{ x: -300, y: 0 }],
  },

  // bee-cow flight path
  beeCowFlightPath: {
    curviness: 1.25,
    autoRotate: false,
    path: [{ x: 500, y: 0 }],
  },

  // bee-cow flight path back
  beeCowBack: {
    curviness: 1.25,
    autoRotate: false,
    path: [{ x: -500, y: 0 }],
  },

  // bee-cycle flight path
  beeCycleFlightPath: {
    curviness: 1.25,
    autoRotate: false,
    path: [
      { x: -500, y: 30 },
      { x: -700, y: -40 },
      { x: -900, y: -50 },
      { x: -1000, y: -80 },
      { x: -1800, y: -80 },
    ],
  },

  // bee-stand flight path
  beeStandBackPath: {
    curviness: 1.25,
    autoRotate: false,
    path: [{ x: 300, y: 0 }],
  },

  // bee-stand flight path
  beeBoardFlightPath: {
    curviness: 1.25,
    autoRotate: true,
    path: [
      { x: -500, y: 430 },
      { x: -800, y: 510 },
      { x: -850, y: 510 },
      { x: -1000, y: 480 },
      { x: -1800, y: 430 },
    ],
  },

  // bee-ski flight path
  beeSkiFlightPath: {
    curviness: 1.25,
    autoRotate: false,
    path: [
      { x: 500, y: 110 },
      { x: 800, y: 200 },

      { x: 1000, y: 250 },
      { x: 1700, y: 270 },
    ],
  },

  // Mountains right path
  mountainsRightPath: {
    curviness: 1.25,
    autoRotate: false,
    path: [{ x: 1000, y: 0 }],
  },

  // Mountains left path
  mountainsLeftPath: {
    curviness: 1.25,
    autoRotate: false,
    path: [{ x: -1000, y: 0 }],
  },

  // Mountain right return
  mountainsRightReturn: {
    curviness: 1.25,
    autoRotate: false,
    path: [{ x: 0, y: 0 }],
  },

  // Mountains left return
  mountainsLeftReturn: {
    curviness: 1.25,
    autoRotate: false,
    path: [{ x: 0, y: 0 }],
  },

  // Foreground comes upward
  foregroundUpward: {
    curviness: 1.25,
    autoRotate: false,
    path: [{ x: 0, y: -500 }],
  },

  // Foreground goes back
  foregroundDown: {
    curviness: 1.25,
    autoRotate: false,
    path: [{ x: 0, y: 500 }],
  },

  // Bee-climb hangs up
  beeClimbPath: {
    curviness: 1.25,
    autoRotate: false,
    path: [{ x: 0, y: 1000 }],
  },

  // Bee-climb returns up
  beeReturnPath: {
    curviness: 1.25,
    autoRotate: false,
    path: [{ x: 0, y: -1000 }],
  },

  // Tree Ground Comes In
  treeGroundUpward: {
    curviness: 1.25,
    autoRotate: false,
    path: [{ x: 0, y: -1000 }],
  },

  // Tree Ground Goes back
  treeGroundDown: {
    curviness: 1.25,
    autoRotate: false,
    path: [{ x: 0, y: 1000 }],
  },

  // Green Ground Comes In
  greenGroundUpward: {
    curviness: 1.25,
    autoRotate: false,
    path: [{ x: 0, y: -1000 }],
  },

  // Green Ground Goes back
  greenGroundDown: {
    curviness: 1.25,
    autoRotate: false,
    path: [{ x: 0, y: 1000 }],
  },
};

type PathName =
  | 'logoFlightPath'
  | 'beeFlightPath1'
  | 'beeFlightPath2'
  | 'beeFlightPath3'
  | 'beeStandFlightPath'
  | 'beeCowFlightPath'
  | 'beeCowBack'
  | 'beeCycleFlightPath'
  | 'beeStandBackPath'
  | 'beeBoardFlightPath'
  | 'beeSkiFlightPath'
  | 'mountainsRightPath'
  | 'mountainsLeftPath'
  | 'mountainsRightReturn'
  | 'mountainsLeftReturn'
  | 'foregroundUpward'
  | 'foregroundDown'
  | 'beeClimbPath'
  | 'treeGroundUpward'
  | 'beeReturnPath'
  | 'treeGroundDown'
  | 'greenGroundUpward'
  | 'greenGroundDown';

export default motionPaths;
