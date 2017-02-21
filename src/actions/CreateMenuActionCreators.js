import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';
import { 
  CREATE_MENU_FETCHING, 
  CREATE_MENU_SUCCESS, 
  CREATE_MENU_FAILURE, 
  FETCH_CURRENT_MENU_SUCCESS 
} from './Actions';

const base_url = 'http://localhost:4500';
const token = sessionStorage.jwt;

export default function createMenu(data) {
  return function(dispatch) {
    dispatch(fetchingMenus());

    return fetch(`${base_url}/api/v1/menus`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
      },
      body: JSON.stringify({
        menu: {
          week_of: data.weekOf
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
        console.log("in status 400 menu");
        console.log(json);
        // Server throwing 402 with error but we are expecting errors array
        dispatch(createMenuFailure(json.errors || ["Opps something went wrong!"]));
      } else {
        console.log("in status 200 egistration");
        dispatch(createMenuSuccess());
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

export function getCurrentMenu() {
  return function(dispatch) {
    return fetch(`${base_url}/api/v1/menus/current_menu`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
      }
    })
    .then(response =>
      response.json().then(json => ({
        status: response.status,
        json
        })
      ))
    .then(({ status, json }) => {
      if (status >= 400) {
        // Server throwing 402 with error but we are expecting errors array
        dispatch(createMenuFailure(json.errors || ["Opps something went wrong!"]));
      } else {
        console.log(json.menu);
        dispatch(currentMenu(json.menu))
      }
    })
    .catch(error => {
      console.log("this is the error " + error);
      // dispatch(signInFailure(error));
      // throw(error);
    });    

  }
}

export function fetchingMenus() {
  return {
    type: CREATE_MENU_FETCHING,
  }
}

export function createMenuFailure(errors) {
  return {
    type: CREATE_MENU_FAILURE,
    errors: errors
  }
}

export function createMenuSuccess() {
  return {
    type: CREATE_MENU_SUCCESS
  }
}

export function currentMenu(menu) {
  return {
    type: FETCH_CURRENT_MENU_SUCCESS,
    menu: menu
  }
}
