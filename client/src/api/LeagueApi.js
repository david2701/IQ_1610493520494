import LeagueApiGenerated from "./generated/LeagueApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class LeagueApi extends LeagueApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get League List
  static getLeagueList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/leagues")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default LeagueApi;