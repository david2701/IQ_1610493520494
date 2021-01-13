// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  preferences: {}
};

// Reducer
export default function PreferencesEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_PREFERENCES_SUCCESS:
      return { ...state, preferences: action.payload };
    case types.UPDATE_PREFERENCES_SUCCESS:
      return { ...state, preferences: action.payload };
    case types.GET_PREFERENCES_SUCCESS:
      return { ...state, preferences: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}