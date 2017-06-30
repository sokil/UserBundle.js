UserBundle Frontend
===================

[![npm](https://img.shields.io/npm/v/sokil.user-bundle.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/sokil.user-bundle)

## Single page application

If you want to modify code, you need to have `grunt` installed.

### Using with FrontendBundle

If you require to have frontent for user management, you may add dependency to [sokil/frontend-bundle](https://github.com/sokil/FrontendBundle). This bundle automate creating Backbone/Marionette SPA by starting configured app. Follow related manuals to start using it.

In the SPA twig template, add assets and configure app:

```twig
{# import library from /dist/ #}

<script type="text/javascript">
    (function() {
        window.app = new Application(_.extend({
            routers: [
                UserRouter
            ],
            serviceDefinition: [
                UserServiceDefinition
            ],
        }));
        window.app.start();
    })();
</script>
```
