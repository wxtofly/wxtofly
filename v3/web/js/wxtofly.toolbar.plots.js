var ToolbarPlots = function (options) {

    var self = this,
        settings,
        defaults = {
            'panel': null,
            'regions': null,
            'days': 3,
            'map': null,
            'layerControl': null,
            'toolbarControl': null,
        },
        metadata = {},
        selectRegion,
        selectGrid,
        selectVariable,
        divVariableInfo,
        buttonVariableInfo,
        modalVariableInfo,
        storageUtil = wxtoflyLocalStorage.getSubStorage('plots'),
        groupLayer,
        imageOverlay,
        plotLayerVisible,
        timeSlider,
        legendControl,
        rangeOpacity,
        labelOpacity,
        rangeInterval,
        labelInterval,
        domainLayer,
        selectedPolygon,
        polygonStyle = {
            'weight': 1,
            'opacity': 0.7,
            'color': '#307fff',
            'fill': false
        },
        selectedPolygonStyle = {
            'weight': 1,
            'opacity': 0.9,
            'color': 'red',
            'fill': false
        },
        checkboxShowGrids,
        mapTitle;

    settings = $.extend({}, defaults, options);

    plotLayerVisible = storageUtil.get('visible', true);
    groupLayer = L.layerGroup();
    if (plotLayerVisible) {
        groupLayer.addTo(settings['map']);
    }
    settings['layerControl'].addOverlay(groupLayer, 'Variable Plots');
    groupLayer.on('add', function () {
        plotLayerVisible = true;
        storageUtil.set('visible', true);
        loadTimes(selectRegion.val(), selectGrid.val());
    });
    groupLayer.on('remove ', function () {
        plotLayerVisible = false;
        storageUtil.set('visible', false);
        hidePlotOverlay();
    });

    selectRegion = $('select#region', settings['panel']);
    selectGrid = $('select#grid', settings['panel']);
    selectVariable = $('select#variable', settings['panel']);
    divVariableInfo = $('#variable-info', settings['panel']);
    buttonVariableInfo = $('#button-variable-info', settings['panel']);
    rangeOpacity = $('input#plot-opacity', settings['panel']);
    labelOpacity = $('label[for="plot-opacity"]', settings['panel']);
    rangeInterval = $('input#plot-cycle-interval', settings['panel']);
    labelInterval = $('label[for="plot-cycle-interval"]', settings['panel']);

    checkboxShowGrids = $('input#show-grids', settings['panel']);

    buttonVariableInfo.click(function () {
        if ($(window).width() < 600) {
            divVariableInfo.collapse('hide');
            if (modalVariableInfo === undefined) {
                modalVariableInfo = $('<div class="sm-screen-modal card"></div>');
                $('body').append(modalVariableInfo);
                modalVariableInfo.click(function () {
                    modalVariableInfo.hide();
                    modalVariableInfo.empty();
                });
            }
            modalVariableInfo.show();
            modalVariableInfo.html(divVariableInfo.html());
        }
        else {
            divVariableInfo.collapse('toggle');
        }
    });

    storageUtil.setInputValue(checkboxShowGrids, 'show-grids', true);
    checkboxShowGrids.on('change', function () {
        showDomainLayer(selectRegion.val());
    });

    function showDomainLayer(region) {
        if (domainLayer) {
            domainLayer.remove();
        }
        if (checkboxShowGrids.prop('checked')) {
            domainLayer = metadata[region]['layer'];
            domainLayer.addTo(settings['map']);
        }
    }

    storageUtil.setInputValue(rangeOpacity, 'opacity', 50);
    rangeOpacity.on('input', function () {
        if (imageOverlay) {
            imageOverlay.setOpacity(rangeOpacity.val() / 100);
        }
        labelOpacity.text('Opacity: ' + rangeOpacity.val() + '%');
    });
    labelOpacity.text('Opacity: ' + rangeOpacity.val() + '%');

    storageUtil.setInputValue(rangeInterval, 'interval', 3);
    rangeInterval.on('input', function () {
        if (timeSlider) {
            timeSlider.setCycleInterval(rangeInterval.val() * 1000);
        }
        labelInterval.text('Interval: ' + rangeInterval.val() + ' second' + (rangeInterval.val() > 1 ? 's' : ''));
    });
    labelInterval.text('Interval: ' + rangeInterval.val() + ' seconds');

    $.each(settings['regions'], function (regionIndex, region) {
        selectRegion.append(new Option(region, region));
        metadata[region] = {};
    });
    storageUtil.setInputValue(selectRegion, 'region', settings['regions'][0]);
    selectRegion.on('change', regionChangeHandler);
    regionChangeHandler();

    function regionChangeHandler() {
        getRegionDomains(selectRegion.val(), function (region) {
            initGridSelect(region);
            showDomainLayer(region);
        })
    }

    function formatDomain(d) {
        return 'd' + d.toString().padStart(2, '0');
    }

    function getRegionDomains(region, callback) {
        var d, url;

        selectGrid.parent().hide();
        selectGrid.empty();

        selectVariable.parent().hide();
        rangeOpacity.parent().hide();
        rangeInterval.parent().hide();

        if (metadata[region]['domains'] === undefined) {
            url = getRegionPath(region) + '/domains.geo.json';
            console.log('domains geoJSON: ' + url);
            $.getJSON(url, function (data) {
                metadata[region]['layer'] = L.geoJSON(data, {
                    style: function (feature) {
                        return polygonStyle;
                    },
                    onEachFeature: function (feature, layer) {
                        layer.featureProperties = feature.properties;
                    }
                });
                callback.call(this, region);
            });
        }
        else {
            callback.call(this, region);
        }
    }

    function initGridSelect(region) {
        var dx,
            domain;

        selectGrid.off('change');
        selectGrid.parent().show();
        selectGrid.empty();

        metadata[region]['layer'].eachLayer(function (layer) {
            domain = layer.featureProperties['name'];
            dx = layer.featureProperties['dx'] / 1000;

            selectGrid.append(new Option(domain + ' (' + dx.toFixed(1) + 'km)', domain));
            metadata[region][domain] = {
                'polygon': layer
            };
        });

        storageUtil.setInputValue(selectGrid, 'grid', $('option:first', selectGrid).prop('value'));
        selectGrid.on('change', function () {
            gridChangeHandler(selectRegion.val());
        });
        gridChangeHandler(region);
    }

    function gridChangeHandler(region) {

        var deferreds = [],
            domain = selectGrid.val(),
            forecastDate = new Date(),
            formattedForecastDate,
            day,
            url,
            bounds;

        if (selectedPolygon) {
            selectedPolygon.setStyle(polygonStyle);
        }
        selectedPolygon = metadata[region][domain]['polygon'];
        selectedPolygon.setStyle(selectedPolygonStyle);
        settings['map'].fitBounds(selectedPolygon.getBounds());

        for (day = 0; day < settings['days']; day++) {
            formattedForecastDate = formatForecastDate(forecastDate);
            url = [getRegionPath(region), 'plots', domain, formattedForecastDate, 'metadata.json?' + (new Date()).getTime()].join('/');
            console.log('plots metadata: ' + url);
            (function (deferred) {
                deferreds.push(deferred);
                $.ajax({
                    dataType: "json",
                    url: url,
                    context: {
                        'region': region,
                        'domain': domain,
                        'day': day,
                        'forecastDate': formattedForecastDate
                    },
                }).always(deferred.resolve);
            })($.Deferred());
            addDay(forecastDate);
        }

        $.when.apply($, deferreds).then(function () {
            var contexts,
                objects;

            if (Array.isArray(this)) {
                contexts = this;
                objects = arguments;
            }
            else {
                contexts = [this];
                objects = [arguments];
            }

            $.each(objects, function (i, args) {
                if (args[1] === 'success') {
                    if (metadata[contexts[i]['region']][contexts[i]['domain']] === undefined) {
                        metadata[contexts[i]['region']][contexts[i]['domain']] = {};
                    }

                    metadata[contexts[i]['region']][contexts[i]['domain']][contexts[i]['forecastDate']] = {
                        'current': args[0]['current']
                    };
                }
            });

            loadTimes(region, domain);
        });
    }

    function loadTimes(region, domain) {
        var deferreds = [],
            forecastDate = new Date(),
            formattedForecastDate,
            url;

        for (day = 0; day < settings['days']; day++) {
            formattedForecastDate = formatForecastDate(forecastDate);

            if (metadata[region][domain][formattedForecastDate] === undefined) {
                break;
            }

            url = [getRegionPath(region), 'plots', domain, formattedForecastDate, metadata[region][domain][formattedForecastDate]['current'], 'metadata.json'].join('/');
            console.log('plots time metadata: ' + url);

            (function (deferred) {
                deferreds.push(deferred);
                $.ajax({
                    dataType: "json",
                    url: url,
                    context: {
                        'region': region,
                        'domain': domain,
                        'day': day,
                        'forecastDate': formattedForecastDate
                    },
                }).always(deferred.resolve);
            })($.Deferred());
            addDay(forecastDate);
        }

        $.when.apply($, deferreds).then(function () {
            var contexts,
                objects,
                any = false;

            if (Array.isArray(this)) {
                contexts = this;
                objects = arguments;
            }
            else {
                contexts = [this];
                objects = [arguments];
            }

            $.each(objects, function (i, args) {
                if (args[1] === 'success') {

                    metadata[contexts[i]['region']][contexts[i]['domain']][contexts[i]['forecastDate']]['times'] = args[0]['times'];
                    if (metadata[contexts[i]['region']][contexts[i]['domain']]['bounds'] === undefined) {
                        metadata[contexts[i]['region']][contexts[i]['domain']]['bounds'] = args[0]['bounds'];
                    }
                    if (metadata[contexts[i]['region']][contexts[i]['domain']]['variables'] === undefined) {
                        metadata[contexts[i]['region']][contexts[i]['domain']]['variables'] = args[0]['variables'];
                    }
                    any = true;
                }
            });

            if (any && plotLayerVisible) {
                selectVariable.parent().show();
                rangeOpacity.parent().show();
                rangeInterval.parent().show();
                initVariableSelect(region, domain);
            }
            else {
                hidePlotOverlay();
            }
        });
    }

    function adjustBottomLeftControls() {
        var timeSliderContainer = $(timeSlider.getContainer());
        if (timeSliderContainer.is(':visible')) {
            $('div.leaflet-bottom.leaflet-left', settings['map'].getContainer()).css({
                'margin-bottom': $(window).height() - $(timeSlider.getContainer()).offset().top + 10
            });
        }
        else {
            $('div.leaflet-bottom.leaflet-left', settings['map'].getContainer()).css({
                'margin-bottom': ''
            });
        }
    }

    function hidePlotOverlay() {
        if (imageOverlay) {
            imageOverlay.remove();
        }
        if (timeSlider) {
            settings['map'].removeControl(timeSlider);
            timeSlider.visible = false;
            adjustBottomLeftControls();
        }
        if (legendControl) {
            settings['map'].removeControl(legendControl);
        }
        if (mapTitle) {
            mapTitle.remove();
        }

        selectVariable.parent().hide();
        rangeOpacity.parent().hide();
        rangeInterval.parent().hide();
    }

    function setVariableInfo() {
        var variable = selectVariable.val(),
            title = $("option:selected", selectVariable).text();

        if (variable) {
            $('.card-header span', divVariableInfo).text(raspVariables[variable].title);
            $('.card-body', divVariableInfo).text(raspVariables[variable].description);
        }
        if (!mapTitle) {
            mapTitle = L.title(title, { 'position': 'top' }).addTo(settings['map']);
        }
        else {
            mapTitle.setTitle(title);
        }
    }

    function initVariableSelect(region, domain) {
        var text, options = [];

        selectVariable.off('change');
        selectVariable.empty();

        $.each(metadata[region][domain]['variables'], function (i, variable) {
            text = raspVariables[variable].title;
            if (!text) {
                text = variable;
            }
            options.push(new Option(text, variable));
        });
        $.each(options.sort(function (a, b) {
            if (a.text === b.text) {
                return 0;
            }
            if (a.text > b.text) {
                return 1;
            }
            return -1;
        }), function () {
            selectVariable.append(this);
        });

        storageUtil.setInputValue(selectVariable, 'variable', metadata[region][domain]['variables'][0]);
        selectVariable.on('change', function () {
            showPlot(timeSlider.getCurrent());
            setVariableInfo();
        });
        setVariableInfo();

        if (imageOverlay) {
            bounds = metadata[region][domain]['bounds'];
            imageOverlay.setBounds(L.latLngBounds([bounds.north, bounds.west], [bounds.south, bounds.east]));
        }

        if (timeSlider) {
            timeSlider.setDateTimes(getDateTimes(region, domain));
        }
        else {
            initTimeSlider(region, domain);
        }
        showPlot(timeSlider.getCurrent());
    }

    function initImageOverlay(region, domain, url) {
        var bounds = metadata[region][domain]['bounds'];

        imageOverlay = L.imageOverlay(url, L.latLngBounds([bounds.north, bounds.west], [bounds.south, bounds.east]), {
            opacity: rangeOpacity.val() / 100
        }).addTo(settings['map']);
    }

    function getDateTimes(region, domain) {
        var dateTimes = [];

        $.each(Object.keys(metadata[region][domain]), function (i, date) {
            $.each(metadata[region][domain][date]['times'], function (i, time) {
                dateTimes.push(moment(date + '-' + time, 'YYYYMMDD-HHmm').toDate());
            });
        });

        return dateTimes;
    }

    function initTimeSlider(region, domain) {
        var startAt = 0;

        timeSlider = L.control.timeSlider(getDateTimes(region, domain), {
            'position': 'bottomright',
            'startAt': startAt,
            'play': true,
            'playContent': '<i class="far fa-play-circle"></i>',
            'pauseContent': '<i class="far fa-pause-circle"></i>',
            'cycleInterval': rangeInterval.val() * 1000
        });
        settings['map'].addControl(timeSlider, 0);
        adjustBottomLeftControls();

        timeSlider.on('active', function (e) {
            showPlot(e.datetime);
        });

        timeSlider.visible = true;
    }

    function showPlot(datetime) {
        var region = selectRegion.val(),
            domain = selectGrid.val(),
            date = moment(datetime).format('YYYYMMDD'),
            url;

        url = [
            getRegionPath(region),
            'plots',
            domain,
            date,
            metadata[region][domain][date]['current'],
            moment(datetime).format('HHmm'),
            selectVariable.val() + '.body.png'
        ].join('/');

        if (plotLayerVisible) {
            if (timeSlider && !timeSlider.visible) {
                settings['map'].addControl(timeSlider, 0);
                timeSlider.visible = true;
                adjustBottomLeftControls();
                settings['map'].addControl(legendControl, 1);
            }
        }
        else {
            return;
        }

        if (legendControl) {
            legendControl.setPlotUrl(url);
        }
        else {
            legendControl = L.control.plotLegend({
                'position': 'bottomright',
                'plotUrl': url,
                'type': 'side',
                'maxHeight': function () {
                    var timeControlContainer = $(timeSlider.getContainer());

                    return timeControlContainer.offset().top - 200;
                }
            });
            settings['map'].addControl(legendControl, 1);
        }

        if (imageOverlay) {
            imageOverlay.setUrl(url);
            if (!settings['map'].hasLayer(imageOverlay)) {
                imageOverlay.addTo(settings['map']);
            }
        }
        else {
            initImageOverlay(region, domain, url);
        }
    };
};