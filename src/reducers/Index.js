
import { combineReducers } from 'redux';
import session from './Session';
import register from './Register';
import menu from './Menu';

export const rootReducer = combineReducers({
  session,
  register,
  menu
});

export default rootReducer;
