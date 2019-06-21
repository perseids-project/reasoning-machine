import React from 'react';

import styles from './Machine.module.css';

import bottom from './bottom.svg';
import top from './top.svg';

const Machine = ({ bottomAngle, topAngle }) => (
  <div className={`container text-center ${styles.wrapper}`}>
    <img src={bottom} className={styles.image} alt="baseboard" />
    <img src={top} className={styles.image} alt="spinner" />
  </div>
);

export default Machine;
