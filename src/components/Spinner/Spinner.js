/* eslint-disable react/no-unused-prop-types */
import React, { Component } from 'react';
import { number } from 'prop-types';

import styles from './Spinner.module.css';

import bottom from './bottom.svg';
import top from './top.svg';

const mod = (a) => {
  const jsResult = a % 360;

  if (jsResult < 0) {
    return jsResult + 360;
  }

  return jsResult;
};

const nearestAngle = (prevAngle, angle) => {
  const firstPossibility = prevAngle + mod(angle - prevAngle);
  const secondPossibility = prevAngle - mod(prevAngle - angle);

  if (Math.abs(prevAngle - firstPossibility) < Math.abs(prevAngle - secondPossibility)) {
    return firstPossibility;
  }

  return secondPossibility;
};

class Spinner extends Component {
  static propTypes = {
    bottomAngle: number.isRequired,
    topAngle: number.isRequired,
  };

  state = {
    topAngle: 0,
    bottomAngle: 0,
  }

  static getDerivedStateFromProps(
    { bottomAngle, topAngle },
    { bottomAngle: prevBottomAngle, topAngle: prevTopAngle },
  ) {
    return {
      bottomAngle: nearestAngle(prevBottomAngle, bottomAngle),
      topAngle: nearestAngle(prevTopAngle, topAngle),
    };
  }

  render() {
    const { bottomAngle, topAngle } = this.state;

    return (
      <div className={`col-12 col-lg-6 text-center ${styles.wrapper}`}>
        <img
          src={bottom}
          className={styles.image}
          alt="baseboard"
          style={{ transform: `rotate(${bottomAngle}deg)` }}
        />

        <img
          src={top}
          className={styles.image}
          alt="spinner"
          style={{ transform: `rotate(${topAngle}deg)` }}
        />
      </div>
    );
  }
}

export default Spinner;
