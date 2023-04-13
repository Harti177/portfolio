import React, { Component } from 'react';
import Home from './Home';
import Header from './Header';
import ProjectDetails from './ProjectDetails';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <ProjectDetails />
      </div>
    );
  }
}

export default App;