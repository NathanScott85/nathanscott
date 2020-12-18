import React from 'react';
import Routes from './app-routes';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();
function App() {
  return (
    <>
    <Routes history={history} />
    </>
  );
}

export default App;
