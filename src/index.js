import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import { unregister } from './serviceWorker';

import 'typeface-tinos';
import 'typeface-arimo';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'perseids-react-components/build/css/index.css';

const rootElement = document.getElementById('root');
const rootComponent = (
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>
);

render(rootComponent, rootElement);

unregister();
