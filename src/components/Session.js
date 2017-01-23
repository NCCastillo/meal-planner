import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInUser } from '../actions/SessionActionCreators';

import '../css/signin.css';

class Session extends Component {
  handleSubmit = (e) => {
    console.log("handled the submit");
    //using refs here for now. should be using local component state here??
    const { email, password } = this.refs
    // debugger;
    e.preventDefault();
    // user fills out form and hits submit
    // dispatch action to "login" user
    // api receives post and if authenticated return json with token
    // login action receives response. If successfull then store token in session storage
    // login action then redirects to dashboard
    this.props.signInUser({email: email.value, password: password.value});
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="form-container">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group has-feedback">
                <label htmlFor="signin-email">Email address</label>
                <input type="email" ref="email" className="form-control" id="signin-email" placeholder="Email" />
                <span className="glyphicon glyphicon-inbox form-control-feedback"></span>
              </div>
              <div className="form-group has-feedback">
                <label htmlFor="sigin-password">Password</label>
                <input type="password" ref="password" className="form-control" id="signin-password" placeholder="Password" />
                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-lg btn-block">Sign In</button>
              </div>
            </form>    
          </div>
        </div>
      </div>
    )
  }
}

// Only passing one action to connect. Don't need bindaction creators in this case.
// just pass the action directly. If I use bindaction creators thenI will need to import it from
export default connect(null, {signInUser})(Session);
