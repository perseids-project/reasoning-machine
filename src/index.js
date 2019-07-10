import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import 'typeface-arimo';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'perseids-react-components/build/css/index.css';
import 'typeface-tinos';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
