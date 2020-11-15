class NOAAHourlyWindChart extends NOAAHourlyChartBase {
    constructor(windComponents, windGustVariable = null, options = {}) {
        options = Object.assign({}, options);
        options['valuePosition'] = {
            'default': 'bottom'
        };
        options['valuePosition'][windGustVariable] = 'top';
        options['valueTickUnits'] = NOAAVariable.getUnits(windComponents['speed']);

        let variables = {};
        variables[windComponents['speed']] = {};
        variables[windComponents['direction']] = {};
        if (windGustVariable) {
            variables[windGustVariable] = {};
        }

        super(
            variables,
            Object.assign({}, NOAAHourlyWindChart.defaults, options));

        this.windGustVariable = windGustVariable;
        this.windComponents = windComponents;
    }

    getValuesExtent() {
        let extent = [
            d3.min(this.data, d => d3.min(this.variableKeys.filter(v => v !== this.windComponents['direction']).map(v => d[v]))),
            d3.max(this.data, d => d3.max(this.variableKeys.filter(v => v !== this.windComponents['direction']).map(v => d[v])))
        ];
        // find nearest multiple of 10
        extent[0] = Math.round(extent[0] / 10) * 10;
        extent[1] = Math.round(extent[1] / 10) * 10;

        return extent;
    }

    getValueAxisTicks() {
        return d3.range(this.valueExtent[0] + 10, this.valueExtent[1], 10);
    }

    filterValueData(variable, d) {
        if (variable === this.windGustVariable && d[variable]) {
            return d[this.windGustVariable] - d[this.windComponents['speed']] >= this.settings['minGustDelta'];
        }
        return d[variable];
    }

    appendLines(variable) {
        this.defWindBarbSymbols();
        this.appendLine(this.windComponents['speed']);
        if (this.windGustVariable) {
            this.appendLine(this.windGustVariable);
        }
    }

    defWindBarbSymbols() {
        // wind barb symbols are rotated 90deg

        this.defs = this.chartGroup.append('defs');

        this.defs.append('symbol').attr('id', 'wind-barb')
            .append('line')
            .attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', this.settings['windBarb']['length'])
            .attr('y2', 0)
            .attr('class', 'wind-barb');
        this.defs.append('symbol').attr('id', 'wind-flag-5')
            .append('line')
            .attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', this.settings['windBarb']['flagLean'] / 2)
            .attr('y2', this.settings['windBarb']['flagLength'] / 2)
            .attr('class', 'wind-barb');
        this.defs.append('symbol').attr('id', 'wind-flag-10')
            .append('line')
            .attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', this.settings['windBarb']['flagLean'])
            .attr('y2', this.settings['windBarb']['flagLength'])
            .attr('class', 'wind-barb');
        this.defs.append('symbol').attr('id', 'wind-flag-50')
            .append('polygon')
            .attr('points', [0, 0, this.settings['windBarb']['flagLean'], this.settings['windBarb']['flagLength'], 2 * this.settings['windBarb']['flagLean'], 0, 0, 0].join(','))
            .attr('class', 'wind-barb');
    }

    // speeds from https://www.weather.gov/hfo/windbarbinfo
    getWindBarbSpeed(windSpeed, units) {
        let knots = Math.round(Units.convert(windSpeed).from(units).to('kn'));
        let barb = 5 * Math.floor(windSpeed / 5);
        if (knots % 5 >= 3) {
            barb += 5;
        }
        return barb;
    }

    appendWindBarbSymbol(speed, id) {
        if (speed === 0) {
            let r = this.settings['windBarb']['flagLength'] / 2;
            this.defs.append('symbol').attr('id', id)
                .append('circle')
                .attr('r', r)
                .attr('cx', r)
                .attr('cy', r)
                .attr('class', 'wind-barb-0');
        }
        else {
            let symbol = this.defs.append('symbol').attr('id', id)
                .append('use')
                .attr('xlink:href', '#wind-barb');

            let x = this.settings['windBarb']['length'],
                fifties,
                tens,
                fives,
                i;

            if (speed === 5) {
                x -= this.settings['windBarb']['flagPadding'];
            }

            if (speed >= 50) {
                fifties = Math.floor(speed / 50);
                speed = speed % 50;

                for (i = 0; i < fifties; i++) {
                    x -= 2 * this.settings['windBarb']['flagPadding'];
                    symbol.append('use')
                        .attr('xlink:href', '#wind-flag-50')
                        .attr('x', x);
                }
                x -= this.settings['windBarb']['flagPadding'];
            }

            if (speed >= 10) {
                tens = Math.floor(speed / 10);
                speed = speed % 10;
                for (i = 0; i < tens; i++) {
                    symbol.append('use')
                        .attr('xlink:href', '#wind-flag-10')
                        .attr('x', x);
                    x -= this.settings['windBarb']['flagPadding'];
                }
            }

            fives = speed / 5;
            for (i = 0; i < fives; i++) {
                symbol.append('use')
                    .attr('xlink:href', '#wind-flag-5')
                    .attr('x', x);
                x -= this.settings['windBarb']['flagPadding'];
            }

        }
    }

    getWindBarbSymbol(d) {
        let barbSpeed = this.getWindBarbSpeed(d[this.windComponents['speed']], NOAAVariable.getUnits(this.windComponents['speed'])),
            symbolName;

        symbolName = 'wind-barb-' + barbSpeed;

        if (!this.defs.node().querySelector('#' + symbolName)) {
            this.appendWindBarbSymbol(barbSpeed, symbolName);
        }
        return symbolName;
    }

    appendValueMarkers(variable, entry) {
        if (variable === this.windComponents['speed']) {
            entry.append('use').attr('xlink:href', d => '#' + this.getWindBarbSymbol(d))
                .attr('x', d => this.timeScale(d['time']))
                .attr('y', d => this.valueScale(d[variable]))
                .attr('transform', d => {
                    if (this.getWindBarbSpeed(d[this.windComponents['speed']], NOAAVariable.getUnits(this.windComponents['speed'])) === 0) {
                        return 'translate(' + [-this.settings['windBarb']['flagLength'] / 2, -this.settings['windBarb']['flagLength'] / 2].join(',') + ')';
                    }
                    return 'rotate(' + [d[this.windComponents['direction']] - 90, this.timeScale(d['time']), this.valueScale(d[variable])].join(',') + ')';
                });
        }
        super.appendValueMarkers(variable, entry);
    }

    appendLineLegends(variables) {
        super.appendLineLegends(variables.filter(v => v !== this.windComponents['direction']));
    }
}

NOAAHourlyWindChart.defaults = {
    'minGustDelta': 4,
    'windBarb': {
        'length': 20,
        'flagLength': 8,
        'flagPadding': 2,
        'flagLean': 3
    }
};

NOAA.hourlyChart.surfaceWind = function (options) {
    return new NOAAHourlyWindChart(
        {
            'speed': 'windSpeed',
            'direction': 'windDirection'
        },
        'windGust',
        options);
};

NOAA.hourlyChart.transportWind = function (options) {
    return new NOAAHourlyWindChart(
        {
            'speed': 'transportWindSpeed',
            'direction': 'transportWindDirection'
        },
        null,
        options);
};

NOAA.hourlyChart.twentyFootWind = function (options) {
    return new NOAAHourlyWindChart(
        {
            'speed': 'twentyFootWindSpeed',
            'direction': 'twentyFootWindDirection'
        },
        null,
        options);
};
