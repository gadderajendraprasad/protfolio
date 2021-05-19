import React from 'react';
import Anime from 'react-anime';
import CustomScroll from 'react-custom-scroll';
import BackToHomeBtn from './BackToHomeBtn';
import mail from '../assets/mail.svg';
import github from '../assets/github.png';
import twitter from '../assets/twitter.svg';
import medium from '../assets/medium.svg';
import linkedin from '../assets/linkedin.svg';
import codepen from '../assets/codepen.svg';
import quora from '../assets/quora.svg';
import facebook from '../assets/facebook.svg';
import hackerrank from '../assets/hackerrank.png';
import telegram from '../assets/telegram.png';
import '../styles/ContactsPage.css';

const ContactsPage = props => {
  return(
    <Anime easing="easeOutCubic" opacity={[0, 1]} translateY={-30} duration={400} delay={300}>
      <div className="contacts-page">
          <BackToHomeBtn handleClick={props.returnBtn}/>
          <Anime easing="easeOutCubic" left={[-350, -130]} duration={500} delay={800}>
            <p className="page-tag">Contact</p>
          </Anime>
          <div className="page-content">
            <h1>Let's get in touch!</h1>
            <p>I love meeting new people from around the world! Hit me up to talk about project ideas, Programming, Python, Flutter, Flask and Kivy, Geography, world, Or Politics. Or just say "Hi" and we'll find something we enjoy talking about. You can find me through any of the platform listed below.</p>
            <div className="link-list">
              <ul>
                <li><a href="mailto:akula.gurudatta@gmail.com" target="_blank"><img src={mail} alt="Mail me!"/></a></li>
                <li><a href="https://github.com/datta07" target="_blank"><img src={github} alt=""/></a></li>
                <li><a href="https://www.linkedin.com/in/akula-guru-datta-226577162/" target="_blank"><img src={linkedin} alt=""/></a></li>
                <li><a href="https://www.hackerrank.com/akula_gurudatta" target="_blank"><img src={hackerrank} alt=""/></a></li>
                <li><a href="https://twitter.com/dattaakula" target="_blank"><img src={twitter} alt=""/></a></li>
                <li><a href="https://www.facebook.com/akula.gurudatta/" target="_blank"><img src={facebook} alt=""/></a></li>
                <li><a href="https://t.me/Datta07" target="_blank"><img src={telegram} alt=""/></a></li>
              </ul>
            </div>
          </div>
      </div>
    </Anime>
  )
}

export default ContactsPage;