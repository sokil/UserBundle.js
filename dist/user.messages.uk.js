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

var i18n=new Translate;i18n.addMessages({"user_attribute_editor_popup.title":"Атрибут користувача","user_attribute_editor_popup.button.save":"Зберегти","user_attribute_editor_popup.field.name":"Назва","user_attribute_editor_popup.field.description":"Опис","user_attribute_editor_popup.field.type":"Тип","user_attribute_editor_popup.field.printFormat":"Формат виводу","user_attribute_editor_popup.field.defaultValue":"Значення на замовчуванням"}),i18n.addMessages({"user_attributes_page.button.new_attribute":"Новий атрибут","user_attributes_page.title":"Атрибут користувача"}),i18n.addMessages({"New user":"Новий користувач",Parameters:"Параметри",Roles:"Ролі",Groups:"Групи",Email:"Електронна пошта",Password:"Пароль","Password confirm":"Підтвердити пароль",Save:"Зберегти"}),i18n.addMessages({"user.groups.empty_list":"Не створено жодної групи"}),i18n.addMessages({"user.list.edit":"Змінити","user.list.delete":"Видалити","user.list.name_not_specified":"Ім'я не задано"}),i18n.addMessages({"user_attribute_list.name":"Назва","user_attribute_list.description":"Опис","user_attribute_list.type":"Тип","user_attribute_list.printFormat":"Формат виводу","user_attribute_list.defaultValue":"Значення на замовчуванням"}),i18n.addMessages({"Add user":"Новий користувач",Users:"Користувачі"});
return i18n;

}));
