module.exports = function(grunt) {

  // Loading all grunt modules base on package.json
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    clean: {
      build: ["build"]
    },
    less: {
      main: {
        files: {
          "app/css/main.css": "app/css/main.less"
        }
      }
    },
    watch: {
        css: {
            files: 'app/css/**/*.less',
            tasks: ['less'],
            options: {
                nospawn: true
            }
        }
    },
    browserSync: {
        dev: {
            bsFiles: {
                src: [
                    "app/css/*.css",
                    "*.html"
                ]
            },
            options: {
                server: {
                    baseDir: "app/"
                },
                watchTask: true // < VERY important
            }
        }
    },
    concat: {
      dist: {
        src: [
          'assets/js/lib/jquery-1.10.2.min.js', // All JS in the libs folder
          'assets/js/bootstrap.min.js',  // This specific file
          'assets/js/lib/jquery-ui.js', // All JS in the libs folder
          'assets/js/lib/jquery.nanoscroller.min.js', // All JS in the libs folder
          'assets/js/lib/jquery.emojiarea.js', // All JS in the libs folder
          'assets/js/lib/emojis.js', // All JS in the libs folder
          'assets/js/graphs/jquery.flot.js', // All JS in the libs folder
          'assets/js/graphs/jquery.flot.tooltip.js', // All JS in the libs folder
          'assets/js/graphs/jquery.flot.pie.js', // All JS in the libs folder
          'assets/js/graphs/query.flot.categories.js', // All JS in the libs folder
          'assets/js/graphs/jquery.flot.resize.js', // All JS in the libs folder
          'assets/js/jspatch.js',  // This specific file
          'assets/js/main.js'  // This specific file
        ],
        dest: 'build/js/production.js'
      }
    },
    uglify: {
      build: {
        src: 'build/js/production.js',
        dest: 'build/js/production.min.js'
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'app/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'build/images/'
        }]
      }
    },
    autoprefixer: {
      // prefix the specified file
      single_file: {
        options: {
          // Target-specific options go here.
        },
        src: 'app/css/main.css',
        dest: 'build/css/main.css'
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'build/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'build/css/',
        ext: '.min.css'
      }
    }
  });

  // Dev tasks
  //grunt.registerTask('default', ['less']);
  grunt.registerTask('default', ['browserSync','watch:css']);

  // Prod tasks
  grunt.registerTask('production', ['concat','uglify','imagemin','autoprefixer','cssmin']);

  // Cleaning build
  grunt.registerTask('clean-build', ['clean:build']);

};
