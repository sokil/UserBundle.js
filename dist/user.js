(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["jquery","backbone","backbone.marionette"], function (a0,b1,c2) {
      return (root['UserRouter'] = factory(a0,b1,c2));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"),require("backbone"),require("backbone.marionette"));
  } else {
    root['UserRouter'] = factory(root["jQuery"],root["Backbone"],root["Marionette"]);
  }
}(this, function ($, Backbone, Marionette) {

"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var RoleGroup = Backbone.Model.extend({});

var RoleGroupCollection = Backbone.Collection.extend({
    model: RoleGroup,
    url: "/roles/groups",
    parse: function parse(a) {
        return a.groups;
    }
});

var User = Backbone.Model.extend({
    urlRoot: "/users",
    inGroup: function inGroup(a) {
        for (var b in this.get("groups")) {
            if (this.get("groups")[b].id === a) {
                return true;
            }
        }
        return false;
    },
    getGravatarUrl: function getGravatarUrl(a, b, c) {
        if (!a) {
            a = 80;
        }
        if (!b) {
            b = "mm";
        }
        if (!c) {
            c = "g";
        }
        return this.get("gravatar") + "?s=" + a + "&d=" + b + "&r=" + c;
    },
    hasPermission: function hasPermission(a) {
        return this.get("permissions")[a] === true;
    }
}).extend(ModelFetchDefaultsTrait);

var UserCollection = Backbone.Collection.extend({
    model: User,
    url: "/users",
    usersCount: null,
    limit: 20,
    page: 1,
    fetchPage: function fetchPage() {
        return this.fetch({
            data: {
                limit: this.limit,
                offset: (this.page - 1) * this.limit
            }
        });
    },
    setLimit: function setLimit(a) {
        this.limit = a;
        return this;
    },
    setPage: function setPage(a) {
        this.page = a;
        return this;
    },
    parse: function parse(a) {
        this.usersCount = a.usersCount;
        return a.users;
    }
});

var UserAttribute = Backbone.Model.extend({
    urlRoot: "/users/attributes",
    parse: function parse(a, b) {
        if (b.collection) {
            return a;
        } else {
            return a.attribute;
        }
    }
}).extend(ModelFetchDefaultsTrait);

var UserAttributeCollection = Backbone.Collection.extend({
    model: UserAttribute,
    url: "/users/attributes",
    availableTypes: [],
    parse: function parse(a) {
        this.availableTypes = a.availableTypes || [];
        return a.attributes;
    }
});

var UserAttributeSchema = Backbone.Model.extend({
    urlRoot: "/users/attributes/schema",
    parse: function parse(a, b) {
        return a.schema;
    }
});

var ModelFetchDefaultsTrait = {
    __defaultsFetched: false,
    fetchDefaults: function fetchDefaults(a) {
        var b = this;
        a = a || {};
        if (this.defaults && !this.__defaultsFetched) {
            return $.Deferred().resolveWith(this, this.defaults).promise().done(function () {
                this.trigger("syncDefaults", this, this.defaults, a);
            });
        }
        return $.get(this.urlRoot + "/new", a.data || {}, function (c) {
            b.defaults = b.parse(c, {});
            b.attributes = _.defaults({}, b.attributes, b.defaults);
            b.trigger("syncDefaults", b, c, a);
            b.__defaultsFetched = true;
        });
    },
    fetch: function fetch(a) {
        if (this.isNew()) {
            return this.fetchDefaults(a);
        } else {
            return Backbone.Model.prototype.fetch.call(this, a);
        }
    }
};

var UserRouter = Marionette.AppRouter.extend({
    routes: {
        users: "usersAction",
        "users/new": "editUserAction",
        "users/:id/edit": "editUserAction",
        "users/:id": "userAction",
        roleGroups: "roleGroupsAction",
        usersAttributes: "usersAttributesAction"
    },
    usersAction: function usersAction() {
        app.rootView.content.show(new UsersPageView());
    },
    editUserAction: function editUserAction(a) {
        var b = new UserCollection();
        var c = b.add({});
        if (a && a !== "new") {
            c.set("id", a);
        }
        app.rootView.content.show(new UserEditorView({
            model: c
        }));
    },
    userAction: function userAction(a) {
        var b = new UserCollection();
        var c = b.add({
            id: a
        });
        app.rootView.content.show(new UserView({
            model: c
        }));
    },
    roleGroupsAction: function roleGroupsAction() {
        app.rootView.content.show(new RoleGroupsPageView());
    },
    usersAttributesAction: function usersAttributesAction() {
        app.rootView.content.show(new UserAttributesPageView());
    }
});

var UserServiceDefinition = {
    roleGroupsCollection: function roleGroupsCollection() {
        return new RoleGroupCollection();
    },
    userAttributeCollection: function userAttributeCollection() {
        return new UserAttributeCollection();
    },
    roleGroupsPromise: function roleGroupsPromise() {
        var a = this.get("roleGroupsCollection");
        return a.fetch();
    },
    rolesPromise: function rolesPromise() {
        return $.get("/roles");
    }
};

var ListView = Backbone.View.extend({
    CHECK_TYPE_CHECKBOX: "checkbox",
    CHECK_TYPE_RADIO: "radio",
    collection: new Backbone.Collection(),
    checkType: null,
    checkName: null,
    itemChecked: function itemChecked(a) {
        return a.get("checked") === true;
    },
    showColumnHeader: false,
    columns: [],
    buttons: [],
    template: "ListTable",
    initialize: function initialize(a) {
        if (a.collection instanceof Backbone.Collection) {
            this.collection = a.collection;
        }
        if (_.indexOf([this.CHECK_TYPE_CHECKBOX, this.CHECK_TYPE_RADIO], a.checkType)) {
            this.checkType = a.checkType;
            this.checkName = a.checkName || "list" + parseInt(Math.random() * 1e6);
        }
        if (typeof a.itemChecked === "function") {
            this.itemChecked = a.itemChecked;
        }
        if (a.showColumnHeader) {
            this.showColumnHeader = a.showColumnHeader;
        }
        if (a.columns) {
            this.columns = a.columns;
        }
        if (typeof this.columns === "function") {
            this.columns = this.columns.call(this);
        }
        if (!_.isArray(this.columns) || this.columns === 0) {
            throw Error("Columns must be specified");
        }
        if (a.buttons) {
            this.buttons = a.buttons;
        }
        if (typeof this.buttons === "function") {
            this.buttons = this.buttons.call(this);
        }
        if (_.isArray(this.buttons) && this.buttons.length > 0) {
            this.buttons = _.map(this.buttons, function (a) {
                a = _.extend({
                    name: null,
                    class: null,
                    icon: null,
                    caption: null,
                    click: null
                }, a);
                if (typeof a.click === "function") {
                    var b = _.isArray(a.class) ? a.class : a.class.split(" ");
                    var c = a.name ? "[data-" + a.name + "]" : "." + b.join(".");
                    var d = this;
                    this.delegate("click", c, function (b) {
                        var e = d.$(c).data(a.name);
                        return a.click.call(this, b, e, d);
                    });
                }
                return a;
            }, this);
        }
        if (a.template) {
            this.template = a.template;
        }
        this.listenTo(this.collection, "change update", this.renderAsync);
        if (this.collection.models.length === 0) {
            this.collection.fetch();
        } else {
            this.renderAsync();
        }
    },
    mapModelToItem: function mapModelToItem(a) {
        var b = _.reduce(this.columns, function (b, c, d, e) {
            if (!c.name) {
                throw Error("Column name not specified");
            }
            var f;
            if (c.value) {
                if (typeof c.value === "function") {
                    f = c.value(a);
                } else {
                    f = c.value;
                }
            } else {
                f = a.get(c.name);
            }
            b[c.name] = f;
            return b;
        }, {}, this);
        b["id"] = a.id;
        if (this.checkType) {
            b["checked"] = this.itemChecked(a);
        }
        return b;
    },
    renderAsync: function renderAsync() {
        this.$el.html(app.render(this.template, {
            columns: this.columns,
            showColumnHeader: this.showColumnHeader,
            collection: this.collection.map(this.mapModelToItem.bind(this)),
            checkType: this.checkType,
            checkName: this.checkName,
            buttons: this.buttons
        }));
    },
    add: function add(a) {
        this.collection.add(a);
        return this;
    },
    remove: function remove(a) {
        this.collection.remove(a);
        return this;
    },
    getCollection: function getCollection() {
        return this.collection;
    }
});

var PopupView = Marionette.View.extend({
    title: null,
    buttons: [],
    dialogClass: null,
    regions: {
        body: ".modal-body"
    },
    view: null,
    options: {
        destroyImmediate: true
    },
    isRendered: false,
    initialize: function initialize(a) {
        if (a.title) {
            this.title = a.title;
        }
        if (a.body) {
            this.setBody(a.body);
        }
        if (a.buttons) {
            this.buttons = a.buttons;
        }
        if (a.dialogClass) {
            this.dialogClass = a.dialogClass;
        }
        this.init(a);
    },
    init: function init() {},
    setBody: function setBody(a) {
        if (a instanceof Backbone.View) {
            this.view = a;
        } else {
            var b = Backbone.View.extend({
                render: function render() {
                    this.$el.html(a);
                    return this;
                }
            });
            this.view = new b();
        }
        if (this.isRendered) {
            this.body.show(this.view);
        }
        return this;
    },
    render: function render() {
        var a = this;
        var b = app.render("Popup", {
            title: _.result(this, "title"),
            buttons: _.map(_.result(this, "buttons"), function (a) {
                return _.extend({
                    class: null,
                    title: null,
                    attributes: {}
                }, a);
            }),
            dialogClass: this.dialogClass
        });
        this.$el.html(b);
        this.$el.find(".modal").on("hidden.bs.modal", function () {
            a.destroy();
        }).modal({});
        if (this.view) {
            this.body.show(this.view);
        }
        this.isRendered = true;
    },
    show: function show() {
        this.$el.find(".modal").modal("show");
        return this;
    },
    remove: function remove() {
        this.$el.find(".modal").modal("hide");
        return this;
    }
});

var RoleGroupEditorPopupView = PopupView.extend({
    events: {
        "click .save": "saveRoleGroupEventHandler"
    },
    buttons: [{
        class: "btn-primary save",
        title: "Save"
    }],
    roles: null,
    template: false,
    initialize: function initialize() {
        var a = this;
        app.container.get("rolesPromise").done(function (b) {
            a.roles = b.roles;
            if (a.model.isNew()) {
                a.renderAsync();
            } else {
                a.model.fetch().done(function () {
                    a.renderAsync();
                });
            }
        });
    },
    renderAsync: function renderAsync() {
        var a = this;
        var b = app.render("RoleGroupEditorPopup", {
            group: this.model,
            roles: this.roles
        });
        a.setBody(b);
        a.$el.find(".list").css({
            height: "300px",
            position: "relative",
            overflow: "scroll"
        });
    },
    saveRoleGroupEventHandler: function saveRoleGroupEventHandler() {
        var a = UrlMutator.unserializeQuery(this.$el.find("form").serialize());
        a["_token"] = app.csrf;
        this.model.save(null, {
            attrs: a
        }).done(function (a) {});
        return false;
    }
});

var RoleGroupsListView = Backbone.View.extend({
    groups: null,
    events: {
        "click .edit": "clickEditEventListener",
        "click .delete": "clickDeleteEventListener"
    },
    initialize: function initialize() {
        var a = this;
        if (!this.collection.models.length) {
            this.listenTo(this.collection, "sync", this.renderAsync);
            this.collection.fetch();
        } else {
            this.renderAsync();
        }
    },
    renderAsync: function renderAsync() {
        this.$el.html(app.render("RoleGroupsList", {
            groups: this.collection.models
        }));
    },
    clickEditEventListener: function clickEditEventListener(a) {
        var b = $(a.currentTarget);
        var c = b.data("id");
        var d = app.container.get("roleGroupsCollection");
        var e = d.get(c);
        if (e) {
            app.popup(new RoleGroupEditorPopupView({
                model: e
            }));
        } else {
            e = d.add({
                id: c
            });
            e.on("sync", function () {
                app.popup(new RoleGroupEditorPopupView({
                    model: e
                }));
            });
            e.fetch();
        }
    },
    clickDeleteEventListener: function clickDeleteEventListener(a) {
        var b = $(a.currentTarget);
        var c = b.data("id");
        var d = app.container.get("roleGroupsCollection");
        var e = d.get(c);
        e.destroy().done(function () {
            b.closest("[data-group]").remove();
        });
    }
});

var RoleGroupsPageView = Marionette.View.extend({
    regions: {
        list: ".list"
    },
    events: {
        "click [data-new-group]": "newGroupClickEventListener"
    },
    initialize: function initialize() {},
    render: function render() {
        this.$el.html(app.render("RoleGroupsPage"));
        this.list.show(new RoleGroupsListView({
            collection: app.container.get("roleGroupsCollection")
        }));
    },
    newGroupClickEventListener: function newGroupClickEventListener() {
        var a = app.container.get("roleGroupsCollection").add({});
        app.popup(new RoleGroupEditorPopupView({
            model: a
        }));
    }
});

var UserView = Backbone.View.extend({
    events: {
        "click .delete": "deleteEventListener"
    },
    initialize: function initialize() {
        this.listenTo(this.model, "sync", this.renderAsync);
        this.model.fetch();
    },
    renderAsync: function renderAsync() {
        this.$el.html(app.render("User", {
            user: this.model
        }));
    },
    deleteEventListener: function deleteEventListener(a) {
        this.model.destroy().done(function (a) {
            app.router.navigate("users", {
                trigger: true
            });
        }).fail(function (a) {
            var b = a.responseJSON;
            alert(b.message);
        });
    }
});

var UserAttributeEditorPopupView = PopupView.extend({
    events: {
        "click [data-save]": function clickDataSave() {
            this.save();
        }
    },
    init: function init(a) {
        if (!this.model) {
            this.model = new UserAttribute();
            this.model.set("type", a.attributeType);
        }
        this.listenTo(this.model, "sync", function () {
            this.remove();
            if ("function" === typeof a.onSave) {
                a.onSave.call(this, this.model);
            }
        });
        var b = new UserAttributeSchema();
        this.listenTo(b, "sync", function () {
            this.setBody(app.render("UserAttributeEditorPopup", {
                schema: b.toJSON(),
                attribute: this.model.toJSON()
            }));
        });
        b.fetch({
            data: {
                type: this.model.get("type")
            }
        });
    },
    title: function title() {
        var a = app.t("user_attribute_editor_popup.title");
        if (this.model.collection) {
            var b = this.model.get("type");
            a += " (" + this.model.collection.availableTypes[b]["label"] + ")";
        }
        return a;
    },
    buttons: function buttons() {
        return [{
            class: "btn-primary",
            title: app.t("user_attribute_editor_popup.button.save"),
            attributes: {
                "data-save": true
            }
        }];
    },
    save: function save() {
        var a = UrlMutator.unserializeQuery(this.$("form").serialize());
        this.model.save(a, {
            parse: false
        });
    }
});

var UserAttributesPageView = Marionette.View.extend({
    collection: null,
    regions: {
        list: ".list"
    },
    events: {
        "click [data-new-attribute]": "newAttributeClickListener"
    },
    initialize: function initialize() {
        this.collection = app.container.get("userAttributeCollection");
        this.listenToOnce(this.collection, "sync", this.renderPage);
        this.collection.fetch();
    },
    render: function render() {},
    renderPage: function renderPage() {
        this.$el.html(app.render("UserAttributesPage", {
            availableTypes: this.collection.availableTypes
        }));
        this.renderList();
        this.listenTo(this.collection, "update", this.renderList);
    },
    renderList: function renderList() {
        this.list.show(new UsersAttributesListView({
            collection: this.collection
        }));
    },
    newAttributeClickListener: function newAttributeClickListener(a) {
        a.preventDefault();
        var b = $(a.currentTarget);
        var c = b.data("new-attribute");
        app.popup(new UserAttributeEditorPopupView({
            attributeType: c,
            onSave: function (a) {
                this.collection.add(a);
            }.bind(this)
        }));
    }
});

var UserEditorView = Marionette.View.extend({
    regions: {
        content: ".content"
    },
    initialize: function initialize() {
        this.listenTo(this.model, "syncDefaults", function () {
            this.content.show(new UserParametersView({
                model: this.model
            }));
        });
        this.listenTo(this.model, "sync", function () {
            if (!this.model.hasPermission("edit")) {
                app.router.navigate("users/" + this.model.get("id"), {
                    trigger: true
                });
                return;
            }
            this.content.show(new TabPageView({
                tabs: {
                    parameters: {
                        caption: app.t("Parameters"),
                        view: UserParametersView,
                        model: this.model
                    },
                    roles: {
                        caption: app.t("Roles"),
                        view: UserRolesView,
                        model: this.model
                    },
                    groups: {
                        caption: app.t("Groups"),
                        view: UserGroupsView,
                        model: this.model
                    }
                }
            }));
        });
        this.model.fetch();
    },
    render: function render() {
        this.$el.html(app.render("UserEditor", {
            user: this.model
        }));
    }
});

var UserGroupsView = Backbone.View.extend({
    events: {
        "submit form": "saveUserGroups"
    },
    groups: null,
    initialize: function initialize() {
        var a = this;
        app.container.get("roleGroupsPromise").done(function (b) {
            a.groups = b.groups;
            a.renderAsync();
        });
    },
    renderAsync: function renderAsync() {
        if (this.groups.length === 0) {
            this.$el.html(app.render("UserGroupsEmptyList"));
            return;
        }
        this.$el.html(app.render("UserGroups", {
            user: this.model,
            groups: this.groups
        }));
    },
    saveUserGroups: function saveUserGroups() {
        var a = this;
        var b = UrlMutator.unserializeQuery(this.$el.find("form").serialize());
        b["_token"] = app.csrf;
        if (!b.groups) {
            b.groups = [];
        }
        this.$el.find(".status").addClass("spinner-small");
        this.model.save(null, {
            attrs: b
        }).always(function () {
            a.$el.find(".status").removeClass("spinner-small");
        }).done(function (a) {});
        return false;
    }
});

var UserListView = Backbone.View.extend({
    events: {
        "click .delete": "deleteEventListener"
    },
    initialize: function initialize(a) {
        this.listenTo(this.collection, "sync", this.renderAsync);
        this.collection.setLimit(20).setPage(1).fetchPage().fail(function (a, b) {
            app.router.navigate("", {
                trigger: true
            });
        });
    },
    renderAsync: function renderAsync() {
        var a = this;
        this.$el.html(app.render("UserList", {
            users: this.collection.models
        }));
        var b = new PaginationView({
            el: this.$el.find(".pagination-wrap"),
            itemCount: this.collection.usersCount,
            itemCountPerPage: this.collection.limit,
            currentPage: this.collection.page
        });
        b.on("change", function (b) {
            a.collection.setPage(b.page).fetchPage();
        }).render();
    },
    deleteEventListener: function deleteEventListener(a) {
        var b = this,
            c = $(a.currentTarget),
            d = c.closest("[data-user-id]").data("user-id"),
            e = this.collection.get(d);
        e.destroy().done(function (a) {
            b.renderAsync();
        }).fail(function (a) {
            var b = a.responseJSON;
            alert(b.message);
        });
    }
});

var UserParametersView = Backbone.View.extend({
    events: {
        "submit form": "saveParametersEventHandler"
    },
    render: function render() {
        this.$el.html(app.render("UserParameters", {
            user: this.model
        }));
    },
    saveParametersEventHandler: function saveParametersEventHandler(a) {
        var b = this;
        var c = UrlMutator.unserializeQuery(this.$("form").serialize());
        c["_token"] = app.csrf;
        this.$el.find(".status").addClass("spinner-small");
        this.$el.find(".help-block.error").remove();
        this.model.save(null, {
            attrs: c
        }).always(function () {
            b.$el.find(".status").removeClass("spinner-small");
        }).done(function (a) {
            app.router.navigate("users/" + b.model.get("id"), {
                trigger: true
            });
        }).fail(function (a) {
            if (a.responseJSON.validation) {
                var c;
                for (var d in a.responseJSON.validation) {
                    c = b.$el.find('INPUT[name="' + d + '"]');
                    c.closest(".form-group").addClass("has-error");
                    c.after($('<div class="help-block error">').text(a.responseJSON.validation[d]));
                    c.keydown(function () {
                        c.closest(".form-group").removeClass("has-error");
                        $(this).parent().find(".help-block.error").remove();
                    });
                }
            }
        });
        return false;
    }
});

var UserRolesView = Backbone.View.extend({
    events: {
        "submit form": "saveUserRoles"
    },
    roles: null,
    initialize: function initialize() {
        var a = this;
        app.container.get("rolesPromise").done(function (b) {
            a.roles = b.roles;
            a.renderAsync();
        });
    },
    renderAsync: function renderAsync() {
        this.$el.html(app.render("UserRoles", {
            user: this.model,
            roles: this.roles
        }));
    },
    saveUserRoles: function saveUserRoles() {
        var a = this;
        var b = UrlMutator.unserializeQuery(this.$el.find("form").serialize());
        b["_token"] = app.csrf;
        this.$el.find(".status").addClass("spinner-small");
        this.model.save(null, {
            attrs: b
        }).always(function () {
            a.$el.find(".status").removeClass("spinner-small");
        }).done(function (a) {});
        return false;
    }
});

var UsersAttributesListView = ListView.extend({
    showColumnHeader: true,
    columns: function columns() {
        return [{
            caption: app.t("user_attribute_list.name"),
            name: "name"
        }, {
            caption: app.t("user_attribute_list.description"),
            name: "description"
        }, {
            caption: app.t("user_attribute_list.type"),
            name: "type"
        }, {
            caption: app.t("user_attribute_list.printFormat"),
            name: "printFormat"
        }, {
            caption: app.t("user_attribute_list.defaultValue"),
            name: "defaultValue"
        }];
    },
    buttons: function buttons() {
        return [{
            name: "edit",
            class: "btn btn-default btn-xs",
            icon: "glyphicon glyphicon-pencil",
            caption: app.t("user_attribute_list.edit"),
            click: function click(a, b, c) {
                app.popup(new UserAttributeEditorPopupView({
                    model: c.collection.get(b)
                }));
            }
        }];
    }
});

var UsersPageView = Marionette.View.extend({
    regions: {
        list: "#users-list"
    },
    render: function render() {
        this.$el.html(app.render("UsersPage"));
        this.list.show(new UserListView({
            collection: new UserCollection()
        }));
    }
});

(function (a, b) {
    if (typeof define === "function" && define.amd) {
        define("Translate", function () {
            return a["Translate"] = b();
        });
    } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
        module.exports = b();
    } else {
        a["Translate"] = b();
    }
})(undefined, function () {
    var a = function a(_a) {
        this.messages = _a || {};
    };
    a.prototype = {
        messages: {},
        reset: function reset() {
            this.messages = {};
            return this;
        },
        setMessage: function setMessage(a, b) {
            this.messages[a] = b;
            return this;
        },
        addMessages: function addMessages(a) {
            for (var b in a) {
                this.messages[b] = a[b];
            }
            return this;
        },
        getMessage: function getMessage(a, b) {
            var c = this.messages[a] || a;
            if (b) {
                for (var d in b) {
                    c = c.replace(new RegExp("{" + d + "}", "g"), b[d]);
                }
            }
            return c;
        }
    };
    return a;
});

return UserRouter;

}));
