import { combineReducers } from "redux";

// START IMPORT REDUCERS
import HomeReducer from "./HomeReducer";
import LeagueEditReducer from "./LeagueEditReducer";
import LeagueListReducer from "./LeagueListReducer";
import MatchesEditReducer from "./MatchesEditReducer";
import MatchesListReducer from "./MatchesListReducer";
import PlayersEditReducer from "./PlayersEditReducer";
import PlayersListReducer from "./PlayersListReducer";
import PreferencesEditReducer from "./PreferencesEditReducer";
import PreferencesListReducer from "./PreferencesListReducer";
import TeamsEditReducer from "./TeamsEditReducer";
import TeamsListReducer from "./TeamsListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	HomeReducer,
	LeagueEditReducer,
	LeagueListReducer,
	MatchesEditReducer,
	MatchesListReducer,
	PlayersEditReducer,
	PlayersListReducer,
	PreferencesEditReducer,
	PreferencesListReducer,
	TeamsEditReducer,
	TeamsListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
