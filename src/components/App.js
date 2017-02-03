import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';


class App extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <div>
        <NavBar/>
        <div className="container-fluid">
          <div className="row">
            
            <div className="col-sm-3 col-lg-2 no-padding">
              { authenticated && 
                <div className="side-bar-left">
                  <ul>
                    <li><i className="fa fa-tachometer" aria-hidden="true"></i>Dashboard</li>
                    <li><i className="fa fa-calendar" aria-hidden="true"></i>Menus</li>
                    <li><i className="fa fa-cutlery" aria-hidden="true"></i>Meals</li>
                  </ul>
                </div>
              }
            </div>

            <div className="col-sm-9 col-lg-10">
              <div id="main-content">
                { this.props.children }
              </div>
            </div>
          </div>
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
