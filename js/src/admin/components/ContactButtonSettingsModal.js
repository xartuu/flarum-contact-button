import SettingsModal from 'flarum/components/SettingsModal';

export default class ContactButtonSettingsModal extends SettingsModal {
  className() {
    return 'Modal--small';
  }

  title() {
    return app.translator.trans('fajuu-contactbutton.admin.settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('fajuu-contactbutton.admin.settings.buttoname')}</label>
        <input className="FormControl" type="text" placeholder: "Contact" bidi={this.setting('fajuu-contactbutton.buttoname')}></input>
        <label style="padding-top: 20px;">{app.translator.trans('fajuu-contactbutton.admin.settings.adress')}</label>
        <input className="FormControl" type="text" placeholder: "email@example.com / https://example.com" bidi={this.setting('fajuu-contactbutton.adress')}></input>
        <label style="padding-top: 20px;">{app.translator.trans('fajuu-contactbutton.admin.settings.icon')}</label>
        <input className="FormControl" type="text" placeholder: "fas fa-envelope" bidi={this.setting('fajuu-contactbutton.icon')}></input>
        <div style="padding-top: 20px;">
          <input type="checkbox" bidi={this.setting('fajuu-contactbutton.newtab')}></input>
          <strong>{app.translator.trans("fajuu-contactbutton.admin.settings.newtab")}</strong>
        </div>
      </div>
    ];
  }
}