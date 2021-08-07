import React from 'react';
// import postgresqlIcon from '@iconify/icons-logos/postgresql';
import { Icon, InlineIcon } from '@iconify/react';
// import html5Icon from '@iconify/icons-fa/html5';

// import { Icon, InlineIcon } from '@iconify/react';


import './SkillsMob.scss';
import '../HomeMob.scss';
import { HeadingMob } from "../../StylesMob";

import { Fade } from 'react-reveal';

import skills from './SkillsData';
import SkillCardMob from './SkillCardMob';
// import SkillCardMob2 from './SkillCardMob2';

const MySkillsMob = () => {


  const mapSkills = (skill) => (
    <SkillCardMob
      key={skill.id}
      id={skill.id}
      name={skill.language}
      skillIcon={skill.icon}
    
    />
    // <SkillCardMob
    //   key={skill.id}
    //   name={skill.language}
    //   icon={skill.icon}
    
    // />
  );
 
    return(
  <>
    <div className='language-cont-mob'>
      <div className=" title">
        <HeadingMob>What I'm Good At</HeadingMob>
      </div>
      <div className="skills-intro">
        <h3></h3>
      </div>
      <div className="skills-mob">
        { skills.map(mapSkills)}
      </div>
      {/* <Icon icon={postgresqlIcon} /> */}
    </div>
  </>
    )
}


export default MySkillsMob;

