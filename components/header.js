import React, { Component } from 'react';
import TypeWriter from 'react-typewriter';
import { palette } from '../common/variables';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typing: 1,
    };
  }

  render() {
    return (
      <div id="header">
        <div className="container">
          <div className="left-header">
            <div className="col-1">
              <div className="logo">
                <img src="/static/images/logo.png" alt="Codeurge" />
              </div>
            </div>
            <div className="col">
              <TypeWriter className="tagline" typing={this.state.typing}>
                <a className="typewriter-text" href="/static/resume-derek-keith.pdf">Software Engineer</a>
              </TypeWriter>
            </div>
          </div>
        </div>
        <style jsx>{`
          #header {
            background: url('/static/images/header-mask.png');
            min-height: 388px;
          }

          .left-header {
            display: flex;
            margin: 0 -15px;
            padding-top: 50px;
          }

          .logo img {
            max-height: 60px;
          }

          .typewriter-text {
            color: ${palette.white};
            font-size: 0.70em;
            line-height: 3.5em;
            text-transform: uppercase;
            transition: color 1s ease;
          }
          .typewriter-text:hover {
            color: ${palette.green};
            cursor: pointer;
            text-decoration: none;
          }
        `}</style>
      </div>
    );
  }
}
