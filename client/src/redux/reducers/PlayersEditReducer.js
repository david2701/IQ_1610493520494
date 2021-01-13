// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  players: {}
};

// Reducer
export default function PlayersEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_PLAYERS_SUCCESS:
      return { ...state, players: action.payload };
    case types.UPDATE_PLAYERS_SUCCESS:
      return { ...state, players: action.payload };
    case types.GET_PLAYERS_SUCCESS:
      return { ...state, players: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}