// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import LeagueModel from "../models/IQ_db/LeagueModel";
import MatchesModel from "../models/IQ_db/MatchesModel";
import PlayersModel from "../models/IQ_db/PlayersModel";
import PreferencesModel from "../models/IQ_db/PreferencesModel";
import TeamsModel from "../models/IQ_db/TeamsModel";
import UserModel from "../models/IQ_db/UserModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.IQ_db_dbUrl);

    // Start Init Models

		LeagueModel.init();
		MatchesModel.init();
		PlayersModel.init();
		PreferencesModel.init();
		TeamsModel.init();
		UserModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_IQ_db = await mongoose.connect(
        "mongodb://" + properties.IQ_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_IQ_db;
  }
}

export default new Database();
