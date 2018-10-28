import React, { Component } from 'react';
import _ from 'lodash';
import Button from './button';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    const start = new Date();
    this.state = {
      start,
      elapsed: 0,
      miles: 0,
      seconds: 0,
      minutes: 0,
    };
  }
  renderCounter() {
    const { elapsed } = this.state;

    const calculateMiles = () => {
      const secs = (this.state.elapsed / 1000);
      const miles = (secs * 10.61).toFixed(2);
      return miles;
    };

    const formatSeconds = () => ((elapsed / 1000) % 60).toFixed(0);
    const formatMinutes = () => (Math.floor(elapsed / 60000));

    const runTimer = () => {
      const end = new Date();
      const newState = _.extend({}, this.state);
      newState.elapsed = (end - this.state.start);
      newState.miles = calculateMiles();
      newState.seconds = formatSeconds();
      newState.minutes = formatMinutes();
      this.setState(newState);
    };

    setTimeout(runTimer, 100);

    return (
      <div className="voyager text-center">
        <p>Since you arrived at this page {this.renderMinutes()} {this.state.seconds}s ago
          <br />
          Voyager 1 has traveled <span className="mileage">{this.state.miles}</span> miles
          <br />
          at a rate of 3.6AU/year or 38,200 mph.
        </p>
      </div>
    );
  }

  renderMinutes() {
    if (this.state.minutes > 0) {
      return (
        <span>{this.state.minutes}m</span>
      );
    }
    return null;
  }

  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="text-center">
            <Button element="header" direction="up" />
          </div>
          {this.renderCounter()}
          <div className="col text-center">
            {/*eslint-disable*/}
            <a href="https://twitter.com/codeurge" className="symbol" title="&#xe087;" target="_blank" />{/* Twitter */}
            <a href="https://linkedin.com/in/derekkeith" className="symbol" title="&#xe052;" target="_blank" />{/* Linkedin */}
            <a href="https://dribbble.com/codeurge" className="symbol" title="&#xe021;" target="_blank" />{/* Dribbble */}
            <a href="mailto:derek@codeurge.com" className="symbol" title="&#xe024;" />{/* Email */}
            <a href="https://github.com/codeurge" className="symbol" title="&#xe037;" target="_blank" />{/* Github */}
            {/* eslint-enable */}
          </div>
          <div className="col text-center extra-info">
            <div className="built-with-react">
              <p>
                Built with <i className="devicon-react-original" />React &amp; Next.js
                <br />
                <a href="https://github.com/codeurge/codeurge">Source on Github</a>
              </p>
            </div>
          </div>
        </div>
        <style jsx>{`
          .symbol {
            font-size: 2.5em;
          }
        `}</style>
      </footer>
    );
  }
}
