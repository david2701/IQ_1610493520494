import PreferencesModelGenerated from "./generated/PreferencesModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = PreferencesModelGenerated.init();
  
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
      return await PreferencesModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...PreferencesModelGenerated,
  ...customModel
};
