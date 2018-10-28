import React from 'react';
import Waypoint from 'react-waypoint';
import Weapon from './weapon';
import Button from './button';
import { palette } from '../common/variables';

function handleWaypointEnter() {
  document.querySelector('#weapons > h1').classList.remove('fadeOut');
  document.querySelector('#weapons > h1').classList.remove('hidden');
  document.querySelector('#weapons > h1').classList.add('fadeIn');
}

function handleWaypointLeave() {
  document.querySelector('#weapons > h1').classList.remove('fadeIn');
  document.querySelector('#weapons > h1').classList.add('fadeOut');
}

const Weapons = () => (
  <div id="weapons">
    <h1 className="animated hidden">Weapons of Choice</h1>
    <div className="container">
      <Waypoint onEnter={() => handleWaypointEnter()} onLeave={() => handleWaypointLeave()} />
      <div className="row">
        <div className="weapon col-xs col-xl">
          <Weapon
            icon="devicon-react-original"
            alt="React"
            progress={100}
          />
        </div>
        <div className="weapon col-xs col-xl">
          <Weapon
            icon="devicon-rails-plain"
            alt="Rails"
            progress={75}
          />
        </div>
        <div className="weapon col-xs col-xl">
          <Weapon
            icon="devicon-postgresql-plain"
            alt="Postgresql"
            progress={75}
          />
        </div>
      </div>
      <div className="row">
        <div className="weapon col-xs col-xl">
          <Weapon
            icon="devicon-javascript-plain"
            alt="JavaScript"
            progress={100}
          />
        </div>
        <div className="weapon col-xs col-xl">
          <Weapon
            icon="devicon-ruby-plain"
            alt="Ruby"
            progress={75}
          />
        </div>
        <div className="weapon col-xs col-xl">
          <Weapon
            icon="devicon-nodejs-plain"
            alt="Node"
            progress={100}
          />
        </div>
      </div>

      <div className="row">
        <div className="weapon col-xs col-xl">
          <Weapon
            icon="devicon-mongodb-plain"
            alt="MongoDB"
            progress={50}
          />
        </div>
        <div className="weapon col-xs col-xl">
          <Weapon
            icon="devicon-vim-plain"
            alt="Vim"
            progress={75}
          />
        </div>
        <div className="weapon col-xs col-xl">
          <Weapon
            icon="devicon-git-plain"
            alt="Git"
            progress={100}
          />
        </div>
      </div>
      <a className="resume-btn" href="/static/resume-derek-keith.pdf" role="button">
        <span className="icon-file-pdf" />&nbsp;PDF Resume
      </a>
      <Button element="footer" />
    </div>
    <style jsx>{`
      #weapons {
        background: #1a1a1a url('/static/images/weapons-bg.jpg');
        background-position: top center;
        background-repeat: no-repeat;
        justify-content: center;
        display: flex;
        flex-direction: column;
        text-align: center;
        min-height: 100vh;
        padding: 50vh 0 100vh 0;
      }

      h1 {
        margin-bottom: 2em;
      }

      i {
        font-size: 2em;
      }

      .weapon {
        margin-bottom: 2em;
      }

      .resume-btn {
        background: ${palette.darkGrey};
        border: 1px solid ${palette.white};
        border-radius: 0.25rem;
        color: ${palette.white};
        font-size: 1rem;
        line-height: 1.25;
        padding: 0.5rem 0.75rem;
        transition: all 0.5s;
      }

      .resume-btn:hover {
        background: ${palette.purple};
        border-color: #f8f8f2;
        color: ${palette.white};
        text-decoration: none;
      }

      .resume-btn .icon-file-pdf {
        color: ${palette.white};
        display: inline-block;
        transition: all 0.5s;
      }
    `}
    </style>
  </div>
);

export default Weapons;
