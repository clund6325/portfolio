import React from 'react';

import HomeHeroMob from './home-hero-mob/HomeHeroMob';
import AboutMeMob from './about-me-mob/AboutMeMob';
import MySkillsMob from './languages-mob/SkillsMob';
import ProjectsMob from './projects-mob/ProjectsMob';
import FooterMob from '../footer-mob/FooterMob';
import ContactMob from '../../components/contact/contact-mobile/ContactMob';

import {Fade} from 'react-reveal';

const HomeMob = () => {

  return(
    <>
      <div id="home">
        <HomeHeroMob />
      </div>
      <Fade duration={2000}>
       <div id="about">
        <AboutMeMob />
      </div> 
      <div id="skills">
        <MySkillsMob />
      </div>
      {/* <div id="projects">
        <ProjectsMob />
      </div> */}
      <div id="contact">
       <ContactMob />
      </div>
        <FooterMob />
      </Fade>
    </>
  )
};

export default HomeMob;