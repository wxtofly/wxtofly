class NOAAHourlyChart extends NOAAChart {
    constructor(element, gridPoint, timezone, latlon, charts, options = {}) {
        super(element, timezone, latlon, charts, Object.assign({}, NOAAHourlyChart.defaults, options));
        this.gridPoint = gridPoint;
        this.now = Date.now();
    }

    getTimeExtent() {
        // calculate data extents
        let timeExtent = d3.extent(this.data, d => d['time']);
        //modify time extent to include extra hour on each end
        timeExtent = [
            new Date(timeExtent[0].getTime()),
            new Date(timeExtent[1].getTime())
        ];
        timeExtent[0].setMinutes(timeExtent[0].getMinutes() - this.settings['timeStepMinutes'] * this.settings['timePaddingSteps']);
        timeExtent[1].setMinutes(timeExtent[1].getMinutes() + this.settings['timeStepMinutes'] * this.settings['timePaddingSteps']);

        return timeExtent;
    }

    filterTime(time) {
        if (this.settings['startTime'] === 'current') {
            return time > this.now || this.now - time < 3600000;
        }
        else {
            return true;
        }
    }

    getData() {
        let i,
            d,
            variable,
            key,
            data = [],
            variablesDict = {},
            weatherVariablesDict = {},
            validTimes = this.gridPoint.validTimes.toArray();

        for (key in this.charts) {
            if (this.charts[key]['chart'] === undefined) {
                continue;
            }

            this.charts[key]['variables'] = {};
            for (let v in this.charts[key]['chart'].variables) {
                if (v in variablesDict) {
                    this.charts[key]['variables'][v] = variablesDict[v];
                }
                else {
                    this.charts[key]['variables'][v] = {
                        'values': this.gridPoint.mapToValidTimes(v),
                        'hasValues': false
                    };
                    variablesDict[v] = this.charts[key]['variables'][v];
                }
            }

            if (this.charts[key]['chart'].weatherVariables) {
                this.charts[key]['weatherVariables'] = {};

                for (let v in this.charts[key]['chart'].weatherVariables) {
                    if (v in weatherVariablesDict) {
                        this.charts[key]['weatherVariables'][v] = weatherVariablesDict[v];
                    }
                    else {
                        this.charts[key]['weatherVariables'][v] = {
                            'hasValues': false
                        };
                        weatherVariablesDict[v] = this.charts[key]['weatherVariables'][v];
                    }
                }
            }
        }

        Object.keys(variablesDict).forEach(key => {
            if (variablesDict[key]['values'] === undefined || variablesDict[key]['values'].length === 0) {
                delete variablesDict[key];
            }
        });


        for (i = 0; i < validTimes.length; i++) {
            if (this.filterTime(validTimes[i].milliseconds)) {
                d = {
                    'time': validTimes[i].toTimezone(this.timezone)
                };

                for (variable in variablesDict) {
                    if (variablesDict[variable]['values'][i] !== undefined && variablesDict[variable]['values'][i] !== null) {

                        if (variable === 'weather') {
                            d[variable] = variablesDict[variable]['values'][i];
                            d[variable].forEach(w => {
                                if (w['weather'] !== null && weatherVariablesDict[w['weather']] !== undefined) {
                                    weatherVariablesDict[w['weather']]['hasValues'] = true;
                                }
                            });
                        }
                        else {
                            // some variable values are unit-less, for example haines index
                            if (variablesDict[variable]['values'][i].unit) {
                                d[variable] = NOAAVariable.convert(variable, variablesDict[variable]['values'][i]);
                            }
                            else {
                                d[variable] = variablesDict[variable]['values'][i].value;
                            }
                        }
                        variablesDict[variable]['hasValues'] = true;
                    }
                    else {
                        d[variable] = null;
                    }
                }
                data.push(d);
            }
        }

        return data;
    }

    drawChart(chart, name, chartGroup, labelGroup, legendGroup) {
        if (name === 'tide') {
            chart.asyncDraw(chartGroup, labelGroup, legendGroup, this.data, this.timeScale, this.plotWidth, this.settings['timeStepWidth'], this.settings['timeStepMinutes'], this.timezone);
        }
        else {
            chart.draw(chartGroup, labelGroup, legendGroup, this.data, this.timeScale, this.plotWidth, this.settings['timeStepWidth'], this.settings['timeStepMinutes'], this.gridPoint, this.timezone);
        }
    }
}

NOAAHourlyChart.defaults = {
    // max distance from a nearest CO-OPS tide station to show tide chart
    'maxTideStationDistance': 10000,
    //'startTime': 'current',
    'startTime': null
};