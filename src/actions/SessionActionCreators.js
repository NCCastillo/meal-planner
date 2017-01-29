import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';
import { SIGN_IN_FETCHING, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from './Actions';

const base_url = 'http://localhost:4500';

export function signInUser(data) {
  return function(dispatch) {
    dispatch(fetchingUser());
    
    return fetch(`${base_url}/api/v1/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: data.email,
          password: data.password
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
        console.log("in status 400");
        dispatch(signInFailure(json.errors));
      } else {
        console.log("in status 200");
        sessionStorage.setItem('jwt', json.jwt);
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

export function signInSuccess() {
  return {
    type: SIGN_IN_SUCCESS
  }
} 

export function signInFailure(errors) {
  return {
    type: SIGN_IN_FAILURE,
    errors: errors
  }
}

export function fetchingUser () {
  return {
    type: SIGN_IN_FETCHING
  }
}

