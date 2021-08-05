import React,  { Component } from 'react';


import './AboutMeMob.scss';
import AboutMePic from './AboutMePic';
import AboutMeCardMob from './about-me-card-mob/AboutMeCardMob';
import '../HomeMob.scss'
import { HeadingMob } from '../../StylesMob';

class AboutMeMob extends Component {

  render() {
    return(
      <>
      <div className="about-wrapper-mob">
        <div >
            <HeadingMob>About Me</HeadingMob>
        </div>
        <div className="about-me-pic">
          <AboutMePic />
        </div>
        <div className="about-words-wrapper-mob">
          <AboutMeCardMob />
        </div>
      </div>
      </>
    )
  }
}

export default AboutMeMob;