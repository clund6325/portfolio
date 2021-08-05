import React from 'react';
import {Fade} from 'react-reveal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon, InlineIcon } from '@iconify/react';






const SkillCardMob = (props) => (

  <>
  <Fade left duration={1000} delay={500}>
    <div className="skill-wrapper-mob">
      {/* <i class={props.icon} ></i> */}
    {/* <FontAwesomeIcon icon={['fab', props.icon ]} className='skill-icons' /> */}
    
          
          <Icon 
          icon={props.skillIcon} 
           
          className='skill-icons-mob' 
          />

    
      <h3>{props.name}</h3>
    </div>
  </Fade>
  </>
)

export default SkillCardMob;