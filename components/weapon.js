import React, { Component } from 'react';
import { Line } from 'rc-progress';
import Waypoint from 'react-waypoint';

export default class Weapon extends Component<{progress: any, icon: any, alt: any }> {
  static weaponHover(e) {
    const title = e.target.parentNode.parentNode.querySelector('.weapon-title');
    title.classList.remove('hidden');
    title.classList.add('fadeInDown');
  }

  static weaponLeave(e) {
    const title = e.target.parentNode.parentNode.querySelector('.weapon-title');
    title.classList.add('hidden');
    title.classList.remove('fadeInDown');
  }

  constructor(props) {
    super(props);
    this.state = {
      barOptions: {
        strokeWidth: '4',
        trailColor: '#f8f8f2',
        trailWidth: '2',
        color: '#c2c88f',
      },
      progress: 0,
    };
  }

  handleWaypointEnter() {
    this.setState({ progress: this.props.progress });
    const el = document.querySelector(`.${this.props.alt}`);
    el.classList.remove('fadeOut');
    el.classList.remove('hidden');
    el.classList.add('fadeIn');
  }

  handleWaypointLeave() {
    this.setState({ progress: 0 });
    const el = document.querySelector(`.${this.props.alt}`);
    el.classList.remove('fadeIn');
    el.classList.add('fadeOut');
  }

  render() {
    const { barOptions, progress } = this.state;
    return (
      <div className={`animated hidden row flex-items-left flex-items-xs-middle ${this.props.alt}`}>
        <Waypoint onEnter={() => this.handleWaypointEnter()} onLeave={() => this.handleWaypointLeave()} />
        <div className="col-xs-12 col-md-3 col-xl-3 weapon-icon">
          <i
            className={this.props.icon}
            title={this.props.alt}
            onMouseEnter={Weapon.weaponHover}
            onMouseLeave={Weapon.weaponLeave}
          />
        </div>
        <div className="col-xs-12 col-md-9 col-xl-9">
          <Line
            percent={progress}
            strokeWidth={barOptions.strokeWidth}
            strokeColor={barOptions.color}
            trailWidth={barOptions.trailWidth}
            trailColor={barOptions.trailColor}
          />
          <span className="weapon-title hidden animated">{this.props.alt}</span>
        </div>
        <style jsx>{`
          .weapon-icon {
            align-items: center;
            display: flex;
            justify-content: center;
            font-size: 1.5em;
          }
        `}</style>
      </div>
    );
  }
}
