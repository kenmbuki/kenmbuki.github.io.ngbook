'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      karma:
      {
          unit:
          {
              configFile: 'karma.conf.js'
          }
      }
  });

  // Load plugins.
  grunt.loadNpmTasks('grunt-karma');

  // Default task.
  grunt.registerTask('default', ['karma']);

};
