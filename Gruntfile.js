'use strict';
module.exports = function(grunt) {

    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        // watch for changes and trigger less, jshint and livereload
        watch: {
            recess: {
                files: ['assets/less/*.less'],
                tasks: ['recess']
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

        compress: {
          main: {
            options: {
              archive: 'archive.zip'
            },
            files: [
              {src: ['assets/**',
                     'partials/**',
                     '*.hbs',
                     '*.js',
                     '*.json',
                     '*.md'], dest: 'BiosVision/'} // includes files in path and its subdirs
            ]
          }
        },

    });

    // register task
    grunt.registerTask('default', ['watch']);


};