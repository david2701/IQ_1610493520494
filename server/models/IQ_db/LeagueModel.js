import LeagueModelGenerated from "./generated/LeagueModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = LeagueModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await LeagueModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...LeagueModelGenerated,
  ...customModel
};
