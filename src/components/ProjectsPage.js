import React from 'react';
import Anime from 'react-anime';
import CustomScroll from 'react-custom-scroll';
import BackToHomeBtn from './BackToHomeBtn';
import GlassEmoji from '../assets/GlassEmoji';
import { BtnIcon } from './BackToHomeBtn';
import { projectsData } from '../data/data';
import '../styles/ProjectsPage.css';
import '../styles/customScroll.css';

const ProjectsList = props => {
  return(
    props.projects.map((project, index) => 
      <div className="project-item" key={index}>
        <div className="project-heading">
          <h2>{project.name}</h2>
          <p>{project.heading}</p>
        </div>
        <div className="thumb">
          {project.thumb && <img src={project.thumb} alt="Project Preview"/>}
        </div>
        <div className="project-links">
          {project.links.live && <a className="link" target="_blank" href={project.links.live}>Live Demo</a>}
          {project.links.repo && <a className="link" target="_blank" href={project.links.repo}>Code on GitHub</a>}
          {project.links.playstore && <a className="link" target="_blank" href={project.links.playstore}>Get this on Playstore</a>}
        </div>
        <div className="project-details">
          <p>{project.details}</p>
        </div>
      </div>
    )
  )
}

const ProjectsPage = props => {
  return(
    <Anime easing="easeOutCubic" opacity={[0, 1]} translateY={-30} duration={400} delay={300}>
      <div className="projects-page">
          <BackToHomeBtn handleClick={props.returnBtn}/>
          <Anime easing="easeOutCubic" left={[-350, -120]} duration={500} delay={800}>
            <p className="page-tag">Projects</p>
          </Anime>
          <CustomScroll heightRelativeToParent="calc(100% - 20px)">
            <div className="page-content">
              <h1>Time to talk work! <GlassEmoji/></h1>
              <p className="page-intro">I believe in quote <strong>"Knowledge is not power; Implementation is power"</strong>.</p><p> Below are some of the projects that I loved working on. Also, I'm extremely grateful to the entire Open Source community for all the amazing stuff that it provides us and makes it possible for everyone to create amazing things. I love contributing to Open Source whenever I can.</p>
              <div className="projects-container">
                <ProjectsList projects={projectsData}/>
              </div>
            </div>
          </CustomScroll>
      </div>
    </Anime>
  )
}

export default ProjectsPage;