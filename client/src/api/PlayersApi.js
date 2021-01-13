import PlayersApiGenerated from "./generated/PlayersApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class PlayersApi extends PlayersApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Players List
  static getPlayersList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/playerss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default PlayersApi;