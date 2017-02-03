import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react'
import NavBar from './NavBar';
import SideBar from './SideBar';


class App extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <div>

        <Container fluid>
          <NavBar/>
          <SideBar />
          { this.props.children }
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      authenticated: state.session.authenticated
    }
}
export default connect(mapStateToProps)(App);
