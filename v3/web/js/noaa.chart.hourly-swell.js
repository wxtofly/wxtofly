class NOAAHourlySwellChart extends NOAAHourlyChartBase {
    constructor(swellComponents, options = {}) {
        options = Object.assign({}, options);
        options['valueExtentPadding'] = 0;
        options['valueAxisMin'] = 0;
        options['valuePosition'] = {
            'default': 'bottom'
        };
        options['valuePosition'][swellComponents['period']] = 'top';

        super(
            Object.values(swellComponents),
            Object.assign({}, NOAAHourlySwellChart.defaults, options));

        this.swellComponents = swellComponents;
    }

    getValuesExtent() {
        let extent = [
            d3.min(this.data, d => d3.min(this.variablesKeys.filter(v => v !== this.swellComponents['direction']).map(v => d[v]))),
            d3.max(this.data, d => d3.max(this.variablesKeys.filter(v => v !== this.swellComponents['direction']).map(v => d[v])))
        ];

        let step;
        const ticks = Math.floor(this.viewHeight / this.timeStepWidth);

        step = Math.ceil((extent[1] - extent[0]) / ticks);
        extent[1] = step * ticks;
        this.settings['valueExtentPadding'] = step;
        return extent;
    }

    getValueAxisTicks() {
        return d3.range(this.valueExtent[0] + this.settings['valueExtentPadding'], this.valueExtent[1], this.settings['valueExtentPadding']);
    }

    appendLines(variable) {
        this.defineSwellSymbol();
        this.appendLine(this.swellComponents['height']);
    }

    defineSwellSymbol() {
        // swell symbol is rotated 90deg
        this.defs = this.chartGroup.append('defs');

        // move symbol down by arrowLength
        let x1 = 0, y1 = this.settings['swellSymbol']['arrowLength'];

        let symbol = this.defs.append('symbol').attr('id', 'swell').attr('class', 'swell');

        symbol.append('line')
            .attr('x1', x1)
            .attr('y1', y1)
            .attr('x2', this.settings['swellSymbol']['length'])
            .attr('y2', y1);
        symbol.append('line')
            .attr('x1', this.settings['swellSymbol']['length'])
            .attr('y1', y1)
            .attr('x2', this.settings['swellSymbol']['length'] - this.settings['swellSymbol']['arrowLength'])
            .attr('y2', y1 - this.settings['swellSymbol']['arrowLength'] / 2);
        symbol.append('line')
            .attr('x1', this.settings['swellSymbol']['length'])
            .attr('y1', y1)
            .attr('x2', this.settings['swellSymbol']['length'] - this.settings['swellSymbol']['arrowLength'])
            .attr('y2', y1 + this.settings['swellSymbol']['arrowLength'] / 2);
    }

    appendValueMarkers(variable, entry) {
        let self = this;
        if (variable === this.swellComponents['height']) {
            entry.append('use').attr('xlink:href', '#swell')
                .attr('x', function (d) { return self.timeScale(d['time']); })
                .attr('y', function (d) { return self.valueScale(d[variable]) - self.settings['swellSymbol']['arrowLength']; })
                .attr('transform', function (d) {
                    return 'rotate(' + [d[self.swellComponents['direction']] + 90, self.timeScale(d['time']), self.valueScale(d[variable])].join(',') + ')';
                });
        }
        super.appendValueMarkers(variable, entry);
    }

    appendLineLegends(variables) {
        super.appendLineLegends(variables.filter(v => v !== this.swellComponents['direction']));
    }
}

NOAAHourlySwellChart.defaults = {
    'swellSymbol': {
        'length': 20,
        'arrowLength': 8
    }
};

NOAA.hourlyChart.primarySwell = function (options) {
    return new NOAAHourlySwellChart(
        {
            'height': 'primarySwellHeight',
            'direction': 'primarySwellDirection',
            'period': 'wavePeriod'
        },
        options);
};

NOAA.hourlyChart.secondarySwell = function (options) {
    return new NOAAHourlySwellChart(
        {
            'height': 'secondarySwellHeight',
            'direction': 'secondarySwellDirection',
            'period': 'wavePeriod2'
        },
        options);
};

