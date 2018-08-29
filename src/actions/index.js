import { SET_SELECTED_FRET, SET_SELECTED_MENU } from 'actions/types';

export function setSelectedFret(fretPosition) {
  return {
    type: SET_SELECTED_FRET,
    payload: fretPosition
  };
}

export function setSelectedMenu(note) {
  return {
    type: SET_SELECTED_MENU,
    payload: note
  };
}
