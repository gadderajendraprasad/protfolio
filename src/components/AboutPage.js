import React from 'react';
import Anime from 'react-anime';
import CustomScroll from 'react-custom-scroll';
import BackToHomeBtn from './BackToHomeBtn';
import '../styles/customScroll.css';
import '../styles/AboutPage.css';

const AboutPage = props => {
  return(
    <Anime easing="easeOutCubic" opacity={[0, 1]} translateY={-30} duration={400} delay={300}>
      <div className="about-page">
          <BackToHomeBtn handleClick={props.returnBtn}/>
          <Anime easing="easeOutCubic" left={[-350, -150]} duration={500} delay={800}>
            <p className="page-tag">About Me</p>
          </Anime>
          <CustomScroll heightRelativeToParent="calc(100% - 20px)">
            <div className="page-content">
              <p>Hi there! <span className="hand-wave">👋</span></p>
              <h1>I'm Akula Guru Datta.</h1>
              <p>You can call me <strong>Datta </strong> :)</p>
              <p>I'm a 21-year-old developer from Hyderabad. Specialize in Python and Flutter. Tasted almost every corner in Python. Can build beautiful UI's with Flutter. I like impactful work.</p>
              <h3>Skills</h3>
              <p>My current skill set includes <strong>Python</strong>, <strong>Flutter</strong>, <strong>Flask</strong>, <strong>Web-Scraping</strong>, <strong>Firebase</strong>, <strong>SQL</strong>, <strong>Data Science</strong>, <strong>Kivy</strong>, <strong>HTML</strong> etc. And that's excluding all the common (yet sometimes complex) build/workflow tools like Azure, Leaflet etc.</p>
              <p>I believe data matters a lot. Over on personal interest, I am good at visualizing GIS, analysing politics, automating regular tasks, designing telegram bots. I believe I'm a quick learner. I prioritize concepts over techniques.</p>
              <p>Simplicity, though overused (and sometimes misused) as a term, is something I really value. I like to build solutions that are simple yet interactive for the users.</p>
              <p>Besides coding, I'm also very passionate about traveling and exploring new technology. I prioritize interacting  with people and exploring new ideas. I believe knowledge should always be shareable.</p>
            </div>
          </CustomScroll>
      </div>
    </Anime>
  )
}

export default AboutPage;