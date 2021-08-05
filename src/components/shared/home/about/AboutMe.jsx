import React,  { Component } from 'react';

import AboutMePicFull from './AboutMePicFull';
import AboutMeCard from './AboutMeCard';
import '../Home.scss'

class AboutMe extends Component {

  render() {
    return(
      <>
      <div className="about-title-wrapper">
        <div className="about-title title">
            <h1>About Me</h1>
        </div>
        </div>
      <div className="about-cont-wrapper">
        <div className="about-words-wrapper">
          <AboutMeCard />
        </div>
        <div className="about-me-pic">
          <AboutMePicFull />
        </div>
      </div>
      </>
    )
  }
}

export default AboutMe;