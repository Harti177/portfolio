import React, { Component } from 'react';
import ProjectButtons from './ProjectButtons';
import Home from './Home';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <ProjectButtons />
      </div>
    );
  }
}

export default App;