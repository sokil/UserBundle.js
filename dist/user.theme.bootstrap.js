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

this["JST"]["ListTable"] = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "src/themes/bootstrap/list/ListTable.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (buttons, checkName, checkType, collection, columns, showColumnHeader, undefined) {
jade_debug.unshift(new jade.DebugItem( 0, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<table class=\"table table-hover table-striped\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "src/themes/bootstrap/list/ListTable.jade" ));
if ( showColumnHeader)
{
jade_debug.unshift(new jade.DebugItem( 3, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 3, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "src/themes/bootstrap/list/ListTable.jade" ));
if ( checkType)
{
jade_debug.unshift(new jade.DebugItem( 5, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 5, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "src/themes/bootstrap/list/ListTable.jade" ));
// iterate columns
;(function(){
  var $$obj = columns;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var column = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 6, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 7, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<th>" + (jade.escape(null == (jade_interp = column.caption) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var column = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 6, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 7, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<th>" + (jade.escape(null == (jade_interp = column.caption) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 8, "src/themes/bootstrap/list/ListTable.jade" ));
if ( buttons)
{
jade_debug.unshift(new jade.DebugItem( 9, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 9, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "src/themes/bootstrap/list/ListTable.jade" ));
// iterate collection
;(function(){
  var $$obj = collection;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 10, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 11, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<tr" + (jade.attr("data-item", item.id, true, false)) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 12, "src/themes/bootstrap/list/ListTable.jade" ));
if ( checkType)
{
jade_debug.unshift(new jade.DebugItem( 13, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 13, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<td>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 14, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<input" + (jade.attr("type", checkType, true, false)) + (jade.attr("name", checkName + "[]", true, false)) + (jade.attr("checked", item.checked, true, false)) + (jade.attr("value", item.id, true, false)) + "/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 15, "src/themes/bootstrap/list/ListTable.jade" ));
// iterate columns
;(function(){
  var $$obj = columns;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var column = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 15, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 16, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<td>" + (jade.escape(null == (jade_interp = item[column.name]) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var column = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 15, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 16, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<td>" + (jade.escape(null == (jade_interp = item[column.name]) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 17, "src/themes/bootstrap/list/ListTable.jade" ));
if ( buttons)
{
jade_debug.unshift(new jade.DebugItem( 18, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 18, "src/themes/bootstrap/list/ListTable.jade" ));
// iterate buttons
;(function(){
  var $$obj = buttons;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var button = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 18, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 19, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<td class=\"text-right\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 20, "src/themes/bootstrap/list/ListTable.jade" ));
var attributes = {class: button.class}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 21, "src/themes/bootstrap/list/ListTable.jade" ));
if ( (button.name))
{
jade_debug.unshift(new jade.DebugItem( 22, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 22, "src/themes/bootstrap/list/ListTable.jade" ));
attributes["data-"+button.name]=item.id
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 23, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<a" + (jade.attrs(jade.merge([attributes]), false)) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 24, "src/themes/bootstrap/list/ListTable.jade" ));
if ( button.icon)
{
jade_debug.unshift(new jade.DebugItem( 25, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 25, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<span" + (jade.cls([button.icon], [true])) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 26, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push(jade.escape(null == (jade_interp = " ") ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 27, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push(jade.escape(null == (jade_interp = button.caption) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var button = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 18, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 19, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<td class=\"text-right\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 20, "src/themes/bootstrap/list/ListTable.jade" ));
var attributes = {class: button.class}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 21, "src/themes/bootstrap/list/ListTable.jade" ));
if ( (button.name))
{
jade_debug.unshift(new jade.DebugItem( 22, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 22, "src/themes/bootstrap/list/ListTable.jade" ));
attributes["data-"+button.name]=item.id
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 23, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<a" + (jade.attrs(jade.merge([attributes]), false)) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 24, "src/themes/bootstrap/list/ListTable.jade" ));
if ( button.icon)
{
jade_debug.unshift(new jade.DebugItem( 25, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 25, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<span" + (jade.cls([button.icon], [true])) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 26, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push(jade.escape(null == (jade_interp = " ") ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 27, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push(jade.escape(null == (jade_interp = button.caption) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 10, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 11, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<tr" + (jade.attr("data-item", item.id, true, false)) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 12, "src/themes/bootstrap/list/ListTable.jade" ));
if ( checkType)
{
jade_debug.unshift(new jade.DebugItem( 13, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 13, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<td>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 14, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<input" + (jade.attr("type", checkType, true, false)) + (jade.attr("name", checkName + "[]", true, false)) + (jade.attr("checked", item.checked, true, false)) + (jade.attr("value", item.id, true, false)) + "/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 15, "src/themes/bootstrap/list/ListTable.jade" ));
// iterate columns
;(function(){
  var $$obj = columns;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var column = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 15, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 16, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<td>" + (jade.escape(null == (jade_interp = item[column.name]) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var column = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 15, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 16, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<td>" + (jade.escape(null == (jade_interp = item[column.name]) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 17, "src/themes/bootstrap/list/ListTable.jade" ));
if ( buttons)
{
jade_debug.unshift(new jade.DebugItem( 18, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 18, "src/themes/bootstrap/list/ListTable.jade" ));
// iterate buttons
;(function(){
  var $$obj = buttons;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var button = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 18, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 19, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<td class=\"text-right\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 20, "src/themes/bootstrap/list/ListTable.jade" ));
var attributes = {class: button.class}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 21, "src/themes/bootstrap/list/ListTable.jade" ));
if ( (button.name))
{
jade_debug.unshift(new jade.DebugItem( 22, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 22, "src/themes/bootstrap/list/ListTable.jade" ));
attributes["data-"+button.name]=item.id
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 23, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<a" + (jade.attrs(jade.merge([attributes]), false)) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 24, "src/themes/bootstrap/list/ListTable.jade" ));
if ( button.icon)
{
jade_debug.unshift(new jade.DebugItem( 25, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 25, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<span" + (jade.cls([button.icon], [true])) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 26, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push(jade.escape(null == (jade_interp = " ") ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 27, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push(jade.escape(null == (jade_interp = button.caption) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var button = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 18, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 19, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<td class=\"text-right\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 20, "src/themes/bootstrap/list/ListTable.jade" ));
var attributes = {class: button.class}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 21, "src/themes/bootstrap/list/ListTable.jade" ));
if ( (button.name))
{
jade_debug.unshift(new jade.DebugItem( 22, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 22, "src/themes/bootstrap/list/ListTable.jade" ));
attributes["data-"+button.name]=item.id
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 23, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<a" + (jade.attrs(jade.merge([attributes]), false)) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 24, "src/themes/bootstrap/list/ListTable.jade" ));
if ( button.icon)
{
jade_debug.unshift(new jade.DebugItem( 25, "src/themes/bootstrap/list/ListTable.jade" ));
jade_debug.unshift(new jade.DebugItem( 25, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push("<span" + (jade.cls([button.icon], [true])) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 26, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push(jade.escape(null == (jade_interp = " ") ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 27, "src/themes/bootstrap/list/ListTable.jade" ));
buf.push(jade.escape(null == (jade_interp = button.caption) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</table>");
jade_debug.shift();
jade_debug.shift();}.call(this,"buttons" in locals_for_with?locals_for_with.buttons:typeof buttons!=="undefined"?buttons:undefined,"checkName" in locals_for_with?locals_for_with.checkName:typeof checkName!=="undefined"?checkName:undefined,"checkType" in locals_for_with?locals_for_with.checkType:typeof checkType!=="undefined"?checkType:undefined,"collection" in locals_for_with?locals_for_with.collection:typeof collection!=="undefined"?collection:undefined,"columns" in locals_for_with?locals_for_with.columns:typeof columns!=="undefined"?columns:undefined,"showColumnHeader" in locals_for_with?locals_for_with.showColumnHeader:typeof showColumnHeader!=="undefined"?showColumnHeader:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "table.table.table-hover.table-striped\n  if showColumnHeader\n    tr\n      if checkType\n        th\n      each column in columns\n        th= column.caption\n      if buttons\n        th\n  each item in collection\n    tr(data-item=item.id)\n      if checkType\n        td\n          input(type=checkType, name=checkName + \"[]\", checked=item.checked, value=item.id)\n      each column in columns\n        td= item[column.name]\n      if buttons\n        each button in buttons\n          td.text-right\n            - var attributes = {class: button.class}\n            if (button.name)\n              - attributes[\"data-\"+button.name]=item.id\n            a&attributes(attributes)\n              if button.icon\n                span(class=button.icon)\n                = \" \"\n              = button.caption\n");
}
};

this["JST"]["Popup"] = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "src/themes/bootstrap/popup/Popup.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (buttons, dialogClass, title, undefined) {
jade_debug.unshift(new jade.DebugItem( 0, "src/themes/bootstrap/popup/Popup.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "src/themes/bootstrap/popup/Popup.jade" ));
buf.push("<div class=\"modal\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "src/themes/bootstrap/popup/Popup.jade" ));
buf.push("<div" + (jade.cls(['modal-dialog',dialogClass], [null,true])) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, "src/themes/bootstrap/popup/Popup.jade" ));
buf.push("<div class=\"modal-content\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "src/themes/bootstrap/popup/Popup.jade" ));
buf.push("<div class=\"modal-header\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, "src/themes/bootstrap/popup/Popup.jade" ));
buf.push("<button type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\" class=\"close\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, "src/themes/bootstrap/popup/Popup.jade" ));
buf.push("<span aria-hidden=\"true\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, jade_debug[0].filename ));
buf.push("&times;");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 7, "src/themes/bootstrap/popup/Popup.jade" ));
buf.push("<h4 class=\"modal-title\">" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</h4>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 8, "src/themes/bootstrap/popup/Popup.jade" ));
buf.push("<div class=\"modal-body\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 9, "src/themes/bootstrap/popup/Popup.jade" ));
buf.push("<div class=\"modal-footer\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 10, "src/themes/bootstrap/popup/Popup.jade" ));
buf.push("<button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 10, jade_debug[0].filename ));
buf.push("Close");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 11, "src/themes/bootstrap/popup/Popup.jade" ));
// iterate buttons
;(function(){
  var $$obj = buttons;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var button = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 11, "src/themes/bootstrap/popup/Popup.jade" ));
jade_debug.unshift(new jade.DebugItem( 12, "src/themes/bootstrap/popup/Popup.jade" ));
buf.push("<button" + (jade.attrs(jade.merge([{"type": "button","class": (jade_interp = [null,true], jade.joinClasses(['btn',button.class].map(jade.joinClasses).map(function (cls, i) {   return jade_interp[i] ? jade.escape(cls) : cls })))},button.attributes]), false)) + ">" + (jade.escape(null == (jade_interp = button.title) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var button = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 11, "src/themes/bootstrap/popup/Popup.jade" ));
jade_debug.unshift(new jade.DebugItem( 12, "src/themes/bootstrap/popup/Popup.jade" ));
buf.push("<button" + (jade.attrs(jade.merge([{"type": "button","class": (jade_interp = [null,true], jade.joinClasses(['btn',button.class].map(jade.joinClasses).map(function (cls, i) {   return jade_interp[i] ? jade.escape(cls) : cls })))},button.attributes]), false)) + ">" + (jade.escape(null == (jade_interp = button.title) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"buttons" in locals_for_with?locals_for_with.buttons:typeof buttons!=="undefined"?buttons:undefined,"dialogClass" in locals_for_with?locals_for_with.dialogClass:typeof dialogClass!=="undefined"?dialogClass:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".modal\n  .modal-dialog(class=dialogClass)\n    .modal-content\n      .modal-header\n        button.close(type='button', data-dismiss='modal', aria-label='Close')\n          span(aria-hidden='true') &times;\n        h4.modal-title= title\n      .modal-body\n      .modal-footer\n        button.btn.btn-default(type='button', data-dismiss='modal') Close\n          each button in buttons\n            button.btn(type='button', class=button.class)&attributes(button.attributes)= button.title\n");
}
};

this["JST"]["RoleGroupEditorPopup"] = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (_, group, roles, t, undefined) {
jade_debug.unshift(new jade.DebugItem( 0, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
buf.push("<form>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
buf.push("<div class=\"form-group\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
buf.push("<label>" + (jade.escape(null == (jade_interp = t('Group name')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 4, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
buf.push("<input type=\"text\" name=\"name\"" + (jade.attr("value", group.get('name'), true, false)) + " class=\"form-control\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
buf.push("<div class=\"form-group\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
buf.push("<label>" + (jade.escape(null == (jade_interp = t('Roles')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 7, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
buf.push("<div class=\"list\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
buf.push("<table class=\"table table-striped table-hover\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 9, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
buf.push("<col width=\"40px\"/>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
buf.push("<tbody>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
// iterate roles
;(function(){
  var $$obj = roles;
  if ('number' == typeof $$obj.length) {

    for (var role = 0, $$l = $$obj.length; role < $$l; role++) {
      var childRoles = $$obj[role];

jade_debug.unshift(new jade.DebugItem( 11, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
jade_debug.unshift(new jade.DebugItem( 12, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
buf.push("<tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 13, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
var checked = _.contains(group.get('roles'), role)
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 14, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
buf.push("<td>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 15, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
buf.push("<input type=\"checkbox\" name=\"roles[]\"" + (jade.attr("value", role, true, false)) + (jade.attr("checked", checked, true, false)) + "/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 16, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
buf.push("<td>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 17, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
buf.push(jade.escape(null == (jade_interp = role) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var role in $$obj) {
      $$l++;      var childRoles = $$obj[role];

jade_debug.unshift(new jade.DebugItem( 11, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
jade_debug.unshift(new jade.DebugItem( 12, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
buf.push("<tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 13, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
var checked = _.contains(group.get('roles'), role)
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 14, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
buf.push("<td>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 15, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
buf.push("<input type=\"checkbox\" name=\"roles[]\"" + (jade.attr("value", role, true, false)) + (jade.attr("checked", checked, true, false)) + "/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 16, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
buf.push("<td>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 17, "src/themes/bootstrap/roleGroupEditorPopup/RoleGroupEditorPopup.jade" ));
buf.push(jade.escape(null == (jade_interp = role) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</tbody>");
jade_debug.shift();
jade_debug.shift();
buf.push("</table>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.shift();}.call(this,"_" in locals_for_with?locals_for_with._:typeof _!=="undefined"?_:undefined,"group" in locals_for_with?locals_for_with.group:typeof group!=="undefined"?group:undefined,"roles" in locals_for_with?locals_for_with.roles:typeof roles!=="undefined"?roles:undefined,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "form\n  .form-group\n    label= t('Group name')\n    input.form-control(type=\"text\", name=\"name\", value=group.get('name'))\n  .form-group\n    label= t('Roles')\n    .list\n      table.table.table-striped.table-hover\n        col(width=\"40px\")\n        tbody\n          each childRoles, role in roles\n            tr\n              - var checked = _.contains(group.get('roles'), role)\n              td\n                input(type=\"checkbox\", name=\"roles[]\", value=role, checked=checked)\n              td\n                = role");
}
};

this["JST"]["RoleGroupsList"] = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (groups, t, undefined) {
jade_debug.unshift(new jade.DebugItem( 0, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<table class=\"table table-striped table-hover top-space\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<th>" + (jade.escape(null == (jade_interp = t('Group')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 4, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<th class=\"hidden-xs\">" + (jade.escape(null == (jade_interp = t('Roles')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
// iterate groups
;(function(){
  var $$obj = groups;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var group = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 6, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
jade_debug.unshift(new jade.DebugItem( 7, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<tr" + (jade.attr("data-group", group.get('id'), true, false)) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<td>" + (jade.escape(null == (jade_interp = group.get('name')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 9, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<td class=\"hidden-xs\">" + (jade.escape(null == (jade_interp = group.get('roles').join(", ")) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<td>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<div class=\"btn-group\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 12, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<button data-toggle=\"dropdown\" class=\"btn btn-default btn-xs dropdown-toggle\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 13, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<span class=\"glyphicon glyphicon-cog\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 14, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("&nbsp");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 15, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<span class=\"caret\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 16, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<ul class=\"dropdown-menu dropdown-menu-right\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 17, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 18, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<a" + (jade.attr("data-id", group.get('id'), true, false)) + " class=\"edit\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 19, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push(jade.escape(null == (jade_interp = t('Edit')) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 20, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 21, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<a" + (jade.attr("data-id", group.get('id'), true, false)) + " class=\"delete\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 22, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push(jade.escape(null == (jade_interp = t('Delete')) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var group = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 6, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
jade_debug.unshift(new jade.DebugItem( 7, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<tr" + (jade.attr("data-group", group.get('id'), true, false)) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<td>" + (jade.escape(null == (jade_interp = group.get('name')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 9, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<td class=\"hidden-xs\">" + (jade.escape(null == (jade_interp = group.get('roles').join(", ")) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<td>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<div class=\"btn-group\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 12, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<button data-toggle=\"dropdown\" class=\"btn btn-default btn-xs dropdown-toggle\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 13, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<span class=\"glyphicon glyphicon-cog\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 14, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("&nbsp");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 15, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<span class=\"caret\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 16, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<ul class=\"dropdown-menu dropdown-menu-right\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 17, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 18, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<a" + (jade.attr("data-id", group.get('id'), true, false)) + " class=\"edit\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 19, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push(jade.escape(null == (jade_interp = t('Edit')) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 20, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 21, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push("<a" + (jade.attr("data-id", group.get('id'), true, false)) + " class=\"delete\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 22, "src/themes/bootstrap/roleGroupsList/RoleGroupsList.jade" ));
buf.push(jade.escape(null == (jade_interp = t('Delete')) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</table>");
jade_debug.shift();
jade_debug.shift();}.call(this,"groups" in locals_for_with?locals_for_with.groups:typeof groups!=="undefined"?groups:undefined,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "table.table.table-striped.table-hover.top-space\n  tr\n    th= t('Group')\n    th.hidden-xs= t('Roles')\n    th\n  each group in groups\n    tr(data-group=group.get('id'))\n      td= group.get('name')\n      td.hidden-xs= group.get('roles').join(\", \")\n      td\n        .btn-group\n          button.btn.btn-default.btn-xs.dropdown-toggle(data-toggle=\"dropdown\")\n            span.glyphicon.glyphicon-cog\n            |&nbsp\n            span.caret\n          ul.dropdown-menu.dropdown-menu-right\n            li\n              a.edit(data-id=group.get('id'))\n                = t('Edit')\n            li\n              a.delete(data-id=group.get('id'))\n                = t('Delete')\n");
}
};

this["JST"]["RoleGroupsPage"] = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "src/themes/bootstrap/roleGroupsPage/RoleGroupsPage.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (t) {
jade_debug.unshift(new jade.DebugItem( 0, "src/themes/bootstrap/roleGroupsPage/RoleGroupsPage.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "src/themes/bootstrap/roleGroupsPage/RoleGroupsPage.jade" ));
buf.push("<div class=\"btn-toolbar top-space\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "src/themes/bootstrap/roleGroupsPage/RoleGroupsPage.jade" ));
buf.push("<a data-new-group=\"data-new-group\" class=\"btn btn-success\">" + (jade.escape(null == (jade_interp = t('New group')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 3, "src/themes/bootstrap/roleGroupsPage/RoleGroupsPage.jade" ));
buf.push("<div class=\"block top-space\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "src/themes/bootstrap/roleGroupsPage/RoleGroupsPage.jade" ));
buf.push("<div class=\"title\">" + (jade.escape(null == (jade_interp = t('Groups')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "src/themes/bootstrap/roleGroupsPage/RoleGroupsPage.jade" ));
buf.push("<div class=\"content no-border list\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".btn-toolbar.top-space\n  a.btn.btn-success(data-new-group)= t('New group')\n.block.top-space\n  .title= t('Groups')\n  .content.no-border.list");
}
};

this["JST"]["User"] = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "src/themes/bootstrap/user/User.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (t, undefined, user) {
jade_debug.unshift(new jade.DebugItem( 0, "src/themes/bootstrap/user/User.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "src/themes/bootstrap/user/User.jade" ));
buf.push("<div class=\"block top-space\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "src/themes/bootstrap/user/User.jade" ));
buf.push("<div class=\"title row\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, "src/themes/bootstrap/user/User.jade" ));
buf.push("<div class=\"col-md-6 col-sm-6 col-xs-6\">" + (jade.escape(null == (jade_interp = t('User') + " #" + user.get('id')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 4, "src/themes/bootstrap/user/User.jade" ));
buf.push("<div class=\"col-md-6 col-sm-6 col-xs-6 text-right\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, "src/themes/bootstrap/user/User.jade" ));
if ( user.hasPermission('edit'))
{
jade_debug.unshift(new jade.DebugItem( 6, "src/themes/bootstrap/user/User.jade" ));
jade_debug.unshift(new jade.DebugItem( 6, "src/themes/bootstrap/user/User.jade" ));
buf.push("<div class=\"visible-xs\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 7, "src/themes/bootstrap/user/User.jade" ));
buf.push("<div class=\"btn-group\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, "src/themes/bootstrap/user/User.jade" ));
buf.push("<button data-toggle=\"dropdown\" class=\"btn btn-default btn-xs dropdown-toggle\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 9, "src/themes/bootstrap/user/User.jade" ));
buf.push("<span class=\"glyphicon glyphicon-cog\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "src/themes/bootstrap/user/User.jade" ));
buf.push("&nbsp");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 11, "src/themes/bootstrap/user/User.jade" ));
buf.push("<span class=\"caret\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 12, "src/themes/bootstrap/user/User.jade" ));
buf.push("<ul class=\"dropdown-menu dropdown-menu-right\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 13, "src/themes/bootstrap/user/User.jade" ));
buf.push("<li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 14, "src/themes/bootstrap/user/User.jade" ));
buf.push("<a" + (jade.attr("href", "/#users/" + user.get('id') + '/edit', true, false)) + ">" + (jade.escape(null == (jade_interp = t('Edit')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 15, "src/themes/bootstrap/user/User.jade" ));
buf.push("<li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 16, "src/themes/bootstrap/user/User.jade" ));
buf.push("<a class=\"delete\">" + (jade.escape(null == (jade_interp = t('Delete')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 17, "src/themes/bootstrap/user/User.jade" ));
buf.push("<div class=\"hidden-xs\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 18, "src/themes/bootstrap/user/User.jade" ));
buf.push("<a" + (jade.attr("href", "/#users/" + user.get('id') + "/edit", true, false)) + " class=\"btn btn-success btn-xs\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 18, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp = t('Edit')) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 19, "src/themes/bootstrap/user/User.jade" ));
buf.push("&nbsp;");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 20, "src/themes/bootstrap/user/User.jade" ));
buf.push("<a class=\"btn btn-danger btn-xs delete\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 20, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp = t('Delete')) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 21, "src/themes/bootstrap/user/User.jade" ));
buf.push("<div class=\"content\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 22, "src/themes/bootstrap/user/User.jade" ));
buf.push("<div class=\"row\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 23, "src/themes/bootstrap/user/User.jade" ));
buf.push("<div class=\"col-md-3\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 24, "src/themes/bootstrap/user/User.jade" ));
buf.push("<img" + (jade.attr("src", user.getGravatarUrl(200), true, false)) + " class=\"img-circle\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 25, "src/themes/bootstrap/user/User.jade" ));
buf.push("<div class=\"col-md-9\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 26, "src/themes/bootstrap/user/User.jade" ));
buf.push("<h1>" + (jade.escape(null == (jade_interp = user.get('name')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 27, "src/themes/bootstrap/user/User.jade" ));
buf.push("<dl class=\"dl-horizontal\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 28, "src/themes/bootstrap/user/User.jade" ));
buf.push("<dt>" + (jade.escape(null == (jade_interp = t('E-mail')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</dt>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 29, "src/themes/bootstrap/user/User.jade" ));
buf.push("<dd>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 30, "src/themes/bootstrap/user/User.jade" ));
buf.push("<a" + (jade.attr("href", user.get('email'), true, false)) + ">" + (jade.escape(null == (jade_interp = user.get('email')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</dd>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 31, "src/themes/bootstrap/user/User.jade" ));
if ( user.has('attributes'))
{
jade_debug.unshift(new jade.DebugItem( 32, "src/themes/bootstrap/user/User.jade" ));
jade_debug.unshift(new jade.DebugItem( 32, "src/themes/bootstrap/user/User.jade" ));
// iterate user.get('attributes')
;(function(){
  var $$obj = user.get('attributes');
  if ('number' == typeof $$obj.length) {

    for (var attributeId = 0, $$l = $$obj.length; attributeId < $$l; attributeId++) {
      var attribute = $$obj[attributeId];

jade_debug.unshift(new jade.DebugItem( 32, "src/themes/bootstrap/user/User.jade" ));
jade_debug.unshift(new jade.DebugItem( 33, "src/themes/bootstrap/user/User.jade" ));
if ( attribute['value']['view'])
{
jade_debug.unshift(new jade.DebugItem( 34, "src/themes/bootstrap/user/User.jade" ));
jade_debug.unshift(new jade.DebugItem( 34, "src/themes/bootstrap/user/User.jade" ));
buf.push("<dt>" + (jade.escape(null == (jade_interp = attribute['label']) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</dt>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 35, "src/themes/bootstrap/user/User.jade" ));
if ( attribute['type'] === 'string')
{
jade_debug.unshift(new jade.DebugItem( 36, "src/themes/bootstrap/user/User.jade" ));
jade_debug.unshift(new jade.DebugItem( 36, "src/themes/bootstrap/user/User.jade" ));
buf.push("<dd>" + (null == (jade_interp = attribute['value']['view']) ? "" : jade_interp));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</dd>");
jade_debug.shift();
jade_debug.shift();
}
else if ( attribute['type'] === 'entity')
{
jade_debug.unshift(new jade.DebugItem( 38, "src/themes/bootstrap/user/User.jade" ));
jade_debug.unshift(new jade.DebugItem( 38, "src/themes/bootstrap/user/User.jade" ));
buf.push("<dd>" + (null == (jade_interp = attribute['value']['view']) ? "" : jade_interp));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</dd>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var attributeId in $$obj) {
      $$l++;      var attribute = $$obj[attributeId];

jade_debug.unshift(new jade.DebugItem( 32, "src/themes/bootstrap/user/User.jade" ));
jade_debug.unshift(new jade.DebugItem( 33, "src/themes/bootstrap/user/User.jade" ));
if ( attribute['value']['view'])
{
jade_debug.unshift(new jade.DebugItem( 34, "src/themes/bootstrap/user/User.jade" ));
jade_debug.unshift(new jade.DebugItem( 34, "src/themes/bootstrap/user/User.jade" ));
buf.push("<dt>" + (jade.escape(null == (jade_interp = attribute['label']) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</dt>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 35, "src/themes/bootstrap/user/User.jade" ));
if ( attribute['type'] === 'string')
{
jade_debug.unshift(new jade.DebugItem( 36, "src/themes/bootstrap/user/User.jade" ));
jade_debug.unshift(new jade.DebugItem( 36, "src/themes/bootstrap/user/User.jade" ));
buf.push("<dd>" + (null == (jade_interp = attribute['value']['view']) ? "" : jade_interp));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</dd>");
jade_debug.shift();
jade_debug.shift();
}
else if ( attribute['type'] === 'entity')
{
jade_debug.unshift(new jade.DebugItem( 38, "src/themes/bootstrap/user/User.jade" ));
jade_debug.unshift(new jade.DebugItem( 38, "src/themes/bootstrap/user/User.jade" ));
buf.push("<dd>" + (null == (jade_interp = attribute['value']['view']) ? "" : jade_interp));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</dd>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</dl>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".block.top-space\n  .title.row\n    .col-md-6.col-sm-6.col-xs-6= t('User') + \" #\" + user.get('id')\n    .col-md-6.col-sm-6.col-xs-6.text-right\n      if user.hasPermission('edit')\n        .visible-xs\n          .btn-group\n            button.btn.btn-default.btn-xs.dropdown-toggle(data-toggle=\"dropdown\")\n              span.glyphicon.glyphicon-cog\n              |&nbsp\n              span.caret\n            ul.dropdown-menu.dropdown-menu-right\n              li\n                a(href=\"/#users/\" + user.get('id') + '/edit')= t('Edit')\n              li\n                a.delete= t('Delete')\n        .hidden-xs\n          a.btn.btn-success.btn-xs(href=\"/#users/\" + user.get('id') + \"/edit\") #{t('Edit')}\n          |&nbsp;\n          a.btn.btn-danger.btn-xs.delete #{t('Delete')}\n  .content\n    .row\n      .col-md-3\n        img.img-circle(src=user.getGravatarUrl(200))\n      .col-md-9\n        h1= user.get('name')\n        dl.dl-horizontal\n          dt= t('E-mail')\n          dd\n            a(href=user.get('email'))= user.get('email')\n          if user.has('attributes')\n            each attribute, attributeId in user.get('attributes')\n              if attribute['value']['view']\n                dt= attribute['label']\n                if attribute['type'] === 'string'\n                  dd!= attribute['value']['view']\n                else if attribute['type'] === 'entity'\n                  dd!= attribute['value']['view']");
}
};

this["JST"]["UserAttributeEditorPopup"] = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "src/themes/bootstrap/userAttributeEditorPopup/UserAttributeEditorPopup.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (attribute, schema, t, undefined) {
jade_debug.unshift(new jade.DebugItem( 0, "src/themes/bootstrap/userAttributeEditorPopup/UserAttributeEditorPopup.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "src/themes/bootstrap/userAttributeEditorPopup/UserAttributeEditorPopup.jade" ));
buf.push("<form>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "src/themes/bootstrap/userAttributeEditorPopup/UserAttributeEditorPopup.jade" ));
// iterate schema
;(function(){
  var $$obj = schema;
  if ('number' == typeof $$obj.length) {

    for (var schemaElementName = 0, $$l = $$obj.length; schemaElementName < $$l; schemaElementName++) {
      var schemaElement = $$obj[schemaElementName];

jade_debug.unshift(new jade.DebugItem( 2, "src/themes/bootstrap/userAttributeEditorPopup/UserAttributeEditorPopup.jade" ));
jade_debug.unshift(new jade.DebugItem( 3, "src/themes/bootstrap/userAttributeEditorPopup/UserAttributeEditorPopup.jade" ));
buf.push("<div class=\"form-group\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "src/themes/bootstrap/userAttributeEditorPopup/UserAttributeEditorPopup.jade" ));
buf.push("<label>" + (jade.escape(null == (jade_interp = t('user_attribute_editor_popup.field.' + schemaElementName)) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "src/themes/bootstrap/userAttributeEditorPopup/UserAttributeEditorPopup.jade" ));
buf.push("<input" + (jade.attr("type", schemaElement.type, true, false)) + (jade.attr("name", schemaElementName, true, false)) + (jade.attr("value", attribute[schemaElementName], true, false)) + " class=\"form-control\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var schemaElementName in $$obj) {
      $$l++;      var schemaElement = $$obj[schemaElementName];

jade_debug.unshift(new jade.DebugItem( 2, "src/themes/bootstrap/userAttributeEditorPopup/UserAttributeEditorPopup.jade" ));
jade_debug.unshift(new jade.DebugItem( 3, "src/themes/bootstrap/userAttributeEditorPopup/UserAttributeEditorPopup.jade" ));
buf.push("<div class=\"form-group\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "src/themes/bootstrap/userAttributeEditorPopup/UserAttributeEditorPopup.jade" ));
buf.push("<label>" + (jade.escape(null == (jade_interp = t('user_attribute_editor_popup.field.' + schemaElementName)) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "src/themes/bootstrap/userAttributeEditorPopup/UserAttributeEditorPopup.jade" ));
buf.push("<input" + (jade.attr("type", schemaElement.type, true, false)) + (jade.attr("name", schemaElementName, true, false)) + (jade.attr("value", attribute[schemaElementName], true, false)) + " class=\"form-control\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.shift();}.call(this,"attribute" in locals_for_with?locals_for_with.attribute:typeof attribute!=="undefined"?attribute:undefined,"schema" in locals_for_with?locals_for_with.schema:typeof schema!=="undefined"?schema:undefined,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "form\n  each schemaElement, schemaElementName in schema\n    .form-group\n      label= t('user_attribute_editor_popup.field.' + schemaElementName)\n      input.form-control(type=schemaElement.type, name=schemaElementName, value=attribute[schemaElementName])");
}
};

this["JST"]["UserAttributesPage"] = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "src/themes/bootstrap/userAttributesPage/UserAttributesPage.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (availableTypes, t, undefined) {
jade_debug.unshift(new jade.DebugItem( 0, "src/themes/bootstrap/userAttributesPage/UserAttributesPage.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "src/themes/bootstrap/userAttributesPage/UserAttributesPage.jade" ));
buf.push("<div class=\"btn-toolbar top-space\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "src/themes/bootstrap/userAttributesPage/UserAttributesPage.jade" ));
buf.push("<div class=\"btn-group\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, "src/themes/bootstrap/userAttributesPage/UserAttributesPage.jade" ));
buf.push("<a dropdown-toggle=\"dropdown-toggle\" data-toggle=\"dropdown\" class=\"btn btn-success dropdown-toggle\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "src/themes/bootstrap/userAttributesPage/UserAttributesPage.jade" ));
buf.push(jade.escape(null == (jade_interp = t('user_attributes_page.button.new_attribute') + " ") ? "" : jade_interp));
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "src/themes/bootstrap/userAttributesPage/UserAttributesPage.jade" ));
buf.push("<span class=\"caret\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "src/themes/bootstrap/userAttributesPage/UserAttributesPage.jade" ));
buf.push("<ul class=\"dropdown-menu\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 7, "src/themes/bootstrap/userAttributesPage/UserAttributesPage.jade" ));
// iterate availableTypes
;(function(){
  var $$obj = availableTypes;
  if ('number' == typeof $$obj.length) {

    for (var availableType = 0, $$l = $$obj.length; availableType < $$l; availableType++) {
      var availableTypeMeta = $$obj[availableType];

jade_debug.unshift(new jade.DebugItem( 7, "src/themes/bootstrap/userAttributesPage/UserAttributesPage.jade" ));
jade_debug.unshift(new jade.DebugItem( 8, "src/themes/bootstrap/userAttributesPage/UserAttributesPage.jade" ));
buf.push("<li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 9, "src/themes/bootstrap/userAttributesPage/UserAttributesPage.jade" ));
buf.push("<a href=\"#\"" + (jade.attr("data-new-attribute", availableType, true, false)) + ">" + (jade.escape(null == (jade_interp = availableTypeMeta.label) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var availableType in $$obj) {
      $$l++;      var availableTypeMeta = $$obj[availableType];

jade_debug.unshift(new jade.DebugItem( 7, "src/themes/bootstrap/userAttributesPage/UserAttributesPage.jade" ));
jade_debug.unshift(new jade.DebugItem( 8, "src/themes/bootstrap/userAttributesPage/UserAttributesPage.jade" ));
buf.push("<li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 9, "src/themes/bootstrap/userAttributesPage/UserAttributesPage.jade" ));
buf.push("<a href=\"#\"" + (jade.attr("data-new-attribute", availableType, true, false)) + ">" + (jade.escape(null == (jade_interp = availableTypeMeta.label) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "src/themes/bootstrap/userAttributesPage/UserAttributesPage.jade" ));
buf.push("<div class=\"block top-space\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, "src/themes/bootstrap/userAttributesPage/UserAttributesPage.jade" ));
buf.push("<div class=\"title\">" + (jade.escape(null == (jade_interp = t('user_attributes_page.title')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 12, "src/themes/bootstrap/userAttributesPage/UserAttributesPage.jade" ));
buf.push("<div class=\"content no-border list\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"availableTypes" in locals_for_with?locals_for_with.availableTypes:typeof availableTypes!=="undefined"?availableTypes:undefined,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".btn-toolbar.top-space\n  .btn-group\n    a.btn.btn-success.dropdown-toggle(dropdown-toggle, data-toggle=\"dropdown\")\n      = t('user_attributes_page.button.new_attribute') + \" \"\n      span.caret\n    ul.dropdown-menu\n      each availableTypeMeta, availableType in availableTypes\n        li\n          a(href=\"#\", data-new-attribute=availableType)= availableTypeMeta.label\n.block.top-space\n  .title= t('user_attributes_page.title')\n  .content.no-border.list");
}
};

this["JST"]["UserEditor"] = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "src/themes/bootstrap/userEditor/UserEditor.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (t, user) {
jade_debug.unshift(new jade.DebugItem( 0, "src/themes/bootstrap/userEditor/UserEditor.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "src/themes/bootstrap/userEditor/UserEditor.jade" ));
buf.push("<div class=\"block top-space\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "src/themes/bootstrap/userEditor/UserEditor.jade" ));
buf.push("<div class=\"title\">" + (jade.escape(null == (jade_interp = user.get('name') || t('New user')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 3, "src/themes/bootstrap/userEditor/UserEditor.jade" ));
buf.push("<div class=\"content\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".block.top-space\n  .title= user.get('name') || t('New user')\n  .content\n        ");
}
};

this["JST"]["UserGroups"] = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "src/themes/bootstrap/userGroups/UserGroups.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (groups, t, undefined, user) {
jade_debug.unshift(new jade.DebugItem( 0, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
buf.push("<form>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
buf.push("<table class=\"table table-striped table-hover top-space\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
buf.push("<col width=\"40px\"/>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 4, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
buf.push("<tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
buf.push("<th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
buf.push("<th>" + (jade.escape(null == (jade_interp = t('Group')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 7, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
buf.push("<th class=\"hidden-xs\">" + (jade.escape(null == (jade_interp = t('Roles')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 8, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
// iterate groups
;(function(){
  var $$obj = groups;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var group = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 8, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
jade_debug.unshift(new jade.DebugItem( 9, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
buf.push("<tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 10, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
buf.push("<td>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
buf.push("<input type=\"checkbox\" name=\"groups[]\"" + (jade.attr("value", group.id, true, false)) + (jade.attr("checked", user.inGroup(group.id), true, false)) + "/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 12, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
buf.push("<td>" + (jade.escape(null == (jade_interp = group.name) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 13, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
buf.push("<td class=\"hidden-xs\">" + (jade.escape(null == (jade_interp = group.roles.join(", ")) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var group = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 8, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
jade_debug.unshift(new jade.DebugItem( 9, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
buf.push("<tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 10, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
buf.push("<td>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
buf.push("<input type=\"checkbox\" name=\"groups[]\"" + (jade.attr("value", group.id, true, false)) + (jade.attr("checked", user.inGroup(group.id), true, false)) + "/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 12, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
buf.push("<td>" + (jade.escape(null == (jade_interp = group.name) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 13, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
buf.push("<td class=\"hidden-xs\">" + (jade.escape(null == (jade_interp = group.roles.join(", ")) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</table>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 14, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
buf.push("<div class=\"form-group\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 15, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
buf.push("<input type=\"submit\" value=\"Save\" class=\"btn btn-success\"/>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 16, "src/themes/bootstrap/userGroups/UserGroups.jade" ));
buf.push("<span class=\"status\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.shift();}.call(this,"groups" in locals_for_with?locals_for_with.groups:typeof groups!=="undefined"?groups:undefined,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "form\n  table.table.table-striped.table-hover.top-space\n    col(width=\"40px\")\n    tr\n      th\n      th= t('Group')\n      th.hidden-xs= t('Roles')\n    each group in groups\n      tr\n        td\n          input(type=\"checkbox\", name=\"groups[]\", value=group.id, checked=user.inGroup(group.id))\n        td= group.name\n        td.hidden-xs= group.roles.join(\", \")\n  .form-group\n    input.btn.btn-success(type=\"submit\", value=\"Save\")\n    span.status\n");
}
};

this["JST"]["UserGroupsEmptyList"] = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "src/themes/bootstrap/userGroups/UserGroupsEmptyList.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (t) {
jade_debug.unshift(new jade.DebugItem( 0, "src/themes/bootstrap/userGroups/UserGroupsEmptyList.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "src/themes/bootstrap/userGroups/UserGroupsEmptyList.jade" ));
buf.push("<div class=\"block__empty top-space bottom-space\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "src/themes/bootstrap/userGroups/UserGroupsEmptyList.jade" ));
buf.push(jade.escape(null == (jade_interp = t('user.groups.empty_list')) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".block__empty.top-space.bottom-space\n  = t('user.groups.empty_list')");
}
};

this["JST"]["UserList"] = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "src/themes/bootstrap/userList/UserList.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (t, undefined, users) {
jade_debug.unshift(new jade.DebugItem( 0, "src/themes/bootstrap/userList/UserList.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<table class=\"table table-striped table-hover\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<col width=\"60\"/>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 3, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<tbody>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "src/themes/bootstrap/userList/UserList.jade" ));
// iterate users
;(function(){
  var $$obj = users;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var user = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 4, "src/themes/bootstrap/userList/UserList.jade" ));
jade_debug.unshift(new jade.DebugItem( 5, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<tr" + (jade.attr("data-user-id", user.get('id'), true, false)) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<td>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 7, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<a" + (jade.attr("href", "/#users/" + user.get('id'), true, false)) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<img" + (jade.attr("src", user.getGravatarUrl(40), true, false)) + " class=\"img-circle\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 9, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<td>" + (jade.escape(null == (jade_interp = user.get('name')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<td>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<a" + (jade.attr("href", "mailto://" + user.get('email'), true, false)) + " target=\"_blank\">" + (jade.escape(null == (jade_interp = user.get('email')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 12, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<td class=\"text-right\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 13, "src/themes/bootstrap/userList/UserList.jade" ));
if ( user.hasPermission('edit'))
{
jade_debug.unshift(new jade.DebugItem( 14, "src/themes/bootstrap/userList/UserList.jade" ));
jade_debug.unshift(new jade.DebugItem( 14, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<div class=\"visible-xs\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 15, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<div class=\"btn-group\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 16, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<button data-toggle=\"dropdown\" class=\"btn btn-default btn-xs dropdown-toggle\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 17, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<span class=\"glyphicon glyphicon-cog\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 18, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("&nbsp");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 19, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<span class=\"caret\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 20, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<ul class=\"dropdown-menu dropdown-menu-right\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 21, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 22, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<a" + (jade.attr("href", "/#users/" + user.get('id') + '/edit', true, false)) + ">" + (jade.escape(null == (jade_interp = t('user.edit')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 23, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 24, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<a>" + (jade.escape(null == (jade_interp = t('user.list.delete')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 25, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<div class=\"hidden-xs\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 26, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<a" + (jade.attr("href", "/#users/" + user.get('id') + '/edit', true, false)) + " class=\"btn btn-default btn-xs\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 27, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<span class=\"glyphicon glyphicon-pencil\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 28, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("&nbsp;");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 29, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push(jade.escape(null == (jade_interp = t('user.list.edit')) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 30, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("&nbsp;");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 31, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<a class=\"btn btn-default btn-xs delete\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 32, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<span class=\"glyphicon glyphicon-trash\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 33, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("&nbsp;");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 34, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push(jade.escape(null == (jade_interp = t('user.list.delete')) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var user = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 4, "src/themes/bootstrap/userList/UserList.jade" ));
jade_debug.unshift(new jade.DebugItem( 5, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<tr" + (jade.attr("data-user-id", user.get('id'), true, false)) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<td>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 7, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<a" + (jade.attr("href", "/#users/" + user.get('id'), true, false)) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<img" + (jade.attr("src", user.getGravatarUrl(40), true, false)) + " class=\"img-circle\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 9, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<td>" + (jade.escape(null == (jade_interp = user.get('name')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<td>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<a" + (jade.attr("href", "mailto://" + user.get('email'), true, false)) + " target=\"_blank\">" + (jade.escape(null == (jade_interp = user.get('email')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 12, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<td class=\"text-right\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 13, "src/themes/bootstrap/userList/UserList.jade" ));
if ( user.hasPermission('edit'))
{
jade_debug.unshift(new jade.DebugItem( 14, "src/themes/bootstrap/userList/UserList.jade" ));
jade_debug.unshift(new jade.DebugItem( 14, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<div class=\"visible-xs\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 15, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<div class=\"btn-group\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 16, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<button data-toggle=\"dropdown\" class=\"btn btn-default btn-xs dropdown-toggle\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 17, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<span class=\"glyphicon glyphicon-cog\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 18, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("&nbsp");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 19, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<span class=\"caret\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 20, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<ul class=\"dropdown-menu dropdown-menu-right\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 21, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 22, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<a" + (jade.attr("href", "/#users/" + user.get('id') + '/edit', true, false)) + ">" + (jade.escape(null == (jade_interp = t('user.edit')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 23, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 24, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<a>" + (jade.escape(null == (jade_interp = t('user.list.delete')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 25, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<div class=\"hidden-xs\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 26, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<a" + (jade.attr("href", "/#users/" + user.get('id') + '/edit', true, false)) + " class=\"btn btn-default btn-xs\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 27, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<span class=\"glyphicon glyphicon-pencil\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 28, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("&nbsp;");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 29, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push(jade.escape(null == (jade_interp = t('user.list.edit')) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 30, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("&nbsp;");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 31, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<a class=\"btn btn-default btn-xs delete\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 32, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<span class=\"glyphicon glyphicon-trash\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 33, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("&nbsp;");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 34, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push(jade.escape(null == (jade_interp = t('user.list.delete')) ? "" : jade_interp));
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</tbody>");
jade_debug.shift();
jade_debug.shift();
buf.push("</table>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 36, "src/themes/bootstrap/userList/UserList.jade" ));
buf.push("<div class=\"pagination-wrap\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"users" in locals_for_with?locals_for_with.users:typeof users!=="undefined"?users:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "table.table.table-striped.table-hover\n  col(width=60)\n  tbody\n    each user in users\n      tr(data-user-id = user.get('id'))\n        td\n          a(href=\"/#users/\" + user.get('id'))\n            img.img-circle(src=user.getGravatarUrl(40))\n        td= user.get('name')\n        td\n          a(href=\"mailto://\" + user.get('email'), target=\"_blank\")= user.get('email')\n        td.text-right\n          if user.hasPermission('edit')\n            .visible-xs\n              .btn-group\n                button.btn.btn-default.btn-xs.dropdown-toggle(data-toggle=\"dropdown\")\n                  span.glyphicon.glyphicon-cog\n                  |&nbsp\n                  span.caret\n                ul.dropdown-menu.dropdown-menu-right\n                  li\n                    a(href=\"/#users/\" + user.get('id') + '/edit')= t('user.edit')\n                  li\n                    a= t('user.list.delete')\n            .hidden-xs\n              a.btn.btn-default.btn-xs(href=\"/#users/\" + user.get('id') + '/edit')\n                span.glyphicon.glyphicon-pencil\n                |&nbsp;\n                = t('user.list.edit')\n              |&nbsp;\n              a.btn.btn-default.btn-xs.delete\n                span.glyphicon.glyphicon-trash\n                |&nbsp;\n                = t('user.list.delete')\n\n.pagination-wrap\n");
}
};

this["JST"]["UserParameters"] = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "src/themes/bootstrap/userParameters/UserParameters.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (t, undefined, user) {
jade_debug.unshift(new jade.DebugItem( 0, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<form class=\"top-space\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<div class=\"form-group\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<label>" + (jade.escape(null == (jade_interp = t('Email')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 4, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<input type=\"text\" name=\"email\"" + (jade.attr("value", user.get('email'), true, false)) + " autocomplete=\"off\" class=\"form-control\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<div class=\"form-group\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<label>" + (jade.escape(null == (jade_interp = t('Password')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 7, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<input type=\"password\" name=\"password\" value=\"\" autocomplete=\"off\" class=\"form-control\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 8, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<div class=\"form-group\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 9, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<label>" + (jade.escape(null == (jade_interp = t('Name')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<input type=\"text\" name=\"name\"" + (jade.attr("value", user.get('name'), true, false)) + " class=\"form-control\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 11, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
if ( user.has('attributes'))
{
jade_debug.unshift(new jade.DebugItem( 12, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
jade_debug.unshift(new jade.DebugItem( 12, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
// iterate user.get('attributes')
;(function(){
  var $$obj = user.get('attributes');
  if ('number' == typeof $$obj.length) {

    for (var attributeId = 0, $$l = $$obj.length; attributeId < $$l; attributeId++) {
      var attribute = $$obj[attributeId];

jade_debug.unshift(new jade.DebugItem( 12, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
jade_debug.unshift(new jade.DebugItem( 13, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
if ( attribute.permissions.edit === true)
{
jade_debug.unshift(new jade.DebugItem( 14, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
jade_debug.unshift(new jade.DebugItem( 14, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<div class=\"form-group\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 15, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<label>" + (jade.escape(null == (jade_interp = attribute['label']) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 16, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
if ( attribute['type'] === "string")
{
jade_debug.unshift(new jade.DebugItem( 17, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
jade_debug.unshift(new jade.DebugItem( 17, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<input type=\"text\"" + (jade.attr("name", "attributeValues[" + attributeId + "]", true, false)) + (jade.attr("value", attribute['value']['edit'], true, false)) + " class=\"form-control\"/>");
jade_debug.shift();
jade_debug.shift();
}
else if ( attribute['type'] === "entity")
{
jade_debug.unshift(new jade.DebugItem( 19, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
jade_debug.unshift(new jade.DebugItem( 19, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<select" + (jade.attr("name", "attributeValues[" + attributeId + "]", true, false)) + " class=\"form-control\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 20, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<option value=\"\">" + (jade.escape(null == (jade_interp = t("Not selected")) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 21, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
// iterate attribute['options']
;(function(){
  var $$obj = attribute['options'];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var option = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 21, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
jade_debug.unshift(new jade.DebugItem( 22, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<option" + (jade.attr("value", option['value'], true, false)) + (jade.attr("selected", (option['value'] === attribute['value']['edit']), true, false)) + ">" + (jade.escape(null == (jade_interp = option['text']) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var option = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 21, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
jade_debug.unshift(new jade.DebugItem( 22, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<option" + (jade.attr("value", option['value'], true, false)) + (jade.attr("selected", (option['value'] === attribute['value']['edit']), true, false)) + ">" + (jade.escape(null == (jade_interp = option['text']) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</select>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var attributeId in $$obj) {
      $$l++;      var attribute = $$obj[attributeId];

jade_debug.unshift(new jade.DebugItem( 12, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
jade_debug.unshift(new jade.DebugItem( 13, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
if ( attribute.permissions.edit === true)
{
jade_debug.unshift(new jade.DebugItem( 14, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
jade_debug.unshift(new jade.DebugItem( 14, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<div class=\"form-group\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 15, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<label>" + (jade.escape(null == (jade_interp = attribute['label']) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 16, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
if ( attribute['type'] === "string")
{
jade_debug.unshift(new jade.DebugItem( 17, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
jade_debug.unshift(new jade.DebugItem( 17, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<input type=\"text\"" + (jade.attr("name", "attributeValues[" + attributeId + "]", true, false)) + (jade.attr("value", attribute['value']['edit'], true, false)) + " class=\"form-control\"/>");
jade_debug.shift();
jade_debug.shift();
}
else if ( attribute['type'] === "entity")
{
jade_debug.unshift(new jade.DebugItem( 19, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
jade_debug.unshift(new jade.DebugItem( 19, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<select" + (jade.attr("name", "attributeValues[" + attributeId + "]", true, false)) + " class=\"form-control\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 20, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<option value=\"\">" + (jade.escape(null == (jade_interp = t("Not selected")) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 21, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
// iterate attribute['options']
;(function(){
  var $$obj = attribute['options'];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var option = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 21, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
jade_debug.unshift(new jade.DebugItem( 22, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<option" + (jade.attr("value", option['value'], true, false)) + (jade.attr("selected", (option['value'] === attribute['value']['edit']), true, false)) + ">" + (jade.escape(null == (jade_interp = option['text']) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var option = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 21, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
jade_debug.unshift(new jade.DebugItem( 22, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<option" + (jade.attr("value", option['value'], true, false)) + (jade.attr("selected", (option['value'] === attribute['value']['edit']), true, false)) + ">" + (jade.escape(null == (jade_interp = option['text']) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</option>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</select>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 23, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<div class=\"form-group\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 24, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<input type=\"submit\"" + (jade.attr("value", t("Save"), true, false)) + " class=\"btn btn-success\"/>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 25, "src/themes/bootstrap/userParameters/UserParameters.jade" ));
buf.push("<span class=\"status\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.shift();}.call(this,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "form.top-space\n  .form-group\n    label= t('Email')\n    input(type=\"text\", name=\"email\", value=user.get('email'), class=\"form-control\", autocomplete=\"off\")\n  .form-group\n    label= t('Password')\n    input(type=\"password\", name=\"password\", value=\"\", class=\"form-control\", autocomplete=\"off\")\n  .form-group\n    label= t('Name')\n    input(type=\"text\", name=\"name\", value=user.get('name'), class=\"form-control\")\n  if user.has('attributes')\n    each attribute, attributeId in user.get('attributes')\n      if attribute.permissions.edit === true\n        .form-group\n          label= attribute['label']\n          if attribute['type'] === \"string\"\n            input(type=\"text\", name=\"attributeValues[\" + attributeId + \"]\", value=attribute['value']['edit'], class=\"form-control\")\n          else if attribute['type'] === \"entity\"\n            select(name=\"attributeValues[\" + attributeId + \"]\", class=\"form-control\")\n              option(value=\"\")= t(\"Not selected\")\n              each option in attribute['options']\n                option(value=option['value'], selected=(option['value'] === attribute['value']['edit']))= option['text']\n  .form-group\n    input.btn.btn-success(type=\"submit\", value=t(\"Save\"))\n    span.status");
}
};

this["JST"]["UserRoles"] = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "src/themes/bootstrap/userRoles/UserRoles.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (roles, t, undefined, user) {
jade_debug.unshift(new jade.DebugItem( 0, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
buf.push("<form>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
buf.push("<table class=\"table table-striped table-hover top-space\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
buf.push("<col width=\"40px\"/>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 4, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
buf.push("<tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
buf.push("<th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
buf.push("<th>" + (jade.escape(null == (jade_interp = t('Role')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 7, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
buf.push("<th class=\"hidden-xs\">" + (jade.escape(null == (jade_interp = t('Child roles')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 8, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
// iterate roles
;(function(){
  var $$obj = roles;
  if ('number' == typeof $$obj.length) {

    for (var parentRole = 0, $$l = $$obj.length; parentRole < $$l; parentRole++) {
      var childRoles = $$obj[parentRole];

jade_debug.unshift(new jade.DebugItem( 8, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
jade_debug.unshift(new jade.DebugItem( 9, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
buf.push("<tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 10, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
var checked = user.get('ownRoles') ? user.get('ownRoles').indexOf(parentRole) !== -1 : false
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 11, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
buf.push("<td>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 12, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
buf.push("<input type=\"checkbox\" name=\"roles[]\"" + (jade.attr("value", parentRole, true, false)) + (jade.attr("checked", checked, true, false)) + "/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 13, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
buf.push("<td>" + (jade.escape(null == (jade_interp = parentRole) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 14, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
buf.push("<td class=\"hidden-xs\">" + (jade.escape(null == (jade_interp = childRoles.length ? childRoles.join(", ") : t("No child roles")) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var parentRole in $$obj) {
      $$l++;      var childRoles = $$obj[parentRole];

jade_debug.unshift(new jade.DebugItem( 8, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
jade_debug.unshift(new jade.DebugItem( 9, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
buf.push("<tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 10, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
var checked = user.get('ownRoles') ? user.get('ownRoles').indexOf(parentRole) !== -1 : false
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 11, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
buf.push("<td>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 12, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
buf.push("<input type=\"checkbox\" name=\"roles[]\"" + (jade.attr("value", parentRole, true, false)) + (jade.attr("checked", checked, true, false)) + "/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 13, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
buf.push("<td>" + (jade.escape(null == (jade_interp = parentRole) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 14, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
buf.push("<td class=\"hidden-xs\">" + (jade.escape(null == (jade_interp = childRoles.length ? childRoles.join(", ") : t("No child roles")) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</table>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 15, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
buf.push("<div class=\"form-group\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 16, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
buf.push("<input type=\"submit\" value=\"Save\" class=\"btn btn-success\"/>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 17, "src/themes/bootstrap/userRoles/UserRoles.jade" ));
buf.push("<span class=\"status\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.shift();}.call(this,"roles" in locals_for_with?locals_for_with.roles:typeof roles!=="undefined"?roles:undefined,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "form\n  table.table.table-striped.table-hover.top-space\n    col(width=\"40px\")\n    tr\n      th\n      th= t('Role')\n      th.hidden-xs= t('Child roles')\n    each childRoles, parentRole in roles\n      tr\n        - var checked = user.get('ownRoles') ? user.get('ownRoles').indexOf(parentRole) !== -1 : false\n        td\n          input(type=\"checkbox\", name=\"roles[]\", value=parentRole, checked=checked)\n        td= parentRole\n        td.hidden-xs= childRoles.length ? childRoles.join(\", \") : t(\"No child roles\")\n  .form-group\n    input.btn.btn-success(type=\"submit\", value=\"Save\")\n    span.status\n");
}
};

this["JST"]["UsersPage"] = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "src/themes/bootstrap/usersPage/UsersPage.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (t) {
jade_debug.unshift(new jade.DebugItem( 0, "src/themes/bootstrap/usersPage/UsersPage.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "src/themes/bootstrap/usersPage/UsersPage.jade" ));
buf.push("<div class=\"btn-toolbar top-space\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "src/themes/bootstrap/usersPage/UsersPage.jade" ));
buf.push("<a href=\"/#users/new\" class=\"btn btn-success\">" + (jade.escape(null == (jade_interp = t('Add user')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 3, "src/themes/bootstrap/usersPage/UsersPage.jade" ));
buf.push("<div class=\"block top-space\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "src/themes/bootstrap/usersPage/UsersPage.jade" ));
buf.push("<div class=\"title\">" + (jade.escape(null == (jade_interp = t('Users')) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "src/themes/bootstrap/usersPage/UsersPage.jade" ));
buf.push("<div id=\"users-list\" class=\"content no-border\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".btn-toolbar.top-space\n    a.btn.btn-success(href=\"/#users/new\")= t('Add user')\n.block.top-space\n    .title= t('Users')\n    .content.no-border#users-list");
}
};
return JST;

}));
