import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PerseidsFooter } from 'perseids-react-components';

import Navbar from '../Navbar';
import Machine from '../Machine';
import About from '../About';
import Instructions from '../Instructions';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route path="/" component={Navbar} />

      <Switch>
        <Route exact path="/" component={Machine} />
        <Route exact path="/machine" component={Machine} />
        <Route exact path="/about" component={About} />
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

