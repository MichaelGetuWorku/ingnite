import React from 'react';
import { Route } from 'react-router-dom';

import Nav from './components/Nav';
import GlobalStyle from './components/GlobalStyles';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/*  A way to render the same component for multiple routes. */}
      <Nav />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
