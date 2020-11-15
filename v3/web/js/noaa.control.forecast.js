class NOAAForecastControl extends NOAAControl {
    constructor(container, point, options) {

        const defaults = {
            'hourly': false,
            'showDetails': false
        };

        super(container, $.extend({}, defaults, options));

        this.point = point;
        this.container.addClass('forecast');
        this.details = $('<div class="details"></div>');
        this.container.append(this.details);

        this.periodDivs = {};
        this.getData();
    }

    appendDetail(forecastPeriod) {
        let detail = $('<div class="period collapse"></div>');
        this.details.append(detail);

        detail.append('<div class="period-name">' + forecastPeriod.name + '</div>');
        detail.append('<div class="period-detail">' + forecastPeriod.detailedForecast + '</div>');

        this.periodDivs[forecastPeriod.name] = detail;
    }

    draw() {
        super.draw();

        let i, div;

        this.header.append('<span><strong>Elevation: </strong>' + NOAAVariable.toStringWithUnits('elevation', this.forecast.elevation) + '</span>');
        this.header.append('<span class="ml-2"><strong>Updated: </strong>' + moment(this.forecast.updated.toTimezone(this.point.timeZone)).format('l HH:mm:ss') + ' (' + this.point.timeZone + ')</span>');

        for (i = 0; i < this.forecast.periods.length; i++) {
            div = $('<div></div>');
            this.appendDetail(this.forecast.periods[i]);
            div.noaaForecastPeriod(this.forecast.periods[i], {
                'click': (forecastPeriod) => {
                    if (this.settings['showDetails']) {
                        return;
                    }
                    if (this.lastPeriod === forecastPeriod) {
                        this.periodDivs[forecastPeriod.name].collapse('toggle');
                    }
                    else {
                        if (this.lastPeriod !== undefined) {
                            this.periodDivs[this.lastPeriod.name].collapse('hide');
                        }
                        this.lastPeriod = forecastPeriod;
                        this.periodDivs[forecastPeriod.name].collapse('show');
                    }
                }
            });
            this.body.append(div);
        }

        if (this.settings['showDetails']) {
            for (let period in this.periodDivs) {
                this.periodDivs[period].collapse('show');
            }
        }
    }

    getData() {
        super.getData();

        if (this.settings['hourly']) {
            this.showSpinner('Obtaining Hourly Forecast...');
            this.point.getGridPointForecastHourly().then(data => {
                this.forecast = data;
                this.draw();
            }, this.noaaError);
        }
        else {
            this.showSpinner('Obtaining Daily Forecast...');
            this.point.getGridPointForecast().then(data => {
                this.forecast = data;
                this.draw();
            }, this.noaaError);
        }
    }
}

$.fn.noaaForecast = function (point, options) {
    return new NOAAForecastControl(this, point, options);
};