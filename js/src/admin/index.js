import ContactButtonSettingsModal from './components/ContactButtonSettingsModal';

app.initializers.add('fajuu-contactbutton', () => {
  app.extensionSettings['fajuu-contactbutton'] = () => app.modal.show(new ContactButtonSettingsModal());
});
