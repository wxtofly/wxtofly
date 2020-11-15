var wxMap,
    noaaPanel = $('#toolbar-noaa'),
    toolbarControl;

wxMap = $('#map').wxMap({
    'center': [38.892460778169166, -99.34942982214949],
    'zoom': 5
});

toolbarControl = L.control.toolbar([
    {
        'name': 'noaa',
        'tooltip': 'NOAA Forecast',
        'className': 'toolbar-button-noaa',
        'panel': noaaPanel,
        'disabled': false
    }], {
        'bottomOffset': 100,
        'buttonOffset': 2
    }).addTo(wxMap.map);

L.control.responsiveCoordinates({
    'position': 'bottomleft',
    'mode': 'center',
    'click': function (e) {
    },
    'contextmenu': function (e) {
    }
}).addTo(wxMap.map);

ToolbarNOAA({
    'panel': noaaPanel,
    'map': wxMap.map
});