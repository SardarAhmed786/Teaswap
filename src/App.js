import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/landing/Landing';

function App() {
  return (
    <>
      <Router>
        <Route
          exact
          path='/'
          render={() => (<Landing />)}
        />
      </Router>
    </>
  );
}

export default App;
