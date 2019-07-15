import React from 'react';

import styles from './Instructions.module.css';

const MultiChar = ({ base, left, right, aboveLeft, aboveRight }) => (
  <table className={styles.multichar}>
    <tbody>
      {(aboveLeft || aboveRight) && (
        <tr className={styles.multicharTop}>
          <td >
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
        <td >
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

const Instructions = () => (
  <div className={`container pt-4 ${styles.text}`}>
    <div className="row">
      <div className="col-12">
        <h2 className="text-center mb-3">
          A very simple Reasoning Machine.
        </h2>

        <p>
          <small className="mb-3">
            [Written by Sir D'Arcy Wentworth Thompson.
            He probably wrote these instructions around 1897.
            The original copy of these instructions,
            correspondence about the machine, and the machine itself can be seen
            in the archives of the University of St. Andrews.]
          </small>
        </p>

        <p>
          In the propositions U, A, Y, I, we quantify respectively :- subject
          and predicate, subject alone, predicate alone, and lastly, neither.
          We may symbolize this fact by writing it :-
        </p>

        <div>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <MultiChar base="U" left="s" right="p" />
          &nbsp;
          &nbsp;
          <MultiChar base="A" left="s" right="-" />
          &nbsp;
          &nbsp;
          <MultiChar base="Y" left="-" right="p" />
          &nbsp;
          &nbsp;
          <MultiChar base="I" left="-" right="-" />
          &nbsp;
          ,
          &nbsp;
          &nbsp;
          &nbsp;
          or, if we prefer it,
        </div>

        <br />

        <div>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <MultiChar base="U" left="+" right="+" />
          &nbsp;
          &nbsp;
          <MultiChar base="A" left="+" right="-" />
          &nbsp;
          &nbsp;
          <MultiChar base="Y" left="-" right="+" />
          &nbsp;
          &nbsp;
          <MultiChar base="I" left="-" right="-" />
          &nbsp;
          ,
          &nbsp;
          &nbsp;
          &nbsp;
          and, in like manner,
        </div>

        <br />

        <p>
          the corresponding negatives
        </p>

        <div>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <MultiChar base="E" left="s" right="p" />
          &nbsp;
          &nbsp;
          <MultiChar base="η" left="s" right="-" />
          &nbsp;
          &nbsp;
          <MultiChar base="o" left="-" right="p" />
          &nbsp;
          &nbsp;
          <MultiChar base="ω" left="-" right="-" />
          &nbsp;
          &nbsp;
          <u>or</u>
          &nbsp;
          &nbsp;
          <MultiChar base="E" left="+" right="+" />
          &nbsp;
          &nbsp;
          <MultiChar base="η" left="+" right="-" />
          &nbsp;
          &nbsp;
          <MultiChar base="o" left="-" right="+" />
          &nbsp;
          &nbsp;
          <MultiChar base="ω" left="-" right="-" />
        </div>
        <br />

        <p>
          In the these figures, subject and predicate are, in each premise,
          respectively :-
        </p>

        <p>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          yx, zy, zx ; xy, zy, zx ; yx, yz, zx.
        </p>

        <p>
          Now, by superimposing, one upon another, over these sets of symbols, –
          those, namely, for the propositions, for their unimplied qualifications, and for the
          figures, – we may ascertain the conclusion of any syllogism
          provided that we have in mind the following rules :-
        </p>

        <ol className={styles.list}>
          <li>
            That two negative premises are inadmissible
          </li>
          <li>
            That if one premise be negative, the conclusion is negative.
          </li>
          <li>
            That the middle term must be quantified at least once.
          </li>
          <li>
            That nothing may be quantified in the conclusion that
            has not been quantified in the premises.
          </li>
          <li>
            That everything must be quantified in the conclusion that
            has been quantified in the premises :-
            <br />

            Except that, when the double-quantified affirmation
            proposition U occurs in conjunction with a less quantified
            proposition [viz. with A, Y, I, η, ο or ω] then the
            quantification of the former (other than its quantification of the
            middle term y) shall be neglected in the conclusion.
          </li>
        </ol>

        <p>
          <strong>
            Note.
          </strong>
          {' '}
          This apparent exception simply depends upon the fact
          that in such cases the proposition U quantifies, or states,
          more than is required for the argument.
          {' '}
          <u>
            All y’s are all x’s
          </u>
          , when followed by the major
          proposition
          {' '}
          <u>
            all z’s are some y’s
          </u>
          , has stated more than
          is necessary, for the same conclusion, viz. that
          {' '}
          <u>
            all z’s are some x’s
          </u>
          , would follow equally from the major
          premise
          {' '}
          <u>
            all z’s are some x’s
          </u>
          . In other words, in the
          1
          <sup>
            st
          </sup>
          {' '}
          figure, UA leads only to the same result as
          AA, and in the
          2
          <sup>
            nd
          </sup>
          {' '}
          and
          3
          <sup>
            rd
          </sup>
          {' '}
          figures only to the same result as YA.
          In point of fact, the proposition U is only of real utility when
          used in conjunction with another doubly quantified proposition, viz.
          in UU, UE, perhaps even in the former case alone.
        </p>

        <p>
          The method of superposition, indicated above, may be employed by
          itself, or used in the construction of a Reasoning Machine.
          The following examples illustrate the matter by itself.
        </p>

        <ol>
          <li>
            Given the combination AY

            <br />

            <table>
              <tbody>
                <tr>
                  <td className={styles.exampleLine} width="250">
                    Then we have in the first figure,
                  </td>
                  <td>
                    &nbsp;
                    <MultiChar base="A" aboveLeft="y" left="+" aboveRight="x" right="-" />
                    &nbsp;
                    &nbsp;
                    <MultiChar base="Y" aboveLeft="z" left="-" aboveRight="y" right="+" />
                    &nbsp;
                    =
                    &nbsp;
                    <MultiChar base="&nbsp;" aboveLeft="-" left="z" aboveRight="-" right="x" />
                    &nbsp;
                    =
                    &nbsp;
                    I
                  </td>
                </tr>
              </tbody>
            </table>

            <br />

            <table>
              <tbody>
                <tr>
                  <td className={styles.exampleLine} width="250">
                    .. .. .. .. 2
                    <sup>
                      nd
                    </sup>
                    {' '}
                    ..,
                  </td>
                  <td>
                    &nbsp;
                    <MultiChar base="A" aboveLeft="x" left="+" aboveRight="y" right="-" />
                    &nbsp;
                    &nbsp;
                    <MultiChar base="Y" aboveLeft="z" left="-" aboveRight="y" right="+" />
                    &nbsp;
                    =
                    &nbsp;
                    <MultiChar base="&nbsp;" aboveLeft="-" left="z" aboveRight="+" right="x" />
                    &nbsp;
                    =
                    &nbsp;
                    Y
                  </td>
                </tr>
              </tbody>
            </table>

            <br />

            <table>
              <tbody>
                <tr>
                  <td className={styles.exampleLine} width="250">
                    .. .. .. .. 3
                    <sup>
                      rd
                    </sup>
                    {' '}
                    ..,
                  </td>
                  <td>
                    &nbsp;
                    <MultiChar base="A" aboveLeft="y" left="+" aboveRight="x" right="-" />
                    &nbsp;
                    &nbsp;
                    <MultiChar base="Y" aboveLeft="y" left="-" aboveRight="z" right="+" />
                    &nbsp;
                    =
                    &nbsp;
                    <MultiChar base="&nbsp;" aboveLeft="+" left="z" aboveRight="-" right="x" />
                    &nbsp;
                    =
                    &nbsp;
                    A
                  </td>
                </tr>
              </tbody>
            </table>

            <br />

          </li>
          <li>
            Given the combination Aω

            <br />

            <table>
              <tbody>
                <tr>
                  <td className={styles.exampleLine} width="250">
                    We have in the first figure,
                  </td>
                  <td>
                    &nbsp;
                    <MultiChar base="A" aboveLeft="y" left="+" aboveRight="x" right="-" />
                    &nbsp;
                    &nbsp;
                    <MultiChar base="ω" aboveLeft="z" left="-" aboveRight="y" right="-" />
                    &nbsp;
                    =
                    &nbsp;
                    <MultiChar base="&nbsp;" aboveLeft="-" left="z" aboveRight="-" right="x" />
                    &nbsp;
                    <small>
                      (neg.)
                    </small>
                    &nbsp;
                    =
                    &nbsp;
                    ω
                  </td>
                </tr>
              </tbody>
            </table>

            <br />

            <table>
              <tbody>
                <tr>
                  <td className={styles.exampleLine} width="250">
                    .. .. .. .. 2
                    <sup>
                      nd
                    </sup>
                    {' '}
                    ..
                  </td>
                  <td>
                    &nbsp;
                    <MultiChar base="A" aboveLeft="x" left="+" aboveRight="y" right="-" />
                    &nbsp;
                    &nbsp;
                    <MultiChar base="ω" aboveLeft="z" left="-" aboveRight="y" right="-" />
                    &nbsp;
                    -
                    &nbsp;
                    Invalid,
                    {' '}
                    <u>
                      y unquantified.
                    </u>
                  </td>
                </tr>
              </tbody>
            </table>

            <br />

            <table>
              <tbody>
                <tr>
                  <td className={styles.exampleLine} width="250">
                    .. .. .. .. 3
                    <sup>
                      rd
                    </sup>
                    {' '}
                    ..
                  </td>
                  <td>
                    &nbsp;
                    <MultiChar base="A" aboveLeft="y" left="+" aboveRight="x" right="-" />
                    &nbsp;
                    &nbsp;
                    <MultiChar base="ω" aboveLeft="y" left="-" aboveRight="z" right="-" />
                    &nbsp;
                    =
                    &nbsp;
                    <MultiChar base="&nbsp;" aboveLeft="-" left="z" aboveRight="-" right="x" />
                    &nbsp;
                    <small>
                      (neg.)
                    </small>
                    &nbsp;
                    =
                    &nbsp;
                    ω
                  </td>
                </tr>
              </tbody>
            </table>

            <br />

          </li>
        </ol>

        <h2 className="text-center mb-3">
          Rules of the use of the Reasoning Machine.
        </h2>

        <p>
          Place the cards representing the propositions in their place
          and order on the base-board. The terms that are quantified
          will then appear through the holes.
        </p>

        <ol>
          <li>
            A red danger-signal in the first or lowest compartment
            shows the whole combination to be invalid (double negative).
          </li>
          <li>
            A red danger-signal in the compartment assigned to any
            figure shows that figure to be invalid (unquantified middle).
          </li>
          <li>
            Quantify in the conclusion anything that is shown to be
            quantified in the premises
            [In other words, transfer to the zx of the conclusion
            the symbols (+ or -) that the z and x bear in the premises.],
            unless, a green signal of caution directs
            [according to the preceding tule V, EXC.] that the quantification
            of U is to be disregarded in the conclusion.
          </li>
        </ol>
      </div>
    </div>
  </div>
);

export default Instructions;
