import { extend, override } from 'flarum/extend';
import SessionDropdown from 'flarum/components/SessionDropdown';
import Button from 'flarum/components/Button';

app.initializers.add('fajuu-contactbutton', () {

  extend(SessionDropdown.prototype, 'items', function(items) {
    items.add('contactbutton', Button.component({
        children: app.forum.data.attributes['fajuu-contactbutton.buttoname'] ? app.forum.data.attributes['fajuu-contactbutton.buttoname'] : 'Contact',
        icon: app.forum.data.attributes['fajuu-contactbutton.icon'] ? app.forum.data.attributes['fajuu-contactbutton.icon'] : 'fas fa-envelope',
        onclick: function() {
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
      }),
      -1
    );
  });
});
