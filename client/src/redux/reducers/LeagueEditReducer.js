// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  league: {}
};

// Reducer
export default function LeagueEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_LEAGUE_SUCCESS:
      return { ...state, league: action.payload };
    case types.UPDATE_LEAGUE_SUCCESS:
      return { ...state, league: action.payload };
    case types.GET_LEAGUE_SUCCESS:
      return { ...state, league: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}