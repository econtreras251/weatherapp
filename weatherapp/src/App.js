import React, { Component } from 'react';
import './App.css';
import './components/WeatherLocation';
import WeatherLocation from './components/WeatherLocation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherLocation />
      </div>
    );
  }
}

export default App;
