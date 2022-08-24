import { sky } from '@images';
import AssetImages from '@components/sections/AssetImages';
import TextSections from '@components/sections/TextSections';

function App() {
  return (
    <section className='animation'>
      <img src={sky} alt='' id='sky' />

      <TextSections />

      <AssetImages />
    </section>
  );
}

export default App;
