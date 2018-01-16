module.exports = function(grunt) {

  grunt.initConfig({



    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['css', 'js', 'de/index.html', 'de/form-submit/index.html', 'form-success/index.html', 'index.html']
      }
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['css', 'js']
        }
      }
    },

    // Generate minified CSS files for stylesheet
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.css', '!*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    },

    // Generate minified JS files for JS files
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'js/app.min.js': ['src/js/app.js'],
          'js/bootstrap.min.js': ['src/js/bootstrap.min.js']
        }
      }
    },

    htmlmin: {                                     // Task
        dist: {                                      // Target
          options: {                                 // Target options
            removeComments: true,
            collapseWhitespace: true
          },
          files: {                                   // Dictionary of files
            'index.html': 'index-src.html',    // 'destination': 'source'
            'de/index.html': 'de/index-src.html',
            'form-success/index.html': 'form-success/index-src.html',
            'de/form-success/index.html': 'de/form-success/index-src.html'
          }
        }
      },

      // grunt watch plugin
      watch: {
          scripts: {
              files: ['src/js/*.js'],
              tasks: ['uglify'],
              options: {
                  spawn: false,
              },
          },
          stylesheets: {
              files: ['src/css/*.css'],
              tasks: ['cssmin'],
              options: {
                  spawn: false,
              },
          },
          markup: {
              files: ['index-src.html', 'de/index-src.html', 'form-success/index-src.html', 'de/form-success/index-src.html'],
              tasks: ['htmlmin'],
              options: {
                  spawn: false,
              },
          }
      }

  });


  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['clean', 'mkdir', 'cssmin', 'uglify', 'htmlmin', 'watch']);

};
