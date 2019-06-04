import React from 'react';
import * as _ from 'lodash';
import rafSchd from 'raf-schd';
import { colors } from '../static/vars';

const transitionPoint = 75;
const maxLineThickness = 10;
const heightToLinesRatio = 0.065;
const scrollSpeedRatio = 0.3;

class Backdrop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numLines: 0,
      offset: 0,
    };
  }

  /**
   * easing function stuff
   * graphs: https://easings.net/en
   * js implementations: https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
   *
   * t: current time, b: beginning value, c: change in value, d: duration
   */
  easeOutQuart = (t, b, c, d) => -c * ((t = t / d - 1) * t * t * t - 1) + b;

  lineThickness = idx =>
    Math.ceil(
      this.easeOutQuart(
        idx + this.state.offset,
        0,
        maxLineThickness,
        this.state.numLines
      )
    );

  linePosition = idx =>
    transitionPoint * ((idx + this.state.offset) / this.state.numLines);

  lineOpacity = idx => (idx + this.state.offset) / this.state.numLines + 0.2;

  updateLines = rafSchd(() => {
    const { scrollY, innerHeight } = window;
    const gradientHeight = innerHeight * (transitionPoint / 100);
    const numLines = Math.round(gradientHeight * heightToLinesRatio);
    const distanceBetweenLines = gradientHeight / numLines;
    const offset =
      (((scrollY * scrollSpeedRatio) % distanceBetweenLines) /
        distanceBetweenLines) *
      -1;

    if (offset > 1) console.log({ distanceBetweenLines, offset });
    this.setState({
      ...this.state,
      numLines,
      offset,
    });
  });

  componentDidMount = () => {
    this.updateLines();
    window.addEventListener('scroll', () => {
      this.updateLines();
    });
    window.addEventListener('resize', () => {
      this.updateLines();
    });
  };

  componentWillUnmount = () => {
    this.updateLines.cancel();
  };

  render = () => (
    <div className="backdrop">
      {_.range(this.state.numLines).map(lineNum => (
        <span
          key={lineNum}
          className="line"
          style={{
            top: `${this.linePosition(lineNum)}%`,
            height: `${this.lineThickness(lineNum)}px`,
            opacity: `${this.lineOpacity(lineNum)}`,
          }}
        />
      ))}

      <style jsx>{`
        .backdrop {
          position: fixed;
          z-index: -1;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100vw;
          background: linear-gradient(
            ${colors.green},
            ${colors.green} ${transitionPoint / 2}%,
            ${colors.red} ${transitionPoint}%,
            ${colors.red}
          );
        }

        .line {
          position: absolute;
          background: ${colors.red};
          left: 0;
          width: 100%;
          height: 4px;
        }
      `}</style>
    </div>
  );
}

export default Backdrop;
