// Karma configuration

module.exports = function(config) {
  config.set({

    basePath:'',

    // list of files / patterns to load in the browser
    files: [
      {pattern: 'bower_components/**/*.js', included: false},
      {pattern: 'src/**/*.js', included: false},
      {pattern: 'tests/*Spec.js', included:false},
      {pattern: 'tests/**/*Spec.js', included: false}
    ],

    //list of files
    exclude:[
    ],

    reporters: ['progress'],

    port: 9876,

    colors: true,

    autoWatch: true,

    browsers: ['chrome'],

    captureTimeout: 50000,

    singleRun: false

  });
};
