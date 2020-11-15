var ToolbarRadar = function (options) {

    var self = this,
        settings,
        defaults = {
            'panel': null,
            'regions': null,
            'map': null,
            'layerControl': null,
            'toolbarControl': null,
            'toolbarActionName': null
        },
        storageUtil = wxtoflyLocalStorage.getSubStorage('map_settings');

    settings = $.extend({}, defaults, options);
};