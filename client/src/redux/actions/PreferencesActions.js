import actionsFunction from "./generated/PreferencesActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import PreferencesApi from "../../api/PreferencesApi";
 
 actionsFunction.loadPreferencesList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return PreferencesApi
     .getPreferencesList()
     .then(list => {
       dispatch(actionsFunction.loadPreferencesSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
