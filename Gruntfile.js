'use strict';

var _ = require('underscore');

module.exports = function (grunt) {
    'use strict';

    var env = grunt.option('env') || 'prod';
    grunt.config('env', env);
    console.log('Environment: ' + env);

    grunt.config('locales', [
        'uk',
        'en',
        'ru'
    ]);

    // umd messages
    var umdMessagesConfig = (function() {
        var config = [];
        grunt.config('locales').forEach(function(locale) {
            config['messages_' + locale] = {
                src: 'build/messages.' + locale + '.js',
                dest: 'dist/user.messages.' + locale + '.js',
                objectToExport: ['i18n'],
                deps: {
                    default: ['Translate'],
                    amd: ['Translate'],
                    cjs: ['Translate'],
                    global: ['Translate']
                }
            };
        });

        return config;
    })();

    grunt.initConfig({
        jade: {
            bootstrap: {
                options: {
                    client: true,
                    debug: grunt.config('env') !== 'prod',
                    compileDebug: grunt.config('env') !== 'prod',
                    processName: function(filename) {
                        var path = require('path');
                        return path.basename(filename, '.jade');
                    }
                },
                files: {
                    "build/theme.bootstrap.js": [
                        "src/themes/bootstrap/**/*.jade"
                    ]
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'build/views.js': [
                        // models
                        "src/models/**/*.js",
                        // components
                        "src/app/**/*.js",
                        // components
                        "src/components/**/*.js",
                        // third party libraries
                        'node_modules/key-translate/src/Translate.js',
                        'node_modules/perfect-scrollbar/dist/js/perfect-scrollbar.jquery.min.js'
                    ]
                }
            },
            l10n: {
                files: (function() {
                    var files = {};
                    grunt.config('locales').forEach(function(locale) {
                        files['build/messages.' + locale + '.js'] = [
                            'src/messages/loader.js',
                            'src/messages/*/messages.' + locale + '.js'
                        ];
                    });
                    return files;
                })()
            }
        },
        babel: {
            options: {
                sourceMap: false,
                presets: ['es2015']
            },
            dist: {
                files: {
                    'build/views.babel.js': 'build/views.js'
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'dist/user.min.css': [
                        // third party libraries
                        'node_modules/perfect-scrollbar/dist/css/perfect-scrollbar.min.css'
                    ]
                }
            }
        },
        umd: _.extend(
            {
                views: {
                    src: 'build/views.babel.js',
                    dest: 'dist/user.js',
                    objectToExport: ['UserRouter', 'UserServiceDefinition'],
                    deps: {
                        default: ['$'],
                        amd: ['jquery'],
                        cjs: ['jquery'],
                        global: ['jQuery']
                    }
                },
                themes: {
                    src: 'build/theme.bootstrap.js',
                    dest: 'dist/user.theme.bootstrap.js',
                    objectToExport: ['JST']
                }
            },
            umdMessagesConfig
        ),
        clean: [
            'build'
        ],
        watch: {
            project: {
                files: [
                    'src/**/*'
                ],
                tasks: ['build'],
                options: {}
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-umd');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-babel');

    grunt.registerTask('build', [
        'jade',
        'uglify',
        'babel',
        'cssmin',
        'umd',
        'clean'
    ]);

    grunt.registerTask('listen', [
        'watch'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};