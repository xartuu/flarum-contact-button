import { extend } from 'flarum/extend';
import SessionDropdown from 'flarum/components/SessionDropdown';
import Button from 'flarum/components/Button';

app.initializers.add('fajuu-contactbutton', function() {

  extend(SessionDropdown.prototype, 'items', function(items) {
    items.add('contactbutton', Button.component({
        children: app.forum.data.attributes['fajuu-contactbutton.label'] ? app.forum.data.attributes['fajuu-contactbutton.label'] : 'Contact',
        icon: app.forum.data.attributes['fajuu-contactbutton.icon'] ? app.forum.data.attributes['fajuu-contactbutton.icon'] : 'fas fa-envelope',
        onclick: function() {
          if(app.forum.data.attributes['fajuu-contactbutton.url']) {
            if(app.forum.data.attributes['fajuu-contactbutton.url'].indexOf("@") != -1) {
              window.open('mailto:' + app.forum.data.attributes['fajuu-contactbutton.url'], '_blank');
            } else {
              if(app.forum.data.attributes['fajuu-contactbutton.newtab'] == 1) {
                window.open(app.forum.data.attributes['fajuu-contactbutton.url'], '_blank');
              } else {
                window.location.href = app.forum.data.attributes['fajuu-contactbutton.url'];
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
