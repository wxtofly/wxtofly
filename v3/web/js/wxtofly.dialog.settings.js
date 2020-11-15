var SettingsDialog = function () {
    var self = this,
        selectUnits;

    this.show = function () {

        if (SettingsDialog.container === undefined) {
            SettingsDialog.container = $('<div class="modal fade" tabindex="-1" role="dialog"></div>');
            SettingsDialog.container.load('settings.html', function () {
                $('body').append(SettingsDialog.container);
                SettingsDialog.container.modal();
            });
        }
        else {
            SettingsDialog.container.modal();
        }

        selectUnits = $('select#units', SettingsDialog.container);
        selectUnits.val(wxToFlySettings.get('measurementSystem', 'imperial'));
        //selectUnits.off('change');
        selectUnits.on('change', function (e) {
            wxToFlySettings.set('measurementSystem', selectUnits.val());
        });
    };

    this.hide = function () {
        SettingsDialog.container.modal('hide');
    };

    return this;
};