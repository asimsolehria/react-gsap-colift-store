import {
  beeBoard,
  beeClimb,
  beeCow,
  beeCycle,
  beeHike,
  beeSki,
  beeStand,
  bushes,
  cloud1,
  cloud2,
  cloud3,
  cloud4,
  greenGround,
  ground,
  mountain1,
  mountain2,
  mountain3,
  mountainPartial,
  treeGround,
  trees1,
  trees2,
} from '@images';

function AssetImages() {
  return (
    <>
      <img src={cloud1} alt='' id='cloud1' />
      <img src={cloud2} alt='' id='cloud2' />
      <img src={cloud3} alt='' id='cloud3' />
      <img src={cloud4} alt='' id='cloud4' />

      <img src={mountain1} alt='' id='mountain1' />
      <img src={mountain2} alt='' id='mountain2' />
      <img src={mountain3} alt='' id='mountain3' />
      <img src={mountainPartial} alt='' id='mountainPartial' />

      <img src={bushes} alt='' id='bushes' />
      <img src={trees1} alt='' id='trees1' />
      <img src={trees2} alt='' id='trees2' />

      <img src={beeHike} alt='' id='bee-hike' className='bee-hike' />
      <img src={beeStand} alt='' id='bee-stand' className='bee-stand' />
      <img src={beeCycle} alt='' id='bee-cycle' className='bee-cycle' />
      <img src={beeBoard} alt='' id='bee-board' className='bee-board' />
      <img src={beeSki} alt='' id='bee-ski' className='bee-ski' />
      <img src={beeClimb} alt='' id='bee-climb' />
      <img src={beeCow} alt='' id='bee-cow' />

      <img src={ground} alt='' id='ground' />
      <img src={treeGround} alt='' id='tree-ground' />
      <img src={greenGround} alt='' id='green-ground' />
    </>
  );
}

export default AssetImages;
