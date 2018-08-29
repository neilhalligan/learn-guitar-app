import { SET_SELECTED_MENU } from 'actions/types';

export default function(state = false, action) {
  switch (action.type) {
    case SET_SELECTED_MENU:
      return action.payload;
    default:
      return state;
  }
}
