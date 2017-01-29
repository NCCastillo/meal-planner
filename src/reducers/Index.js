
import { combineReducers } from 'redux';
import session from './Session';
import register from './Register';

export const rootReducer = combineReducers({
  session,
  register
});

export default rootReducer;
