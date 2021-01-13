import actionsFunction from "./generated/LeagueActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import LeagueApi from "../../api/LeagueApi";
 
 actionsFunction.loadLeagueList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return LeagueApi
     .getLeagueList()
     .then(list => {
       dispatch(actionsFunction.loadLeagueSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
