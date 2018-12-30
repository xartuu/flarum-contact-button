'use strict';

System.register('fajuu/contactbutton/main', ['flarum/extend', 'flarum/components/SessionDropdown', 'flarum/components/Button'], function (_export, _context) {
  "use strict";

  var extend, override, SessionDropdown, Button;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
      override = _flarumExtend.override;
    }, function (_flarumComponentsSessionDropdown) {
      SessionDropdown = _flarumComponentsSessionDropdown.default;
    }, function (_flarumComponentsButton) {
      Button = _flarumComponentsButton.default;
    }],
    execute: function () {

      app.initializers.add('fajuu-contactbutton', function () {
		  
		  extend(SessionDropdown.prototype, 'items', function (items) {
          items.add('contactbutton', Button.component({
            children: app.forum.data.attributes['fajuu-contactbutton.buttoname'] ? app.forum.data.attributes['fajuu-contactbutton.buttoname'] : 'Contact',
            icon: app.forum.data.attributes['fajuu-contactbutton.icon'] ? app.forum.data.attributes['fajuu-contactbutton.icon'] : 'envelope',
            onclick: function onclick() {
              if(app.forum.data.attributes['fajuu-contactbutton.adress']) {
                if(app.forum.data.attributes['fajuu-contactbutton.adress'].indexOf("@") != -1) {
                  window.open('mailto:' + app.forum.data.attributes['fajuu-contactbutton.adress'], '_blank');
                } else {
                  if(app.forum.data.attributes['fajuu-contactbutton.newtab'] == 1) {
                    window.open(app.forum.data.attributes['fajuu-contactbutton.adress'], '_blank');
                  } else {
                    window.location.href = app.forum.data.attributes['fajuu-contactbutton.adress'];
                  }
                }
              } else {
                window.open('https://fajuu.pl', '_blank');
              }
            }
          }), -1);
        });
      });
    }
  };
});