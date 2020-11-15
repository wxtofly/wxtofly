class NOAAHourlyPressureChart extends NOAAHourlyChartBase {
    constructor(variables, options = {}) {
        options = Object.assign({}, options);
        options['valueExtentPadding'] = 0;
        options['valuePosition'] = {
            'default': 'alternate'
        };
        super(variables, options);
    }

    getValuesExtent() {
        let extent = super.getValuesExtent(),
            multipleOf,
            ticks = Math.floor(this.viewHeight / this.timeStepWidth) - 1,
            mag = 1;

        let a = 10 * (extent[1] - extent[0]) / ticks;

        while (a / mag > 1) {
            mag *= 10;
        }

        if (a < mag / 2) {
            multipleOf = mag / 2;
        }
        else {
            multipleOf = mag;
        }

        multipleOf /= 10;

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

NOAA.hourlyChart.pressure = function (options) {
    return new NOAAHourlyPressureChart({ 'pressure': {} }, options);
};