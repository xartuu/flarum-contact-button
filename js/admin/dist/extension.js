System.register('fajuu/contactbutton/components/ContactButtonSettingsModal', ['flarum/components/SettingsModal'], function (_export) {
  'use strict';

  var SettingsModal, ContactButtonSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal['default'];
    }],
    execute: function () {
      ContactButtonSettingsModal = (function (_SettingsModal) {
        babelHelpers.inherits(ContactButtonSettingsModal, _SettingsModal);

        function ContactButtonSettingsModal() {
          babelHelpers.classCallCheck(this, ContactButtonSettingsModal);
          babelHelpers.get(Object.getPrototypeOf(ContactButtonSettingsModal.prototype), 'constructor', this).apply(this, arguments);
        }

        babelHelpers.createClass(ContactButtonSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('fajuu-contactbutton.admin.settings.title');
          }
        }, {
          key: 'form',
          value: function form() {
            return [m("div", {
          className: "Form-group"
        }, m("label", null, app.translator.trans("fajuu-contactbutton.admin.settings.buttoname")), m("input", {
          className: "FormControl",
          type: "text",
          placeholder: "Contact",
          bidi: this.setting("fajuu-contactbutton.buttoname")
        }), m("label", {style: "padding-top: 20px;"}, app.translator.trans("fajuu-contactbutton.admin.settings.adress")), m("input", {
          className: "FormControl",
          type: "text",
          placeholder: "email@example.com / https://example.com",
          bidi: this.setting("fajuu-contactbutton.adress")
        }), m("label", {style: "padding-top: 20px;"}, app.translator.trans("fajuu-contactbutton.admin.settings.icon")), m("input", {
          className: "FormControl",
          type: "text",
          placeholder: "envelope-o",
          bidi: this.setting("fajuu-contactbutton.icon")
        }), m("div", {style: "padding-top: 20px;"},
          m("input", {
            type: "checkbox",
            bidi: this.setting("fajuu-contactbutton.newtab")
          }),
          m("strong", null, app.translator.trans("fajuu-contactbutton.admin.settings.newtab"))
        ))];
          }
        }]);
        return ContactButtonSettingsModal;
      })(SettingsModal);

      _export('default', ContactButtonSettingsModal);
    }
  };
});;
System.register('fajuu/contactbutton/main', ['flarum/extend', 'fajuu/contactbutton/components/ContactButtonSettingsModal'], function (_export) {
  'use strict';

  var extend, ContactButtonSettingsModal;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_fajuuContactButtonComponentsContactButtonSettingsModal) {
      ContactButtonSettingsModal = _fajuuContactButtonComponentsContactButtonSettingsModal['default'];
    }],
    execute: function () {

      app.initializers.add('fajuu-contactbutton', function () {
        app.extensionSettings['fajuu-contactbutton'] = function () {
          app.modal.show(new ContactButtonSettingsModal());
        };
      });
    }
  };
});