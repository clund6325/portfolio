import React from 'react';
import { Carousel } from 'react-bootstrap';

import '../Home.scss';

import projectData from '../../../../mobile/home/projects-mob/ProjectData';
import Project from './Project';

const Projects = () => {

  const mapProjects = (project) => (
    <Project 
    name={project.name}
    image={project.image}
    about={project.about}
    url={project.website}
    github={project.github}
    languages={project.icons}
  />
  );

  return(
  <>
  <div className="port-cont">
    <div className="proj-header title">
      <h2>What I've Worked On</h2>
    </div>
    <div className="projects">
      {projectData.map(mapProjects)}
    </div>
      </div>
  </>
  )
}

export default Projects;