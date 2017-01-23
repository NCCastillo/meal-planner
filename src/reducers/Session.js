import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from '../actions/Actions';

function session(state={}, action) {

  switch (action.type) {
    case SIGN_IN_SUCCESS:
      // need to return new state here. for now just return it.
      console.log("SIGN_IN_SUCCESS was called");
      return { ...state, authenticated: action.authenticated };
    case SIGN_IN_FAILURE:
      console.log("SIGN_IN_FAILURE was called");
      console.log(action.error);
      return { ...state, error: action.error };
    default:
      return state;  
  }
}

export default session;
