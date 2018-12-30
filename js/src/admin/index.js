import { extend } from 'flarum/extend';
import ContactButtonSettingsModal from './components/ContactButtonSettingsModal';

app.initializers.add('fajuu-contactbutton', function() {
  app.extensionSettings['fajuu-contactbutton'] = function() {
    app.modal.show(new ContactButtonSettingsModal());
  }});