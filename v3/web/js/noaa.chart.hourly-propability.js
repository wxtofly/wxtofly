class NOAAHourlyProbabilityChart extends NOAAHourlyChartBase {
    constructor(variables, options = {}) {
        options = Object.assign({}, options);
        options['valuePosition'] = {
            'default': 'top'
        };
        options['valueExtentPadding'] = 0;
        options['valueTickUnits'] = '%';
        super(variables, options);
    }

    getValuesExtent() {
        return [-20, 120];
    }

    getValueAxisTicks() {
        return d3.range(0, 120, 20);
    }

    formatValueLabel(variable, d) {
        return NOAAVariable.formatValue(variable, d[variable]) + '%';
    }
}

NOAA.hourlyChart.sky = function (options) {
    return new NOAAHourlyProbabilityChart({ 'skyCover': {}, 'probabilityOfPrecipitation': {}, 'relativeHumidity': {} }, options);
};

NOAA.hourlyChart.probabilityOfThunder = function (options) {
    return new NOAAHourlyProbabilityChart({ 'probabilityOfThunder': {} }, options);
};
