module.exports = function(grunt) {
    grunt.initConfig({
        publicPath: 'frontend',

        sass: {
            dist: {
                options: {
                    compress: false,
                    sourcemap: 'none',
                    noCache: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= publicPath %>/styles/scss',
                    src: ['*.scss'],
                    dest: 'dist',
                    ext: '.css'
                }]
            }
        },

        browserify: {
            dist: {
                options: {
                    transform: [
                        ["babelify", {
                            loose: "all"
                        }]
                    ]
                },
                files: {
                    // if the source file has an extension of es6 then
                    // we change the name of the source file accordingly.
                    // The result file's extension is always .js
                    "./dist/module.js": ["./frontend/scripts/*.js"]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks("grunt-browserify");

    grunt.registerTask('default', ['sass']);
    grunt.registerTask("build", ["browserify"]);
};