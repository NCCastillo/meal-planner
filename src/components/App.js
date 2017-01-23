import React, { Component } from 'react';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="container">
          { this.props.children }
        </div>  
        <p>FOOTER HERE</p>
      </div>
    );
  }
}

export default App;
