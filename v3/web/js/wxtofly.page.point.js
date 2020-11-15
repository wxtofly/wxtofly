var storage = new LocalStorageUtil('point');

let zoom = parseInt(storage.get('zoom')),
    lat = parseFloat(storage.get('lat')),
    lon = parseFloat(storage.get('lon'));

if (lat && lon) {
    init([lat, lon], zoom, true);
}
else if (location.protocol === 'https:' && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        init([position.coords.latitude, position.coords.longitude], 13);
    });
} else {
    init([38.892460778169166, -99.34942982214949], 5);
}

function init(center, zoom, load, options) {
    const defaults = {
        'minStationDistance': Units.convert(50).from('miles').to('m'),
        'stationMarkerSize': 14
    };

    let gridPointPolygon,
        circleStationSearch,
        coopsStationMarker,
        latlonMarker,
        point,
        gridPoint,
        currentStations,
        stationsTabPane,
        layerStations,
        marineStations,
        stationIcon,
        layerMarineStations,
        settings,
        inProgress = false;

    const modalStationObservationsPopup = document.body.querySelector('div.modal-popup-station-observations');
    const modalStationObservationsPopupContainer = modalStationObservationsPopup.children[0];

    NOAAVariable.setMeasurementSystem(wxToFlySettings.get('measurementSystem', 'imperial'));

    settings = Object.assign({}, defaults, options);

    wxMap = $('#map').wxMap({
        'center': center,
        'zoom': zoom
    });

    const map = wxMap.map;

    let coordinatesControl = L.control.responsiveCoordinates({
        'position': 'bottomleft',
        'click': function (e) {
        },
        'contextmenu': function (e) {
        }
    }).addTo(map);

    map.on('click', e => {
        latLonHandler(e.latlng.lat, e.latlng.lng);
    });

    L.control.search({
        url: 'https://nominatim.openstreetmap.org/search?country=usa&format=json&q={s}',
        jsonpParam: 'json_callback',
        propertyName: 'display_name',
        propertyLoc: ['lat', 'lon'],
        autoCollapse: true,
        autoType: false,
        autoResize: false,
        minLength: 2,
        marker: null,
        moveToLocation: function (latlng, title, map) {
            getPointForecast(latlng.lat, latlng.lng);
        },
        buttonContent: '<i class="fas fa-search"></i>',
        inputWidth: 250
    }).addTo(map);

    function clearMap() {
        if (gridPointPolygon) {
            gridPointPolygon.remove();
            gridPointPolygon = null;
        }
        if (coopsStationMarker) {
            coopsStationMarker.remove();
            coopsStationMarker = null;
        }
        if (latlonMarker) {
            latlonMarker.remove();
            latlonMarker = null;
        }
        if (layerStations) {
            layerStations.remove();
            layerStations = null;
        }
        if (layerMarineStations) {
            layerMarineStations.remove();
            layerMarineStations = null;
        }
        if (circleStationSearch) {
            circleStationSearch.remove();
            circleStationSearch = null;
        }
        modalStationObservationsPopupContainer.innerHTML = '';
    }

    function latLonHandler(lat, lon) {
        if (inProgress) {
            return;
        }
        inProgress = true;

        storage.set('zoom', map.getZoom());
        storage.set('lat', lat);
        storage.set('lon', lon);

        clearMap();

        latlonMarker = L.marker([lat, lon]).addTo(map);
        latlonMarker.bindTooltip(`Coordinates: ${LatLon.format(lat, lon)}`);

        console.log('http://forecast.weather.gov/MapClick.php?lat=' + lat + '&lon=' + lon + '&unit=0&lg=english&FcstType=graphical');

        map.spin(true);
        getPoint(NOAA.latLon(lat, lon));
    }

    function noaaError(error) {
        console.error(error);
        handleError(error.detail);
    }

    function handleError(error) {
        inProgress = false;
        map.spin(false);
        L.alert(error, {
            'level': 'error'
        }).addTo(map).open();
    }

    function getPoint(latlon) {
        NOAA.points(latlon).get().then(function (data) {
            point = data;
            if (point.xy) {
                pointHandler();
            }
            else {
                handleError('No forecast data available for this point');
            }
        }, noaaError);
    }

    function pointHandler() {

        stationsTabPane = document.createElement('div');
        stationsTabPane.spinner = $(stationsTabPane).spinnerControl('Collecting Station Data...').show();

        Promise.all([
            getGridPoint(),
            getStations()
        ]).finally(() => {
            map.spin(false);
            inProgress = false;
        });
    }

    function getStations() {
        currentStations = [];

        circleStationSearch = L.circle([point.geometry.latlon.lat, point.geometry.latlon.lon], {
            'radius': settings['minStationDistance'],
            'fillOpacity': 0.05,
            'weight': 1,
            'color': 'gray'
        }).addTo(map);

        return new Promise((resolve, reject) => {
            Promise.all([
                getPointStations(),
                getMarineStations()
            ]).then(() => {
                resolve();
                createStationList();
            }, reject);
        });
    }

    function getMarineStationIcon(station) {
        return L.divIcon({
            iconSize: new L.Point(settings['stationMarkerSize'], settings['stationMarkerSize']),
            className: `marker-station marker-station-ndbc marker-station-${station['type']}`,
            html: ''
        });
    }

    stationIcon = L.divIcon({
        iconSize: new L.Point(settings['stationMarkerSize'], settings['stationMarkerSize']),
        className: 'marker-station marker-station-noaa-api',
        html: ''
    });

    function getMarineStationMarker(station) {
        let marker = L.marker([station.lat, station.lon], {
            icon: getMarineStationIcon(station)
        });
        marker.bindTooltip(`Station: ${station.name}`);

        let stationDescriptor = {
            'station': station,
            'type': 'NDBC',
            'marker': marker
        };
        currentStations.push(stationDescriptor);
        bindStationMarkerClick(marker, stationDescriptor);
        return marker;
    }

    function getMarineStations() {
        if (marineStations === undefined) {
            // copy of https://www.ndbc.noaa.gov/activestations.xml
            let promise = fetchXML('xml/activestations.xml');
            promise.then(xml => {
                marineStations = [...xml.documentElement.querySelectorAll('station')].map(node => {
                    return {
                        id: node.id,
                        lat: parseFloat(node.getAttribute('lat')),
                        lon: parseFloat(node.getAttribute('lon')),
                        name: node.getAttribute('name'),
                        owner: node.getAttribute('owner'),
                        elev: parseFloat(node.getAttribute('elev')),
                        type: node.getAttribute('type')
                    };
                });
                getMarineStations();
            });
            return promise;
        }
        else {
            layerMarineStations = L.layerGroup(
                marineStations.map(station => {
                    return {
                        ...station,
                        'distance': map.distance(
                            [station.lat, station.lon],
                            [point.geometry.latlon.lat, point.geometry.latlon.lon])
                    };
                }).filter(station => station['distance'] < settings['minStationDistance'])
                    .map(getMarineStationMarker)
            ).addTo(map);
        }
    }

    function getPointStations() {
        let promise = point.getGridPointStations();
        promise.then(function (data) {
            stationsHandler(data);
        }, noaaError);
        return promise;
    }

    function bindStationMarkerClick(marker, stationDescriptor) {
        marker.on('click', function(e) {
            showStationPopup(this);
        }, stationDescriptor);
    }

    function getStationMarker(station) {
        let marker = L.marker([station.geometry.latlon.lat, station.geometry.latlon.lon], {
            icon: stationIcon
        });
        marker.bindTooltip(`Station: ${station.name}`);

        let stationDescriptor = {
            'station': station,
            'type': 'NOAA',
            'marker': marker
        };
        bindStationMarkerClick(marker, stationDescriptor);
        currentStations.push(stationDescriptor);
        return marker;
    }

    function stationsHandler(stations) {
        layerStations = L.layerGroup(
            stations.map(station => {
                return {
                    ...station,
                    'distance': map.distance(
                        [station.geometry.latlon.lat, station.geometry.latlon.lon],
                        [point.geometry.latlon.lat, point.geometry.latlon.lon])
                };
            }).filter(station => station['distance'] < settings['minStationDistance'])
                .map(getStationMarker)
        ).addTo(map);
    }

    function getGridPoint() {
        let promise = point.getGridPoint();
        promise.then(function (data) {
            gridPoint = data;
            gridPointHandler();
        }, noaaError);
        return promise;
    }

    function gridPointHandler() {
        showGridPointPolygon();
        bindGridPointPopup(latlonMarker);
    }

    function createButtonCloser(parent, onClick) {
        let button = document.createElement('button');
        button.innerHTML = '<span>&times;</span>';
        button.setAttribute('type', 'button');
        button.classList.add('close');
        button.addEventListener('click', onClick);
        parent.appendChild(button);
        return button;
    }

    function bindGridPointPopup(layer) {

        if (window.innerWidth < 2000) {
            const modalPopup = document.body.querySelector('div.modal-popup-point-forecast');
            const modalPopupContainer = modalPopup.children[0];
            modalPopup.style.display = 'none';

            modalPopupContainer.innerHTML = '';
            let popupElement = createGridPointPopup();
            modalPopupContainer.appendChild(popupElement);

            createButtonCloser(popupElement, e => {
                modalPopup.style.display = 'none';
            });

            layer.on('click', (e) => modalPopup.style.display = null);
        }
        else {
            const height = 500,
                width = 500;
            layer.bindPopup(createGridPointPopup(height, width), {
                'maxWidth': width,
                'minWidth': width
            });
        }
    }

    function createStationList() {
        stationsTabPane.spinner.remove();
        delete stationsTabPane.spinner;

        stationsTabPane.classList.add('station-list');

        if (!currentStations || currentStations.length === 0) {
            stationsTabPane.innerText = 'No stations found';
            return;
        }

        let list = document.createElement('ul');
        stationsTabPane.appendChild(list);


        let header = document.createElement('li');
        header.classList.add('header');
        header.innerHTML = `<span>Station ID/Name</span><span>Distance (${NOAAVariable.getUnits('distance')})</span>`;
        list.appendChild(header);

        currentStations.sort((a, b) => {
            if (a['station']['distance'] === b['station']['distance']) {
                return 0;
            }
            else if (a['station']['distance'] > b['station']['distance']) {
                return 1;
            }
            return -1;
        }).forEach(o => {
            let item = document.createElement('li');
            item.innerHTML = `<span><span class="station-id">${o['station']['id']}:</span><span class="station-name">${o['station']['name']}</span></span><span class='distance'>${NOAAVariable.formatValue('distance', o['station']['distance'], 'm')}</span >`;
            list.appendChild(item);

            item.addEventListener('click', e => showStationPopup(o));
        });
    }

    function createPointInfo() {
        let element = document.createElement('div');
        element.classList.add('point-info');
        addPointInfoNameValuePair(element, 'Coordinates', LatLon.format(point.geometry.latlon));
        addPointInfoNameValuePair(element, 'Elevation', NOAAVariable.toStringWithUnits('elevation', gridPoint.elevation));
        return element;
    }

    /**
     * 
     * @param {HTMLElement} element Element to append name-value pair to
     * @param {string} name Name
     * @param {any} value Value
     */
    function addPointInfoNameValuePair(element, name, value) {
        let div = document.createElement('div');
        element.appendChild(div);
        div.innerHTML = `<span class="name">${name}:</span><span class="value">${value}</span>`;
    }

    function createGridPointPopup(height, width) {
        let popupElement = L.DomUtil.create('div', 'popup-point-forecast');
        if (!isNaN(height) && !isNaN(width)) {
            popupElement.style.width = `${width}px`;
            popupElement.style.height = `${height}px`;
        }

        $(popupElement).tabs({
            'info': {
                'title': 'Point Info',
                'content': createPointInfo(),
                'active': true
            },
            'dailyForecast': {
                'title': '7-Day',
                'content': '<div></div>',
                'show': (e) => {
                    if (e.contentElement.length === 1 && e.contentElement.data('init') === undefined) {
                        e.contentElement.data('init', true);
                        e.contentElement.noaaForecast(point, {
                            'showDetails': true
                        });
                    }
                }
            },
            'hourlyForecast': {
                'title': 'Hourly Graph',
                'content': '<div></div>',
                'shown': (e) => {
                    if (e.contentElement.length === 1 && e.contentElement.data('init') === undefined) {
                        e.contentElement.data('init', true);
                        e.contentElement.noaaHourlyChart(point, gridPoint, {
                            'width': e.contentElement[0].parentNode.clientWidth,
                            'height': e.contentElement[0].parentNode.clientHeight - 25,
                            'charts': {
                                'temperature': {},
                                'surfaceWind': {},
                                'sky': {},
                                'precipitationRain': {}
                            }
                        });
                    }
                }
            },
            'forecastDiscussion': {
                'title': 'Discussion',
                'content': '<div></div>',
                'show': (e) => {
                    if (e.contentElement.length === 1 && e.contentElement.data('init') === undefined) {
                        e.contentElement.data('init', true);
                        e.contentElement.noaaForecastDiscussion(point, {});
                    }
                }
            },
            'stations': {
                'title': 'Stations',
                'content': stationsTabPane,
            }
        });

        return popupElement;
    }

    function showStationPopup(stationDescriptor) {

        const stationId = stationDescriptor['station']['id'];
        modalStationObservationsPopup.style.display = null;

        let stationObservationsElement = modalStationObservationsPopupContainer.querySelector(`#station_${stationId}`);
        if (stationObservationsElement) {
            stationObservationsElement.style.display = null;
        }
        else {
            createStationPopup(stationDescriptor);
        }
    }

    function createStationPopup(stationDescriptor) {
        const stationId = stationDescriptor['station']['id'];

        let popupElement = L.DomUtil.create('div', 'popup-station');
        popupElement.id = `station_${stationId}`;
        modalStationObservationsPopupContainer.appendChild(popupElement);

        createButtonCloser(popupElement, (e) => {
            modalStationObservationsPopup.style.display = 'none';
            popupElement.style.display = 'none';
        });

        let header = L.DomUtil.create('div', 'header', popupElement);
        header.innerHTML = `<span class="station-id">${stationId}:</span><span class="station-name">${stationDescriptor['station']['name']}</span>`;

        let chartElement = L.DomUtil.create('div', undefined, popupElement);
        popupElement.appendChild(chartElement);
        $(chartElement).noaaStationChart(stationId, point.timeZone, point.geometry.latlon, {
            'width': popupElement.clientWidth,
            'height': popupElement.clientHeight - Math.round(header.offsetHeight + .5),
            'charts': {
                'temperature': {},
                'surfaceWind': {},
                'sky': {}
            }
        });

        return popupElement;
    }

    function showGridPointPolygon() {

        var i, j, latlngs = [];

        for (i = 0; i < gridPoint.geometry.rings.length; i++) {
            latlngs[i] = [];
            for (j = 0; j < gridPoint.geometry.rings[i].length; j++) {
                latlngs[i].push([gridPoint.geometry.rings[i][j].lat, gridPoint.geometry.rings[i][j].lon]);
            }
        }

        gridPointPolygon = L.polygon(latlngs, {
            'bubblingMouseEvents': false
        }).addTo(map);

        gridPointPolygon.on('click', function (e) {
            L.DomEvent.stopPropagation(e);
        });
    }

    if (load) {
        latLonHandler(center[0], center[1]);
    }
}

