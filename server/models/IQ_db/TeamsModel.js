import TeamsModelGenerated from "./generated/TeamsModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = TeamsModelGenerated.init();
  
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
      return await TeamsModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...TeamsModelGenerated,
  ...customModel
};
