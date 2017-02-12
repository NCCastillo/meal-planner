import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';
import { REGISTER_USER_FETCHING, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from './Actions';
import { signInSuccess } from './SessionActionCreators';

const base_url = 'http://localhost:4500';

export default function resgisterUser(data) {
  return function(dispatch) {
    dispatch(fetchingRegisterUser());

    return fetch(`${base_url}/api/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: data.email,
          first_name: data.firstName,
          last_name: data.lastName,
          password: data.password,
          password_confirmation: data.passwordConfirmation
        }
      })
    })
    .then(response =>
      response.json().then(json => ({
        status: response.status,
        json
        })
      ))
    .then(({ status, json }) => {
      if (status >= 400) {
        dispatch(resgisterUserFailure(json.errors));
      } else {
        console.log("in status 200 egistration");
        sessionStorage.setItem('jwt', json.jwt);
        dispatch(resgisterUserSuccess());
        dispatch(signInSuccess());
        browserHistory.push('/');
      }
    })
    .catch(error => {
      console.log("this is the error " + error);
      // dispatch(signInFailure(error));
      // throw(error);
    });
  }
} 

export function resgisterUserSuccess() {
  return {
    type: REGISTER_USER_SUCCESS
  }
}

export function resgisterUserFailure(errors) {
  return {
    type: REGISTER_USER_FAILURE,
    errors: errors
  }
}

export function fetchingRegisterUser() {
  return {
    type: REGISTER_USER_FETCHING
  }
}
