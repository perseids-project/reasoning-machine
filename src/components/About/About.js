import React from 'react';
import { Link } from 'react-router-dom';

import styles from './About.module.css';

import machine from './machine.jpg';
import machineRotated from './machine-rotated.jpg';

const About = () => (
  <div className={`container pt-4 ${styles.text}`}>
    <div className="row">
      <div className="col-12">
        <h2 className="text-center mb-3">
          D'Arcy Thompson's Reasoning Machine
        </h2>

        <p>
          <a href="https://en.wikipedia.org/wiki/D%27Arcy_Wentworth_Thompson">
            Sir D'Arcy Wentworth Thompson
          </a>
          {' '}
          (1860 - 1948)
          was a Scottish biologist, mathematician, and classics scholar.
          He wrote on a wide variety of topics and
          is most well-known for his book
          {' '}
          <a href="https://en.wikipedia.org/wiki/On_Growth_and_Form">
            On Growth and Form
          </a>
          , first published in 1917.
        </p>

        <p>
          Around 1897, he invented a device that he called
          {' '}
          <Link to="/">
            "A Very Simple Reasoning Machine."
          </Link>
          {' '}
          This device consists of two pieces of cardboard
          with one placed on top of the other.
          The top piece has a number of holes punched in it and the bottom
          piece has sections marked with colored tape.
          The two pieces are attached with a pin, which allows the top piece
          to spin, and as it spins, it shows different combinations of
          figures and colors.
        </p>

        <p className="text-center">
          <img
            src={machine}
            className={`rounded ${styles.image}`}
            alt="photograph of reasoning machine"
          />
          <img
            src={machineRotated}
            className={`rounded ${styles.image}`}
            alt="photograph of reasoning machine with spinner at different angle"
          />
        </p>

        <p>
          The machine still works and can be seen in the archives of
          {' '}
          <a href="https://www.st-andrews.ac.uk/library/specialcollections/collections/archives/themanuscriptcollections/personal/thompsondarcywentworth1860-1948/">
            the University of St. Andrews
          </a>
          {' '}
          (the university where D'Arcy Thompson taught).
        </p>

        <p>
          Fortunately, along with the machine itself, D'Arcy left behind
          {' '}
          <Link to="/instructions">
            instructions
          </Link>
          {' '}
          explaining how it works.
        </p>

        <p>
          The machine is based on a logic system created by the Scottish philosopher
          {' '}
          <a href="https://en.wikipedia.org/wiki/Sir_William_Hamilton,_9th_Baronet">
            Sir William Hamilton
          </a>
          {' '}
          (1788 - 1856)
          .
          Hamilton's system itself builds off of Aristotle's
          {' '}
          <a href="https://plato.stanford.edu/entries/aristotle-logic/#Syl">
            syllogistic
          </a>
          , but it doubles the number of terms by adding quantifiers
          (i.e. <em>all of</em>, <em>some of</em>).
          For example, where Aristotle says "all humans are animals,"
          Hamilton sees two different statements: "all humans are <em>some</em> animals,"
          and "all humans are <em>all</em> animals."
        </p>

        <p>
          D'Arcy's machine is designed to produce valid syllogisms
          in Hamilton's system and identify invalid ones.
          For example, aligning the basedboard to A and the spinner to A
          produces the syllogism:
        </p>

        <p>
          <ul>
            <li>
              <strong>
                If
              </strong>
              {' '}
              all Y are (some) X.
            </li>
            <li>
              <strong>
                And
              </strong>
              {' '}
              all Z are (some) Y.
            </li>
            <li>
              <strong>
                Then
              </strong>
              {' '}
              all Z are (some) X.
            </li>
          </ul>
        </p>

        <p>
          Replacing X, Y, and Z with more familiar terms makes it clear
          that this syllogism is valid:
        </p>

        <p>
          <ul>
            <li>
              <strong>
                If
              </strong>
              {' '}
              all <em>birds</em> are <em>animals</em>.
            </li>
            <li>
              <strong>
                And
              </strong>
              {' '}
              all <em>parrots</em> are <em>birds</em>.
            </li>
            <li>
              <strong>
                Then
              </strong>
              {' '}
              all <em>parrots</em> are <em>animals</em>.
            </li>
          </ul>
        </p>

        <p>
          <Link to="/">
            Try it out!
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default About;
