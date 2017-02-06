import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import NavBar from './NavBar';


class App extends Component {
  
  renderLayout() {
    const { authenticated } = this.props;

    if(authenticated) {
      return [
        <div className="columns">
          <div className="col-lg-3 no-padding">
            <div className="side-bar-left">
              <ul>
                <li>
                  <Link to='/protected'>
                    <i className="fa fa-home" aria-hidden="true"></i>Home
                  </Link>
                </li>
                <li>
                  <Link to='/protected'>
                    <i className="fa fa-calendar" aria-hidden="true"></i>Menus
                  </Link>
                </li>  
                <li>
                  <Link to='/protected'>
                    <i className="fa fa-cutlery" aria-hidden="true"></i>Meals
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div id="main-content">
              { this.props.children }
            </div>
          </div>
        </div>
      ]
    } else {
      return [
        <div className="columns">
          <div className="col-lg-12 no-padding centered">
            <div id="main-content">
              { this.props.children }
            </div>
          </div>
        </div>
      ]
    }
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div className="container">
          { this.renderLayout() }
        </div>
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
