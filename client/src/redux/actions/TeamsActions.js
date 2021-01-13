import actionsFunction from "./generated/TeamsActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import TeamsApi from "../../api/TeamsApi";
 
 actionsFunction.loadTeamsList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return TeamsApi
     .getTeamsList()
     .then(list => {
       dispatch(actionsFunction.loadTeamsSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
