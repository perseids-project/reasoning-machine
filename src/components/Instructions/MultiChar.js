import React from 'react';
import { string } from 'prop-types';

import styles from './MultiChar.module.css';

const MultiChar = ({
  base, left, right, aboveLeft, aboveRight,
}) => (
  <table className={styles.multichar}>
    <tbody>
      {(aboveLeft || aboveRight) && (
        <tr className={styles.multicharTop}>
          <td>
            <small>
              {aboveLeft}
            </small>
          </td>
          <td>
            <small>
              {aboveRight}
            </small>
          </td>
        </tr>
      )}
      <tr className={styles.multicharTop}>
        <td>
          <small>
            {left}
          </small>
        </td>
        <td>
          <small>
            {right}
          </small>
        </td>
      </tr>
      <tr>
        <td colSpan="2">
          {base}
        </td>
      </tr>
    </tbody>
  </table>
);

MultiChar.propTypes = {
  base: string.isRequired,
  left: string.isRequired,
  right: string.isRequired,
  aboveLeft: string,
  aboveRight: string,
};

MultiChar.defaultProps = {
  aboveLeft: undefined,
  aboveRight: undefined,
};

export default MultiChar;
