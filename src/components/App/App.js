import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PerseidsFooter } from 'perseids-react-components';

import Navbar from '../Navbar';
import Machine from '../Machine';
import About from '../About';
import Instructions from '../Instructions';

function App() {
  return (
    <>
      <Route path="/" component={Navbar} />

      <Switch>
        <Route exact path="/" component={Machine} />
        <Route exact path="/about" component={About} />
        <Route exact path="/instructions" component={Instructions} />
      </Switch>

      <PerseidsFooter
        report="https://github.com/perseids-project/reasoning-machine"
        github="https://github.com/perseids-project/reasoning-machine/issues"
        doi="10.5281/zenodo.3968743"
      />
    </>
  );
}

export default App;
