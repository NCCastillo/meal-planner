import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInUser } from '../actions/SessionActionCreators';

import '../css/signin.css';
import '../css/forms.css';

class Session extends Component {
  handleSubmit = (e) => {
    //using refs here for now. should be using local component state here??
    const { email, password } = this.refs
    const { dispatch } = this.props

    e.preventDefault();
    
    dispatch(signInUser({email: email.value, password: password.value}));
  }

  render() {
    const { errors } = this.props;

    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          { errors.length > 0  && 
            <div className="form-error">
              { errors.map((error, i) => <li key={i}>{error}</li>) }
            </div>
          }
          <div className="form-container">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group has-feedback">
                <label htmlFor="signin-email">Email address</label>
                <input type="email" ref="email" className="form-control" id="signin-email" placeholder="Email" />
                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
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

const mapStateToProps = (state) => {
  return {
    errors: state.session.errors
  }
}

export default connect(mapStateToProps)(Session);
