import PreferencesApiGenerated from "./generated/PreferencesApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class PreferencesApi extends PreferencesApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Preferences List
  static getPreferencesList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/preferencess")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default PreferencesApi;