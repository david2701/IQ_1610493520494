import MatchesApiGenerated from "./generated/MatchesApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class MatchesApi extends MatchesApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Matches List
  static getMatchesList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/matchess")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default MatchesApi;