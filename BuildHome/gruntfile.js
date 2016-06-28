module.exports = function(grunt) {

    grunt.initConfig({
        sass: {                              // Task
            dist: {                            // Target
                files: {                         // Dictionary of files
                    'css/style.css': 'css/main.scss'
                }
            }
        },
        watch: {
            sass: {
                // We watch and compile sass files as normal but don't live reload here
                files: ['css/main.scss'],
                tasks: ['sass'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass','watch']);

}
