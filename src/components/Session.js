import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInUser } from '../actions/SessionActionCreators';

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
      <div className="menu-form-container">
        { errors.length > 0  && 
          <div className="toast toast-danger">
            <button className="btn btn-clear float-right"></button>
            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
            { errors.map((error, i) => <li key={i}>{error}</li>) }
          </div>
        }
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="signin-email">Email address</label>
              <input type="email" ref="email" className="form-input" id="signin-email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="sigin-password">Password</label>
              <input type="password" ref="password" className="form-input" id="signin-password" placeholder="Password" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block btn-lg">Sign In</button>
            </div>
          </form>    
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
