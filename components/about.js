import React from 'react';
import Waypoint from 'react-waypoint';
import Button from './button';
import { fontFamily, palette } from '../common/variables';

function handleWaypointLeave() {
  document.querySelector('.profile-image').classList.remove('flipInY');
  document.querySelector('.profile-image').classList.add('flipOutY');
  document.querySelector('.profile-bio h1').classList.remove('fadeIn');
  document.querySelector('.profile-bio h1').classList.add('fadeOut');
  document.querySelector('.profile-bio #synopsis').classList.remove('flipInX');
  document.querySelector('.profile-bio #synopsis').classList.add('flipOutX');
  document.querySelector('.profile-bio p.intro').classList.remove('fadeIn');
  document.querySelector('.profile-bio p.intro').classList.add('fadeOut');
}

function handleWaypointEnter() {
  document.querySelector('.profile-image').classList.remove('flipOutY');
  document.querySelector('.profile-image').classList.add('flipInY');
  document.querySelector('.profile-bio h1').classList.remove('fadeOut');
  document.querySelector('.profile-bio h1').classList.remove('hidden');
  document.querySelector('.profile-bio h1').classList.add('fadeIn');
  document.querySelector('.profile-bio #synopsis').classList.add('flipInX');
  document.querySelector('.profile-bio #synopsis').classList.remove('flipOutX');
  document.querySelector('.profile-bio #synopsis').classList.remove('hidden');
  document.querySelector('.profile-bio p.intro').classList.remove('fadeOut');
  document.querySelector('.profile-bio p.intro').classList.remove('hidden');
  document.querySelector('.profile-bio p.intro').classList.add('fadeIn');
}

const About = () => (
  <div id="about">
    <div className="intro container">
      <div className="row">
        <div className="col-6 ml-xs-auto col-md-5 col-xl-5 text-center profile-image animated">
          <img className="img-fluid m-x-auto" src="/static/images/derek-keith.png" alt="Derek Keith" />
          <div>
            <Button element="footer" text="Follow Me" />
          </div>
        </div>
        <div className="col-md-7 col-xl-7 profile-bio">
          <h1 className="animated hidden">What is a Codeurge?</h1>
          <div id="synopsis" className="animated hidden">
            <small><strong>verb</strong></small> dreaming in code to find a solution, and waking to type it out at 3:00
            in the morning.
            <br />
            <br />
            <small><strong>noun</strong></small> Derek Keith - Senior Full Stack Developer <small>(see below)</small>
          </div>
          <p className="intro animated hidden">
            I’m a self-taught web developer who believes the internet is the next greatest step in human evolution.
            HTML, CSS, JavaScript, TypeScript and Ruby are a few languages I speak alongside English.
            <br />
            <br />
            I 💚 (P)React &amp; MobX/Redux.
            &nbsp;
            <a href="https://github.com/codeurge/dotfiles" target="_blank" rel="noopener noreferrer">Vim</a>.
            &nbsp;
            <a href="https://github.com/circle-cli/circle-cli" target="_blank" rel="noopener noreferrer">circle-cli</a>.
            <br />
            <br />
            Driven by efficiency in building solutions, I stay updated on important things like ES6/ES7,
            and Observables. Every tool, language, or framework is a part of the journey to craft the solution I desire.
          </p>
          <Waypoint onEnter={() => handleWaypointEnter()} onLeave={() => handleWaypointLeave()} />
        </div>
      </div>
      <div className="col-md-7 ml-md-auto text-xs-center">
        <Button element="weapons" />
      </div>
    </div>
    <style jsx>{`
      #about {
        align-items: center;
        display: flex;
        min-height: 100vh;
        margin: 25vh 0;
      }
      #synopsis {
        background: rgba(0,0,0,0.6);
        border-radius: 5px;
        color: ${palette.lightGray};
        font-family: ${fontFamily.regular} !important;
        font-style: italic;
        padding: 15px;
      }
      .intro {
        padding: 15px;
      }
    `}
    </style>
  </div>
);

export default About;
