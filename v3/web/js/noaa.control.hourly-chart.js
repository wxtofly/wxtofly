class NOAAHourlyChartControl extends NOAAControlChart {
    constructor(container, point, gridPoint = null, options) {
        var defaults = {
            // callbacks
            'onGridPoint': null
        };

        super(container, $.extend({}, defaults, options));
        this.container.addClass('hourly-forecast');
        this.point = point;
        this.gridPoint = gridPoint;
        this.getData();
    }

    draw() {
        super.draw();

        this.header.append('<span><strong>Elevation: </strong>' + NOAAVariable.toStringWithUnits('elevation', this.gridPoint.elevation) + '</span>');
        this.header.append('<span class="ml-2"><strong>Updated: </strong>' + moment(this.gridPoint.updateTime.toTimezone(this.point.timeZone)).format('l HH:mm:ss') + ' (' + this.point.timeZone + ')</span>');

        this.chart = new NOAAHourlyChart(this.chartElement, this.gridPoint, this.point.timeZone, this.point.geometry.latlon,
            // pass on settings for individual charts
            this.settings['charts'],
            // SVG settings
            {
                'width': this.getChartWidth(),
                'height': this.getChartHeight(),
                'chartHeight': this.settings['chartHeight']
            });
        this.chart.draw();
    }

    checkGridPointValues() {
        Object.keys(this.gridPoint.values).forEach(v => {
            if (this.gridPoint.values[v] && this.gridPoint.values[v].length > 0 && NOAAVariable[v] === undefined) {
                switch (v) {
                    case 'weather':
                    case 'minTemperature':
                    case 'maxTemperature':
                        break;
                    default:
                        console.error(v);
                }
            }
        });
    }

    getData() {
        if (this.gridPoint) {
            this.draw();
        }
        else {
            this.showSpinner('Obtaining Hourly Forecast Data...');

            //$.get('json/noaa/gridpoints.json', data => {
            //    this.gridPoint = new NOAA.GridPoint(data);
            //    console.log(this.gridPoint);
            //    this.checkGridPointValues();
            //    if (typeof this.settings['onGridPoint'] === 'function') {
            //        this.settings['onGridPoint'].call(this, this.gridPoint);
            //    }
            //    this.draw();
            //});

            this.point.getGridPoint().then(data => {
                this.gridPoint = data;
                console.log(this.gridPoint);
                this.checkGridPointValues();
                if (typeof this.settings['onGridPoint'] === 'function') {
                    this.settings['onGridPoint'].call(this, this.gridPoint);
                }
                this.draw();
            }, this.noaaError);
        }
    }
}

$.fn.noaaHourlyChart = function (point, a, b) {
    if (b === undefined) {
        return new NOAAHourlyChartControl(this, point, null, a);
    }
    return new NOAAHourlyChartControl(this, point, a, b);
};