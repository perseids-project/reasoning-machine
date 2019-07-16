import React, { Component } from 'react';
import { func, shape, string } from 'prop-types';
import queryString from 'query-string';

import styles from './Machine.module.css';

import bottom from './bottom.svg';
import top from './top.svg';

const rotation = 45;

const mod = (a, b) => {
  const jsResult = a % b;

  if (jsResult < 0) {
    return jsResult + 360;
  }

  return jsResult;
};

const quantificationFromAngle = angle => (
  {
    0: [true, false, true],
    45: [true, true, true],
    90: [false, false, false],
    135: [false, true, false],
    180: [true, false, false],
    225: [true, true, false],
    270: [false, false, true],
    315: [false, true, true],
  }[mod(angle, 360)]
);

const phrase = (subject, predicate, subjectQuantified, predicateQuantified, positive) => {
  const subjectQuantifier = subjectQuantified ? 'All ' : 'Some';
  const predicateQuantifier = predicateQuantified ? 'all ' : '(some) ';
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

  let finalSubjectQuantified1 = subjectQuantified1;
  let finalPredicateQuantified2 = predicateQuantified2;

  // D'Arcy's rules don't match the board
  // These are derived from the board
  if (positive1
    && subjectQuantified1
    && predicateQuantified1
    && positive2
    && predicateQuantified2) {
    finalSubjectQuantified1 = false;
  }
  if (positive1
    && subjectQuantified1
    && predicateQuantified1
    && positive2
    && !subjectQuantified2
    && !predicateQuantified2) {
    finalSubjectQuantified1 = false;
  }
  if (positive2
    && subjectQuantified2
    && predicateQuantified2
    && positive1
    && subjectQuantified1) {
    finalPredicateQuantified2 = false;
  }
  if (positive2
    && subjectQuantified2
    && predicateQuantified2
    && positive1
    && !subjectQuantified1
    && !predicateQuantified1) {
    finalPredicateQuantified2 = false;
  }
  if (positive2
    && subjectQuantified2
    && predicateQuantified2
    && !positive1
    && !predicateQuantified1) {
    finalPredicateQuantified2 = false;
  }

  return phrase(z, x, finalPredicateQuantified2, finalSubjectQuantified1, positive1 && positive2);
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
            {resultPhrase(
              predicateQuantified1,
              subjectQuantified1,
              positive1,
              predicateQuantified2,
              subjectQuantified2,
              positive2,
              x,
              y,
              z,
            )}
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
            {resultPhrase(
              subjectQuantified1,
              predicateQuantified1,
              positive1,
              predicateQuantified2,
              subjectQuantified2,
              positive2,
              x,
              y,
              z,
            )}
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
            {resultPhrase(
              predicateQuantified1,
              subjectQuantified1,
              positive1,
              subjectQuantified2,
              predicateQuantified2,
              positive2,
              x,
              y,
              z,
            )}
          </td>
        </tr>
      </tbody>
    </table>
  </>
);

const fromQuery = ({
  x = 'X',
  y = 'Y',
  z = 'Z',
  ba = 0,
  sa = 0,
}) => ({
  x,
  y,
  z,
  ba: Number(ba) % 360,
  sa: Number(sa) % 360,
});

const nearestAngle = (prevAngle, angle) => {
  const firstPossibility = prevAngle + mod(angle - prevAngle, 360);
  const secondPossibility = prevAngle - mod(prevAngle - angle, 360);

  if (Math.abs(prevAngle - firstPossibility) < Math.abs(prevAngle - secondPossibility)) {
    return firstPossibility;
  }

  return secondPossibility;
};

class Machine extends Component {
  static propTypes = {
    history: shape({ push: func }).isRequired,
    location: shape({ search: string }).isRequired,
  };

  static getDerivedStateFromProps(
    { location: { search } },
    { bottomAngle: prevBottomAngle, topAngle: prevTopAngle },
  ) {
    const {
      x, y, z, ba, sa,
    } = fromQuery(queryString.parse(search));

    const bottomAngle = Number(ba) % 360;
    const topAngle = Number(sa) % 360;

    return {
      x,
      y,
      z,
      bottomAngle: nearestAngle(prevBottomAngle, bottomAngle),
      topAngle: nearestAngle(prevTopAngle, topAngle),
    };
  }

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
    const { history, location: { search } } = this.props;
    const query = fromQuery(queryString.parse(search));

    query.ba = mod(query.ba + angle, 360);

    history.push({ search: queryString.stringify(query) });
  }

  rotateTop(angle) {
    const { history, location: { search } } = this.props;
    const query = fromQuery(queryString.parse(search));

    query.sa = mod(query.sa + angle, 360);

    history.push({ search: queryString.stringify(query) });
  }

  updateInput(event) {
    const { history, location: { search } } = this.props;
    const { target: { value, name } } = event;
    const query = fromQuery(queryString.parse(search));

    query[name] = value;

    history.push({ search: queryString.stringify(query) });
  }

  render() {
    const {
      bottomAngle, topAngle, x, y, z,
    } = this.state;
    const { rotateTop, rotateBottom, updateInput } = this;

    return (
      <div className={`container pt-4 ${styles.text}`}>
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-3">
              D&apos;Arcy Thompson&apos;s Reasoning Machine
            </h2>
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
          <div className={`${styles.buttonContainer} col-3 col-md-2 offset-md-1`}>
            <button
              type="button"
              className="btn btn-secondary btn-block"
              onClick={() => rotateTop(-rotation)}
            >
              ⟲
            </button>
          </div>
          <div className={`${styles.buttonContainer} col-3 col-md-2`}>
            <button
              type="button"
              className="btn btn-secondary btn-block"
              onClick={() => rotateTop(rotation)}
            >
              ⟳
            </button>
          </div>
          <div className={`${styles.buttonContainer} col-3 col-md-2 offset-md-2`}>
            <button
              type="button"
              className="btn btn-secondary btn-block"
              onClick={() => rotateBottom(-rotation)}
            >
              ⟲
            </button>
          </div>
          <div className={`${styles.buttonContainer} col-3 col-md-2`}>
            <button
              type="button"
              className="btn btn-secondary btn-block"
              onClick={() => rotateBottom(rotation)}
            >
              ⟳
            </button>
          </div>
        </div>

        <div className="row">
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
          <div className={`col-12 col-lg-6 text-center ${styles.wrapper}`}>
            <div className={styles.inputTable}>
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


              {renderEnglishTable(
                quantificationFromAngle(bottomAngle),
                quantificationFromAngle(topAngle),
                x,
                y,
                z,
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Machine;
