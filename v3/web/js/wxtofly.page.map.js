var wxMap = $('#map').wxMap();

RunJobs({
    'onLoaded': function (e) {

        var toolbarControl,
            menuPanel,
            windgramsPanel,
            plotsPanel,
            settingsPanel;

        windgramsPanel = $('#toolbar-windgrams');
        plotsPanel = $('#toolbar-plots');
        settingsPanel = $('#toolbar-settings');
        menuPanel = $('#toolbar-menu');

        // create toolbar control
        var toolbarControl = L.control.toolbar([
            {
                'name': 'menu',
                'awesomeIcon': 'fas fa-bars',
                'tooltip': 'Menu',
                'panel': menuPanel,
                'disabled': false
            },
            {
                'name': 'windgrams',
                'awesomeIcon': 'fas fa-map-marker-alt',
                'tooltip': 'Windgrams',
                'panel': windgramsPanel,
                'disabled': true
            },
            {
                'name': 'plots',
                'awesomeIcon': 'fas fa-layer-group',
                'tooltip': 'Variable plots',
                'panel': plotsPanel,
                'disabled': false
            },
            {
                'name': 'airspace',
                'awesomeIcon': 'fas fa-plane',
                'tooltip': 'Airspace',
                'onClick': function () {

                },
                'disabled': false
            },
            {
                'name': 'radar',
                'awesomeIcon': 'fas fa-cloud-showers-heavy',
                'tooltip': 'Rain',
                'onClick': function () {

                },
                'disabled': false
            },
            {
                'name': 'settings',
                'awesomeIcon': 'fas fa-cog',
                'tooltip': 'Settings',
                'panel': settingsPanel,
                'disabled': false
            }
        ], {
                'bottomOffset': 100,
                'buttonOffset': 2
            }).addTo(wxMap.map);

        ToolbarSites({
            'panel': windgramsPanel,
            'regions': e.regions,
            'map': wxMap.map,
            'layerControl': wxMap.layerControl,
            'toolbarControl': toolbarControl,
            'toolbarActionName': 'windgrams'
        });

        ToolbarPlots({
            'panel': plotsPanel,
            'regions': e.regions,
            'map': wxMap.map,
            'layerControl': wxMap.layerControl,
            'toolbarControl': toolbarControl,
            'toolbarActionName': 'plots'
        });

        ToolbarSettings({
            'panel': settingsPanel,
            'regions': e.regions,
            'map': wxMap.map,
            'layerControl': wxMap.layerControl,
            'toolbarControl': toolbarControl,
            'toolbarActionName': 'settings'
        });

        $('#menu', menuPanel).navbar({
            'custom': true
        });
    }
});