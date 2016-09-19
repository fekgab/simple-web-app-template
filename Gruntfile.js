module.exports = function(grunt) {
    grunt.initConfig({
        publicPath: 'public',

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
                    dest: '<%= publicPath %>/styles',
                    ext: '.css'
                }]
            }
        },

        browserify: {
            dist: {
                options: {
                    transform: [
                        ['babelify', { loose: 'all'}]
                    ]
                },
                files: {
                    '<%= publicPath %>/dist/modules.js' : ['<%= publicPath %>/scripts/*.js', '<%= publicPath %>/scripts/*.es6']
                },
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['sass', 'browserify']);
    grunt.registerTask('build', ['browserify']);
};