import actionsFunction from "./generated/MatchesActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import MatchesApi from "../../api/MatchesApi";
 
 actionsFunction.loadMatchesList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return MatchesApi
     .getMatchesList()
     .then(list => {
       dispatch(actionsFunction.loadMatchesSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
