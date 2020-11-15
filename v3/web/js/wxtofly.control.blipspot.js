var Blipspot = function (container, jsonUrl, options) {

    var self = this,
        settings,
        defaults = {
            'simpleViewVariables': ['metwind10', 'bsratio', 'wstar', 'hwcrit', 'cape', 'blcloudpct', 'rain1', 'sfctemp', 'sfcsunpct']
        },
        table,
        thead,
        tbody,
        cols,
        windScale = {
            'type': 'linear',
            'min': 0,
            'max': 20,
            'units': 'mph',
            'rgb': [255, 0, 0]
        },
        wstarScale = {
            'type': 'linear',
            'min': 200,
            'max': 1000,
            'units': 'ft/min',
            'rgb': [255, 204, 0]
        },
        wblmaxminScale = {
            'type': 'bilinear',
            'units': 'ft/min',
            'min': -1000,
            'median': 0,
            'max': 1000,
            'rgb': [[0, 123, 255], [0, 255, 0]]
        },
        bsratioScale = {
            'type': 'linear',
            'min': 5,
            'max': 100,
            'units': '',
            'rgb': [204, 102, 255]
        },
        mslScale = {
            'type': 'linear',
            'min': 0,
            'max': 10000,
            'units': 'ft',
            'rgb': [51, 153, 255]
        },
        aglScale = {
            'type': 'linear',
            'min': 0,
            'max': 10000,
            'units': 'ft',
            'rgb': [179, 119, 0]
        },
        sfcsunpctScale = {
            'type': 'linear',
            'min': 0,
            'max': 100,
            'units': '%',
            'rgb': [255, 255, 0]
        },
        // CAPE = Convective Available Potential Energy. CAPE is a measure of instability through the depth of the atmosphere, and is related to updraft strength in thunderstorms. 
        // SPC forecasters often refer to "weak instability"(CAPE less than 1000 Jkg - 1), "moderate instability"(CAPE from 1000 - 2500 Jkg - 1), "strong instability"(CAPE from 2500 - 4000 Jkg - 1), 
        // and "extreme instability"(CAPE greater than 4000 Jkg - 1).The CAPE in the sample sounding above is about 3500 Jkg - 1 lifting the "non-virtual" surface parcel.
        // In the real world, CAPE is usually an overestimate of updraft strength due to water loading and entrainment of unsaturated environmental air.
        capeScale = {
            'type': 'linear',
            'min': 500,
            'max': 4000,
            'units': 'J/kg',
            'rgb': [255, 0, 0]
        },
        cloudScale = {
            'type': 'linear',
            'min': 0,
            'max': 100,
            'units': '%',
            'rgb': [128, 128, 128]
        },
        rainScale = {
            'type': 'linear',
            'min': 0,
            'max': 10,
            'units': 'mm',
            'rgb': [102, 255, 102]
        },
        tempScale = {
            'type': 'bilinear',
            'min': -10,
            'median': 10,
            'max': 25,
            'units': 'C',
            'rgb': [[0, 204, 255], [255, 102, 0]]
        },
        data;

    settings = $.extend({}, defaults, options);

    container.addClass('blipspot');
    container.empty();

    RASPVariable.setMeasurementSystem(wxToFlySettings.get('measurementSystem', 'imperial'));
    wxToFlySettings.on('change', function (e) {
        if (e.setting === 'measurementSystem') {
            RASPVariable.setMeasurementSystem(e.value);
            draw();
        }
        if (e.setting === 'blipspotView') {
            setView();
        }
    });

    function loadData() {
        $.getJSON(jsonUrl, function (response) {
            data = response;
            draw();
        }).fail(function () {
            container.append('<div class="alert alert-danger m-2" role="alert"><i class="fas fa-frown mr-1"></i>No data available</div>');
        });
    }

    function draw() {
        container.empty();
        appendHeader();
        appendTable();
        setView();
    }

    function setView() {
        var view = wxToFlySettings.get('blipspotView', 'simple'),
            viewSwitch = $('input', container);
        if (view === 'simple') {
            table.addClass('view-simple');
            viewSwitch.prop('checked', false);
        }
        else {
            table.removeClass('view-simple');
            viewSwitch.prop('checked', true);
        }
    }

    function appendHeader() {
        var header = $('<div class="blipspot-header"></div>');

        header.append('<div class="blipspot-title">' + data['name'] + ' (' + data['fcstdate'] + ')</div>');
        header.append('<div class="custom-control custom-switch">' +
            '<input type="checkbox" class="custom-control-input" id="view-' + data['name'] + data['fcstdate'] + '">' +
            '<label class="custom-control-label" for="view-' + data['name'] + data['fcstdate'] + '">Show All</label>' +
            '</div>');

        container.append(header);

        container.append('<div>' +
            '<span class="mr-1">Coordinates (lat,lon):</span><span class="mr-2"><strong>' + data['lat'] + ' ,' + data['lon'] + '</strong></span>' +
            '<span class="mr-1">Terrain height:</span><span class="mr-2"><strong>' + RASPVariable.toStringWithUnits('terhgt', data['terhgt']) + '</strong></span>' +
            '</div>');
        container.append('<div>' +
            '<span class="mr-1">Model run initialization:</span><span class="mr-2"><strong>' + data['init_date'] + ' ' + data['init_hour'] + 'z</strong></span>' +
            '<span class="mr-1">Grid/Resolution:</span><span class="mr-2"><strong>' + data['grid'] + '/' + Units.convert(data['dx']).from('m').to('km').toFixed(1) + 'km</strong></span>' +
            '</div>');

        $('div.custom-switch', header).on('click', function (e) {
            e.stopPropagation();
        });
        $('input', header).on('change', function (e) {
            wxToFlySettings.set('blipspotView', this.checked ? 'advanced': 'simple');
        });
    }

    function appendTable() {
        table = $('<table></table>');
        //thead = $("<thead/>");
        tbody = $("<tbody/>");
        //table.append(thead);
        table.append(tbody);
        container.append(table);
        cols = data['time'].length + 1;

        table.on('click', function (e) {
            if ($('.popover', table).length > 0) {
                e.stopPropagation();
                $('td[data-content]', tbody).popover('hide');
            }
        });

        table.on('click', 'div.popover', function (e) {
            $('td[data-content]', container).popover('hide');
        });

        //table.on('scroll', function (e) {
        //    $('tr.blipspot-section-header', table).css({
        //        'transform': 'translate(' + table.scrollLeft() + 'px)'
        //    });
        //});

        appendSectionTitle('Wind');
        appendTimeRow(data['time']);
        appendWind('metwind10');
        if (data['metwindspd'] !== undefined && data['metwinddir'] !== undefined) {
            appendWindRow('metwind', data['metwindspd'], data['metwinddir'], 0, data['geophgt'], data['terhgt'], 'Wind at level 0', 'Wind rotated to earth coordinates at level 0. Geopotential height above ground is indicated below wind value.');
            appendWindRow('metwind', data['metwindspd'], data['metwinddir'], 1, data['geophgt'], data['terhgt'], 'Wind at level 1', 'Wind rotated to earth coordinates at level 1. Geopotential height above ground is indicated below wind value.');
            appendWindRow('metwind', data['metwindspd'], data['metwinddir'], 2, data['geophgt'], data['terhgt'], 'Wind at level 2', 'Wind rotated to earth coordinates at level 2. Geopotential height above ground is indicated below wind value.');
        }

        appendSectionTitle('Thermal');
        appendTimeRow(data['time']);
        appendDataRow('bsratio', bsratioScale);
        appendDataRow('wstar', wstarScale);
        appendDataRow('dwcrit', aglScale);
        appendDataRow('hwcrit', mslScale);
        appendDataRow('hglider', mslScale);

        appendSectionTitle('Clouds & Moisture');
        appendTimeRow(data['time']);
        appendDataRow('cape', capeScale);
        appendDataRow('blcloudpct', cloudScale);
        appendDataRow('rain1', rainScale);
        appendDataRow('blcwbase', mslScale);
        appendDataRow('zsfclcldif');
        appendDataRow('zsfclcl');
        appendDataRow('zblcldif');
        appendDataRow('zblcl');

        appendSectionTitle('Surface');
        appendTimeRow(data['time']);
        appendDataRow('mslpress');
        appendDataRow('sfctemp', tempScale);
        appendDataRow('sfcdewpt');
        appendDataRow('sfcshf');
        appendDataRow('sfcsun');
        appendDataRow('sfcsunpct', sfcsunpctScale);


        appendSectionTitle('Boundary Layer');
        appendTimeRow(data['time']);
        appendDataRow('hbl');
        appendDataRow('dbl');
        appendWind('blwind');
        appendWind('bltopwind');
        appendDataRow('blwindshear');
        appendDataRow('wblmaxmin', wblmaxminScale);
        appendDataRow('bltopvariab');

        $('tr.blipspot-time:first', tbody).addClass('show');
    }

    function getRow(name) {
        if (settings['simpleViewVariables'].includes(name)) {
            return $('<tr class="show"></tr>');
        }
        else {
            return $('<tr></tr>');
        }
    }

    function appendDataRow(name, scale) {
        var i,
            tr = getRow(name);

        tbody.append(tr);
        appendVariableName(tr, name);

        for (i = 0; i < data[name].length; i++) {
            appendDataCell(tr, name, data[name][i], scale);
        }
    }

    function appendDataCell(tr, name, value, scale) {
        if (scale === undefined) {
            tr.append('<td>' + RASPVariable.toString(name, value) + '</td>');
        }
        else {
            tr.append('<td style="background-color:' + getBackgroundColor(name, value, scale) + '">' + RASPVariable.toString(name, value) + '</td>');
        }
    }

    function appendWind(name) {
        if (data[name + 'spd'] !== undefined && data[name + 'dir'] !== undefined) {
            appendWindRow(name, data[name + 'spd'], data[name + 'dir']);
        }
    }

    function appendSectionTitle(title) {
        var i,
            tr = $('<tr class="blipspot-section-header"></tr>');
        tbody.append(tr);
        tr.append('<td><div>' + title + '</div></td>');
        for (i = 1; i < cols; i++) {
            tr.append('<td></td>');
        }
    }

    function appendTimeRow(times) {
        var tr = $('<tr class="blipspot-time"></tr>');
        tbody.append(tr);
        tr.append('<td>Time</td>');

        for (var j = 0; j < times.length; j++) {
            tr.append('<td>' + times[j] + '</td>');
        }
    }

    function getRGBAColor(rgb, a) {
        return 'rgba(' + rgb.join(',') + ',' + a + ')';
    }

    function getBackgroundColor(name, value, scale) {
        if (scale['type'] === 'linear') {
            return getLinearScaleBackgroundColor(RASPVariable.convert(name, value, scale['units']), scale['min'], scale['max'], scale['rgb']);
        }
        if (scale['type'] === 'bilinear') {
            return getBilinearScaleBackgroundColor(RASPVariable.convert(name, value, scale['units']), scale['min'], scale['median'], scale['max'], scale['rgb']);
        }
        if (scale['type'] === 'discrete') {
            return getDiscreteScaleBackgroundColor(RASPVariable.convert(name, value, scale['units']), scale['levels']);
        }
    }

    function getDiscreteScaleBackgroundColor(value, levels) {
        var i, lastColor = levels[0]['color'];

        for (i = 0; i < levels.length; i++) {
            if (levels[i]['limit'] === undefined) {
                return levels[i]['color'];
            }
            else if (typeof levels[i]['limit'] === 'function' && levels[i]['limit'](value)) {
                return levels[i]['color'];
            }
            else if (levels[i]['limit'] >= value) {
                return lastColor;
            }
            lastColor = levels[i]['color'];
        }
        return lastColor;
    }

    function getLinearScaleBackgroundColor(value, min, max, rgb) {
        if (value <= min) {
            return getRGBAColor(rgb, 0);
        }
        if (value >= max) {
            return getRGBAColor(rgb, 1);
        }
        return getRGBAColor(rgb, (value - min) / (max - min));
    }

    function getBilinearScaleBackgroundColor(value, min, median, max, rgb) {
        if (value <= median) {
            return getLinearScaleBackgroundColor(median - value, 0, median - min, rgb[0]);
        }
        else {
            return getLinearScaleBackgroundColor(value - median, 0, max - median, rgb[1]);
        }
    }

    function getWindBackgroundColor(name, spd) {
        return getBackgroundColor(name, spd, windScale);
    }

    function appendWindCell(tr, name, spd, dir, aboveGround) {
        tr.append('<td style="background-color:' + getWindBackgroundColor(name, spd) + '">' +
            '<i class="fas fa-long-arrow-alt-down" style="transform:rotate(' + parseInt(dir) + 'deg);"></i>' + RASPVariable.toString(name, spd) +
            (aboveGround === undefined ? '' : '<br/><span>@' + RASPVariable.toStringWithUnits('geophgt', aboveGround) + '</span>') +
            '</td>');
    }

    function appendVariableName(tr, name, title, description) {
        var td,
            units = RASPVariable.getUnits(name);

        if (raspVariables[name]) {
            if (title === undefined) {
                title = raspVariables[name]["title"];
            }
            if (description === undefined) {
                description = raspVariables[name]["description"];
            }
        }
        if (!title) {
            title = name;
        }

        td = $('<td>' + title + (units ? ' (' + units + ')' : '') + '</td>');
        if (description) {
            //td.append('<i class="fas fa-info-circle"></i>');
            td.attr('title', title);
            td.attr('data-content', description);
            td.popover({
                'container': table[0]
            });
        }
        td.on('click', function (e) {
            $('td[data-content]', tbody).not(this).popover('hide');
            if ($(this).is('[data-content]')) {
                $(this).popover('toggle');
            }
            e.stopPropagation();
        });
        tr.append(td);
    }

    function appendWindRow(name, windSpd, windDir, level, geopotentialHeight, terrainHeight, title, description) {
        var i,
            useLevel = Array.isArray(windSpd[0]),
            tr = getRow(name);

        tbody.append(tr);
        appendVariableName(tr, name, title, description);

        for (i = 0; i < windSpd.length; i++) {
            if (useLevel) {
                appendWindCell(tr, name, windSpd[i][level], windDir[i][level], geopotentialHeight[i][level] - terrainHeight);
            }
            else {
                appendWindCell(tr, name, windSpd[i], windDir[i]);
            }
        }
    }

    loadData();
};

$.fn.blipspot = function (jsonUrl, options) {
    return new Blipspot(this, jsonUrl, options);
};
