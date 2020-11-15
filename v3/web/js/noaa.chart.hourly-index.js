class NOAAHourlyIndexChart extends NOAAHourlyChartBase {
    constructor(variables, indexScale, options = {}) {
        options = Object.assign({}, options);
        options['valueExtentPadding'] = indexScale[2] || 1;

        super(variables, options);

        this.indexScale = indexScale;
    }

    getValueAxisTicks() {
        let step = this.indexScale[2] || 1;

        if (this.indexScale[0] < this.indexScale[1]) {
            return d3.range(this.indexScale[0], this.indexScale[1] + 1, step);
        }
        else {
            return d3.range(this.indexScale[1], this.indexScale[0] + 1, step);
        }
    }

    getValuesExtent() {
        return this.indexScale.slice(0, 2);
    }
}


//https://graphical.weather.gov/definitions/defineHaines.html
//https://graphical.weather.gov/definitions/defineLAL.html
NOAA.hourlyChart.lightningActivityAndHainesIndex = function (options) {
    return new NOAAHourlyIndexChart({
        'hainesIndex': {}, 'lightningActivityLevel': {}
    }, [1, 6], options);
};

//https://graphical.weather.gov/definitions/defineLVORI.html
NOAA.hourlyChart.lowVisibilityOccurrenceRiskIndex = function (options) {
    return new NOAAHourlyIndexChart({ 'lowVisibilityOccurrenceRiskIndex': {} }, [1, 10], options);
};

//https://graphical.weather.gov/definitions/defineDSI.html
NOAA.hourlyChart.davisStabilityIndex = function (options) {
    return new NOAAHourlyIndexChart({ 'davisStabilityIndex': {} }, [1, 4], options);
};

//http://weather.gfc.state.ga.us/Info/WXexp.aspx
NOAA.hourlyChart.turnerStabilityIndex = function (options) {
    return new NOAAHourlyIndexChart({ 'stability': {} }, [7, 1], options);
};

//http://weather.gfc.state.ga.us/Info/WXexp.aspx
NOAA.hourlyChart.atmosphericDispersionIndex = function (options) {
    return new NOAAHourlyIndexChart({ 'atmosphericDispersionIndex': {} }, [0, 250, 25], options);
};

//https://graphical.weather.gov/definitions/defineRFTI.html
NOAA.hourlyChart.redFlagThreatIndex = function (options) {
    return new NOAAHourlyIndexChart({ 'redFlagThreatIndex': {} }, [0, 10], options);
};
