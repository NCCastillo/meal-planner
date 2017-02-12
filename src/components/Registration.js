import React, { Component } from 'react';
import { connect } from 'react-redux';
import registerUser from '../actions/RegisterUserActionCreators';
import '../css/forms.css';
class Registration extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    //using refs here for now. should be using local component state here??
    const { email, password, passwordConfirmation, firstName, lastName } = this.refs
    const { dispatch } = this.props 
    
    const formData = {
      email: email.value, 
      firstName: firstName.value,
      lastName: lastName.value,
      password: password.value, 
      passwordConfirmation: passwordConfirmation.value
    }
    
    dispatch(registerUser(formData));  
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
              <label className="form-label" htmlFor="register-user-email">Email Address</label>
              <input type="email" ref="email" className="form-input" id="register-user-email"/>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="register-user-first-name">First Name</label>
              <input type="text" ref="firstName" className="form-input" id="register-user-first-named"/>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="register-user-last-name">Last Name</label>
              <input type="text" ref="lastName" className="form-input" id="register-user-last-name" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="register-user-password">Password</label>
              <input type="password" ref="password" className="form-input" id="register-user-password"/>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="register-user-password">Password Confirmation</label>
              <input type="password" ref="passwordConfirmation" className="form-input" id="register-user-password-confirmation" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-lg btn-block">Sign Up</button>
            </div>
          </form>    
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.register.errors
  }
}

export default connect(mapStateToProps)(Registration);
