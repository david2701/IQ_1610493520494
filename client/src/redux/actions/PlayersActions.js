import actionsFunction from "./generated/PlayersActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import PlayersApi from "../../api/PlayersApi";
 
 actionsFunction.loadPlayersList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return PlayersApi
     .getPlayersList()
     .then(list => {
       dispatch(actionsFunction.loadPlayersSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
