import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Qoute from './pages/Qoute';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Nomatch from './pages/Nomatch';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/quote">
          <Qoute />
        </Route>
        <Route path="*">
          <Nomatch />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
