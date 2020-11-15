class NOAAStationChartControl extends NOAAControlChart {
    constructor(container, stationId, timezone, latlon, options) {
        var defaults = {
            'maxDays': 3,
            // callbacks
            'onStationObservations': null
        };

        super(container, $.extend({}, defaults, options));
        this.container.addClass('observations');
        this.stationId = stationId;
        this.timezone = timezone;
        this.latlon = latlon;
        this.getData();
    }

    draw() {
        super.draw();

        if (this.observations[0]['elevation']) {
            this.header.append('<span><strong>Elevation: </strong>' + NOAAVariable.toStringWithUnits('elevation', this.observations[0]['elevation']) + '</span>');
        }

        let latestTime = this.observations.map(d => d.timestamp).reduce((accumulator, currentValue) => {
            if (accumulator) {
                if (currentValue.milliseconds > accumulator.milliseconds) {
                    accumulator = currentValue;
                }
                return accumulator;
            }
            else {
                return currentValue;
            }
        });

        this.header.append('<span class="ml-2"><strong>Latest: </strong>' + moment(latestTime.toTimezone(this.timezone)).format('l HH:mm:ss') + ' (' + this.timezone + ')</span>');

        this.chart = new NOAAObservationsChart(this.chartElement, this.observations, this.timezone, this.latlon,
            // pass on settings for individual charts
            this.settings['charts'],
            // SVG settings
            {
                'width': this.getChartWidth(),
                'height': this.getChartHeight()
            });
        this.chart.draw();
    }

    getData() {
        this.showSpinner('Obtaining Station Observations ...');

        let start = new Date();
        start.setDate(start.getDate() - this.settings['maxDays']);

        NOAA.stations().getObservations(this.stationId, start).then(data => {
            this.observations = data;

            if (typeof this.settings['onStationObservations'] === 'function') {
                this.settings['onStationObservations'].call(this, this.observations);
            }

            if (this.observations === undefined || this.observations === null) {
                this.noaaError('Station returned invalid data');
            }
            else if (this.observations.length === 0) {
                this.noaaError('Station has no recent data');
            }
            else {
                this.draw();
            }
        }, this.noaaError);
    }
}

$.fn.noaaStationChart = function (stationId, timezone, latlon, options) {
    return new NOAAStationChartControl(this, stationId, timezone, latlon, options);
};