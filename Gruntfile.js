'use strict';
module.exports = function(grunt) {

    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        // watch for changes and trigger less, jshint and livereload
        watch: {
            recess: {
                files: ['assets/css/*.less'],
                tasks: ['recess']
            },
            js: {
                files: '<%= jshint.all %>',
                tasks: ['jshint', 'uglify']
            },
            livereload: {
                options: { livereload: true },
                files: ['*.css', 'assets/js/*.js', '*.html', '*.less', 'assets/img/**/*.{png,jpg,jpeg,gif,webp,svg}']
            }
        },

        // less
        recess: {
            development: {
                options: {
                	compile: true
                },
                files: {
                	"assets/css/style.css": "assets/less/main.less"
                }
            }
        },

        // javascript linting with jshint
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                "force": true
            },
            all: [
                'Gruntfile.js',
                'assets/js/source/**/*.js'
            ]
        },

        // image optimization
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 7,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'assets/img/',
                    src: '**/*',
                    dest: 'assets/img/'
                }]
            }
        },

    });

    // register task
    grunt.registerTask('default', ['watch']);


};