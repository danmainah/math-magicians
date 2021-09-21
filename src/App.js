import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Calculator from './components/Calculator';

const App = () => (
  <div className="App">
    <Calculator />
  </div>
);

export default App;
