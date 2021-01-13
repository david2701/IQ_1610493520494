// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  teams: {}
};

// Reducer
export default function TeamsEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_TEAMS_SUCCESS:
      return { ...state, teams: action.payload };
    case types.UPDATE_TEAMS_SUCCESS:
      return { ...state, teams: action.payload };
    case types.GET_TEAMS_SUCCESS:
      return { ...state, teams: action.payload };
    case types.LIST_PLAYERS_SUCCESS:
      return { ...state, listPlayers: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}