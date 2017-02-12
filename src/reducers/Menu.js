import { CREATE_MENU_FETCHING, CREATE_MENU_SUCCESS, CREATE_MENU_FAILURE, FETCH_CURRENT_MEAL_SUCCESS } from '../actions/Actions';

const initialState = {
  isFetching: false,
  errors: [],
}
// {"menu"=>{"id"=>331, "week_of"=>"2017-02-05_2017-02-11", "menu_items"=>[]}}
//{"menus"=>[{"id"=>342, "week_of"=>"2017-02-05_2017-02-11", "menu_items"=>[]}]}
//[{ "id"=>menu.id, "week_of"=>"#{menu.week_of}", "menu_items"=>[] }]
function menu(state = initialState, action) {
  switch (action.type) {
    case CREATE_MENU_SUCCESS:
      return { ...state, isFetching: false };
    case CREATE_MENU_FETCHING:
      return { ...state, isFetching: true };
    case CREATE_MENU_FAILURE:
      return { ...state, errors: action.errors, isFetching: false };
    default:
      return state;
  }
  
}

export default menu;
