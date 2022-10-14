import React, { useState } from "react";
import Video from "../../assets/videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroSectionElements";
import { Button } from "../ButtonElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1> Eternal Dreams </HeroH1>
          <HeroP>Every great dream begins with a dreamer</HeroP>
          <HeroBtnWrapper>
            <Button
              to="about"
              smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="false"
              dark="false"
            >
              Let's Begin {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
