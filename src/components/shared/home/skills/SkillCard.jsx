import React from 'react';
import {Fade} from 'react-reveal';
import { Icon } from '@iconify/react';



const SkillCard = (props) => (

  <>
  <Fade left duration={2000} delay={1000}>
      <div className="skill-wrapper">
      <div className="skill-icons">

    <Icon 
          icon={props.skillIcon} 
           
          className='skill-icons' 
    />
      </div>
      <h3>{props.name}</h3>
    </div>
  </Fade>
  </>
)

export default SkillCard;