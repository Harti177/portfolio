import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactVideoPlayer from './ReactVideoPlayer';

class App extends Component {
  render() {
    return (
      <div className="App"
      style={{
        backgroundColor: 'black',
        textColor: 'white'
      }}>
        Hi, I am Hari. I am Unity Developer based in Cologne, Germany.
          <ReactVideoPlayer />
      </div>
    );
  }
}

export default App;