import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import bg from '../images/heromain.png';
import herobg from '../images/herobox.png';

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Grow your Leads&nbsp;&nbsp;with {` `}
            <span className="inline-block relative">
              ENVICHAT{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 p-2">
            Create Chatbots Within minutes and Publish it anywhere you like.
            <br />
            EnviChat empowers businesses to engage with their customers through
            intelligent and interactive chatbots.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/pricing" white>
              TRY NOW
            </Button>
            <Button href="/pricing" white>
              DISCOVER
            </Button>
          </div>
        </div>
        <div className="relative max-w-full mx-auto md:max-w-5xl xl:mb-24 px-4">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="relative overflow-hidden rounded-b-[0.9rem] aspect-w-33 aspect-h-40 md:aspect-w-688 md:aspect-h-490 lg:aspect-w-1024 lg:aspect-h-490">
                <img
                  src={bg}
                  className="w-full h-full object-cover"
                  alt="AI"
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={`icon-${index}`} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[20rem] xl:flex"
                    title={
                      <>
                        <span>No Code ..</span>
                        <br />
                        <span>One Click Integration</span>
                      </>
                    }
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[99%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[52%] md:w-[138%] lg:-top-[120%]">
            <img
              src={herobg}
              className="min-w-full opacity-15"
              width={1440}
              height={80}
              alt="hero"
            />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
