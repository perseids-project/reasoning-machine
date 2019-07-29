import React from 'react';
import { number, string } from 'prop-types';

const quantificationFromAngle = (angle) => (
  {
    0: [true, false, true],
    45: [true, true, true],
    90: [false, false, false],
    135: [false, true, false],
    180: [true, false, false],
    225: [true, true, false],
    270: [false, false, true],
    315: [false, true, true],
  }[angle]
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

const Table = ({
  x,
  y,
  z,
  bottomAngle,
  topAngle,
}) => {
  const [
    subjectQuantified1,
    predicateQuantified1,
    positive1,
  ] = quantificationFromAngle(bottomAngle);

  const [
    subjectQuantified2,
    predicateQuantified2,
    positive2,
  ] = quantificationFromAngle(topAngle);

  return (
    <table className="table table-striped table-bordered">
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
  );
};

Table.propTypes = {
  x: string.isRequired,
  y: string.isRequired,
  z: string.isRequired,
  bottomAngle: number.isRequired,
  topAngle: number.isRequired,
};

export default Table;
