import React from 'react';
import Waypoint from 'react-waypoint';
import Header from './header';
import About from './about';
import Button from './button';

function handleWaypointEnter() {
  document.querySelector('.callout h1').classList.remove('fadeOut');
  document.querySelector('.callout h1').classList.remove('hidden');
  document.querySelector('.callout h1').classList.add('fadeIn');
  document.querySelector('.callout p').classList.remove('fadeOutDown');
  document.querySelector('.callout p').classList.remove('hidden');
  document.querySelector('.callout p').classList.add('fadeInUp');
}

function handleWaypointLeave() {
  document.querySelector('.callout h1').classList.remove('fadeIn');
  document.querySelector('.callout h1').classList.add('fadeOut');
  document.querySelector('.callout p').classList.remove('fadeInUp');
  document.querySelector('.callout p').classList.add('fadeOutDown');
}

const Hero = () => (
  <div className="hero">
    <Header />
    <Waypoint onEnter={() => handleWaypointEnter()} onLeave={() => handleWaypointLeave()} />
    <div className="container">
      <div className="row">
        <div className="callout col-xs-12 col-sm-9 offset-sm-2 col-md-10 col-xl-9 offset-xl-1">
          <h1 className="animated hidden">Make the internet <span>awesome</span></h1>
          <p className="animated hidden">I build web applications that are elegant, clean, and maintainable.
            I&apos;m inspired by clever (but obvious) code and new technology.
            I&apos;m most fluent in React, Angular, and Rails.
            I work mostly in the frontend where I make awesome things happen.
          </p>
        </div>
        <div className="col-xs-12 col-sm-9 offset-sm-2 col-md-10 col-xl-9 offset-xl-1 text-xs-center">
          <Button element="about" />
        </div>
      </div>
    </div>
    <About />
    <style jsx>{`
      .hero {
        background: #1a1a1a url('/static/images/hero-bg.jpg');
        background-position: top center;
        background-repeat: no-repeat;
        min-height: 1900px;
      }
    `}</style>
  </div>
);

export default Hero;
