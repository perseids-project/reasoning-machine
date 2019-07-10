import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import { PerseidsHeader, PerseidsFooter } from 'perseids-react-components';
import { NavbarToggler, Collapse } from 'reactstrap';

import Machine from '../Machine';
import Instructions from '../Instructions';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <PerseidsHeader>
        D'Arcy Thompson's Reasoning Machine

        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/instructions">
              Instructions
            </NavLink>
          </li>
        </ul>
      </PerseidsHeader>

      <Switch>
        <Route exact path="/" component={Machine} />
        <Route exact path="/instructions" component={Instructions} />
      </Switch>

      <PerseidsFooter
        report="https://github.com/perseids-project/reasoning-machine"
        github="https://github.com/perseids-project/reasoning-machine/issues"
      />
    </Router>
  );
}

export default App;

