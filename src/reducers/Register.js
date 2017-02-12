import { REGISTER_USER_FETCHING, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from '../actions/Actions';

const initialState = {
  authenticated: !!sessionStorage.jwt,
  isFetching: false,
  errors: []
};

function register(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER_FETCHING:
      return { ...state, isFetching: true, authenticated: !!sessionStorage.jwt };
    case REGISTER_USER_SUCCESS:
      return { ...state, isFetching: false, authenticated: !!sessionStorage.jwt }; // what else do I want to state to keep track of when the user is register?
    case REGISTER_USER_FAILURE:
      console.log("register user failure");
      return { ...state, errors: action.errors, isFetching: false, authenticated: !!sessionStorage.jwt };
    default:
      return state;
  }
}

export default register;
