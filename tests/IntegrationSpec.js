describe("UserBundle Integration Test Suite", function() {

    var UserRouter = require('../dist/user');
    var jquery = require('../node_modules/jquery/dist/jquery');
    var Backbone = require('../node_modules/backbone/backbone');
    var Marionette = require('../node_modules/backbone.marionette/lib/backbone.marionette');

    it("Ititialise user bundle", function() {
        var userRouter = new UserRouter();
        expect(userRouter.routes).not.toBeNull();
    });
});
