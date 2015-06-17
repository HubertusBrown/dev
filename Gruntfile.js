'use strict';

var port = 4000;

module.exports = function (grunt) {


    grunt.initConfig({

        karma: {
            dev: {
                configFile: 'karma.conf.js',
                browsers: ['Chrome'],
                singleRun: false
            },
            ci: {
                configFile: 'karma.conf.js',
                browsers: ['PhantomJS'],
                reporters: ['html'],
                autoWatch: false
            }
        },

        express: {
            dev: {
                options: {
                    script: 'app.js'
                }
            }
        },

        open: {
            dev: {
                url: 'http://localhost:' + port
            }
        },

        watch: {
            client: {
                files: [
                    'client/**/*.{js,json,html,css}'

                ],
                options: {
                    livereload: true
                }
            }
        }


    });

    grunt.registerTask('keepAlive', 'Keep Grunt running', function () {
        this.async();
    });

    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('start', "Starts server and client", ['express:dev', 'open:dev', 'watch:client']);
    grunt.registerTask('server', "Starts server", ['express:dev', 'keepAlive']);

};