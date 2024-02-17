import React from 'react'
import './ResumeBuild.scss'
import AboutMePic from '../../../mobile/home/about-me-mob/AboutMePic'
import ProjectsMob from '../../../mobile/home/projects-mob/ProjectsMob'

export const ResumeBuild = () => {
  return (
    <>
    <div className="head-container">
     <div className="resume_head">
       <div className='head-container_circle'>

       </div>
       <div className="head-container_pic">
        <AboutMePic />
       </div>
      </div> 
    </div>
    <div className="resume-title-cont">
      <h1 className='resume-main'>Cameron Lund</h1>
      <h3 className='resume-sub'>Full-Stack Software Engineer</h3>
    </div>
    <hr/>
    {/* Need to build profile components */}
    <div className="resume-card_profile">
      <h1>Profile</h1>
      <p>I am a driven Full-Stack Software Engineer who enjoys learning from everyone around me and is passionate about collaborating to build things for people to use. </p>
    </div>
    <hr/>
    <div className="resume-card_languages">

    </div>
    <hr/>
    <div className="resume-card_projects">
      <ProjectsMob />
    </div>
    </>
  )
}
