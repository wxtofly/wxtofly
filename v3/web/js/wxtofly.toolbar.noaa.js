var ToolbarNOAA = function (options) {

    var self = this,
        settings,
        defaults = {
            'panel': null,
            'map': null,
            'toolbarControl': null,
            'toolbarActionName': null,
            'zoom': 12
        },
        storageUtil = wxtoflyLocalStorage.getSubStorage('noaa'),
        buttonPointForecast,
        gridPointPolygon,
        searchControl,
        pointMarker,
        point,
        gridPoint;

    settings = $.extend({}, defaults, options);

    buttonPointForecast = $('#button-point-forecast');

    searchControl = L.control.search({
        url: 'https://nominatim.openstreetmap.org/search?format=json&q={s}',
        jsonpParam: 'json_callback',
        propertyName: 'display_name',
        propertyLoc: ['lat', 'lon'],
        autoCollapse: true,
        autoType: false,
        autoResize: false,
        minLength: 2,
        marker: null,
        moveToLocation: function (latlng, title, map) {
            getGridPoint(latlng, title);
        },
        buttonContent: '<i class="fas fa-search"></i>',
        inputWidth: 250
    }).addTo(wxMap.map);

    function noaaError(error) {
        settings['map'].spin(false);
        console.log(error);
    }

    function showGridPointPolygon(gridPoint) {
        if (gridPointPolygon) {
            gridPointPolygon.remove();
        }

        var i, j, latlngs = [];

        for (i = 0; i < gridPoint.geometry.rings.length; i++) {
            latlngs[i] = [];
            for (j = 0; j < gridPoint.geometry.rings[i].length; j++) {
                latlngs[i].push([gridPoint.geometry.rings[i][j].lat, gridPoint.geometry.rings[i][j].lon]);
            }
        }

        gridPointPolygon = L.polygon(latlngs, {
            'bubblingMouseEvents': false
        }).addTo(settings['map']);

        gridPointPolygon.on('click', function (e) {
            L.DomEvent.stopPropagation(e);
        });

        gridPointPolygon.on('popupopen', function (e) {
            var plotContainer = e.popup.getElement().querySelector('#noaa-grid-point-plot');
            NOAA.charts.gridPoint(plotContainer, gridPoint, {
                'height': 400,
                'width': plotContainer.clientWidth,
                'margins': {
                    'top': 10,
                    'right': 20,
                    'bottom': 30,
                    'left': 60
                }
            });
        });

        gridPointPolygon.bindPopup('<div id="noaa-grid-point-plot"></div>', {
            'maxWidth': 600,
            'className': 'popup-grid-point',
            'autoPan': false
        }).openPopup();
    }

    function showPointMarker(latlng, title) {

        if (pointMarker) {
            pointMarker.remove();
        }
        pointMarker = L.marker(latlng, {
            'title': title
        }).addTo(settings['map']);
    }

    function setView(latlng) {
        if (settings['zoom'] && settings['map'].getZoom() < settings['zoom']) {
            settings['map'].setView(latlng, settings['zoom']);
        }
        else {
            settings['map'].panTo(latlng);
        }
    }

    function getGridPoint(latlng, title) {
        setView(latlng);
        showPointMarker(latlng, title);
        settings['map'].spin(true);
        NOAA.points([latlng.lat, latlng.lng]).get().then(function (data) {
            point = data;
            point.getGridPoint().then(function (data) {
                gridPoint = data;
                settings['map'].spin(false);
                showGridPointPolygon(gridPoint);
            }, noaaError);
        }, noaaError);
    }

    settings['map'].on('click', function (e) {
        getGridPoint(e.latlng);
    });

    buttonPointForecast.click(function (e) {
        getGridPoint(settings['map'].getCenter());
    });
};