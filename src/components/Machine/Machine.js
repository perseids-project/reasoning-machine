import React, { Component } from 'react';
import { func, shape, string } from 'prop-types';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import Spinner from '../Spinner';
import Table from '../Table';

import styles from './Machine.module.css';

const rotation = 45;

const mod = (a) => {
  const jsResult = a % 360;

  if (jsResult < 0) {
    return jsResult + 360;
  }

  return jsResult;
};

const fromQuery = (search) => {
  const {
    x = 'X',
    y = 'Y',
    z = 'Z',
    ba = 0,
    sa = 0,
  } = queryString.parse(search);

  return {
    x,
    y,
    z,
    ba: Number(ba),
    sa: Number(sa),
  };
};

class Machine extends Component {
  static propTypes = {
    history: shape({ push: func }).isRequired,
    location: shape({ search: string }).isRequired,
  };

  constructor(props) {
    super(props);

    this.rotateBottomLink = this.rotateBottomLink.bind(this);
    this.rotateTopLink = this.rotateTopLink.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  rotateBottomLink(angle) {
    const { location: { search } } = this.props;
    const query = fromQuery(search);

    query.ba = mod(query.ba + angle);

    return `./?${queryString.stringify(query)}`;
  }

  rotateTopLink(angle) {
    const { location: { search } } = this.props;
    const query = fromQuery(search);

    query.sa = mod(query.sa + angle);

    return `./?${queryString.stringify(query)}`;
  }

  updateInput(event) {
    const { history, location: { search } } = this.props;
    const { target: { value, name } } = event;
    const query = fromQuery(search);

    query[name] = value;

    history.push({ search: queryString.stringify(query) });
  }

  render() {
    const { location: { search } } = this.props;
    const {
      x = 'X',
      y = 'Y',
      z = 'Z',
      ba: bottomAngle = 0,
      sa: topAngle = 0,
    } = fromQuery(search);
    const { rotateBottomLink, rotateTopLink, updateInput } = this;

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
            <Link
              className="btn btn-secondary btn-block"
              to={rotateTopLink(-rotation)}
            >
              ⟲
            </Link>
          </div>
          <div className={`${styles.buttonContainer} col-3 col-md-2`}>
            <Link
              className="btn btn-secondary btn-block"
              to={rotateTopLink(rotation)}
            >
              ⟳
            </Link>
          </div>
          <div className={`${styles.buttonContainer} col-3 col-md-2 offset-md-2`}>
            <Link
              className="btn btn-secondary btn-block"
              to={rotateBottomLink(-rotation)}
            >
              ⟲
            </Link>
          </div>
          <div className={`${styles.buttonContainer} col-3 col-md-2`}>
            <Link
              className="btn btn-secondary btn-block"
              to={rotateBottomLink(rotation)}
            >
              ⟳
            </Link>
          </div>
        </div>

        <div className="row">
          <Spinner bottomAngle={bottomAngle} topAngle={topAngle} />

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


              <Table
                x={x}
                y={y}
                z={z}
                bottomAngle={bottomAngle}
                topAngle={topAngle}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Machine;
