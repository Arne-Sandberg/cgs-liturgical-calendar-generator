import React, { Component } from 'react';
import './App.css';
import CalendarSVG from './CalendarSVG';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Liturgical Calendar Generator</h1>
        </header>
        <div style={{
          margin: '1em',
        }}
        >
          <svg viewBox={`0 0 ${30} ${30}`}>
            <CalendarSVG />
          </svg>
        </div>
      </div>
    );
  }
}

export default App;
