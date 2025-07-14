module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
        files: {
          'dist/style.css': 'src/style.less'  
        }
      }
    },

    uglify: {
      build: {
        files: {
          'dist/app.min.js': ['src/app.js']  
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['less', 'uglify']);
};