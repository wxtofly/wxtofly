//sample attributes
//Array(2)
//0: { coverage: "slight_chance", weather: "rain_showers", intensity: "light", visibility: ValueUnits, attributes: null, … }
//1:
//attributes: { heavy_rain: true, gusty_wind: true }
//coverage: "scattered"
//intensity: null
//value: 2
//visibility: ValueUnits { value: 8.04672, unit: "km" }
//weather: "thunderstorms"
//__proto__: Object
//validTime: ValidTimePeriod { time: Time, hours: 1, days: 0, totalHours: 1 }
//length: 2
//__proto__: Array(0)

//http://www.moratech.com/aviation/metar-class/metar-pg9-ww.html#Weather%20Definitions
class NOAAHourlyWeatherChart extends NOAAHourlyChartBase {
    constructor(weatherVariables, quantitativeVariables, options = {}) {
        options = Object.assign({}, options);
        options['valueExtentPadding'] = 1;

        super(
            {
                'weather': {}
            },
            options);

        this.weatherVariables = weatherVariables;

        if (quantitativeVariables) {
            this.quantitativeVariables = quantitativeVariables;
        }
        else {
            this.quantitativeVariables = {};
        }
    }

    getWeatherValue(weather) {
        //console.log(weather);

        if (NOAAWeather[weather['weather']] === undefined) {
            console.error('Unrecognized weather value: ' + weather['weather']);
        }

        if (NOAAWeather[weather['weather']]['type'] === 'precipitation') {
            switch (weather['coverage']) {
                case 'slight_chance':
                    return 1;
                case 'chance':
                    return 2;
                case 'likely':
                    return 3;
                case 'definite':
                    return 4;

                case 'isolated':
                    return 1;
                case 'scattered':
                    return 2;
                case 'numerous':
                    return 3;
                case 'widespread':
                    return 3;
                default:
                    throw new Error('Unssuported ' + weather['weather'] + ' coverage value: ' + weather['coverage']);
            }
        }
        if (NOAAWeather[weather['weather']]['type'] === 'obscuration') {
            switch (weather['coverage']) {
                case 'isolated':
                    return 1;
                case 'patchy':
                    return 2;
                case 'areas':
                    return 3;
                case 'definite':
                    return 4;
                default:
                    throw new Error('Unssuported ' + weather['weather'] + ' coverage value: ' + weather['coverage']);
            }
        }
        else {
            throw new Error('Unrecognized weather type value: ' + NOAAWeather[weather['weather']]['type']);
        }
    }

    draw(chartGroup, labelGroup, legendGroup, data, timeScale, plotWidth, timeStepWidth, timeStepMinutes, gridPoint, timezone) {
        this.timezone = timezone;
        this.gridPoint = gridPoint;

        this.weatherData = this.getWeatherData(data);
        this.getQuantitativeData(gridPoint);

        super.draw(chartGroup, labelGroup, legendGroup, this.weatherData, timeScale, plotWidth, timeStepWidth, timeStepMinutes);
    }

    getWeatherData(data) {
        let i, j,
            d,
            weatherData = [],
            weatherVariablesDict,
            intensityLevelsDict = {},
            plotVariablesDict = {};

        if (this.weatherVariables) {
            weatherVariablesDict = {};
            for (let w in this.weatherVariables) {
                weatherVariablesDict[w] = w;
            }
        }

        for (i = 0; i < data.length; i++) {
            d = {
                'time': data[i]['time']
            };

            d['weather'] = null;

            if (data[i]['weather'] && data[i]['weather'].length > 0) {
                for (j = 0; j < data[i]['weather'].length; j++) {
                    // weather key value is null
                    if (data[i]['weather'][j]['weather'] === null) {
                        continue;
                    }

                    // weather is not selected
                    if (weatherVariablesDict && !weatherVariablesDict[data[i]['weather'][j]['weather']]) {
                        continue;
                    }

                    if (d['weather'] === null) {
                        d['weather'] = [];
                    }

                    data[i]['weather'][j]['value'] = this.getWeatherValue(data[i]['weather'][j]);
                    plotVariablesDict[data[i]['weather'][j]['weather']] = true;

                    d['weather'].push(data[i]['weather'][j]);

                    if (data[i]['weather'][j]['intensity']) {
                        if (intensityLevelsDict[data[i]['weather'][j]['weather']] === undefined) {
                            intensityLevelsDict[data[i]['weather'][j]['weather']] = {};
                        }
                        if (intensityLevelsDict[data[i]['weather'][j]['weather']][data[i]['weather'][j]['intensity']] === undefined) {
                            intensityLevelsDict[data[i]['weather'][j]['weather']][data[i]['weather'][j]['intensity']] = true;
                        }
                    }
                }
            }
            weatherData.push(d);
        }

        this.weatherVariablesWithData = Object.keys(plotVariablesDict);

        if (!this.weatherVariables) {
            this.weatherVariables = {};
            this.weatherVariablesWithData.forEach(v => this.weatherVariables[v] = {});
        }

        this.intensityLevels = {};
        Object.keys(intensityLevelsDict).forEach(key => this.intensityLevels[key] = Object.keys(intensityLevelsDict[key]));

        return weatherData;
    }

    compressQuantitativeData(gridPoint, variable) {
        if (gridPoint.values[variable] === undefined) {
            return [];
        }

        let data = [],
            i = 0,
            j = 1;

        const values = gridPoint.values[variable].map(d => d === undefined || d === null || d.value === 0 ? null : d);
        values.forEach(d => {
            if (d !== null) {
                d['strValue'] = NOAAVariable.toString(variable, d);
            }
        });

        for (i = 0; i < values.length;) {
            j = i + 1;
            if (values[i] !== null) {
                while (values[j] !== null && values[j] !== undefined && values[i]['strValue'] === values[j]['strValue']) {
                    ['hours', 'days', 'totalHours'].forEach(key => values[i]['validTime'][key] += values[j]['validTime'][key]);
                    values[i].value += values[j].value;
                    j++;
                }
                if (j - i > 1) {
                    values[i]['strValue'] = NOAAVariable.toString(variable, values[i]);
                }
                data.push(values[i]);
            }
            i = j;
        }

        return data;
    }

    getQuantitativeData(gridPoint) {
        for (let v in this.quantitativeVariables) {
            this.weatherData[v] = this.compressQuantitativeData(gridPoint, v);
        }

        //this.plotVariables.forEach(v => {
        //    if (gridPoint.values['weather'].some(array => array.some(w => w['visibility']))) {
        //        let variable = `visibility_${v}`;
        //        this.quantitativeVariables.push(variable);
        //        data[variable] = gridPoint.values['weather'].map(d => {
        //            let w = d.find(w => w['weather'] === v);
        //            return w ? { ...w, 'validTime': d['validTime'] } : w;
        //        }).filter(d => d).map(d => {
        //            return { ...d['visibility'], 'validTime': d['validTime'] };
        //        });
        //    }
        //});
    }

    formatLegendText(variable) {
        return NOAAWeather[variable]['title'];
    }

    appendLineLegends() {
        let x = this.viewWidth,
            legend, text, box, width,
            padding = this.settings['textPadding'];

        this.weatherVariablesWithData.forEach(variable => {
            legend = this.legendGroup
                .append('g')
                .attr('class', 'legend')
                .attr('id', `legend-${variable}`);

            text = legend
                .append('text')
                .attr('alignment-baseline', 'hanging')
                .attr('x', padding)
                .attr('y', padding)
                .text(this.formatLegendText(variable));
            box = text.node().getBBox();
            width = box.width + 2 * padding;
            x -= width;
            legend.insert('rect', 'text')
                .attr('class', 'fill-' + variable)
                .attr('width', width)
                .attr('height', box.height + padding);
            legend.attr('transform', 'translate(' + x + ', 0)');

            legend.on('click', () => {
                d3.event.stopPropagation();
                this.toggleWeatherVariable(variable);
            });
        });

        for (let variable in this.quantitativeVariables) {
            if (this.weatherData[variable].length === 0) {
                return;
            }

            legend = this.legendGroup
                .append('g')
                .attr('class', 'legend amount-' + variable)
                .attr('id', `amount-${variable}`);

            text = legend
                .append('text')
                .attr('alignment-baseline', 'hanging')
                .attr('x', padding)
                .attr('y', padding)
                .text(`${NOAAVariable[variable]['title']} (${NOAAVariable.getUnits(variable)})`);
            box = text.node().getBBox();
            width = box.width + 2 * padding;
            x -= width;
            legend.insert('rect', 'text')
                .style('fill-opacity', 1)
                .attr('width', width)
                .attr('height', box.height + padding);
            legend.attr('transform', 'translate(' + x + ', 0)');

            legend.on('click', () => {
                d3.event.stopPropagation();
                this.toggleQuantitativeVariable(variable);
            });
        }
    }

    toggleWeatherVariable(variable) {
        if (this.weatherVariables[variable]['visible'] === false) {
            this.plot.select(`g#${variable}`).attr('visibility', 'visible');
            this.legendGroup.select(`g#legend-${variable}`).classed('legend-hidden', false);
            this.weatherVariables[variable]['visible'] = true;
        }
        else {
            this.plot.select(`g#${variable}`).attr('visibility', 'hidden');
            this.legendGroup.select(`g#legend-${variable}`).classed('legend-hidden', true);
            this.weatherVariables[variable]['visible'] = false;
        }
    }

    toggleQuantitativeVariable(variable) {
        if (this.quantitativeVariables[variable]['visible'] === false) {
            this.plot.select(`g#${variable}`).attr('visibility', 'visible');
            this.legendGroup.select(`g#amount-${variable}`).classed('legend-hidden', false);
            this.quantitativeVariables[variable]['visible'] = true;
        }
        else {
            this.plot.select(`g#${variable}`).attr('visibility', 'hidden');
            this.legendGroup.select(`g#amount-${variable}`).classed('legend-hidden', true);
            this.quantitativeVariables[variable]['visible'] = false;
        }
    }

    appendBars() {
        let maxWidth = Math.floor(this.timeStepWidth / 2),
            width,
            base = this.valueScale(0),
            x,
            y;

        this.weatherVariablesWithData.forEach(weather => {
            this.weatherVariables[weather]['g'] = this.plot.append('g').attr('id', weather);
        });

        this.data.filter(d => d['weather']).forEach(d => {
            width = maxWidth / d['weather'].length;
            x = this.timeScale(d['time']) - maxWidth / 2;
            d['weather'].forEach(weather => {
                y = this.valueScale(weather['value']);
                this.weatherVariables[weather['weather']]['g'].append('rect')
                    .attr('class', 'fill-' + weather['weather'] + (weather['intensity'] ? ' intensity-' + weather['intensity'] : ''))
                    .attr('x', x)
                    .attr('width', width)
                    .attr('y', y)
                    .attr('height', base - y);
                x += width;
            });
        });
    }

    appendData() {
        this.appendBars();
        let i = 0;
        for (let v in this.quantitativeVariables) {
            this.appendQuantitativeData(v, i);
            i++;
        }
    }

    appendQuantitativeData(variable, index) {
        if (!this.data[variable] || !this.data[variable].length || this.data[variable].length === 0) {
            return;
        }

        let g,
            height,
            textHeight,
            yCenter = this.valueScale(index + 0.5),
            y,
            x,
            width;

        g = this.plot.append('g').attr('id', variable).attr('class', 'amount amount-' + variable);

        // get text height
        textHeight = g.append('text').text('TEST').node().getBBox().height;
        g.selectAll('text').remove();
        // text height includes some extra space so add only 1 padding
        height = textHeight;
        y = yCenter - height / 2;

        this.data[variable].forEach(d => {
            x = this.timeScale(d['validTime'].time.toTimezone(this.timezone));
            width = this.timeScale(NOAA.time(d['validTime'].time.milliseconds + d['validTime'].totalHours * 36e5).toTimezone(this.timezone)) - x;

            g.append('rect')
                .attr('x', x)
                .attr('width', width)
                .attr('y', y)
                .attr('height', height);

            g.append('text')
                .attr('x', x + width / 2)
                .attr('y', yCenter)
                .attr('text-anchor', 'middle')
                .attr('alignment-baseline', 'central')
                .text(d['strValue'] + (d['validTime'].totalHours < 3 ? '' : NOAAVariable.getUnits(variable)));

        });
    }

    getValueAxisTicks() {
        return [0, 1, 2, 3, 4];
    }

    getValuesExtent() {
        return [0, 4];
    }

    getValueTickTextObscurations(d) {
        switch (d) {
            case 1:
                return 'Isolated';
            case 2:
                return 'Patchy';
            case 3:
                return 'Areas';
            case 4:
                return 'WdSprd';
        }
    }

    getValueTickTextPrecipitation(d) {
        switch (d) {
            case 1:
                return 'SChc';
            case 2:
                return 'Chc';
            case 3:
                return 'Lkly';
            case 4:
                return 'Ocnl';
        }
    }

    valueTickFormat(d) {
        let precipitation = false,
            obscuration = false;

        if (d === 0) {
            return '';
        }

        this.weatherVariablesWithData.forEach(v => {
            if (!NOAAWeather[v]) {
                throw new Error('Unrecognized weather: ' + v);
            }

            if (NOAAWeather[v]['type'] === 'precipitation') {
                precipitation = true;
            }
            else if (NOAAWeather[v]['type'] === 'obscuration') {
                obscuration = true;
            }
            else {
                throw new Error('Unrecognized weather ' + v + ' type: ' + NOAAWeather[v]['type']);
            }
        });

        if (precipitation && obscuration) {
            return this.getValueTickTextPrecipitation(d) + '/' + this.getValueTickTextObscurations(d);
        }
        else if (precipitation) {
            return this.getValueTickTextPrecipitation(d);
        }
        else {
            return this.getValueTickTextObscurations(d);
        }
    }
}

NOAA.hourlyChart.weather = function (weatherVariables, options) {
    return new NOAAHourlyWeatherChart(weatherVariables, null, options);
};

NOAA.hourlyChart.precipitationRain = function (options) {
    return new NOAAHourlyWeatherChart(
        { 'rain': {}, 'rain_showers': {}, 'drizzle': {} },
        { 'quantitativePrecipitation': {}, 'visibility': {} },
        options);
};

NOAA.hourlyChart.precipitationSnow = function (options) {
    return new NOAAHourlyWeatherChart(
        { 'snow': {}, 'snow_showers': {}},
        { 'snowfallAmount': {} },
        options);
};

NOAA.hourlyChart.fog = function (options) {
    return new NOAAHourlyWeatherChart(
        { 'fog': {} },
        { 'visibility': {} },
        options);
};
