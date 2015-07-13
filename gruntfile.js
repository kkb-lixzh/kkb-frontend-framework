module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            install: {
                options: {
                    targetDir: 'lib',
                    layout: 'byComponent',
                    install: true,
                    verbose: false,
                    cleanTargetDir: false,
                    cleanBowerDir: false,
                    bowerOptions: {}
                }
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**'],
                    dest: '/'
                }]
            }
        },
        concat: {
            options: {
                separator: '\n'
            },
            dist_js: {
                src: [
                    'src/**/*.js',
                ],
                dest: 'kkb.framework.js'
            },
            built_js: {
                src: [
                    'src/**/*.js',
                ],
                dest: 'dist/js/kkb.framework.js'
            },
            lib_js: {
                src: ['lib/**/*.js'],
                dest: "dist/js/lib.js"
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                //beautify : true,
                mangle: true //混淆变量名
            },
            built: {
                src: ["kkb.framework.js"],
                dest: "kkb.framework.min.js"
            }
        },
        jshint: {
            all: ['src/*.js', 'src/**/*.js']
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'dist/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/css/',
                ext: '.min.css'
            }
        },
        clean: {
            js: ["dist/js/built.js"],
            css: ["dist/css/built.css"]
        },
        karma: {
            unit: {
                configFile: "tests/karma.conf.js",
                options: {
                    files: ['**/*.js'],
                    browsers: ['Chrome'/*, 'Firefox', 'Safari', 'IE', 'Opera'*/]
                }
            },
            options: {
                files: ['dist/js/lib.js','test/**/*.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-jshint');

    //grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-bower-task');

    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['bower', 'concat', 'uglify', 'karma', /*'copy','cssmin', 'jshint','clean'*/ ]);
};