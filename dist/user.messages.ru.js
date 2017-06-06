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

var i18n=new Translate;i18n.addMessages({"user_attribute_editor_popup.title":"Аттрибут пользователя","user_attribute_editor_popup.button.save":"Сохранить","user_attribute_editor_popup.field.name":"Название","user_attribute_editor_popup.field.description":"Описание","user_attribute_editor_popup.field.type":"Тип","user_attribute_editor_popup.field.printFormat":"Формат вывода","user_attribute_editor_popup.field.defaultValue":"Значение по умолчанию"}),i18n.addMessages({"user_attributes_page.button.new_attribute":"Новый аттрибут","user_attributes_page.title":"Аттрибут пользователя"}),i18n.addMessages({"New user":"Новый пользователь",Parameters:"Параметры",Roles:"Роли",Groups:"Группы",Email:"Электронная почта",Password:"Пароль","Password confirm":"Подтвердить пароль",Save:"Сохранить"}),i18n.addMessages({"user.groups.empty_list":"Группы отсутствуют"}),i18n.addMessages({"user.list.edit":"Изменить","user.list.delete":"Удалить","user.list.name_not_specified":"Имя не задано"}),i18n.addMessages({"user_attribute_list.name":"Название","user_attribute_list.description":"Описание","user_attribute_list.type":"Тип","user_attribute_list.printFormat":"Формат вывода","user_attribute_list.defaultValue":"Значение по умолчанию"}),i18n.addMessages({"Add user":"Новый пользователь",Users:"Пользователи"});
return i18n;

}));
