var ToolbarSettings = function (options) {

    var self = this,
        settings,
        defaults = {
            'panel': null,
            'regions': null,
            'map': null,
            'toolbarControl': null,
            'toolbarActionName': null,
            'showScale': false,
            'showCoordinates': false
        },
        inputScale,
        inputCoordinates,
        scaleControl,
        coordinatesControl,
        storageUtil = wxtoflyLocalStorage.getSubStorage('map-settings');

    settings = $.extend({}, defaults, options);

    inputScale = $('#settings-scale', settings['panel']);
    storageUtil.setInputValue(inputScale, 'showScale', settings['showScale']);
    inputScale.on('change', function () {
        handleScale();
    });

    inputCoordinates = $('#settings-coordinates', settings['panel']);
    storageUtil.setInputValue(inputCoordinates, 'showCoordinates', settings['showCoordinates']);
    inputCoordinates.on('change', function () {
        handleCoordinates();
    });

    function handleScale() {
        if (inputScale.prop('checked')) {
            if (!scaleControl) {
                scaleControl = L.control.scale({
                    maxWidth: 240, metric: true, imperial: true, position: 'bottomleft'
                });
            }
            settings['map'].addControl(scaleControl, 0);
        } else if (scaleControl) {
            settings['map'].removeControl(scaleControl);
        }
    }

    function copyLocation(latlng) {
        copyStringToClipboard(latlng.lat + ', ' + latlng.lng);
        L.alert('Location coppied to clipboard', {
            'duration': 2,
        }).addTo(settings['map']).open();
    }

    function handleCoordinates() {
        if (inputCoordinates.prop('checked')) {
            if (!coordinatesControl) {
                coordinatesControl = L.control.responsiveCoordinates({
                    'position': 'bottomleft',
                    'click': function (e) {
                        copyLocation(settings['map'].getCenter());
                    },
                    'contextmenu': function (e) {
                        copyLocation(e.latlng);
                    }
                });
            }
            settings['map'].addControl(coordinatesControl, 1);
        } else if (coordinatesControl) {
            settings['map'].removeControl(coordinatesControl);
        }
    }

    handleScale();
    handleCoordinates();
};