UserBundle Frontend
===================

[![npm](https://img.shields.io/npm/v/sokil.user-bundle.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/sokil.user-bundle)

## Single page application

SPA is optional. If you require to have frontent for user management, you need to add dependency to [sokil/frontend-bundle](https://github.com/sokil/FrontendBundle). This bundle automate creating SPA by starting configured backbone app. Follow related manuals to start using it.

Bundle uses assetic so you need to register it in assetic config:
```yaml
assetic:
    bundles:
        - UserBundle
```

Bundle requires deploy of static respources, so call next commands on every file change:
```
npm install
grunt
```

You can automate deploy process by using [sokil/deploy-bundle](https://github.com/sokil/DeployBundle). Register tasks to build this bundle in app config:

```yaml
deploy:
  config:
    composer:
      scripts: false
    migrate: {}
    npm:
      bundles:
        FrontendBundle: true
        UserBundle: true
    bower:
      bundles:
        FrontendBundle: true
    grunt:
      parallel: true
      bundles:
        FrontendBundle: true
        UserBundle: true
    asseticDump: {}
    assetsInstall: {}
    clearCache: {}
  tasks:
    updateFront: [npm, bower]
    compileAssets: [grunt, asseticDump, assetsInstall, clearCache]
    release: [composer, migrate, updateFront, compileAssets]
```

In the SPA twig template, add assets and configure app:

```twig
{% import "macro.html.twig" as userSpa %}

{{ userSpa.jsResources() }}

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

`macro.html.twig`:

```twig
{% macro jsResources() %}
    {% javascripts
        '@UserBundle/Resources/public/js/components.jade.js'
        '@UserBundle/Resources/assets/models/*/*.js'
        '@UserBundle/Resources/assets/components/*/*.js'
    %}
    <script src="{{ asset_url }}"></script>
    {% endjavascripts %}

    {% javascripts
        "../vendor/sokil/user-bundle/src/Resources/public/js/messages.{locale}.js"
        vars=["locale"]
        output="js/user.i18n.{locale}.js"
    %}
    <script src="{{ asset_url }}"></script>
    {% endjavascripts %}

{% endmacro %}
```
