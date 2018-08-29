import { SET_SELECTED_FRET } from 'actions/types';

export default function (state = false, action) {
  switch (action.type) {
    case SET_SELECTED_FRET:
      return action.payload;
    default:
      return state;
  }
}
