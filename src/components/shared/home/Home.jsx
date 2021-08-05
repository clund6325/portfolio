import React from 'react';

import '../Shared.scss';

import HomeHero from './HomeHero';
import AboutMe from './about/AboutMe';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import ContactForm from '../../contact/Contact';
import Footer from '../../../mobile/footer-mob/FooterMob';

import { Fade } from 'react-reveal';

const Home = () => {

  return(
    <>
      <Fade duration={2000}>
      <div id="home">
        <HomeHero />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
        <Footer />
      </Fade>
    </>
  )
  
  }

export default Home;