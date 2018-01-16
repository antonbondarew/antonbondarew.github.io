module.exports = function(grunt) {

  grunt.initConfig({



    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['dist/css', 'dist/js', 'dist/de', 'form-success', 'dist/index.html']
      }
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['dist/css', 'dist/js', 'dist/de', 'dist/form-success']
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
          dest: 'dist/css/',
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
          'dist/js/app.min.js': ['src/js/app.js'],
          'dist/js/bootstrap.min.js': ['src/js/bootstrap.min.js']
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
            'dist/index.html': 'src/index-src.html',    // 'destination': 'source'
            'dist/de/index.html': 'src/de/index.html',
            'dist/form-success/index.html': 'src/form-success/index.html'
          }
        }
      }

  });


  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.registerTask('default', ['clean', 'mkdir', 'cssmin', 'uglify', 'htmlmin']);

};
