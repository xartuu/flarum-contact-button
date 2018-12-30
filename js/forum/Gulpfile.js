var gulp = require('flarum-gulp');

gulp({
    modules: {
        'fajuu/contactbutton': [
            '../lib/**/*.js',
            'src/**/*.js'
        ]
    }
});
