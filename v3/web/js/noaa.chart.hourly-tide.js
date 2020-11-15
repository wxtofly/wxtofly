class NOAAHourlyTidePredictionChart extends NOAAHourlyChartBase {
    constructor(station, options = {}) {

        options = Object.assign({}, NOAAHourlyTidePredictionChart.defaults, options);
        options['valueLabelInterval'] = 1;
        options['valuePosition'] = {
            'default': 'top'
        };
        options['valueTickUnits'] = NOAAVariable.getUnits('tidePrediction');
        options['curve'] = d3.curveMonotoneX;

        super(
            {
                'tidePrediction': {}
            },
            options);

        this.station = station;
    }

    handleError(error) {
        this.removeLoader();
        console.log(error);
    }

    showLoader(group) {
        this.loader = this.appendLoader(group, this.settings['width'] / 2, this.settings['height'] / 2, Math.min(60, this.settings['height'] / 2));
    }

    removeLoader() {
        this.loader.remove();
    }

    asyncDraw(chartGroup, labelGroup, legendGroup, data, timeScale, plotWidth, timeStepWidth, timeStepMinutes, timezone) {

        let startTime = new Date(data[0]['time'].getTime() - 12 * 36e5);
        let endTime = new Date(data[data.length - 1]['time'].getTime() + 12 * 36e5);
        this.showLoader(labelGroup);

        NOAA.TidesAndCurrents.products.predictions(this.station.id, this.settings['datum']).getDateRange(startTime, endTime).then(
            predictions => {

                this.removeLoader();

                if (this.settings['showStationInfo']) {
                    //div.append($('<div class="tide-station-info"></div>')
                    //    .append('<span><strong class="mr-1">NOAA CO-OPS Station:</strong>' + station['name'] + '</span>')
                    //    .append('<span class="ml-2"><strong class="mr-1">Distance:</strong>' + NOAAVariable.toStringWithUnits('distance', station['distance']) + '</span>')
                    //);
                }
                this.tideData = this.getData(predictions, timezone);
                this.draw(chartGroup, labelGroup, legendGroup, data, timeScale, plotWidth, timeStepWidth, timeStepMinutes);

            }, this.handleError);
    }

    getTimeExtent() {
        return d3.extent(this.getTimeAxisTicks());
    }

    getData(predictions, timezone) {
        let i,
            data = [];

        for (i = 0; i < predictions.length; i++) {
            data.push({
                'time': predictions[i]['time'].toTimezone(timezone),
                'tidePrediction': NOAAVariable.convert('tidePrediction', predictions[i]['value']),
                'type': predictions[i]['type']
            });
        }

        return data;
    }

    getValuesExtent() {
        let extent = d3.extent(this.tideData, d => d['tidePrediction']);
        // find nearest multiple of 10
        extent[0] = Math.round(extent[0] / 10) * 10;
        extent[1] = Math.round(extent[1] / 10) * 10;

        return extent;
    }

    getValueAxisTicks() {
        return d3.range(this.valueExtent[0] + 10, this.valueExtent[1], 10);
    }

    valueTickFormat(d) {
        return d.toFixed(0) + (this.settings['valueTickUnits'] ? this.settings['valueTickUnits'] : '');
    }

    appendData() {
        this.appendLine('tidePrediction', this.tideData);
    }

    formatValueLabel(variable, d) {
        return (d['type'] === 'H' ? 'High: ' : 'Low: ') + NOAAVariable.formatValue(variable, d[variable]) + NOAAVariable.getUnits(variable) + ' / ' + d3.timeFormat(this.settings['timeTickFormat'])(d['time']);
    }

    appendValueLineLabels(g, variable) {
        var self = this;

        g.selectAll('.line-label')
            .data(this.tideData.filter(function (d) { return self.filterValueData(variable, d); }))
            .enter()
            .append('text')
            .attr('class', 'line-label fill-' + variable)
            .attr('x', function (d) { return self.timeScale(d['time']); })
            .attr('y', function (d) { return self.valueScale(d[variable]); })
            .attr('alignment-baseline', function (d) { return d['type'] === 'H' ? 'auto' : 'hanging'; })
            .attr('dy', function (d) { return (d['type'] === 'H' ? -1 : 1) * (self.settings['valuePadding'] + self.settings['markerSize']); })
            .attr('text-anchor', 'middle')
            .html(function (d) {
                return self.formatValueLabel(variable, d);
            });
    }

    appendLineLegends() {
        super.appendLineLegends(['tidePrediction']);
    }

    formatLegendText(variable) {
        let text = `${NOAAVariable[variable]['title']} (${NOAAVariable.getUnits(variable)} ${this.settings['datum']})`;
        if (this.settings['showStationInfo']) {
            text += ` station: ${this.station['name']}`;
        }
        return text;
    }
}

NOAAHourlyTidePredictionChart.defaults = {
    'showStationInfo': true,
    'datum': NOAA.TidesAndCurrents.api.datum.MLLW
};

NOAA.hourlyChart.tidePredictions = function (station, options) {
    return new NOAAHourlyTidePredictionChart(station, options);
};
