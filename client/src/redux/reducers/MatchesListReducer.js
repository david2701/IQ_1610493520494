// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function MatchesListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_MATCHES_SUCCESS:
      return { ...state, matches: action.payload };
    case types.LIST_MATCHES_SUCCESS:
      return { ...state, listMatches: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}