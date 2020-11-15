class NOAAHourlyTemperatureChart extends NOAAHourlyChartBase {
    constructor(variables, options = {}) {
        options = Object.assign({}, options);
        options['valuePosition'] = {
            'default': 'top',
            'dewpoint': 'bottom'
        };
        options['refValues'] = [Units.convert(0).from('C').to(NOAAVariable.getUnits('temperature'))];

        super(variables, options);
    }

    getValuesExtent() {
        let extent = super.getValuesExtent();
        // find nearest multiple of 10
        extent[0] = Math.round(extent[0] / 10) * 10;
        extent[1] = Math.round(extent[1] / 10) * 10;

        return extent;
    }

    getValueAxisTicks() {
        return d3.range(this.valueExtent[0] + 10, this.valueExtent[1], 10);
    }

    appendValueAxis() {
        super.appendValueAxis();
        this.labelGroup.selectAll('.axis-labels .tick text').html(function () {
            return this.innerHTML + '&deg;' + NOAAVariable.getUnits('temperature');
        });
    }

    formatValueLabel(variable, d) {
        return NOAAVariable.formatValue(variable, d[variable]) + '&deg;';
    }
}

NOAA.hourlyChart.temperature = function (options) {
    return new NOAAHourlyTemperatureChart(
        {
            'temperature': {},
            'dewpoint': {},
            'windChill': {
                'visible': false
            },
            'heatIndex': {
                'visible': false
            },
            'apparentTemperature': {
                'visible': false
            }
        },
        options);
};
