module.exports=function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/', src: ['**'], dest: '/'}
                ]
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
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                //beautify : true,
                mangle : true //混淆变量名
            },
            built:{
                src:["kkb.framework.js"],
                dest:"kkb.framework.min.js"
            }
        },
        jshint:{
            all:['src/*.js','src/**/*.js']
        },
        cssmin:{
            minify: {
                expand: true,
                cwd: 'dist/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/css/',
                ext: '.min.css'
            }
        },
        clean:{
            js: ["dist/js/built.js"],
            css: ["dist/css/built.css"]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-jshint');

    //grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-bower-task');

    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['concat','uglify','jshint',/*'copy','cssmin','clean'*/]);
};