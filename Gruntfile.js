module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      css: {
        files: ['style/scss/*.scss', 'style/scss/**/*.scss'],
        tasks: ['clean', 'sass', 'cssmin'],
        options: {
          spawn: false
        }
      }
    },

    clean: {
      mincss: [
        'style/css/master.min.css',
        'style/css/master.css'
      ]
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'style/css/master.css': 'style/scss/master.scss'
        }
      }
    },

    cssmin: {
      minify: {
        expand: true,
        cwd: 'style/css',
        src: ['*.css', '!*.min.css'],
        dest: 'style/css',
        ext: '.min.css'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['clean', 'sass', 'cssmin']);
};
