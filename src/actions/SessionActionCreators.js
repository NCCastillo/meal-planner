import fetch from 'isomorphic-fetch';
import { SIGN_IN_FETCHING, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from './Actions';

// const base_url = 'http://localhost:4500';

// fetch('/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     name: 'Hubot',
//     login: 'hubot',
//   })
// })

// {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         user: {
//           email: data.email, 
//           password: data.password
//         }
//       })

// return sessionApi.login(credentials).then(response => {
//   sessionStorage.setItem('jwt', response.jwt);
//   dispatch(loginSuccess());
// }).catch(error => {
//   throw(error);
// });

// .then(response =>
//   response.json().then(json => ({
//     status: response.status,
//     json
//   })
// ))
// .then(response => {
//         if (response.status >= 200 && response.status < 300) {
//             return response.json();
//           } else {
//             var error = new Error(response.statusText)
//             error.response = response
//             throw error
//           }
//       })

export function signInUser(data) {
  return function(dispatch) {
    return fetch('http://localhost:4500/api/v1/login', {
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
        dispatch(signInFailure(json.error));
      } else {
        console.log("in status 200");
        sessionStorage.setItem('jwt', json.jwt);
        dispatch(signInSuccess());
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
    type: SIGN_IN_SUCCESS,
    authenticated: !!sessionStorage.jwt
  }
} 

export function signInFailure(error) {
  return {
    type: SIGN_IN_FAILURE,
    error: error
  }
}

export function fetchingUser () {
  return {
    type: SIGN_IN_FETCHING
  }
}

