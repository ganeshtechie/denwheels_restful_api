module.exports = function(grunt) {

    grunt.initConfig({

        watch: {
            express: {
                files: ['*.js'],
                tasks: ['express:dev'],
                options: {
                    spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded 
                }
            }
        },

        express: {
            dev: {
                options: {
                    script: 'server.js'
                }
            }
        }

    });


    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-express-server");

    grunt.registerTask("default", ["watch:express"]);

};
