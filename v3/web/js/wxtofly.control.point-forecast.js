var PointForecastControl = function (container, lat, lon, options) {
    var defaults = {
            'spinner': true,
            'forecast': {
                'show': false,
                'collapse': true,
                'spinner': true,
                'collapseButtonText': '7-Day Forecast'
            },
            'discussion': {
                'show': false,
                'collapse': true,
                'spinner': true,
                'collapseButtonText': 'Discussion'
            },
            'hourlyChart': {
                'show': false,
                'collapse': true,
                'spinner': true,
                'collapseButtonText': 'Hourly Chart',
                'charts': {}
            },
            'onPoint': null
        },
        settings,
        spinner,
        point,
        header,
        collapseBar,
        body,
        hourlyChart;

    settings = $.extend(true, {}, defaults, options);

    NOAAVariable.setMeasurementSystem(wxToFlySettings.get('measurementSystem', 'imperial'));

    container.addClass('point-forecast');

    header = $('<div class="point-forecast-header"></div>');
    container.append(header);
    collapseBar = $('<div class="point-forecast-collapse-bar"></div>');
    container.append(collapseBar);
    body = $('<div class="point-forecast-body"></div>');
    container.append(body);

    function stopSpinner() {
        if (spinner) {
            spinner.remove();
            spinner = null;
        }
    }

    function noaaError(error) {
        stopSpinner();
        body.noaaError(error);
        if (typeof settings['onError'] === 'function') {
            settings['onError'].apply(this, arguments);
        }
    }

    function createCollpaseButton(text) {
        let button = $('<a role="button" id="button-daily-forecast" class="btn btn-sm">' + text + '</a>');
        collapseBar.append(button);
        return button;
    }

    function addSection(settingsKey, fnShowSection) {
        if (settings[settingsKey]['show'] === true) {
            let div = $('<div></div>');
            body.append(div);
            ((div, sectionSettings, fnShowSection) => {
                if (sectionSettings['collapse']) {
                    div.addClass('collapse');
                    createCollpaseButton(sectionSettings['collapseButtonText']).collapseButton(div, {
                        'firstShow': () => fnShowSection.call(this, div, sectionSettings)
                    });
                }
                else {
                    fnShowSection.call(this, div, sectionSettings);
                }
            })(div, settings[settingsKey], fnShowSection);
        }
    }

    function draw() {
        stopSpinner();

        addSection('forecast', (div, options) => div.noaaForecast(point, options));
        addSection('discussion', (div, options) => div.noaaForecastDiscussion(point, options));
        addSection('hourlyChart', (div, options) => {
            hourlyChart = div.noaaHourlyChart(point, options);
        });
    }

    this.setSize = function (width, height) {
        if (hourlyChart !== undefined) {
            hourlyChart.setSize(width, height);
        }
    };

    function getPoint(latlon) {
        body.empty();
        if (settings['spinner']) {
            spinner = container.spinnerControl('Obtaining Forecast...').show();
        }

        //$.get('json/noaa/points.json', data => {
        //    point = new NOAA.Point(data);
        //    if (typeof settings['onPoint'] === 'function') {
        //        settings['onPoint'].call(this, point);
        //    }
        //    if (point.xy) {
        //        draw();
        //    }
        //    else {
        //        noaaError('No forecast data available for this point');
        //    }
        //});

        NOAA.points(latlon).get().then(function (data) {
            point = data;
            if (typeof settings['onPoint'] === 'function') {
                settings['onPoint'].call(this, point);
            }
            if (point.xy) {
                draw();
            }
            else {
                noaaError('No forecast data available for this point');
            }
        }, noaaError);
    }

    getPoint(NOAA.latLon(lat, lon));
};

$.fn.pointForecast = function (lat, lon, options = {}) {
    return new PointForecastControl(this, lat, lon, options);
};