(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function () {
      return (root['JST'] = factory());
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['JST'] = factory();
  }
}(this, function () {

this["JST"] = this["JST"] || {};

this["JST"]["RoleGroupEditorPopup"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (_, group, roles, t, undefined) {
buf.push("<form><div class=\"form-group\"><label>" + (jade.escape(null == (jade_interp = t('Group name')) ? "" : jade_interp)) + "</label><input type=\"text\" name=\"name\"" + (jade.attr("value", group.get('name'), true, false)) + " class=\"form-control\"/></div><div class=\"form-group\"><label>" + (jade.escape(null == (jade_interp = t('Roles')) ? "" : jade_interp)) + "</label><div class=\"list\"><table class=\"table table-striped table-hover\"><col width=\"40px\"/><tbody>");
// iterate roles
;(function(){
  var $$obj = roles;
  if ('number' == typeof $$obj.length) {

    for (var role = 0, $$l = $$obj.length; role < $$l; role++) {
      var childRoles = $$obj[role];

buf.push("<tr>");
var checked = _.contains(group.get('roles'), role)
buf.push("<td><input type=\"checkbox\" name=\"roles[]\"" + (jade.attr("value", role, true, false)) + (jade.attr("checked", checked, true, false)) + "/></td><td>" + (jade.escape(null == (jade_interp = role) ? "" : jade_interp)) + "</td></tr>");
    }

  } else {
    var $$l = 0;
    for (var role in $$obj) {
      $$l++;      var childRoles = $$obj[role];

buf.push("<tr>");
var checked = _.contains(group.get('roles'), role)
buf.push("<td><input type=\"checkbox\" name=\"roles[]\"" + (jade.attr("value", role, true, false)) + (jade.attr("checked", checked, true, false)) + "/></td><td>" + (jade.escape(null == (jade_interp = role) ? "" : jade_interp)) + "</td></tr>");
    }

  }
}).call(this);

buf.push("</tbody></table></div></div></form>");}.call(this,"_" in locals_for_with?locals_for_with._:typeof _!=="undefined"?_:undefined,"group" in locals_for_with?locals_for_with.group:typeof group!=="undefined"?group:undefined,"roles" in locals_for_with?locals_for_with.roles:typeof roles!=="undefined"?roles:undefined,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};

this["JST"]["RoleGroupsList"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (groups, t, undefined) {
buf.push("<table class=\"table table-striped table-hover top-space\"><tr><th>" + (jade.escape(null == (jade_interp = t('Group')) ? "" : jade_interp)) + "</th><th class=\"hidden-xs\">" + (jade.escape(null == (jade_interp = t('Roles')) ? "" : jade_interp)) + "</th><th></th></tr>");
// iterate groups
;(function(){
  var $$obj = groups;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var group = $$obj[$index];

buf.push("<tr" + (jade.attr("data-group", group.get('id'), true, false)) + "><td>" + (jade.escape(null == (jade_interp = group.get('name')) ? "" : jade_interp)) + "</td><td class=\"hidden-xs\">" + (jade.escape(null == (jade_interp = group.get('roles').join(", ")) ? "" : jade_interp)) + "</td><td><div class=\"btn-group\"><button data-toggle=\"dropdown\" class=\"btn btn-default btn-xs dropdown-toggle\"><span class=\"glyphicon glyphicon-cog\"></span>&nbsp<span class=\"caret\"></span></button><ul class=\"dropdown-menu dropdown-menu-right\"><li><a" + (jade.attr("data-id", group.get('id'), true, false)) + " class=\"edit\">" + (jade.escape(null == (jade_interp = t('Edit')) ? "" : jade_interp)) + "</a></li><li><a" + (jade.attr("data-id", group.get('id'), true, false)) + " class=\"delete\">" + (jade.escape(null == (jade_interp = t('Delete')) ? "" : jade_interp)) + "</a></li></ul></div></td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var group = $$obj[$index];

buf.push("<tr" + (jade.attr("data-group", group.get('id'), true, false)) + "><td>" + (jade.escape(null == (jade_interp = group.get('name')) ? "" : jade_interp)) + "</td><td class=\"hidden-xs\">" + (jade.escape(null == (jade_interp = group.get('roles').join(", ")) ? "" : jade_interp)) + "</td><td><div class=\"btn-group\"><button data-toggle=\"dropdown\" class=\"btn btn-default btn-xs dropdown-toggle\"><span class=\"glyphicon glyphicon-cog\"></span>&nbsp<span class=\"caret\"></span></button><ul class=\"dropdown-menu dropdown-menu-right\"><li><a" + (jade.attr("data-id", group.get('id'), true, false)) + " class=\"edit\">" + (jade.escape(null == (jade_interp = t('Edit')) ? "" : jade_interp)) + "</a></li><li><a" + (jade.attr("data-id", group.get('id'), true, false)) + " class=\"delete\">" + (jade.escape(null == (jade_interp = t('Delete')) ? "" : jade_interp)) + "</a></li></ul></div></td></tr>");
    }

  }
}).call(this);

buf.push("</table>");}.call(this,"groups" in locals_for_with?locals_for_with.groups:typeof groups!=="undefined"?groups:undefined,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};

this["JST"]["RoleGroupsPage"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (t) {
buf.push("<div class=\"btn-toolbar top-space\"><a data-new-group=\"data-new-group\" class=\"btn btn-success\">" + (jade.escape(null == (jade_interp = t('New group')) ? "" : jade_interp)) + "</a></div><div class=\"block top-space\"><div class=\"title\">" + (jade.escape(null == (jade_interp = t('Groups')) ? "" : jade_interp)) + "</div><div class=\"content no-border list\"></div></div>");}.call(this,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined));;return buf.join("");
};

this["JST"]["User"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (t, undefined, user) {
buf.push("<div class=\"block top-space\"><div class=\"title row\"><div class=\"col-md-6 col-sm-6 col-xs-6\">" + (jade.escape(null == (jade_interp = t('User') + " #" + user.get('id')) ? "" : jade_interp)) + "</div><div class=\"col-md-6 col-sm-6 col-xs-6 text-right\">");
if ( user.hasPermission('edit'))
{
buf.push("<div class=\"visible-xs\"><div class=\"btn-group\"><button data-toggle=\"dropdown\" class=\"btn btn-default btn-xs dropdown-toggle\"><span class=\"glyphicon glyphicon-cog\"></span>&nbsp<span class=\"caret\"></span></button><ul class=\"dropdown-menu dropdown-menu-right\"><li><a" + (jade.attr("href", "/#users/" + user.get('id') + '/edit', true, false)) + ">" + (jade.escape(null == (jade_interp = t('Edit')) ? "" : jade_interp)) + "</a></li><li><a class=\"delete\">" + (jade.escape(null == (jade_interp = t('Delete')) ? "" : jade_interp)) + "</a></li></ul></div></div><div class=\"hidden-xs\"><a" + (jade.attr("href", "/#users/" + user.get('id') + "/edit", true, false)) + " class=\"btn btn-success btn-xs\">" + (jade.escape((jade_interp = t('Edit')) == null ? '' : jade_interp)) + "</a>&nbsp;<a class=\"btn btn-danger btn-xs delete\">" + (jade.escape((jade_interp = t('Delete')) == null ? '' : jade_interp)) + "</a></div>");
}
buf.push("</div></div><div class=\"content\"><div class=\"row\"><div class=\"col-md-3\"><img" + (jade.attr("src", user.getGravatarUrl(200), true, false)) + " class=\"img-circle\"/></div><div class=\"col-md-9\"><h1>" + (jade.escape(null == (jade_interp = user.get('name')) ? "" : jade_interp)) + "</h1><dl class=\"dl-horizontal\"><dt>" + (jade.escape(null == (jade_interp = t('E-mail')) ? "" : jade_interp)) + "</dt><dd><a" + (jade.attr("href", user.get('email'), true, false)) + ">" + (jade.escape(null == (jade_interp = user.get('email')) ? "" : jade_interp)) + "</a></dd>");
if ( user.has('attributes'))
{
// iterate user.get('attributes')
;(function(){
  var $$obj = user.get('attributes');
  if ('number' == typeof $$obj.length) {

    for (var attributeId = 0, $$l = $$obj.length; attributeId < $$l; attributeId++) {
      var attribute = $$obj[attributeId];

if ( attribute['value']['view'])
{
buf.push("<dt>" + (jade.escape(null == (jade_interp = attribute['label']) ? "" : jade_interp)) + "</dt>");
if ( attribute['type'] === 'string')
{
buf.push("<dd>" + (null == (jade_interp = attribute['value']['view']) ? "" : jade_interp) + "</dd>");
}
else if ( attribute['type'] === 'entity')
{
buf.push("<dd>" + (null == (jade_interp = attribute['value']['view']) ? "" : jade_interp) + "</dd>");
}
}
    }

  } else {
    var $$l = 0;
    for (var attributeId in $$obj) {
      $$l++;      var attribute = $$obj[attributeId];

if ( attribute['value']['view'])
{
buf.push("<dt>" + (jade.escape(null == (jade_interp = attribute['label']) ? "" : jade_interp)) + "</dt>");
if ( attribute['type'] === 'string')
{
buf.push("<dd>" + (null == (jade_interp = attribute['value']['view']) ? "" : jade_interp) + "</dd>");
}
else if ( attribute['type'] === 'entity')
{
buf.push("<dd>" + (null == (jade_interp = attribute['value']['view']) ? "" : jade_interp) + "</dd>");
}
}
    }

  }
}).call(this);

}
buf.push("</dl></div></div></div></div>");}.call(this,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
};

this["JST"]["UserAttributeEditorPopup"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (attribute, schema, t, undefined) {
buf.push("<form>");
// iterate schema
;(function(){
  var $$obj = schema;
  if ('number' == typeof $$obj.length) {

    for (var schemaElementName = 0, $$l = $$obj.length; schemaElementName < $$l; schemaElementName++) {
      var schemaElement = $$obj[schemaElementName];

buf.push("<div class=\"form-group\"><label>" + (jade.escape(null == (jade_interp = t('user_attribute_editor_popup.field.' + schemaElementName)) ? "" : jade_interp)) + "</label><input" + (jade.attr("type", schemaElement.type, true, false)) + (jade.attr("name", schemaElementName, true, false)) + (jade.attr("value", attribute[schemaElementName], true, false)) + " class=\"form-control\"/></div>");
    }

  } else {
    var $$l = 0;
    for (var schemaElementName in $$obj) {
      $$l++;      var schemaElement = $$obj[schemaElementName];

buf.push("<div class=\"form-group\"><label>" + (jade.escape(null == (jade_interp = t('user_attribute_editor_popup.field.' + schemaElementName)) ? "" : jade_interp)) + "</label><input" + (jade.attr("type", schemaElement.type, true, false)) + (jade.attr("name", schemaElementName, true, false)) + (jade.attr("value", attribute[schemaElementName], true, false)) + " class=\"form-control\"/></div>");
    }

  }
}).call(this);

buf.push("</form>");}.call(this,"attribute" in locals_for_with?locals_for_with.attribute:typeof attribute!=="undefined"?attribute:undefined,"schema" in locals_for_with?locals_for_with.schema:typeof schema!=="undefined"?schema:undefined,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};

this["JST"]["UserAttributesPage"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (availableTypes, t, undefined) {
buf.push("<div class=\"btn-toolbar top-space\"><div class=\"btn-group\"><a dropdown-toggle=\"dropdown-toggle\" data-toggle=\"dropdown\" class=\"btn btn-success dropdown-toggle\">" + (jade.escape(null == (jade_interp = t('user_attributes_page.button.new_attribute') + " ") ? "" : jade_interp)) + "<span class=\"caret\"></span></a><ul class=\"dropdown-menu\">");
// iterate availableTypes
;(function(){
  var $$obj = availableTypes;
  if ('number' == typeof $$obj.length) {

    for (var availableType = 0, $$l = $$obj.length; availableType < $$l; availableType++) {
      var availableTypeMeta = $$obj[availableType];

buf.push("<li><a href=\"#\"" + (jade.attr("data-new-attribute", availableType, true, false)) + ">" + (jade.escape(null == (jade_interp = availableTypeMeta.label) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var availableType in $$obj) {
      $$l++;      var availableTypeMeta = $$obj[availableType];

buf.push("<li><a href=\"#\"" + (jade.attr("data-new-attribute", availableType, true, false)) + ">" + (jade.escape(null == (jade_interp = availableTypeMeta.label) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div></div><div class=\"block top-space\"><div class=\"title\">" + (jade.escape(null == (jade_interp = t('user_attributes_page.title')) ? "" : jade_interp)) + "</div><div class=\"content no-border list\"></div></div>");}.call(this,"availableTypes" in locals_for_with?locals_for_with.availableTypes:typeof availableTypes!=="undefined"?availableTypes:undefined,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};

this["JST"]["UserEditor"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (t, user) {
buf.push("<div class=\"block top-space\"><div class=\"title\">" + (jade.escape(null == (jade_interp = user.get('name') || t('New user')) ? "" : jade_interp)) + "</div><div class=\"content\"></div></div>");}.call(this,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
};

this["JST"]["UserGroups"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (groups, t, undefined, user) {
buf.push("<form><table class=\"table table-striped table-hover top-space\"><col width=\"40px\"/><tr><th></th><th>" + (jade.escape(null == (jade_interp = t('Group')) ? "" : jade_interp)) + "</th><th class=\"hidden-xs\">" + (jade.escape(null == (jade_interp = t('Roles')) ? "" : jade_interp)) + "</th></tr>");
// iterate groups
;(function(){
  var $$obj = groups;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var group = $$obj[$index];

buf.push("<tr><td><input type=\"checkbox\" name=\"groups[]\"" + (jade.attr("value", group.id, true, false)) + (jade.attr("checked", user.inGroup(group.id), true, false)) + "/></td><td>" + (jade.escape(null == (jade_interp = group.name) ? "" : jade_interp)) + "</td><td class=\"hidden-xs\">" + (jade.escape(null == (jade_interp = group.roles.join(", ")) ? "" : jade_interp)) + "</td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var group = $$obj[$index];

buf.push("<tr><td><input type=\"checkbox\" name=\"groups[]\"" + (jade.attr("value", group.id, true, false)) + (jade.attr("checked", user.inGroup(group.id), true, false)) + "/></td><td>" + (jade.escape(null == (jade_interp = group.name) ? "" : jade_interp)) + "</td><td class=\"hidden-xs\">" + (jade.escape(null == (jade_interp = group.roles.join(", ")) ? "" : jade_interp)) + "</td></tr>");
    }

  }
}).call(this);

buf.push("</table><div class=\"form-group\"><input type=\"submit\" value=\"Save\" class=\"btn btn-success\"/><span class=\"status\"></span></div></form>");}.call(this,"groups" in locals_for_with?locals_for_with.groups:typeof groups!=="undefined"?groups:undefined,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
};

this["JST"]["UserGroupsEmptyList"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (t) {
buf.push("<div class=\"block__empty top-space bottom-space\">" + (jade.escape(null == (jade_interp = t('user.groups.empty_list')) ? "" : jade_interp)) + "</div>");}.call(this,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined));;return buf.join("");
};

this["JST"]["UserList"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (t, undefined, users) {
buf.push("<table class=\"table table-striped table-hover\"><col width=\"60\"/><tbody>");
// iterate users
;(function(){
  var $$obj = users;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var user = $$obj[$index];

buf.push("<tr" + (jade.attr("data-user-id", user.get('id'), true, false)) + "><td><a" + (jade.attr("href", "/#users/" + user.get('id'), true, false)) + "><img" + (jade.attr("src", user.getGravatarUrl(40), true, false)) + " class=\"img-circle\"/></a></td><td>" + (jade.escape(null == (jade_interp = user.get('name')) ? "" : jade_interp)) + "</td><td><a" + (jade.attr("href", "mailto://" + user.get('email'), true, false)) + " target=\"_blank\">" + (jade.escape(null == (jade_interp = user.get('email')) ? "" : jade_interp)) + "</a></td><td class=\"text-right\">");
if ( user.hasPermission('edit'))
{
buf.push("<div class=\"visible-xs\"><div class=\"btn-group\"><button data-toggle=\"dropdown\" class=\"btn btn-default btn-xs dropdown-toggle\"><span class=\"glyphicon glyphicon-cog\"></span>&nbsp<span class=\"caret\"></span></button><ul class=\"dropdown-menu dropdown-menu-right\"><li><a" + (jade.attr("href", "/#users/" + user.get('id') + '/edit', true, false)) + ">" + (jade.escape(null == (jade_interp = t('user.edit')) ? "" : jade_interp)) + "</a></li><li><a>" + (jade.escape(null == (jade_interp = t('user.list.delete')) ? "" : jade_interp)) + "</a></li></ul></div></div><div class=\"hidden-xs\"><a" + (jade.attr("href", "/#users/" + user.get('id') + '/edit', true, false)) + " class=\"btn btn-default btn-xs\"><span class=\"glyphicon glyphicon-pencil\"></span>&nbsp;" + (jade.escape(null == (jade_interp = t('user.list.edit')) ? "" : jade_interp)) + "</a>&nbsp;<a class=\"btn btn-default btn-xs delete\"><span class=\"glyphicon glyphicon-trash\"></span>&nbsp;" + (jade.escape(null == (jade_interp = t('user.list.delete')) ? "" : jade_interp)) + "</a></div>");
}
buf.push("</td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var user = $$obj[$index];

buf.push("<tr" + (jade.attr("data-user-id", user.get('id'), true, false)) + "><td><a" + (jade.attr("href", "/#users/" + user.get('id'), true, false)) + "><img" + (jade.attr("src", user.getGravatarUrl(40), true, false)) + " class=\"img-circle\"/></a></td><td>" + (jade.escape(null == (jade_interp = user.get('name')) ? "" : jade_interp)) + "</td><td><a" + (jade.attr("href", "mailto://" + user.get('email'), true, false)) + " target=\"_blank\">" + (jade.escape(null == (jade_interp = user.get('email')) ? "" : jade_interp)) + "</a></td><td class=\"text-right\">");
if ( user.hasPermission('edit'))
{
buf.push("<div class=\"visible-xs\"><div class=\"btn-group\"><button data-toggle=\"dropdown\" class=\"btn btn-default btn-xs dropdown-toggle\"><span class=\"glyphicon glyphicon-cog\"></span>&nbsp<span class=\"caret\"></span></button><ul class=\"dropdown-menu dropdown-menu-right\"><li><a" + (jade.attr("href", "/#users/" + user.get('id') + '/edit', true, false)) + ">" + (jade.escape(null == (jade_interp = t('user.edit')) ? "" : jade_interp)) + "</a></li><li><a>" + (jade.escape(null == (jade_interp = t('user.list.delete')) ? "" : jade_interp)) + "</a></li></ul></div></div><div class=\"hidden-xs\"><a" + (jade.attr("href", "/#users/" + user.get('id') + '/edit', true, false)) + " class=\"btn btn-default btn-xs\"><span class=\"glyphicon glyphicon-pencil\"></span>&nbsp;" + (jade.escape(null == (jade_interp = t('user.list.edit')) ? "" : jade_interp)) + "</a>&nbsp;<a class=\"btn btn-default btn-xs delete\"><span class=\"glyphicon glyphicon-trash\"></span>&nbsp;" + (jade.escape(null == (jade_interp = t('user.list.delete')) ? "" : jade_interp)) + "</a></div>");
}
buf.push("</td></tr>");
    }

  }
}).call(this);

buf.push("</tbody></table><div class=\"pagination-wrap\"></div>");}.call(this,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"users" in locals_for_with?locals_for_with.users:typeof users!=="undefined"?users:undefined));;return buf.join("");
};

this["JST"]["UserParameters"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (t, undefined, user) {
buf.push("<form class=\"top-space\"><div class=\"form-group\"><label>" + (jade.escape(null == (jade_interp = t('Email')) ? "" : jade_interp)) + "</label><input type=\"text\" name=\"email\"" + (jade.attr("value", user.get('email'), true, false)) + " autocomplete=\"off\" class=\"form-control\"/></div><div class=\"form-group\"><label>" + (jade.escape(null == (jade_interp = t('Password')) ? "" : jade_interp)) + "</label><input type=\"password\" name=\"password\" value=\"\" autocomplete=\"off\" class=\"form-control\"/></div><div class=\"form-group\"><label>" + (jade.escape(null == (jade_interp = t('Name')) ? "" : jade_interp)) + "</label><input type=\"text\" name=\"name\"" + (jade.attr("value", user.get('name'), true, false)) + " class=\"form-control\"/></div>");
if ( user.has('attributes'))
{
// iterate user.get('attributes')
;(function(){
  var $$obj = user.get('attributes');
  if ('number' == typeof $$obj.length) {

    for (var attributeId = 0, $$l = $$obj.length; attributeId < $$l; attributeId++) {
      var attribute = $$obj[attributeId];

if ( attribute.permissions.edit === true)
{
buf.push("<div class=\"form-group\"><label>" + (jade.escape(null == (jade_interp = attribute['label']) ? "" : jade_interp)) + "</label>");
if ( attribute['type'] === "string")
{
buf.push("<input type=\"text\"" + (jade.attr("name", "attributeValues[" + attributeId + "]", true, false)) + (jade.attr("value", attribute['value']['edit'], true, false)) + " class=\"form-control\"/>");
}
else if ( attribute['type'] === "entity")
{
buf.push("<select" + (jade.attr("name", "attributeValues[" + attributeId + "]", true, false)) + " class=\"form-control\"><option value=\"\">" + (jade.escape(null == (jade_interp = t("Not selected")) ? "" : jade_interp)) + "</option>");
// iterate attribute['options']
;(function(){
  var $$obj = attribute['options'];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var option = $$obj[$index];

buf.push("<option" + (jade.attr("value", option['value'], true, false)) + (jade.attr("selected", (option['value'] === attribute['value']['edit']), true, false)) + ">" + (jade.escape(null == (jade_interp = option['text']) ? "" : jade_interp)) + "</option>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var option = $$obj[$index];

buf.push("<option" + (jade.attr("value", option['value'], true, false)) + (jade.attr("selected", (option['value'] === attribute['value']['edit']), true, false)) + ">" + (jade.escape(null == (jade_interp = option['text']) ? "" : jade_interp)) + "</option>");
    }

  }
}).call(this);

buf.push("</select>");
}
buf.push("</div>");
}
    }

  } else {
    var $$l = 0;
    for (var attributeId in $$obj) {
      $$l++;      var attribute = $$obj[attributeId];

if ( attribute.permissions.edit === true)
{
buf.push("<div class=\"form-group\"><label>" + (jade.escape(null == (jade_interp = attribute['label']) ? "" : jade_interp)) + "</label>");
if ( attribute['type'] === "string")
{
buf.push("<input type=\"text\"" + (jade.attr("name", "attributeValues[" + attributeId + "]", true, false)) + (jade.attr("value", attribute['value']['edit'], true, false)) + " class=\"form-control\"/>");
}
else if ( attribute['type'] === "entity")
{
buf.push("<select" + (jade.attr("name", "attributeValues[" + attributeId + "]", true, false)) + " class=\"form-control\"><option value=\"\">" + (jade.escape(null == (jade_interp = t("Not selected")) ? "" : jade_interp)) + "</option>");
// iterate attribute['options']
;(function(){
  var $$obj = attribute['options'];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var option = $$obj[$index];

buf.push("<option" + (jade.attr("value", option['value'], true, false)) + (jade.attr("selected", (option['value'] === attribute['value']['edit']), true, false)) + ">" + (jade.escape(null == (jade_interp = option['text']) ? "" : jade_interp)) + "</option>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var option = $$obj[$index];

buf.push("<option" + (jade.attr("value", option['value'], true, false)) + (jade.attr("selected", (option['value'] === attribute['value']['edit']), true, false)) + ">" + (jade.escape(null == (jade_interp = option['text']) ? "" : jade_interp)) + "</option>");
    }

  }
}).call(this);

buf.push("</select>");
}
buf.push("</div>");
}
    }

  }
}).call(this);

}
buf.push("<div class=\"form-group\"><input type=\"submit\"" + (jade.attr("value", t("Save"), true, false)) + " class=\"btn btn-success\"/><span class=\"status\"></span></div></form>");}.call(this,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
};

this["JST"]["UserRoles"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (roles, t, undefined, user) {
buf.push("<form><table class=\"table table-striped table-hover top-space\"><col width=\"40px\"/><tr><th></th><th>" + (jade.escape(null == (jade_interp = t('Role')) ? "" : jade_interp)) + "</th><th class=\"hidden-xs\">" + (jade.escape(null == (jade_interp = t('Child roles')) ? "" : jade_interp)) + "</th></tr>");
// iterate roles
;(function(){
  var $$obj = roles;
  if ('number' == typeof $$obj.length) {

    for (var parentRole = 0, $$l = $$obj.length; parentRole < $$l; parentRole++) {
      var childRoles = $$obj[parentRole];

buf.push("<tr>");
var checked = user.get('ownRoles') ? user.get('ownRoles').indexOf(parentRole) !== -1 : false
buf.push("<td><input type=\"checkbox\" name=\"roles[]\"" + (jade.attr("value", parentRole, true, false)) + (jade.attr("checked", checked, true, false)) + "/></td><td>" + (jade.escape(null == (jade_interp = parentRole) ? "" : jade_interp)) + "</td><td class=\"hidden-xs\">" + (jade.escape(null == (jade_interp = childRoles.length ? childRoles.join(", ") : t("No child roles")) ? "" : jade_interp)) + "</td></tr>");
    }

  } else {
    var $$l = 0;
    for (var parentRole in $$obj) {
      $$l++;      var childRoles = $$obj[parentRole];

buf.push("<tr>");
var checked = user.get('ownRoles') ? user.get('ownRoles').indexOf(parentRole) !== -1 : false
buf.push("<td><input type=\"checkbox\" name=\"roles[]\"" + (jade.attr("value", parentRole, true, false)) + (jade.attr("checked", checked, true, false)) + "/></td><td>" + (jade.escape(null == (jade_interp = parentRole) ? "" : jade_interp)) + "</td><td class=\"hidden-xs\">" + (jade.escape(null == (jade_interp = childRoles.length ? childRoles.join(", ") : t("No child roles")) ? "" : jade_interp)) + "</td></tr>");
    }

  }
}).call(this);

buf.push("</table><div class=\"form-group\"><input type=\"submit\" value=\"Save\" class=\"btn btn-success\"/><span class=\"status\"></span></div></form>");}.call(this,"roles" in locals_for_with?locals_for_with.roles:typeof roles!=="undefined"?roles:undefined,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
};

this["JST"]["UsersPage"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (t) {
buf.push("<div class=\"btn-toolbar top-space\"><a href=\"/#users/new\" class=\"btn btn-success\">" + (jade.escape(null == (jade_interp = t('Add user')) ? "" : jade_interp)) + "</a></div><div class=\"block top-space\"><div class=\"title\">" + (jade.escape(null == (jade_interp = t('Users')) ? "" : jade_interp)) + "</div><div id=\"users-list\" class=\"content no-border\"></div></div>");}.call(this,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined));;return buf.join("");
};
return JST;

}));
