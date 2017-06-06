(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["jquery"], function (a0) {
      return (root['UserRouter'] = factory(a0));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    root['UserRouter'] = factory(root["jQuery"]);
  }
}(this, function ($) {

"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var RoleGroup = Backbone.Model.extend({}),
    RoleGroupCollection = Backbone.Collection.extend({ model: RoleGroup, url: "/roles/groups", parse: function parse(a) {
    return a.groups;
  } }),
    User = Backbone.Model.extend({ urlRoot: "/users", inGroup: function inGroup(a) {
    for (var b in this.get("groups")) {
      if (this.get("groups")[b].id === a) return !0;
    }return !1;
  }, getGravatarUrl: function getGravatarUrl(a, b, c) {
    return a || (a = 80), b || (b = "mm"), c || (c = "g"), this.get("gravatar") + "?s=" + a + "&d=" + b + "&r=" + c;
  }, hasPermission: function hasPermission(a) {
    return this.get("permissions")[a] === !0;
  } }).extend(ModelFetchDefaultsTrait),
    UserCollection = Backbone.Collection.extend({ model: User, url: "/users", usersCount: null, limit: 20, page: 1, fetchPage: function fetchPage() {
    return this.fetch({ data: { limit: this.limit, offset: (this.page - 1) * this.limit } });
  }, setLimit: function setLimit(a) {
    return this.limit = a, this;
  }, setPage: function setPage(a) {
    return this.page = a, this;
  }, parse: function parse(a) {
    return this.usersCount = a.usersCount, a.users;
  } }),
    UserAttribute = Backbone.Model.extend({ urlRoot: "/users/attributes", parse: function parse(a, b) {
    return b.collection ? a : a.attribute;
  } }).extend(ModelFetchDefaultsTrait),
    UserAttributeCollection = Backbone.Collection.extend({ model: UserAttribute, url: "/users/attributes", availableTypes: [], parse: function parse(a) {
    return this.availableTypes = a.availableTypes || [], a.attributes;
  } }),
    UserAttributeSchema = Backbone.Model.extend({ urlRoot: "/users/attributes/schema", parse: function parse(a, b) {
    return a.schema;
  } }),
    UserRouter = Marionette.AppRouter.extend({ routes: { users: "usersAction", "users/new": "editUserAction", "users/:id/edit": "editUserAction", "users/:id": "userAction", roleGroups: "roleGroupsAction", usersAttributes: "usersAttributesAction" }, usersAction: function usersAction() {
    app.rootView.content.show(new UsersPageView());
  }, editUserAction: function editUserAction(a) {
    var b = new UserCollection(),
        c = b.add({});a && "new" !== a && c.set("id", a), app.rootView.content.show(new UserEditorView({ model: c }));
  }, userAction: function userAction(a) {
    var b = new UserCollection(),
        c = b.add({ id: a });app.rootView.content.show(new UserView({ model: c }));
  }, roleGroupsAction: function roleGroupsAction() {
    app.rootView.content.show(new RoleGroupsPageView());
  }, usersAttributesAction: function usersAttributesAction() {
    app.rootView.content.show(new UserAttributesPageView());
  } }),
    UserServiceDefinition = { roleGroupsCollection: function roleGroupsCollection() {
    return new RoleGroupCollection();
  }, userAttributeCollection: function userAttributeCollection() {
    return new UserAttributeCollection();
  }, roleGroupsPromise: function roleGroupsPromise() {
    var a = this.get("roleGroupsCollection");return a.fetch();
  }, rolesPromise: function rolesPromise() {
    return $.get("/roles");
  } },
    RoleGroupEditorPopupView = PopupView.extend({ events: { "click .save": "saveRoleGroupEventHandler" }, buttons: [{ class: "btn-primary save", title: "Save" }], roles: null, template: !1, initialize: function initialize() {
    var a = this;app.container.get("rolesPromise").done(function (b) {
      a.roles = b.roles, a.model.isNew() ? a.renderAsync() : a.model.fetch().done(function () {
        a.renderAsync();
      });
    });
  }, renderAsync: function renderAsync() {
    var a = this,
        b = app.render("RoleGroupEditorPopup", { group: this.model, roles: this.roles });app.loadCss(["/bundles/user/css/perfect-scrollbar.css"]), require(["user/js/perfect-scrollbar"], function () {
      a.setBody(b), a.$el.find(".list").css({ height: "300px", position: "relative" }).perfectScrollbar();
    });
  }, saveRoleGroupEventHandler: function saveRoleGroupEventHandler() {
    var a = UrlMutator.unserializeQuery(this.$el.find("form").serialize());return a._token = app.csrf, this.model.save(null, { attrs: a }).done(function (a) {}), !1;
  } }),
    RoleGroupsListView = Backbone.View.extend({ groups: null, events: { "click .edit": "clickEditEventListener", "click .delete": "clickDeleteEventListener" }, initialize: function initialize() {
    this.collection.models.length ? this.renderAsync() : (this.listenTo(this.collection, "sync", this.renderAsync), this.collection.fetch());
  }, renderAsync: function renderAsync() {
    this.$el.html(app.render("RoleGroupsList", { groups: this.collection.models }));
  }, clickEditEventListener: function clickEditEventListener(a) {
    var b = $(a.currentTarget),
        c = b.data("id"),
        d = app.container.get("roleGroupsCollection"),
        e = d.get(c);e ? app.popup(new RoleGroupEditorPopupView({ model: e })) : (e = d.add({ id: c }), e.on("sync", function () {
      app.popup(new RoleGroupEditorPopupView({ model: e }));
    }), e.fetch());
  }, clickDeleteEventListener: function clickDeleteEventListener(a) {
    var b = $(a.currentTarget),
        c = b.data("id"),
        d = app.container.get("roleGroupsCollection"),
        e = d.get(c);e.destroy().done(function () {
      b.closest("[data-group]").remove();
    });
  } }),
    RoleGroupsPageView = Marionette.LayoutView.extend({ regions: { list: ".list" }, events: { "click [data-new-group]": "newGroupClickEventListener" }, initialize: function initialize() {}, render: function render() {
    this.$el.html(app.render("RoleGroupsPage")), this.list.show(new RoleGroupsListView({ collection: app.container.get("roleGroupsCollection") }));
  }, newGroupClickEventListener: function newGroupClickEventListener() {
    var a = app.container.get("roleGroupsCollection").add({});app.popup(new RoleGroupEditorPopupView({ model: a }));
  } }),
    UserView = Backbone.View.extend({ events: { "click .delete": "deleteEventListener" }, initialize: function initialize() {
    this.listenTo(this.model, "sync", this.renderAsync), this.model.fetch();
  }, renderAsync: function renderAsync() {
    this.$el.html(app.render("User", { user: this.model }));
  }, deleteEventListener: function deleteEventListener(a) {
    this.model.destroy().done(function (a) {
      app.router.navigate("users", { trigger: !0 });
    }).fail(function (a) {
      var b = a.responseJSON;alert(b.message);
    });
  } }),
    UserAttributeEditorPopupView = PopupView.extend({ events: { "click [data-save]": function clickDataSave() {
      this.save();
    } }, init: function init(a) {
    this.model || (this.model = new UserAttribute(), this.model.set("type", a.attributeType)), this.listenTo(this.model, "sync", function () {
      this.remove(), "function" == typeof a.onSave && a.onSave.call(this, this.model);
    });var b = new UserAttributeSchema();this.listenTo(b, "sync", function () {
      this.setBody(app.render("UserAttributeEditorPopup", { schema: b.toJSON(), attribute: this.model.toJSON() }));
    }), b.fetch({ data: { type: this.model.get("type") } });
  }, title: function title() {
    var a = app.t("user_attribute_editor_popup.title");if (this.model.collection) {
      var b = this.model.get("type");a += " (" + this.model.collection.availableTypes[b].label + ")";
    }return a;
  }, buttons: function buttons() {
    return [{ class: "btn-primary", title: app.t("user_attribute_editor_popup.button.save"), attributes: { "data-save": !0 } }];
  }, save: function save() {
    var a = UrlMutator.unserializeQuery(this.$("form").serialize());this.model.save(a, { parse: !1 });
  } }),
    UserAttributesPageView = Marionette.LayoutView.extend({ collection: null, regions: { list: ".list" }, events: { "click [data-new-attribute]": "newAttributeClickListener" }, initialize: function initialize() {
    this.collection = app.container.get("userAttributeCollection"), this.listenToOnce(this.collection, "sync", this.renderPage), this.collection.fetch();
  }, render: function render() {}, renderPage: function renderPage() {
    this.$el.html(app.render("UserAttributesPage", { availableTypes: this.collection.availableTypes })), this.renderList(), this.listenTo(this.collection, "update", this.renderList);
  }, renderList: function renderList() {
    this.list.show(new UsersAttributesListView({ collection: this.collection }));
  }, newAttributeClickListener: function newAttributeClickListener(a) {
    a.preventDefault();var b = $(a.currentTarget),
        c = b.data("new-attribute");app.popup(new UserAttributeEditorPopupView({ attributeType: c, onSave: function (a) {
        this.collection.add(a);
      }.bind(this) }));
  } }),
    UserEditorView = Marionette.LayoutView.extend({ regions: { content: ".content" }, initialize: function initialize() {
    this.listenTo(this.model, "syncDefaults", function () {
      this.content.show(new UserParametersView({ model: this.model }));
    }), this.listenTo(this.model, "sync", function () {
      return this.model.hasPermission("edit") ? void this.content.show(new TabPageView({ tabs: { parameters: { caption: app.t("Parameters"), view: UserParametersView, model: this.model }, roles: { caption: app.t("Roles"), view: UserRolesView, model: this.model }, groups: { caption: app.t("Groups"), view: UserGroupsView, model: this.model } } })) : void app.router.navigate("users/" + this.model.get("id"), { trigger: !0 });
    }), this.model.fetch();
  }, render: function render() {
    this.$el.html(app.render("UserEditor", { user: this.model }));
  } }),
    UserGroupsView = Backbone.View.extend({ events: { "submit form": "saveUserGroups" }, groups: null, initialize: function initialize() {
    var a = this;app.container.get("roleGroupsPromise").done(function (b) {
      a.groups = b.groups, a.renderAsync();
    });
  }, renderAsync: function renderAsync() {
    return 0 === this.groups.length ? void this.$el.html(app.render("UserGroupsEmptyList")) : void this.$el.html(app.render("UserGroups", { user: this.model, groups: this.groups }));
  }, saveUserGroups: function saveUserGroups() {
    var a = this,
        b = UrlMutator.unserializeQuery(this.$el.find("form").serialize());return b._token = app.csrf, b.groups || (b.groups = []), this.$el.find(".status").addClass("spinner-small"), this.model.save(null, { attrs: b }).always(function () {
      a.$el.find(".status").removeClass("spinner-small");
    }).done(function (a) {}), !1;
  } }),
    UserListView = Backbone.View.extend({ events: { "click .delete": "deleteEventListener" }, initialize: function initialize(a) {
    this.listenTo(this.collection, "sync", this.renderAsync), this.collection.setLimit(20).setPage(1).fetchPage().fail(function (a, b) {
      app.router.navigate("", { trigger: !0 });
    });
  }, renderAsync: function renderAsync() {
    var a = this;this.$el.html(app.render("UserList", { users: this.collection.models }));var b = new PaginationView({ el: this.$el.find(".pagination-wrap"), itemCount: this.collection.usersCount, itemCountPerPage: this.collection.limit, currentPage: this.collection.page });b.on("change", function (b) {
      a.collection.setPage(b.page).fetchPage();
    }).render();
  }, deleteEventListener: function deleteEventListener(a) {
    var b = this,
        c = $(a.currentTarget),
        d = c.closest("[data-user-id]").data("user-id"),
        e = this.collection.get(d);e.destroy().done(function (a) {
      b.renderAsync();
    }).fail(function (a) {
      var b = a.responseJSON;alert(b.message);
    });
  } }),
    UserParametersView = Backbone.View.extend({ events: { "submit form": "saveParametersEventHandler" }, render: function render() {
    this.$el.html(app.render("UserParameters", { user: this.model }));
  }, saveParametersEventHandler: function saveParametersEventHandler(a) {
    var b = this,
        c = UrlMutator.unserializeQuery(this.$("form").serialize());return c._token = app.csrf, this.$el.find(".status").addClass("spinner-small"), this.$el.find(".help-block.error").remove(), this.model.save(null, { attrs: c }).always(function () {
      b.$el.find(".status").removeClass("spinner-small");
    }).done(function (a) {
      app.router.navigate("users/" + b.model.get("id"), { trigger: !0 });
    }).fail(function (a) {
      if (a.responseJSON.validation) {
        var c;for (var d in a.responseJSON.validation) {
          c = b.$el.find('INPUT[name="' + d + '"]'), c.closest(".form-group").addClass("has-error"), c.after($('<div class="help-block error">').text(a.responseJSON.validation[d])), c.keydown(function () {
            c.closest(".form-group").removeClass("has-error"), $(this).parent().find(".help-block.error").remove();
          });
        }
      }
    }), !1;
  } }),
    UserRolesView = Backbone.View.extend({ events: { "submit form": "saveUserRoles" }, roles: null, initialize: function initialize() {
    var a = this;app.container.get("rolesPromise").done(function (b) {
      a.roles = b.roles, a.renderAsync();
    });
  }, renderAsync: function renderAsync() {
    this.$el.html(app.render("UserRoles", { user: this.model, roles: this.roles }));
  }, saveUserRoles: function saveUserRoles() {
    var a = this,
        b = UrlMutator.unserializeQuery(this.$el.find("form").serialize());return b._token = app.csrf, this.$el.find(".status").addClass("spinner-small"), this.model.save(null, { attrs: b }).always(function () {
      a.$el.find(".status").removeClass("spinner-small");
    }).done(function (a) {}), !1;
  } }),
    UsersAttributesListView = ListView.extend({ showColumnHeader: !0, columns: function columns() {
    return [{ caption: app.t("user_attribute_list.name"), name: "name" }, { caption: app.t("user_attribute_list.description"), name: "description" }, { caption: app.t("user_attribute_list.type"), name: "type" }, { caption: app.t("user_attribute_list.printFormat"), name: "printFormat" }, { caption: app.t("user_attribute_list.defaultValue"), name: "defaultValue" }];
  }, buttons: function buttons() {
    return [{ name: "edit", class: "btn btn-default btn-xs", icon: "glyphicon glyphicon-pencil", caption: app.t("user_attribute_list.edit"), click: function click(a, b, c) {
        app.popup(new UserAttributeEditorPopupView({ model: c.collection.get(b) }));
      } }];
  } }),
    UsersPageView = Marionette.LayoutView.extend({ regions: { list: "#users-list" }, render: function render() {
    this.$el.html(app.render("UsersPage")), this.list.show(new UserListView({ collection: new UserCollection() }));
  } });!function (a, b) {
  "function" == typeof define && define.amd ? define("Translate", function () {
    return a.Translate = b();
  }) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = b() : a.Translate = b();
}(undefined, function () {
  var a = function a(_a) {
    this.messages = _a || {};
  };return a.prototype = { messages: {}, reset: function reset() {
      return this.messages = {}, this;
    }, setMessage: function setMessage(a, b) {
      return this.messages[a] = b, this;
    }, addMessages: function addMessages(a) {
      for (var b in a) {
        this.messages[b] = a[b];
      }return this;
    }, getMessage: function getMessage(a, b) {
      var c = this.messages[a] || a;if (b) for (var d in b) {
        c = c.replace(new RegExp("{" + d + "}", "g"), b[d]);
      }return c;
    } }, a;
}), !function a(b, c, d) {
  function e(g, h) {
    if (!c[g]) {
      if (!b[g]) {
        var i = "function" == typeof require && require;if (!h && i) return i(g, !0);if (f) return f(g, !0);var j = new Error("Cannot find module '" + g + "'");throw j.code = "MODULE_NOT_FOUND", j;
      }var k = c[g] = { exports: {} };b[g][0].call(k.exports, function (a) {
        var c = b[g][1][a];return e(c ? c : a);
      }, k, k.exports, a, b, c, d);
    }return c[g].exports;
  }for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) {
    e(d[g]);
  }return e;
}({ 1: [function (a, b, c) {
    "use strict";
    function d(a) {
      a.fn.perfectScrollbar = function (a) {
        return this.each(function () {
          if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "undefined" == typeof a) {
            var b = a;f.get(this) || e.initialize(this, b);
          } else {
            var c = a;"update" === c ? e.update(this) : "destroy" === c && e.destroy(this);
          }
        });
      };
    }var e = a("../main"),
        f = a("../plugin/instances");if ("function" == typeof define && define.amd) define(["jquery"], d);else {
      var g = window.jQuery ? window.jQuery : window.$;"undefined" != typeof g && d(g);
    }b.exports = d;
  }, { "../main": 7, "../plugin/instances": 18 }], 2: [function (a, b, c) {
    "use strict";
    function d(a, b) {
      var c = a.className.split(" ");c.indexOf(b) < 0 && c.push(b), a.className = c.join(" ");
    }function e(a, b) {
      var c = a.className.split(" "),
          d = c.indexOf(b);d >= 0 && c.splice(d, 1), a.className = c.join(" ");
    }c.add = function (a, b) {
      a.classList ? a.classList.add(b) : d(a, b);
    }, c.remove = function (a, b) {
      a.classList ? a.classList.remove(b) : e(a, b);
    }, c.list = function (a) {
      return a.classList ? Array.prototype.slice.apply(a.classList) : a.className.split(" ");
    };
  }, {}], 3: [function (a, b, c) {
    "use strict";
    function d(a, b) {
      return window.getComputedStyle(a)[b];
    }function e(a, b, c) {
      return "number" == typeof c && (c = c.toString() + "px"), a.style[b] = c, a;
    }function f(a, b) {
      for (var c in b) {
        var d = b[c];"number" == typeof d && (d = d.toString() + "px"), a.style[c] = d;
      }return a;
    }var g = {};g.e = function (a, b) {
      var c = document.createElement(a);return c.className = b, c;
    }, g.appendTo = function (a, b) {
      return b.appendChild(a), a;
    }, g.css = function (a, b, c) {
      return "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) ? f(a, b) : "undefined" == typeof c ? d(a, b) : e(a, b, c);
    }, g.matches = function (a, b) {
      return "undefined" != typeof a.matches ? a.matches(b) : "undefined" != typeof a.matchesSelector ? a.matchesSelector(b) : "undefined" != typeof a.webkitMatchesSelector ? a.webkitMatchesSelector(b) : "undefined" != typeof a.mozMatchesSelector ? a.mozMatchesSelector(b) : "undefined" != typeof a.msMatchesSelector ? a.msMatchesSelector(b) : void 0;
    }, g.remove = function (a) {
      "undefined" != typeof a.remove ? a.remove() : a.parentNode && a.parentNode.removeChild(a);
    }, g.queryChildren = function (a, b) {
      return Array.prototype.filter.call(a.childNodes, function (a) {
        return g.matches(a, b);
      });
    }, b.exports = g;
  }, {}], 4: [function (a, b, c) {
    "use strict";
    var d = function d(a) {
      this.element = a, this.events = {};
    };d.prototype.bind = function (a, b) {
      "undefined" == typeof this.events[a] && (this.events[a] = []), this.events[a].push(b), this.element.addEventListener(a, b, !1);
    }, d.prototype.unbind = function (a, b) {
      var c = "undefined" != typeof b;this.events[a] = this.events[a].filter(function (d) {
        return !(!c || d === b) || (this.element.removeEventListener(a, d, !1), !1);
      }, this);
    }, d.prototype.unbindAll = function () {
      for (var a in this.events) {
        this.unbind(a);
      }
    };var e = function e() {
      this.eventElements = [];
    };e.prototype.eventElement = function (a) {
      var b = this.eventElements.filter(function (b) {
        return b.element === a;
      })[0];return "undefined" == typeof b && (b = new d(a), this.eventElements.push(b)), b;
    }, e.prototype.bind = function (a, b, c) {
      this.eventElement(a).bind(b, c);
    }, e.prototype.unbind = function (a, b, c) {
      this.eventElement(a).unbind(b, c);
    }, e.prototype.unbindAll = function () {
      for (var a = 0; a < this.eventElements.length; a++) {
        this.eventElements[a].unbindAll();
      }
    }, e.prototype.once = function (a, b, c) {
      var d = this.eventElement(a),
          e = function e(a) {
        d.unbind(b, e), c(a);
      };d.bind(b, e);
    }, b.exports = e;
  }, {}], 5: [function (a, b, c) {
    "use strict";
    b.exports = function () {
      function a() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
      }return function () {
        return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a();
      };
    }();
  }, {}], 6: [function (a, b, c) {
    "use strict";
    var d = a("./class"),
        e = a("./dom"),
        f = c.toInt = function (a) {
      return parseInt(a, 10) || 0;
    },
        g = c.clone = function (a) {
      if (a) {
        if (a.constructor === Array) return a.map(g);if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
          var b = {};for (var c in a) {
            b[c] = g(a[c]);
          }return b;
        }return a;
      }return null;
    };c.extend = function (a, b) {
      var c = g(a);for (var d in b) {
        c[d] = g(b[d]);
      }return c;
    }, c.isEditable = function (a) {
      return e.matches(a, "input,[contenteditable]") || e.matches(a, "select,[contenteditable]") || e.matches(a, "textarea,[contenteditable]") || e.matches(a, "button,[contenteditable]");
    }, c.removePsClasses = function (a) {
      for (var b = d.list(a), c = 0; c < b.length; c++) {
        var e = b[c];0 === e.indexOf("ps-") && d.remove(a, e);
      }
    }, c.outerWidth = function (a) {
      return f(e.css(a, "width")) + f(e.css(a, "paddingLeft")) + f(e.css(a, "paddingRight")) + f(e.css(a, "borderLeftWidth")) + f(e.css(a, "borderRightWidth"));
    }, c.startScrolling = function (a, b) {
      d.add(a, "ps-in-scrolling"), "undefined" != typeof b ? d.add(a, "ps-" + b) : (d.add(a, "ps-x"), d.add(a, "ps-y"));
    }, c.stopScrolling = function (a, b) {
      d.remove(a, "ps-in-scrolling"), "undefined" != typeof b ? d.remove(a, "ps-" + b) : (d.remove(a, "ps-x"), d.remove(a, "ps-y"));
    }, c.env = { isWebKit: "WebkitAppearance" in document.documentElement.style, supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, supportsIePointer: null !== window.navigator.msMaxTouchPoints };
  }, { "./class": 2, "./dom": 3 }], 7: [function (a, b, c) {
    "use strict";
    var d = a("./plugin/destroy"),
        e = a("./plugin/initialize"),
        f = a("./plugin/update");b.exports = { initialize: e, update: f, destroy: d };
  }, { "./plugin/destroy": 9, "./plugin/initialize": 17, "./plugin/update": 21 }], 8: [function (a, b, c) {
    "use strict";
    b.exports = { handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"], maxScrollbarLength: null, minScrollbarLength: null, scrollXMarginOffset: 0, scrollYMarginOffset: 0, suppressScrollX: !1, suppressScrollY: !1, swipePropagation: !0, useBothWheelAxes: !1, wheelPropagation: !1, wheelSpeed: 1, theme: "default" };
  }, {}], 9: [function (a, b, c) {
    "use strict";
    var d = a("../lib/helper"),
        e = a("../lib/dom"),
        f = a("./instances");b.exports = function (a) {
      var b = f.get(a);b && (b.event.unbindAll(), e.remove(b.scrollbarX), e.remove(b.scrollbarY), e.remove(b.scrollbarXRail), e.remove(b.scrollbarYRail), d.removePsClasses(a), f.remove(a));
    };
  }, { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18 }], 10: [function (a, b, c) {
    "use strict";
    function d(a, b) {
      function c(a) {
        return a.getBoundingClientRect();
      }var d = function d(a) {
        a.stopPropagation();
      };b.event.bind(b.scrollbarY, "click", d), b.event.bind(b.scrollbarYRail, "click", function (d) {
        var e = d.pageY - window.pageYOffset - c(b.scrollbarYRail).top,
            h = e > b.scrollbarYTop ? 1 : -1;g(a, "top", a.scrollTop + h * b.containerHeight), f(a), d.stopPropagation();
      }), b.event.bind(b.scrollbarX, "click", d), b.event.bind(b.scrollbarXRail, "click", function (d) {
        var e = d.pageX - window.pageXOffset - c(b.scrollbarXRail).left,
            h = e > b.scrollbarXLeft ? 1 : -1;g(a, "left", a.scrollLeft + h * b.containerWidth), f(a), d.stopPropagation();
      });
    }var e = a("../instances"),
        f = a("../update-geometry"),
        g = a("../update-scroll");b.exports = function (a) {
      var b = e.get(a);d(a, b);
    };
  }, { "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 11: [function (a, b, c) {
    "use strict";
    function d(a, b) {
      function c(c) {
        var e = d + c * b.railXRatio,
            g = Math.max(0, b.scrollbarXRail.getBoundingClientRect().left) + b.railXRatio * (b.railXWidth - b.scrollbarXWidth);e < 0 ? b.scrollbarXLeft = 0 : e > g ? b.scrollbarXLeft = g : b.scrollbarXLeft = e;var h = f.toInt(b.scrollbarXLeft * (b.contentWidth - b.containerWidth) / (b.containerWidth - b.railXRatio * b.scrollbarXWidth)) - b.negativeScrollAdjustment;j(a, "left", h);
      }var d = null,
          e = null,
          h = function h(b) {
        c(b.pageX - e), i(a), b.stopPropagation(), b.preventDefault();
      },
          k = function k() {
        f.stopScrolling(a, "x"), b.event.unbind(b.ownerDocument, "mousemove", h);
      };b.event.bind(b.scrollbarX, "mousedown", function (c) {
        e = c.pageX, d = f.toInt(g.css(b.scrollbarX, "left")) * b.railXRatio, f.startScrolling(a, "x"), b.event.bind(b.ownerDocument, "mousemove", h), b.event.once(b.ownerDocument, "mouseup", k), c.stopPropagation(), c.preventDefault();
      });
    }function e(a, b) {
      function c(c) {
        var e = d + c * b.railYRatio,
            g = Math.max(0, b.scrollbarYRail.getBoundingClientRect().top) + b.railYRatio * (b.railYHeight - b.scrollbarYHeight);e < 0 ? b.scrollbarYTop = 0 : e > g ? b.scrollbarYTop = g : b.scrollbarYTop = e;var h = f.toInt(b.scrollbarYTop * (b.contentHeight - b.containerHeight) / (b.containerHeight - b.railYRatio * b.scrollbarYHeight));j(a, "top", h);
      }var d = null,
          e = null,
          h = function h(b) {
        c(b.pageY - e), i(a), b.stopPropagation(), b.preventDefault();
      },
          k = function k() {
        f.stopScrolling(a, "y"), b.event.unbind(b.ownerDocument, "mousemove", h);
      };b.event.bind(b.scrollbarY, "mousedown", function (c) {
        e = c.pageY, d = f.toInt(g.css(b.scrollbarY, "top")) * b.railYRatio, f.startScrolling(a, "y"), b.event.bind(b.ownerDocument, "mousemove", h), b.event.once(b.ownerDocument, "mouseup", k), c.stopPropagation(), c.preventDefault();
      });
    }var f = a("../../lib/helper"),
        g = a("../../lib/dom"),
        h = a("../instances"),
        i = a("../update-geometry"),
        j = a("../update-scroll");b.exports = function (a) {
      var b = h.get(a);d(a, b), e(a, b);
    };
  }, { "../../lib/dom": 3, "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 12: [function (a, b, c) {
    "use strict";
    function d(a, b) {
      function c(c, d) {
        var e = a.scrollTop;if (0 === c) {
          if (!b.scrollbarYActive) return !1;if (0 === e && d > 0 || e >= b.contentHeight - b.containerHeight && d < 0) return !b.settings.wheelPropagation;
        }var f = a.scrollLeft;if (0 === d) {
          if (!b.scrollbarXActive) return !1;if (0 === f && c < 0 || f >= b.contentWidth - b.containerWidth && c > 0) return !b.settings.wheelPropagation;
        }return !0;
      }var d = !1;b.event.bind(a, "mouseenter", function () {
        d = !0;
      }), b.event.bind(a, "mouseleave", function () {
        d = !1;
      });var g = !1;b.event.bind(b.ownerDocument, "keydown", function (j) {
        if (!(j.isDefaultPrevented && j.isDefaultPrevented() || j.defaultPrevented)) {
          var k = f.matches(b.scrollbarX, ":focus") || f.matches(b.scrollbarY, ":focus");if (d || k) {
            var l = document.activeElement ? document.activeElement : b.ownerDocument.activeElement;if (l) {
              if ("IFRAME" === l.tagName) l = l.contentDocument.activeElement;else for (; l.shadowRoot;) {
                l = l.shadowRoot.activeElement;
              }if (e.isEditable(l)) return;
            }var m = 0,
                n = 0;switch (j.which) {case 37:
                m = j.metaKey ? -b.contentWidth : j.altKey ? -b.containerWidth : -30;break;case 38:
                n = j.metaKey ? b.contentHeight : j.altKey ? b.containerHeight : 30;break;case 39:
                m = j.metaKey ? b.contentWidth : j.altKey ? b.containerWidth : 30;break;case 40:
                n = j.metaKey ? -b.contentHeight : j.altKey ? -b.containerHeight : -30;break;case 33:
                n = 90;break;case 32:
                n = j.shiftKey ? 90 : -90;break;case 34:
                n = -90;break;case 35:
                n = j.ctrlKey ? -b.contentHeight : -b.containerHeight;break;case 36:
                n = j.ctrlKey ? a.scrollTop : b.containerHeight;break;default:
                return;}i(a, "top", a.scrollTop - n), i(a, "left", a.scrollLeft + m), h(a), g = c(m, n), g && j.preventDefault();
          }
        }
      });
    }var e = a("../../lib/helper"),
        f = a("../../lib/dom"),
        g = a("../instances"),
        h = a("../update-geometry"),
        i = a("../update-scroll");b.exports = function (a) {
      var b = g.get(a);d(a, b);
    };
  }, { "../../lib/dom": 3, "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 13: [function (a, b, c) {
    "use strict";
    function d(a, b) {
      function c(c, d) {
        var e = a.scrollTop;if (0 === c) {
          if (!b.scrollbarYActive) return !1;if (0 === e && d > 0 || e >= b.contentHeight - b.containerHeight && d < 0) return !b.settings.wheelPropagation;
        }var f = a.scrollLeft;if (0 === d) {
          if (!b.scrollbarXActive) return !1;if (0 === f && c < 0 || f >= b.contentWidth - b.containerWidth && c > 0) return !b.settings.wheelPropagation;
        }return !0;
      }function d(a) {
        var b = a.deltaX,
            c = -1 * a.deltaY;return "undefined" != typeof b && "undefined" != typeof c || (b = -1 * a.wheelDeltaX / 6, c = a.wheelDeltaY / 6), a.deltaMode && 1 === a.deltaMode && (b *= 10, c *= 10), b !== b && c !== c && (b = 0, c = a.wheelDelta), a.shiftKey ? [-c, -b] : [b, c];
      }function e(b, c) {
        var d = a.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");if (d) {
          if (!window.getComputedStyle(d).overflow.match(/(scroll|auto)/)) return !1;var e = d.scrollHeight - d.clientHeight;if (e > 0 && !(0 === d.scrollTop && c > 0 || d.scrollTop === e && c < 0)) return !0;var f = d.scrollLeft - d.clientWidth;if (f > 0 && !(0 === d.scrollLeft && b < 0 || d.scrollLeft === f && b > 0)) return !0;
        }return !1;
      }function h(h) {
        var j = d(h),
            k = j[0],
            l = j[1];e(k, l) || (i = !1, b.settings.useBothWheelAxes ? b.scrollbarYActive && !b.scrollbarXActive ? (l ? g(a, "top", a.scrollTop - l * b.settings.wheelSpeed) : g(a, "top", a.scrollTop + k * b.settings.wheelSpeed), i = !0) : b.scrollbarXActive && !b.scrollbarYActive && (k ? g(a, "left", a.scrollLeft + k * b.settings.wheelSpeed) : g(a, "left", a.scrollLeft - l * b.settings.wheelSpeed), i = !0) : (g(a, "top", a.scrollTop - l * b.settings.wheelSpeed), g(a, "left", a.scrollLeft + k * b.settings.wheelSpeed)), f(a), i = i || c(k, l), i && (h.stopPropagation(), h.preventDefault()));
      }var i = !1;"undefined" != typeof window.onwheel ? b.event.bind(a, "wheel", h) : "undefined" != typeof window.onmousewheel && b.event.bind(a, "mousewheel", h);
    }var e = a("../instances"),
        f = a("../update-geometry"),
        g = a("../update-scroll");b.exports = function (a) {
      var b = e.get(a);d(a, b);
    };
  }, { "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 14: [function (a, b, c) {
    "use strict";
    function d(a, b) {
      b.event.bind(a, "scroll", function () {
        f(a);
      });
    }var e = a("../instances"),
        f = a("../update-geometry");b.exports = function (a) {
      var b = e.get(a);d(a, b);
    };
  }, { "../instances": 18, "../update-geometry": 19 }], 15: [function (a, b, c) {
    "use strict";
    function d(a, b) {
      function c() {
        var a = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";return 0 === a.toString().length ? null : a.getRangeAt(0).commonAncestorContainer;
      }function d() {
        j || (j = setInterval(function () {
          return f.get(a) ? (h(a, "top", a.scrollTop + k.top), h(a, "left", a.scrollLeft + k.left), void g(a)) : void clearInterval(j);
        }, 50));
      }function i() {
        j && (clearInterval(j), j = null), e.stopScrolling(a);
      }var j = null,
          k = { top: 0, left: 0 },
          l = !1;b.event.bind(b.ownerDocument, "selectionchange", function () {
        a.contains(c()) ? l = !0 : (l = !1, i());
      }), b.event.bind(window, "mouseup", function () {
        l && (l = !1, i());
      }), b.event.bind(window, "keyup", function () {
        l && (l = !1, i());
      }), b.event.bind(window, "mousemove", function (b) {
        if (l) {
          var c = { x: b.pageX, y: b.pageY },
              f = { left: a.offsetLeft, right: a.offsetLeft + a.offsetWidth, top: a.offsetTop, bottom: a.offsetTop + a.offsetHeight };c.x < f.left + 3 ? (k.left = -5, e.startScrolling(a, "x")) : c.x > f.right - 3 ? (k.left = 5, e.startScrolling(a, "x")) : k.left = 0, c.y < f.top + 3 ? (f.top + 3 - c.y < 5 ? k.top = -5 : k.top = -20, e.startScrolling(a, "y")) : c.y > f.bottom - 3 ? (c.y - f.bottom + 3 < 5 ? k.top = 5 : k.top = 20, e.startScrolling(a, "y")) : k.top = 0, 0 === k.top && 0 === k.left ? i() : d();
        }
      });
    }var e = a("../../lib/helper"),
        f = a("../instances"),
        g = a("../update-geometry"),
        h = a("../update-scroll");b.exports = function (a) {
      var b = f.get(a);d(a, b);
    };
  }, { "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 16: [function (a, b, c) {
    "use strict";
    function d(a, b, c, d) {
      function e(c, d) {
        var e = a.scrollTop,
            f = a.scrollLeft,
            g = Math.abs(c),
            h = Math.abs(d);if (h > g) {
          if (d < 0 && e === b.contentHeight - b.containerHeight || d > 0 && 0 === e) return !b.settings.swipePropagation;
        } else if (g > h && (c < 0 && f === b.contentWidth - b.containerWidth || c > 0 && 0 === f)) return !b.settings.swipePropagation;return !0;
      }function i(b, c) {
        h(a, "top", a.scrollTop - c), h(a, "left", a.scrollLeft - b), g(a);
      }function j() {
        u = !0;
      }function k() {
        u = !1;
      }function l(a) {
        return a.targetTouches ? a.targetTouches[0] : a;
      }function m(a) {
        return !(!a.targetTouches || 1 !== a.targetTouches.length) || !(!a.pointerType || "mouse" === a.pointerType || a.pointerType === a.MSPOINTER_TYPE_MOUSE);
      }function n(a) {
        if (m(a)) {
          v = !0;var b = l(a);q.pageX = b.pageX, q.pageY = b.pageY, r = new Date().getTime(), null !== t && clearInterval(t), a.stopPropagation();
        }
      }function o(a) {
        if (!v && b.settings.swipePropagation && n(a), !u && v && m(a)) {
          var c = l(a),
              d = { pageX: c.pageX, pageY: c.pageY },
              f = d.pageX - q.pageX,
              g = d.pageY - q.pageY;i(f, g), q = d;var h = new Date().getTime(),
              j = h - r;j > 0 && (s.x = f / j, s.y = g / j, r = h), e(f, g) && (a.stopPropagation(), a.preventDefault());
        }
      }function p() {
        !u && v && (v = !1, clearInterval(t), t = setInterval(function () {
          return f.get(a) && (s.x || s.y) ? Math.abs(s.x) < .01 && Math.abs(s.y) < .01 ? void clearInterval(t) : (i(30 * s.x, 30 * s.y), s.x *= .8, void (s.y *= .8)) : void clearInterval(t);
        }, 10));
      }var q = {},
          r = 0,
          s = {},
          t = null,
          u = !1,
          v = !1;c && (b.event.bind(window, "touchstart", j), b.event.bind(window, "touchend", k), b.event.bind(a, "touchstart", n), b.event.bind(a, "touchmove", o), b.event.bind(a, "touchend", p)), d && (window.PointerEvent ? (b.event.bind(window, "pointerdown", j), b.event.bind(window, "pointerup", k), b.event.bind(a, "pointerdown", n), b.event.bind(a, "pointermove", o), b.event.bind(a, "pointerup", p)) : window.MSPointerEvent && (b.event.bind(window, "MSPointerDown", j), b.event.bind(window, "MSPointerUp", k), b.event.bind(a, "MSPointerDown", n), b.event.bind(a, "MSPointerMove", o), b.event.bind(a, "MSPointerUp", p)));
    }var e = a("../../lib/helper"),
        f = a("../instances"),
        g = a("../update-geometry"),
        h = a("../update-scroll");b.exports = function (a) {
      if (e.env.supportsTouch || e.env.supportsIePointer) {
        var b = f.get(a);d(a, b, e.env.supportsTouch, e.env.supportsIePointer);
      }
    };
  }, { "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 17: [function (a, b, c) {
    "use strict";
    var d = a("../lib/helper"),
        e = a("../lib/class"),
        f = a("./instances"),
        g = a("./update-geometry"),
        h = { "click-rail": a("./handler/click-rail"), "drag-scrollbar": a("./handler/drag-scrollbar"), keyboard: a("./handler/keyboard"), wheel: a("./handler/mouse-wheel"), touch: a("./handler/touch"), selection: a("./handler/selection") },
        i = a("./handler/native-scroll");b.exports = function (a, b) {
      b = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) ? b : {}, e.add(a, "ps-container");var c = f.add(a);c.settings = d.extend(c.settings, b), e.add(a, "ps-theme-" + c.settings.theme), c.settings.handlers.forEach(function (b) {
        h[b](a);
      }), i(a), g(a);
    };
  }, { "../lib/class": 2, "../lib/helper": 6, "./handler/click-rail": 10, "./handler/drag-scrollbar": 11, "./handler/keyboard": 12, "./handler/mouse-wheel": 13, "./handler/native-scroll": 14, "./handler/selection": 15, "./handler/touch": 16, "./instances": 18, "./update-geometry": 19 }], 18: [function (a, b, c) {
    "use strict";
    function d(a) {
      function b() {
        i.add(a, "ps-focus");
      }function c() {
        i.remove(a, "ps-focus");
      }var d = this;d.settings = h.clone(j), d.containerWidth = null, d.containerHeight = null, d.contentWidth = null, d.contentHeight = null, d.isRtl = "rtl" === k.css(a, "direction"), d.isNegativeScroll = function () {
        var b = a.scrollLeft,
            c = null;return a.scrollLeft = -1, c = a.scrollLeft < 0, a.scrollLeft = b, c;
      }(), d.negativeScrollAdjustment = d.isNegativeScroll ? a.scrollWidth - a.clientWidth : 0, d.event = new l(), d.ownerDocument = a.ownerDocument || document, d.scrollbarXRail = k.appendTo(k.e("div", "ps-scrollbar-x-rail"), a), d.scrollbarX = k.appendTo(k.e("div", "ps-scrollbar-x"), d.scrollbarXRail), d.scrollbarX.setAttribute("tabindex", 0), d.event.bind(d.scrollbarX, "focus", b), d.event.bind(d.scrollbarX, "blur", c), d.scrollbarXActive = null, d.scrollbarXWidth = null, d.scrollbarXLeft = null, d.scrollbarXBottom = h.toInt(k.css(d.scrollbarXRail, "bottom")), d.isScrollbarXUsingBottom = d.scrollbarXBottom === d.scrollbarXBottom, d.scrollbarXTop = d.isScrollbarXUsingBottom ? null : h.toInt(k.css(d.scrollbarXRail, "top")), d.railBorderXWidth = h.toInt(k.css(d.scrollbarXRail, "borderLeftWidth")) + h.toInt(k.css(d.scrollbarXRail, "borderRightWidth")), k.css(d.scrollbarXRail, "display", "block"), d.railXMarginWidth = h.toInt(k.css(d.scrollbarXRail, "marginLeft")) + h.toInt(k.css(d.scrollbarXRail, "marginRight")), k.css(d.scrollbarXRail, "display", ""), d.railXWidth = null, d.railXRatio = null, d.scrollbarYRail = k.appendTo(k.e("div", "ps-scrollbar-y-rail"), a), d.scrollbarY = k.appendTo(k.e("div", "ps-scrollbar-y"), d.scrollbarYRail), d.scrollbarY.setAttribute("tabindex", 0), d.event.bind(d.scrollbarY, "focus", b), d.event.bind(d.scrollbarY, "blur", c), d.scrollbarYActive = null, d.scrollbarYHeight = null, d.scrollbarYTop = null, d.scrollbarYRight = h.toInt(k.css(d.scrollbarYRail, "right")), d.isScrollbarYUsingRight = d.scrollbarYRight === d.scrollbarYRight, d.scrollbarYLeft = d.isScrollbarYUsingRight ? null : h.toInt(k.css(d.scrollbarYRail, "left")), d.scrollbarYOuterWidth = d.isRtl ? h.outerWidth(d.scrollbarY) : null, d.railBorderYWidth = h.toInt(k.css(d.scrollbarYRail, "borderTopWidth")) + h.toInt(k.css(d.scrollbarYRail, "borderBottomWidth")), k.css(d.scrollbarYRail, "display", "block"), d.railYMarginHeight = h.toInt(k.css(d.scrollbarYRail, "marginTop")) + h.toInt(k.css(d.scrollbarYRail, "marginBottom")), k.css(d.scrollbarYRail, "display", ""), d.railYHeight = null, d.railYRatio = null;
    }function e(a) {
      return a.getAttribute("data-ps-id");
    }function f(a, b) {
      a.setAttribute("data-ps-id", b);
    }function g(a) {
      a.removeAttribute("data-ps-id");
    }var h = a("../lib/helper"),
        i = a("../lib/class"),
        j = a("./default-setting"),
        k = a("../lib/dom"),
        l = a("../lib/event-manager"),
        m = a("../lib/guid"),
        n = {};c.add = function (a) {
      var b = m();return f(a, b), n[b] = new d(a), n[b];
    }, c.remove = function (a) {
      delete n[e(a)], g(a);
    }, c.get = function (a) {
      return n[e(a)];
    };
  }, { "../lib/class": 2, "../lib/dom": 3, "../lib/event-manager": 4, "../lib/guid": 5, "../lib/helper": 6, "./default-setting": 8 }], 19: [function (a, b, c) {
    "use strict";
    function d(a, b) {
      return a.settings.minScrollbarLength && (b = Math.max(b, a.settings.minScrollbarLength)), a.settings.maxScrollbarLength && (b = Math.min(b, a.settings.maxScrollbarLength)), b;
    }function e(a, b) {
      var c = { width: b.railXWidth };b.isRtl ? c.left = b.negativeScrollAdjustment + a.scrollLeft + b.containerWidth - b.contentWidth : c.left = a.scrollLeft, b.isScrollbarXUsingBottom ? c.bottom = b.scrollbarXBottom - a.scrollTop : c.top = b.scrollbarXTop + a.scrollTop, h.css(b.scrollbarXRail, c);var d = { top: a.scrollTop, height: b.railYHeight };b.isScrollbarYUsingRight ? b.isRtl ? d.right = b.contentWidth - (b.negativeScrollAdjustment + a.scrollLeft) - b.scrollbarYRight - b.scrollbarYOuterWidth : d.right = b.scrollbarYRight - a.scrollLeft : b.isRtl ? d.left = b.negativeScrollAdjustment + a.scrollLeft + 2 * b.containerWidth - b.contentWidth - b.scrollbarYLeft - b.scrollbarYOuterWidth : d.left = b.scrollbarYLeft + a.scrollLeft, h.css(b.scrollbarYRail, d), h.css(b.scrollbarX, { left: b.scrollbarXLeft, width: b.scrollbarXWidth - b.railBorderXWidth }), h.css(b.scrollbarY, { top: b.scrollbarYTop, height: b.scrollbarYHeight - b.railBorderYWidth });
    }var f = a("../lib/helper"),
        g = a("../lib/class"),
        h = a("../lib/dom"),
        i = a("./instances"),
        j = a("./update-scroll");b.exports = function (a) {
      var b = i.get(a);b.containerWidth = a.clientWidth, b.containerHeight = a.clientHeight, b.contentWidth = a.scrollWidth, b.contentHeight = a.scrollHeight;var c;a.contains(b.scrollbarXRail) || (c = h.queryChildren(a, ".ps-scrollbar-x-rail"), c.length > 0 && c.forEach(function (a) {
        h.remove(a);
      }), h.appendTo(b.scrollbarXRail, a)), a.contains(b.scrollbarYRail) || (c = h.queryChildren(a, ".ps-scrollbar-y-rail"), c.length > 0 && c.forEach(function (a) {
        h.remove(a);
      }), h.appendTo(b.scrollbarYRail, a)), !b.settings.suppressScrollX && b.containerWidth + b.settings.scrollXMarginOffset < b.contentWidth ? (b.scrollbarXActive = !0, b.railXWidth = b.containerWidth - b.railXMarginWidth, b.railXRatio = b.containerWidth / b.railXWidth, b.scrollbarXWidth = d(b, f.toInt(b.railXWidth * b.containerWidth / b.contentWidth)), b.scrollbarXLeft = f.toInt((b.negativeScrollAdjustment + a.scrollLeft) * (b.railXWidth - b.scrollbarXWidth) / (b.contentWidth - b.containerWidth))) : b.scrollbarXActive = !1, !b.settings.suppressScrollY && b.containerHeight + b.settings.scrollYMarginOffset < b.contentHeight ? (b.scrollbarYActive = !0, b.railYHeight = b.containerHeight - b.railYMarginHeight, b.railYRatio = b.containerHeight / b.railYHeight, b.scrollbarYHeight = d(b, f.toInt(b.railYHeight * b.containerHeight / b.contentHeight)), b.scrollbarYTop = f.toInt(a.scrollTop * (b.railYHeight - b.scrollbarYHeight) / (b.contentHeight - b.containerHeight))) : b.scrollbarYActive = !1, b.scrollbarXLeft >= b.railXWidth - b.scrollbarXWidth && (b.scrollbarXLeft = b.railXWidth - b.scrollbarXWidth), b.scrollbarYTop >= b.railYHeight - b.scrollbarYHeight && (b.scrollbarYTop = b.railYHeight - b.scrollbarYHeight), e(a, b), b.scrollbarXActive ? g.add(a, "ps-active-x") : (g.remove(a, "ps-active-x"), b.scrollbarXWidth = 0, b.scrollbarXLeft = 0, j(a, "left", 0)), b.scrollbarYActive ? g.add(a, "ps-active-y") : (g.remove(a, "ps-active-y"), b.scrollbarYHeight = 0, b.scrollbarYTop = 0, j(a, "top", 0));
    };
  }, { "../lib/class": 2, "../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-scroll": 20 }], 20: [function (a, b, c) {
    "use strict";
    var d,
        e,
        f = a("./instances"),
        g = function g(a) {
      var b = document.createEvent("Event");return b.initEvent(a, !0, !0), b;
    };b.exports = function (a, b, c) {
      if ("undefined" == typeof a) throw "You must provide an element to the update-scroll function";if ("undefined" == typeof b) throw "You must provide an axis to the update-scroll function";if ("undefined" == typeof c) throw "You must provide a value to the update-scroll function";"top" === b && c <= 0 && (a.scrollTop = c = 0, a.dispatchEvent(g("ps-y-reach-start"))), "left" === b && c <= 0 && (a.scrollLeft = c = 0, a.dispatchEvent(g("ps-x-reach-start")));var h = f.get(a);"top" === b && c >= h.contentHeight - h.containerHeight && (c = h.contentHeight - h.containerHeight, c - a.scrollTop <= 1 ? c = a.scrollTop : a.scrollTop = c, a.dispatchEvent(g("ps-y-reach-end"))), "left" === b && c >= h.contentWidth - h.containerWidth && (c = h.contentWidth - h.containerWidth, c - a.scrollLeft <= 1 ? c = a.scrollLeft : a.scrollLeft = c, a.dispatchEvent(g("ps-x-reach-end"))), d || (d = a.scrollTop), e || (e = a.scrollLeft), "top" === b && c < d && a.dispatchEvent(g("ps-scroll-up")), "top" === b && c > d && a.dispatchEvent(g("ps-scroll-down")), "left" === b && c < e && a.dispatchEvent(g("ps-scroll-left")), "left" === b && c > e && a.dispatchEvent(g("ps-scroll-right")), "top" === b && (a.scrollTop = d = c, a.dispatchEvent(g("ps-scroll-y"))), "left" === b && (a.scrollLeft = e = c, a.dispatchEvent(g("ps-scroll-x")));
    };
  }, { "./instances": 18 }], 21: [function (a, b, c) {
    "use strict";
    var d = a("../lib/helper"),
        e = a("../lib/dom"),
        f = a("./instances"),
        g = a("./update-geometry"),
        h = a("./update-scroll");b.exports = function (a) {
      var b = f.get(a);b && (b.negativeScrollAdjustment = b.isNegativeScroll ? a.scrollWidth - a.clientWidth : 0, e.css(b.scrollbarXRail, "display", "block"), e.css(b.scrollbarYRail, "display", "block"), b.railXMarginWidth = d.toInt(e.css(b.scrollbarXRail, "marginLeft")) + d.toInt(e.css(b.scrollbarXRail, "marginRight")), b.railYMarginHeight = d.toInt(e.css(b.scrollbarYRail, "marginTop")) + d.toInt(e.css(b.scrollbarYRail, "marginBottom")), e.css(b.scrollbarXRail, "display", "none"), e.css(b.scrollbarYRail, "display", "none"), g(a), h(a, "top", a.scrollTop), h(a, "left", a.scrollLeft), e.css(b.scrollbarXRail, "display", ""), e.css(b.scrollbarYRail, "display", ""));
    };
  }, { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-geometry": 19, "./update-scroll": 20 }] }, {}, [1]);

return UserRouter;

}));
