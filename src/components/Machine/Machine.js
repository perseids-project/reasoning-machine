import React, { Component } from 'react';

import styles from './Machine.module.css';

import bottom from './bottom.svg';
import top from './top.svg';

const rotation = 45;

const quantificationFromAngle = (angle) => {
  if (angle < 0) {
    angle = 360 + (angle % 360);
  }

  return {
    0: [true, false, true],
    45: [true, true, true],
    90: [false, false, false],
    135: [false, true, false],
    180: [true, false, false],
    225: [true, true, false],
    270: [false, false, true],
    315: [false, true, true],
  }[angle % 360]
};

const phrase = (subject, predicate, subjectQuantified, predicateQuantified, positive) => {
  const subjectQuantifier = subjectQuantified ? 'All ' : 'Some';
  const predicateQuantifier = predicateQuantified ? 'all ' :'(some) ';
  const negationText = positive ? '' : ' not ';

  return `${subjectQuantifier} ${subject} are ${negationText}${predicateQuantifier} ${predicate}.`;
};

// assuming order XY YZ
const resultPhrase = (
  subjectQuantified1,
  predicateQuantified1,
  positive1,
  subjectQuantified2,
  predicateQuantified2,
  positive2,
  x,
  y,
  z,
) => {
  const invalid = 'Invalid proposition.';

  if (!positive1 && !positive2) return invalid;

  if (!predicateQuantified1 && !subjectQuantified2) return invalid;

  // D'Arcy's rules don't match the board
  // These are derived from the board
  if (positive1 && subjectQuantified1 && predicateQuantified1 && positive2 && predicateQuantified2) {
    subjectQuantified1 = false;
  }
  if (positive1 && subjectQuantified1 && predicateQuantified1 && positive2 && !subjectQuantified2 && !predicateQuantified2) {
    subjectQuantified1 = false;
  }
  if (positive2 && subjectQuantified2 && predicateQuantified2 && positive1 && subjectQuantified1) {
    predicateQuantified2 = false;
  }
  if (positive2 && subjectQuantified2 && predicateQuantified2 && positive1 && !subjectQuantified1 && !predicateQuantified1) {
    predicateQuantified2 = false;
  }
  if (positive2 && subjectQuantified2 && predicateQuantified2 && !positive1 && !predicateQuantified1) {
    predicateQuantified2 = false;
  }

  return phrase(z, x, predicateQuantified2, subjectQuantified1, positive1 && positive2);
};

const renderEnglishTable = (
  [
    subjectQuantified1,
    predicateQuantified1,
    positive1,
  ],
  [
    subjectQuantified2,
    predicateQuantified2,
    positive2,
  ],
  x,
  y,
  z,
) => (
  <>
    <table className="table table-bordered">
      <tbody>
        <tr>
          <th>
            If
          </th>
          <th>
            And
          </th>
          <th>
            Then
          </th>
        </tr>
        <tr>
          <td>
            {phrase(y, x, subjectQuantified1, predicateQuantified1, positive1)}
          </td>
          <td>
            {phrase(z, y, subjectQuantified2, predicateQuantified2, positive2)}
          </td>
          <td>
            {resultPhrase(predicateQuantified1, subjectQuantified1, positive1, predicateQuantified2, subjectQuantified2, positive2, x, y, z)}
          </td>
        </tr>
        <tr>
          <td>
            {phrase(x, y, subjectQuantified1, predicateQuantified1, positive1)}
          </td>
          <td>
            {phrase(z, y, subjectQuantified2, predicateQuantified2, positive2)}
          </td>
          <td>
            {resultPhrase(subjectQuantified1, predicateQuantified1, positive1, predicateQuantified2, subjectQuantified2, positive2, x, y, z)}
          </td>
        </tr>
        <tr>
          <td>
            {phrase(y, x, subjectQuantified1, predicateQuantified1, positive1)}
          </td>
          <td>
            {phrase(y, z, subjectQuantified2, predicateQuantified2, positive2)}
          </td>
          <td>
            {resultPhrase(predicateQuantified1, subjectQuantified1, positive1, subjectQuantified2, predicateQuantified2, positive2, x, y, z)}
          </td>
        </tr>
      </tbody>
    </table>
  </>
)

class Machine extends Component {
  state = {
    bottomAngle: 0,
    topAngle: 0,
    x: 'X',
    y: 'Y',
    z: 'Z',
  };

  constructor(props) {
    super(props);

    this.rotateBottom = this.rotateBottom.bind(this);
    this.rotateTop = this.rotateTop.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  rotateBottom(angle) {
    this.setState(({ bottomAngle }) => ({
      bottomAngle: bottomAngle + angle,
    }));
  }

  rotateTop(angle) {
    this.setState(({ topAngle }) => ({
      topAngle: topAngle + angle,
    }));
  }

  updateInput(event) {
    const { target: { value, name } } = event;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { bottomAngle, topAngle, x, y, z } = this.state;
    const { rotateTop, rotateBottom, updateInput } = this;

    return (
      <div className="container">
        <div className="row">
          <div className={`col-6 text-center ${styles.wrapper}`}>
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
          <div className={`col-6 text-center ${styles.wrapper}`}>
            <div className={`${styles.image} ${styles.inputTable}`}>
              <div className="input-group mb-1">
                <div className="input-group-prepend">
                  <span className="input-group-text">X</span>
                </div>
                <input type="text" className="form-control" aria-label="X" aria-describedby="input x" name="x" value={x} onChange={updateInput} />
              </div>

              <div className="input-group mb-1">
                <div className="input-group-prepend">
                  <span className="input-group-text">Y</span>
                </div>
                <input type="text" className="form-control" aria-label="Y" aria-describedby="input y" name="y" value={y} onChange={updateInput} />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Z</span>
                </div>
                <input type="text" className="form-control" aria-label="Z" aria-describedby="input z" name="z" value={z} onChange={updateInput} />
              </div>


              {renderEnglishTable(quantificationFromAngle(bottomAngle), quantificationFromAngle(topAngle), x, y, z)}
            </div>
          </div>
        </div>
        <div className="form-row text-center">
          <div className="col-6">
            <h5>
              Rotate spinner
            </h5>
          </div>
          <div className="col-6">
            <h5>
              Rotate base-board
            </h5>
          </div>
        </div>
        <div className="form-row">
          <div className="col-2 offset-1">
            <button
              type="button"
              className="btn btn-secondary btn-block"
              onClick={() => rotateTop(-rotation)}
            >
              ⟲
            </button>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-secondary btn-block"
              onClick={() => rotateTop(rotation)}
            >
              ⟳
            </button>
          </div>
          <div className="col-2 offset-2">
            <button
              type="button"
              className="btn btn-secondary btn-block"
              onClick={() => rotateBottom(-rotation)}
            >
              ⟲
            </button>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-secondary btn-block"
              onClick={() => rotateBottom(rotation)}
            >
              ⟳
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Machine;
