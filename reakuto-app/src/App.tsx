import React from 'react';
import Calculator from 'LiftingStateUp/containters/Calculator';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="app">
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <p>Hello, World!</p>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="app-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>

    {/* see:  https://ja.reactjs.org/docs/hooks-effect.html */}
    <Calculator />
  </div>
);

export default App;
