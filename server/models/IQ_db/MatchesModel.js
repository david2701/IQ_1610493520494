import MatchesModelGenerated from "./generated/MatchesModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = MatchesModelGenerated.init();
  
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
      return await MatchesModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...MatchesModelGenerated,
  ...customModel
};
