import React from 'react';
import { PerseidsHeader, PerseidsFooter } from 'perseids-react-components';

import Machine from '../Machine';

function App() {
  return (
    <>
      <PerseidsHeader>
        D'Arcy Thompson's Reasoning Machine
      </PerseidsHeader>

      <Machine />

      <PerseidsFooter
        report="https://github.com/perseids-project/reasoning-machine"
        github="https://github.com/perseids-project/reasoning-machine/issues"
      />
    </>
  );
}

export default App;

