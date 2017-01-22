import React, { Component } from 'react';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="container">
          <p>This is the main container on app</p>
          { this.props.children }
        </div>  
      </div>
    );
  }
}

export default App;
