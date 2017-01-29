import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_IN_FETCHING } from '../actions/Actions';

const initialState = {
  authenticated: !!sessionStorage.jwt,
  isFetching: false,
  errors: []
};

function session(state = initialState, action) {

  switch (action.type) {
    case SIGN_IN_SUCCESS:
      // need to return new state here. for now just return it.
      console.log("in SIGN_IN_SUCCESS reducer");
      return { ...state, isFetching: false, authenticated: !!sessionStorage.jwt };
    case SIGN_IN_FAILURE:
      console.log(action.errors);
      return { ...state, errors: action.errors, isFetching: false , authenticated: !!sessionStorage.jwt };
    case SIGN_IN_FETCHING:
    return { ...state, isFetching: true , authenticated: !!sessionStorage.jwt};
    default:
      return state;  
  }
}

export default session;
