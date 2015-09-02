module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'src/js/**/*.js'
                ],
                dest: 'public/js/production.js',
            }
        },

        uglify: {
            build: {
                src: 'public/js/production.js',
                dest: 'public/js/production.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/public'
                }]
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'public/css/theme.css': 'src/scss/theme.scss'
                }
            } 
        },

        jshint: {
            all: ['gruntfile.js', 'src/js/portfolio/*.js']
        },

        scsslint: {
            allFiles: ['src/scss/*.scss', 'src/scss/portfolio/*.scss']
        },

        watch: {
            scripts: {
                files: ['src/js/portfolio/*.js'],
                tasks: ['jshint', 'concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['src/scss/*.scss', 'src/scss/portfolio/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },
            html:{
                files: ['*.html'],
                tasks: [],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['imagemin', 'watch']);
};
