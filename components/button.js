import React, { Component } from 'react';
import $ from 'jquery';
import { palette } from '../common/variables';

export default class Button extends Component<{element: any, direction: string}> {
  handleClick(e) {
    e.preventDefault();
    const el = $(`#${this.props.element}`);
    if (parseInt(el.css('padding-top'), 0) > 0) {
      $('html, body').animate({
        scrollTop: el.offset().top + (parseInt(el.css('padding-top'), 0) * 0.5),
      }, 1000);
    } else {
      $('html, body').animate({
        scrollTop: el.offset().top,
      }, 1000);
    }
  }

  render() {
    /* eslint-disable */
    if (this.props.text) {
      return (
        <span>
          <span onClick={this.handleClick.bind(this)}>{this.props.text}</span>
          <style jsx>{`
            .btn-click {
              color: ${palette.white};
              display: block;
              margin: 15px 0;
              transition: 0.5s ease all;
            }
            .btn-click:hover {
              color: ${palette.green};
              cursor: pointer;
              transform: translateY(3px);
            }
          `}</style>
        </span>
      );
    }
    return (
      <a href="#" className="btn-scroll" onClick={this.handleClick.bind(this)}>
        <span className={`icon-circle-${this.props.direction ? 'up' : 'down'}`} />
      </a>
    );
    /* eslint-ensable */
  }
}
