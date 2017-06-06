(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["Translate"], function (a0) {
      return (root['i18n'] = factory(a0));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("Translate"));
  } else {
    root['i18n'] = factory(root["Translate"]);
  }
}(this, function (Translate) {

var i18n=new Translate;i18n.addMessages({"user_attribute_editor_popup.title":"User attribute","user_attribute_editor_popup.button.save":"Save","user_attribute_editor_popup.field.name":"Name","user_attribute_editor_popup.field.description":"Description","user_attribute_editor_popup.field.type":"Type","user_attribute_editor_popup.field.printFormat":"Print format","user_attribute_editor_popup.field.defaultValue":"Default value"}),i18n.addMessages({"user_attributes_page.button.new_attribute":"New attribute","user_attributes_page.title":"User attribute"}),i18n.addMessages({"user.groups.empty_list":"No groups configured"}),i18n.addMessages({"user.list.edit":"Edit","user.list.delete":"Delete","user.list.name_not_specified":"User name not specified"}),i18n.addMessages({"user_attribute_list.name":"Name","user_attribute_list.description":"Description","user_attribute_list.type":"Type","user_attribute_list.printFormat":"Print Format","user_attribute_list.defaultValue":"Default Value","user_attribute_list.edit":"Edit"}),i18n.addMessages({});
return i18n;

}));
