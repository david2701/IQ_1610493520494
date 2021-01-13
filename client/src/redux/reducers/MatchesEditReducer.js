// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  matches: {}
};

// Reducer
export default function MatchesEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_MATCHES_SUCCESS:
      return { ...state, matches: action.payload };
    case types.UPDATE_MATCHES_SUCCESS:
      return { ...state, matches: action.payload };
    case types.GET_MATCHES_SUCCESS:
      return { ...state, matches: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}