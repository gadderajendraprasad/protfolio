import React from 'react';
import '../styles/WritingsCard.css';
import Anime from 'react-anime';

function WritingsCard(props) {
  return(
    <Anime easing="easeInSine" scale={props.scaleArr} opacity={[0, 1]} delay={700} duration={300}>
      <div className="card writings-card" onClick={props.onClick('writings')} onMouseEnter={props.MouseEnter('writings')} onMouseLeave={props.MouseLeave('writings')}>
        <h2>Certifications 👨‍🎓</h2>
        <p>Check out my Certifications!</p>
      </div>
    </Anime>
  )
}

export default WritingsCard;