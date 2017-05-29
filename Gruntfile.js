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

    grunt.initConfig({
        jade: {
            components: {
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
                    "build/components.jade.js": [
                        "src/components/**/*.jade"
                    ]
                }
            }
        },
        uglify: {
            dist: {
                files: (function() {
                    var files = {};
                    grunt.config('locales').forEach(function(locale) {
                        files['build/dist.' + locale + '.js'] = [
                            // templates
                            "build/components.jade.js",
                            // localization
                            'src/components/*/messages.' + locale + '.js',
                            // models
                            "src/models/**/*.js",
                            // components
                            "src/components/**/*.js",
                            // third party libraries
                            'node_modules/perfect-scrollbar/dist/js/perfect-scrollbar.jquery.min.js'
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
                files: (function() {
                    var files = {};
                    grunt.config('locales').forEach(function(locale) {
                        files['dist/user.min.' + locale + '.js'] = 'build/dist.' + locale + '.js';
                    });
                    return files;
                })()
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
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-babel');

    grunt.registerTask('build', [
        'jade',
        'uglify',
        'babel',
        'cssmin',
        'clean',
    ]);

    grunt.registerTask('listen', [
        'watch'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};