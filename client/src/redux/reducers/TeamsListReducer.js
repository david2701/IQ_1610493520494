// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function TeamsListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_TEAMS_SUCCESS:
      return { ...state, teams: action.payload };
    case types.LIST_TEAMS_SUCCESS:
      return { ...state, listTeams: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}