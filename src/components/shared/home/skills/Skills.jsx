import React from 'react';

import '../Home.scss'

import {Fade} from 'react-reveal';

import skills from '../../../../mobile/home/languages-mob/SkillsData';
import SkillCard from './SkillCard';

const MySkills = () => {


  const mapSkills = (skill) => (
    <SkillCard 
      key={skill.id}
      id={skill.id}
      name={skill.language}
      skillIcon={skill.icon}
  
    />
  );
 
    return(
  <>
    <div className='language-cont'>
      <div className="skills-head title">
        <h1>My Skills</h1>
      </div>
      <div className="skills-intro">
        <h3></h3>
      </div>
      <div className="skills">
        { skills.map(mapSkills)}
      </div>
    </div>
  </>
    )
}


export default MySkills;

