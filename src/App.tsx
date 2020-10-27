import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from 'components/Header';
import ThemeProvider from './components/ThemeProvider';

const App: FC = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </ThemeProvider>
    </div>
  );
};

export default App;
