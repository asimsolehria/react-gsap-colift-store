import TextSection from '@components/TextSection';
import { logoImage } from '@images';

function TextSections() {
  return (
    <>
      <TextSection idx={1}>
        <img src={logoImage} alt='logo-img' />
        <br />
        <p>We Aren't Just a Hemp Company</p>
        <h2>WE'RE A LIFESTYLE</h2>
      </TextSection>

      <TextSection idx={2}>
        <p>
          CO Lift is more than a hemp company.
          <br />
          It is about creating a better lifestyle.
          <br />
          Our mission is to get you back doing the things
          <br />
          you are passionate about and live a fulfilling life.
          <br />
          <br />
          Find out how CO Lift help you <strong>#GetBackToIt</strong>
        </p>
      </TextSection>

      <TextSection idx={3}>
        <h2>Revitalizes Body and Mind.</h2>
        <br />
        <p>
          CBD is emerging as a promising compound to address pain, inflammation,
          <br />
          seizures, and anxiety without the psychoactive effects of THC.
          <br />
          Our understanding of the role of CBD in pain management continues to
          <br />
          evolve, and evidence from studies has shown that CBD exerts its effects
          <br />
          through its various interactions and modulation of the endocannabinoid,
          <br />
          inflammatory, and nociceptive (pain sensing) systems
          <br />
        </p>
      </TextSection>

      <TextSection idx={4}>
        <h2>CO Lift Gives You The Lifestyle You Love</h2>
        <br />
        <p>
          Here at Co Lift we are all outdoor enthusiasts and our Signature CBD/CBG
          <br />
          topical is appreciated by pro athletes, busy professionals, active
          retirees,
          <br />
          and other outdoor lovers who otherwise can not enjoy the activities or
          <br />
          sports they love due to the pain they suffer from.
          <br />
        </p>
      </TextSection>

      <TextSection idx={5}>
        <h2>
          Check out how CO Lift helped pro mountain bikers
          <br /> attempt the impossible
        </h2>
        <br />
        <iframe
          width='500'
          height='250'
          src='https://www.youtube.com/embed/BUg-0kL3znY'
          title='CO Lift Help'
        ></iframe>
      </TextSection>

      <TextSection idx={6}>
        <h2>
          &#8220;In health there is freedom. Health is
          <br />
          the first of all liberties.&#8221;
        </h2>
        <br />
        <p>CO Lift is created to get you back to the lifestyle you love.</p>
      </TextSection>

      <TextSection idx={7}>
        <h2>
          &#8220;Chronic pain is not all about the body, and
          <br /> it's not all about the brain - it's everything.&#8221;
        </h2>
        <br />
        <p>
          This is why CO Lift Hemp is more than just a hemp company, we aim to
          <br /> help you take back your life.
        </p>
      </TextSection>

      <TextSection idx={8}>
        <p>
          CO Lift Signature CBD/CBG was made with the highest quality ingredients
          that facilitate <br /> an outdoor lifestyle. It works so well that it
          helps to keep Delvin Breaux on the field after <br /> he suffers from
          severe pain for over a decade due to a neck injury when he was 17. The{' '}
          <br /> football miracle is thankful that CO lift helped him
          #GetBackToIt. Watch his story now.
        </p>
        <br />
        <iframe
          width='500'
          height='250'
          src='https://www.youtube.com/embed/BUg-0kL3znY'
          title='CO Lift Signature'
        ></iframe>
      </TextSection>

      <TextSection idx={9}>
        <p>
          It is not just the pro athletes, thanks to CO lift's signature (CBD)
          <br /> CBG cream, many retirees are able to continue the lifestyle
          <br /> they love from their younger days.
        </p>
        <br />
        <br />
        <p>Get Back To It is easier with CO Lift.</p>
      </TextSection>

      <TextSection idx={10}>
        <h2>Need a testimonial from a retiree</h2>
        <br />
        <iframe
          width='500'
          height='250'
          src='https://www.youtube.com/embed/BUg-0kL3znY'
          title='Testimonial'
        ></iframe>
      </TextSection>

      <TextSection idx={11}>
        <p>
          Many busy information workers suffer from chronic pain due to the long{' '}
          <br /> hours in front of the computer. It creates a barrier for many to
          enjoy the <br /> outdoor lifestyle because chronic pain can be
          debilitating.
        </p>
        <br />
        <br />
        <p>
          With CO Lift we not only help to improve your productivity, but we also{' '}
          <br /> help you reduce pain and therefore stay healthier after the work
          hours <br /> so you can <strong>#GetBackToIt</strong>
        </p>
      </TextSection>

      <TextSection idx={12}>
        <h2>
          Need a testimonial from a busy professional <br /> or Founders video
        </h2>
        <br />
        <iframe
          width='500'
          height='250'
          src='https://www.youtube.com/embed/BUg-0kL3znY'
          title='Testimonial'
        ></iframe>
      </TextSection>

      <TextSection idx={13}>
        <h2>Are you ready to get back to it too?</h2>
        <br />
        <p>
          Whether in the Rocky Mountains or your own backyard, <br />
          with CO Lift Hemp balm only the sky is your limit. <br />
        </p>
        <br />
        <p>
          OUR PRODUCTS <span style={{ fontSize: '30px' }}> &#8594;</span>
        </p>
      </TextSection>
    </>
  );
}

export default TextSections;
