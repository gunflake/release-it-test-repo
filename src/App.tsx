import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const plus = (a: number, b: number) => {
    return a + b;
  };

  const a = plus(3, 5);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {a}Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn Reac
        </a>
      </header>
    </div>
  );
}

export default App;
