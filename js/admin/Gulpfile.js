var flarum = require('flarum-gulp');

flarum({
  modules: {
    'fajuu/contactbutton': [
      'src/**/*.js'
    ]
  }
});