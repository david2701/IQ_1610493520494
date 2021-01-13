// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function PreferencesListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_PREFERENCES_SUCCESS:
      return { ...state, preferences: action.payload };
    case types.LIST_PREFERENCES_SUCCESS:
      return { ...state, listPreferences: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}