import React, { useState } from 'react'
import video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HroBtnWrapper, ArraowForward, ArraowRight } from './HeroElements'
import { Button } from '../ButtonElements'

const HeroSection = () => {

  const [hover, sethover] = useState(false);

  const onHover = () => {
    sethover(!hover);
  }

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Virtual Banking Made Easy</HeroH1>
          <HeroP>Sign up for a new account today and recieve $250 in credit towards your next payment</HeroP>
          <HroBtnWrapper>
            <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Get Started {hover ? <ArraowForward /> : <ArraowRight />}
            </Button>
          </HroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  )
}

export default HeroSection
