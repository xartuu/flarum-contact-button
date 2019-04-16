import SettingsModal from 'flarum/components/SettingsModal';
import Switch from 'flarum/components/Switch';

export default class ContactButtonSettingsModal extends SettingsModal {
  className() {
    return 'ContactButtonSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('fajuu-contactbutton.admin.settings.title');
  }

  form() {
    return [
      m('.Form-group', [
        m('label', app.translator.trans('fajuu-contactbutton.admin.settings.label')),
        m('input.FormControl', {
          bidi: this.setting('fajuu-contactbutton.label'),
          placeholder: 'Contact',
          type: 'text',
        }),
        m('label', app.translator.trans('fajuu-contactbutton.admin.settings.url')),
        m('input.FormControl', {
          bidi: this.setting('fajuu-contactbutton.url'),
          placeholder: 'email@example.com / https://example.com',
          type: 'text',
        }),
        m('label', app.translator.trans('fajuu-contactbutton.admin.settings.icon')),
        m('input.FormControl', {
          bidi: this.setting('fajuu-contactbutton.icon'),
          placeholder: 'fas fa-envelope',
          type: 'text',
        }),
      ]),
      m('.Form-group', [
        m('label', Switch.component({
          state: this.setting('fajuu-contactbutton.newtab')() > 0,
          onchange: this.setting('fajuu-contactbutton.newtab'),
          children: app.translator.trans('fajuu-contactbutton.admin.settings.newtab'),
        })),
      ])
    ];
  }
}
