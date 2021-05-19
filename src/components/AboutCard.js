import React from 'react';
import Anime from 'react-anime';
import '../styles/AboutCard.css';

function AboutCard(props) {
  return(
    <Anime easing="easeInSine" opacity={[0, 1]} scale={props.scaleArr} delay={100} duration={300}>
      <div className="card about-card" onClick={props.onClick('about')} onMouseEnter={props.MouseEnter('about')} onMouseLeave={props.MouseLeave('about')}>
        <h2>I'm Datta. 🧜‍♂️</h2>
        <p>I'm a Python,Flutter Developer.<br/> Click to learn more.</p>
      </div>
    </Anime>
  )
}

export default AboutCard;