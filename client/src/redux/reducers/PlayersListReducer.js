// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function PlayersListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_PLAYERS_SUCCESS:
      return { ...state, players: action.payload };
    case types.LIST_PLAYERS_SUCCESS:
      return { ...state, listPlayers: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}