import React from 'react';
// Providers
import { StateProvider } from './providers/stateProvider';
import { ActionProvider } from './providers/actionProvider';
// Components
import Dashboard from './views/Dashboard';
// Utils
// Constants

function App() {
  return (
    <StateProvider>
      <ActionProvider>
        <Dashboard />
      </ActionProvider>
    </StateProvider>
  );
}

export default App;
