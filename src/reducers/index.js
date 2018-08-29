import { combineReducers } from 'redux';
import setSelectedFretReducer from 'reducers/setSelectedFret';
import setSelectedMenuReducer from 'reducers/setSelectedMenu';

export default combineReducers({
  selectedFret: setSelectedFretReducer,
  selectedMenu: setSelectedMenuReducer
});
