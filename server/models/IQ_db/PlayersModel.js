import PlayersModelGenerated from "./generated/PlayersModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = PlayersModelGenerated.init();
  
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
      return await PlayersModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...PlayersModelGenerated,
  ...customModel
};
