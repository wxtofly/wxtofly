class NOAAHourlyWaveChart extends NOAAHourlyChartBase {
    constructor(variables, options = {}) {
        options = Object.assign({}, options);
        options['valueExtentPadding'] = 0;
        options['valueAxisMin'] = 0;
        options['valuePosition'] = {
            'default': 'top'
        };
        super(variables, options);
    }

    getValuesExtent() {
        let extent = super.getValuesExtent(),
            step,
            ticks = Math.floor(this.viewHeight / this.timeStepWidth);

        step = Math.ceil((extent[1] - extent[0]) / ticks);
        extent[1] = step * ticks;
        this.settings['valueExtentPadding'] = step;
        return extent;
    }

    getValueAxisTicks() {
        return d3.range(this.valueExtent[0] + this.settings['valueExtentPadding'], this.valueExtent[1], this.settings['valueExtentPadding']);
    }
}

NOAA.hourlyChart.significantWaveHeight = function (options) {
    return new NOAAHourlyWaveChart({'waveHeight': {} }, options);
};

NOAA.hourlyChart.windWaveHeight = function (options) {
    return new NOAAHourlyWaveChart({'windWaveHeight': {} }, options);
};