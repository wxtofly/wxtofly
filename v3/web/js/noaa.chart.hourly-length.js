class NOAAHourlyLengthChart extends NOAAHourlyChartBase {
    constructor(variables, options = {}) {
        options = Object.assign({}, options);
        options['valueExtentPadding'] = 0;
        options['valuePosition'] = {
            'default': 'alternate'
        };
        super(variables, options);
    }

    // filter out negative values
    filterValueData(variable, d) {
        return d[variable] && d[variable] > 0;
    }

    getValuesExtent() {
        const ticks = Math.floor(this.viewHeight / this.timeStepWidth) - 1;

        let extent = super.getValuesExtent(),
            multipleOf,
            mag = 1;

        let a = (extent[1] - extent[0]) / ticks;

        while (a / mag > 1) {
            mag *= 10;
        }

        if (a < mag / 2) {
            multipleOf = mag / 2;
        }
        else {
            multipleOf = mag;
        }

        // find nearest multiple of 10
        extent[0] = Math.floor(extent[0] / multipleOf) * multipleOf;
        extent[1] = Math.ceil(extent[1] / multipleOf) * multipleOf;

        this.settings['valueExtentPadding'] = multipleOf;

        return extent;
    }

    getValueAxisTicks() {
        return d3.range(this.valueExtent[0] + this.settings['valueExtentPadding'], this.valueExtent[1], this.settings['valueExtentPadding']);
    }
}

NOAA.hourlyChart.snowLevel = function (options) {
    return new NOAAHourlyLengthChart({ 'snowLevel': {} },
        Object.assign(options, {
            'valueTickUnits': NOAAVariable.getUnits('snowLevel')
        }));
};

NOAA.hourlyChart.mixingHeight = function (options) {
    return new NOAAHourlyLengthChart({ 'mixingHeight': {} },
        Object.assign(options, {
            'valueMultiplier': 100
        }));
};

NOAA.hourlyChart.ceilingHeight = function (options) {
    return new NOAAHourlyLengthChart({ 'ceilingHeight': {} },
        Object.assign(options, {
            'valueMultiplier': 100
        }));
};

NOAA.hourlyChart.visibility = function (options) {
    return new NOAAHourlyLengthChart({ 'visibility': {} },
        Object.assign(options, {
            'valueAxisMin': 0
        }));
};