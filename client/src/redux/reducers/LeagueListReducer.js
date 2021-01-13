// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function LeagueListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_LEAGUE_SUCCESS:
      return { ...state, league: action.payload };
    case types.LIST_LEAGUE_SUCCESS:
      return { ...state, listLeague: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}