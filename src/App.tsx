import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import "./App.css";

function App() {
    const el = useRef<any>();
    const q = gsap.utils.selector(el);
    const tl = useRef<gsap.core.Timeline>();

    useEffect(() => {
        tl.current = gsap.timeline().to(q("#logo"), {
            duration: 3,
            opacity: 1
        })
    }, []);

    return (
        <section className="animation" ref={el}>
            <img
                src={`${process.env.PUBLIC_URL}/assets/s0-sky@2x.png`}
                alt=""
                id="sky"
            />
            <div className="text1">
                <div id="logo">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/agecheckerVsARddsz9-logo_image_300x.webp`}
                        alt="logo-img"
                    />
                    <br />
                    <p>We Aren't Just a Hemp Company</p>
                    <h2>WE'RE A LIFESTYLE</h2>
                </div>
            </div>
            <div className="text2">
                <div id="logo2">
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
                        Find out how CO Lift help you{" "}
                        <strong>#GetBackToIt</strong>
                    </p>
                </div>
            </div>
            <div className="text3">
                <div id="logo3">
                    <h2>Revitalizes Body and Mind.</h2>
                    <br />
                    <p>
                        CBD is emerging as a promising compound to address pain,
                        inflammation,
                        <br />
                        seizures, and anxiety without the psychoactive effects
                        of THC.
                        <br />
                        Our understanding of the role of CBD in pain management
                        continues to
                        <br />
                        evolve, and evidence from studies has shown that CBD
                        exerts its effects
                        <br />
                        through its various interactions and modulation of the
                        endocannabinoid,
                        <br />
                        inflammatory, and nociceptive (pain sensing) systems
                        <br />
                    </p>
                </div>
            </div>
            <div className="text4">
                <div id="logo4">
                    <h2>CO Lift Gives You The Lifestyle You Love</h2>
                    <br />
                    <p>
                        Here at Co Lift we are all outdoor enthusiasts and our
                        Signature CBD/CBG
                        <br />
                        topical is appreciated by pro athletes, busy
                        professionals, active retirees,
                        <br />
                        and other outdoor lovers who otherwise can not enjoy the
                        activities or
                        <br />
                        sports they love due to the pain they suffer from.
                        <br />
                    </p>
                </div>
            </div>
            <div className="text5">
                <div id="logo5">
                    <h2>
                        Check out how CO Lift helped pro mountain bikers
                        <br /> attempt the impossible
                    </h2>
                    <br />
                    <iframe
                        width="500"
                        height="250"
                        src={`${process.env.PUBLIC_URL}/assets/https://www.youtube.com/embed/BUg-0kL3znY`}
                    ></iframe>
                </div>
            </div>

            <div className="text6">
                <div id="logo6">
                    <h2>
                        “In health there is freedom. Health is
                        <br />
                        the first of all liberties.”
                    </h2>
                    <br />
                    <p>
                        CO Lift is created to get you back to the lifestyle you
                        love.
                    </p>
                </div>
            </div>
            <div className="text7">
                <div id="logo7">
                    <h2>
                        “Chronic pain is not all about the body, and
                        <br /> it's not all about the brain - it's everything.”
                    </h2>
                    <br />
                    <p>
                        This is why CO Lift Hemp is more than just a hemp
                        company, we aim to
                        <br /> help you take back your life.
                    </p>
                </div>
            </div>
            <div className="text8">
                <div id="logo8">
                    <p>
                        CO Lift Signature CBD/CBG was made with the highest
                        quality ingredients that facilitate <br /> an outdoor
                        lifestyle. It works so well that it helps to keep Delvin
                        Breaux on the field after <br /> he suffers from severe
                        pain for over a decade due to a neck injury when he was
                        17. The <br /> football miracle is thankful that CO lift
                        helped him #GetBackToIt. Watch his story now.
                    </p>
                    <br />
                    <iframe
                        width="500"
                        height="250"
                        src={`${process.env.PUBLIC_URL}/assets/https://www.youtube.com/embed/BUg-0kL3znY`}
                    ></iframe>
                </div>
            </div>

            <div className="text9">
                <div id="logo9">
                    <p>
                        It is not just the pro athletes, thanks to CO lift's
                        signature (CBD)
                        <br /> CBG cream, many retirees are able to continue the
                        lifestyle <br /> they love from their younger days.
                    </p>
                    <br />
                    <br />
                    <p>Get Back To It is easier with CO Lift.</p>
                </div>
            </div>
            <div className="text10">
                <div id="logo10">
                    <h2>Need a testimonial from a retiree</h2>
                    <br />
                    <iframe
                        width="500"
                        height="250"
                        src={`${process.env.PUBLIC_URL}/assets/https://www.youtube.com/embed/BUg-0kL3znY`}
                    ></iframe>
                </div>
            </div>

            <div className="text11">
                <div id="logo11">
                    <p>
                        Many busy information workers suffer from chronic pain
                        due to the long <br /> hours in front of the computer.
                        It creates a barrier for many to enjoy the <br />{" "}
                        outdoor lifestyle because chronic pain can be
                        debilitating.
                    </p>
                    <br />
                    <br />
                    <p>
                        With CO Lift we not only help to improve your
                        productivity, but we also <br /> help you reduce pain
                        and therefore stay healthier after the work hours <br />{" "}
                        so you can <strong>#GetBackToIt</strong>
                    </p>
                </div>
            </div>
            <div className="text12">
                <div id="logo12">
                    <h2>
                        Need a testimonial from a busy professional <br /> or
                        Founders video
                    </h2>
                    <br />
                    <iframe
                        width="500"
                        height="250"
                        src={`${process.env.PUBLIC_URL}/assets/https://www.youtube.com/embed/BUg-0kL3znY`}
                    ></iframe>
                </div>
            </div>
            <div className="text13">
                <div id="logo13">
                    <h2>Are you ready to get back to it too?</h2>
                    <br />
                    <p>
                        Whether in the Rocky Mountains or your own backyard,{" "}
                        <br />
                        with CO Lift Hemp balm only the sky is your limit.{" "}
                        <br />
                    </p>
                    <br />
                    <p>
                        OUR PRODUCTS{" "}
                        <span
                            style={{
                                fontSize: "30px",
                            }}
                        >
                            {" "}
                            &#8594;
                        </span>
                    </p>
                </div>
            </div>

            <img
                src={`${process.env.PUBLIC_URL}/assets/s0-cloud1@2x.png`}
                alt=""
                id="cloud1"
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/s0-cloud2@2x.png`}
                alt=""
                id="cloud2"
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/s0-cloud3@2x.png`}
                alt=""
                id="cloud3"
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/s0-cloud4@2x.png`}
                alt=""
                id="cloud4"
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/s1-mountain1@2x.png`}
                alt=""
                id="mountain1"
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/s1-mountain2@2x.png`}
                alt=""
                id="mountain2"
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/mountainPartial.png`}
                alt=""
                id="mountainPartial"
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/s1-mountain3@2x.png`}
                alt=""
                id="mountain3"
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/s1-bushes@2x.png`}
                alt=""
                id="bushes"
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/s1-trees1@2x.png`}
                alt=""
                id="trees1"
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/s1-trees2@2x.png`}
                alt=""
                id="trees2"
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/bee-hike@2x.png`}
                alt=""
                id="bee"
                className="bee-hike"
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/bee-stand@2x.png`}
                alt=""
                id="bee-stand"
                className="bee-stand"
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/bee-cycle@2x.png`}
                alt=""
                id="bee-cycle"
                className="bee-cycle"
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/bee-board@2x-mirror.png`}
                alt=""
                id="bee-board"
                className="bee-board"
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/bee-ski@2x.png`}
                alt=""
                id="bee-ski"
                className="bee-ski"
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/Artboard 5@2x.png`}
                alt=""
                id="ground"
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/bee-climb@2x.png`}
                alt=""
                id="bee-climb"
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/Artboard 3@2x.png`}
                alt=""
                id="tree-ground"
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/s4-ground@2x.png`}
                alt=""
                id="green-ground"
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/bee-cow@2x.png`}
                alt=""
                id="bee-cow"
            />
        </section>
    );
}

export default App;
