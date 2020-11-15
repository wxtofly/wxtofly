var NOAAWeather = {
    'rain': {
        title: 'Rain',
        description: '',
        type: 'precipitation'
    },
    'rain_showers': {
        title: 'Rain Showers',
        description: '',
        type: 'precipitation'
    },
    'snow_showers': {
        title: 'Snow Showers',
        description: '',
        type: 'precipitation'
    },
    'snow': {
        title: 'Snow',
        description: '',
        type: 'precipitation'
    },
    'drizzle': {
        title: 'Drizzle',
        description: '',
        type: 'obscuration'
    },
    'thunderstorms': {
        title: 'Thunderstorm',
        description: '',
        type: 'precipitation'
    },
    'fog': {
        title: 'Fog',
        description: '',
        type: 'obscuration'
    },
    'smoke': {
        title: 'Smoke',
        description: '',
        type: 'obscuration'
    },
    'blowing_dust': {
        title: 'Blowing Dust',
        description: '',
        type: 'obscuration'
    },
    'haze': {
        title: 'Haze',
        description: '',
        type: 'obscuration'
    }
};

var NOAAVariable = {
    unitAlias: {
        'degC': 'C',
        'percent': '%',
        'm_s-1': 'm/s',
		'km_h-1': 'km/h',
        'degree_(angle)': null
    },
    // default measurement system
    'measurementSystem': 'imperial',
    distance: {
        title: 'Distance',
        description: '',
        metric: 'km',
        imperial: 'miles',
        digits: 1
    },
    'elevation': {
        title: 'Elevation',
        description: '',
        // desired units for metric measurement system
        metric: 'm',
        // desired units for imperial measurement system
        imperial: 'ft',
        // number of digits to display
        digits: 0
    },
    apparentTemperature: {
        title: 'Feels Like',
        description: '',
        metric: 'C',
        imperial: 'F',
        digits: 0
    },
    windChill: {
        title: 'Wind Chill',
        description: '',
        metric: 'C',
        imperial: 'F',
        digits: 0
    },
    'temperature': {
        title: 'Temperature',
        description: '',
        metric: 'C',
        imperial: 'F',
        digits: 0
    },
    dewpoint: {
        title: 'Dewpoint',
        description: '',
        metric: 'C',
        imperial: 'F',
        digits: 0
    },
    heatIndex: {
        title: 'Heat Index',
        description: '',
        metric: 'C',
        imperial: 'F',
        digits: 0
    },
    'skyCover': {
        title: 'Sky Cover',
        description: '',
        metric: '%',
        imperial: '%',
        digits: 0
    },
    'probabilityOfPrecipitation': {
        title: 'Precipitation Potential',
        description: '',
        metric: '%',
        imperial: '%',
        digits: 0
    },
    'probabilityOfThunder': {
        title: 'Thunder Potential',
        description: '',
        metric: '%',
        imperial: '%',
        digits: 0
    },
    'relativeHumidity': {
        title: 'Relative Humidity',
        description: '',
        metric: '%',
        imperial: '%',
        digits: 0
    },
    'windSpeed': {
        title: 'Surface Wind',
        description: '',
        metric: 'km/h',
        imperial: 'mph',
        digits: 0
    },
    'windDirection': {
        title: 'Surface Wind Direction',
        description: '',
        metric: 'deg',
        imperial: 'deg',
        digits: 0
    },
    'windGust': {
        title: 'Gusts',
        description: '',
        metric: 'km/h',
        imperial: 'mph',
        digits: 0
    },
    'transportWindSpeed': {
        title: 'Transport Wind',
        description: '',
        metric: 'km/h',
        imperial: 'mph',
        digits: 0
    },
    'transportWindDirection': {
        title: 'Transport Wind Direction',
        description: '',
        metric: 'deg',
        imperial: 'deg',
        digits: 0
    },
    'twentyFootWindSpeed': {
        title: '20ft Wind',
        description: '',
        metric: 'km/h',
        imperial: 'mph',
        digits: 0
    },
    'twentyFootWindDirection': {
        title: '20ft Wind Direction',
        description: '',
        metric: 'deg',
        imperial: 'deg',
        digits: 0
    },
    'tidePrediction': {
        title: 'Tide Prediction',
        description: '',
        metric: 'm',
        imperial: 'ft',
        digits: 2
    },
    'snowLevel': {
        title: 'Show Level',
        description: '',
        metric: 'm',
        imperial: 'ft',
        digits: 0
    },
    'mixingHeight': {
        title: 'Mixing Height',
        description: '',
        metric: 'm',
        imperial: 'ft',
        digits: 0
    },
    'ceilingHeight': {
        title: 'Ceiling Height',
        description: '',
        metric: 'm',
        imperial: 'ft',
        digits: 0
    },
    'visibility': {
        title: 'Visibility',
        description: '',
        metric: 'km',
        imperial: 'miles',
        digits: 0
    },
    'quantitativePrecipitation': {
        title: 'Precipitation Amount',
        description: '',
        metric: 'mm',
        imperial: 'in',
        digits: {
            metric: 0,
            imperial: 2
        }
    },
    'snowfallAmount': {
        title: 'Snowfall Amount',
        description: '',
        metric: 'mm',
        imperial: 'in',
        digits: {
            metric: 0,
            imperial: 2
        }
    },
    // pressure has no units in the JSON
    'pressure': {
        title: 'Pressure',
        description: '',
        digits: 2
    },
    'lightningActivityLevel': {
        title: 'Lightning Activity Level',
        description: ''
    },
    'hainesIndex': {
        title: 'Haines Index',
        description: 'A numerical value that indicates the potential for large wildfires to experience extreme fire behavior. The HI combines both the instability and dryness of the air by examining the lapse rate between two pressure levels in the atmosphere and the dryness of one of the pressure levels.'
    },
    'lowVisibilityOccurrenceRiskIndex': {
        title: 'Low Visibility Occurrence Risk Index',
        description: ''
    },
    'davisStabilityIndex': {
        title: 'Davis Stability Index',
        description: ''
    },
    'stability': {
        title: 'Turner Stability Index',
        description: ''
    },
    'atmosphericDispersionIndex': {
        title: 'Atmospheric Dispersion Index',
        description: ''
    },
    // this seems to be dupliated in JSON response
    'dispersionIndex': {
        title: 'Atmospheric Dispersion Index',
        description: ''
    },
    'redFlagThreatIndex': {
        title: 'Red Flag Threat Index',
        description: ''
    },
    'windWaveHeight': {
        title: 'Wind Wave Height',
        description: '',
        metric: 'm',
        imperial: 'ft',
        digits: 0
    },
    'waveHeight': {
        title: 'Significant Wave Height',
        description: '',
        metric: 'm',
        imperial: 'ft',
        digits: 0
    },
    'primarySwellHeight': {
        title: 'Primary Swell Height',
        description: '',
        metric: 'm',
        imperial: 'ft',
        digits: 0
    },
    'primarySwellDirection': {
        title: 'Primary Swell Direction',
        description: '',
        digits: 0
    },
    'wavePeriod': {
        title: 'Primary Swell Period',
        description: '',
        metric: 's',
        imperial: 's',
        digits: 0
    },
    'secondarySwellHeight': {
        title: 'Secondary Swell Height',
        description: '',
        metric: 'm',
        imperial: 'ft',
        digits: 0
    },
    'secondarySwellDirection': {
        title: 'Secondary Swell Direction',
        description: '',
        digits: 0
    },
    'wavePeriod2': {
        title: 'Secondary Swell Period',
        description: '',
        metric: 's',
        imperial: 's',
        digits: 0
    },
    'barometricPressure': {
        title: 'Barometric Pressure',
        description: '',
        metric: 'mbar',
        imperial: 'mbar',
        digits: 0
    },
    'seaLevelPressure': {
        title: 'Sea Level Pressure',
        description: '',
        metric: 'mbar',
        imperial: 'mbar',
        digits: 0
    },
    'cloudBase': {
        title: 'Cloud Base',
        description: '',
        metric: 'm',
        imperial: 'ft',
        digits: 0
    },
    // set default measurement system
    setMeasurementSystem: function (measurementSystem) {
        if (measurementSystem === 'metric' || measurementSystem === 'imperial') {
            this['measurementSystem'] = measurementSystem;
        }
        else {
            throw new Error('"' + measurementSystem + '" is not recognized measurement system');
        }
    },
    'convertNOAAUnits': function (units) {
        if (units in this.unitAlias) {
            return this.unitAlias[units];
        }
        return units;
    },
    'convert': function (variable, valueUnits, toUnits) {
        if (toUnits === undefined) {
            toUnits = this[variable][this['measurementSystem']];
        }
        const fromUnits = this.convertNOAAUnits(valueUnits.unit);
        if (fromUnits) {
            return Units.convert(valueUnits.value).from(fromUnits).to(toUnits);
        }
        else {
            return valueUnits.value;
        }
    },
    // return variable value as string in desired measurement system
    'toString': function (variable, valueUnits, measurementSystem) {
        var value = valueUnits.value,
            units = this.convertNOAAUnits(valueUnits.unit);

        if (measurementSystem !== undefined) {
            this.setMeasurementSystem(measurementSystem);
        }
        if (this[variable] === undefined) {
            throw new Error('"' + variable + '" is not recognized variable name');
        }
        if (isNaN[valueUnits.value]) {
            throw new Error('value is not a number');
        }
        if (this[variable]['fillValue'] !== undefined && valueUnits.value === this[variable]['fillValue']) {
            return '-';
        }
        if (units !== this[variable][this['measurementSystem']]) {
            value = Units.convert(value).from(units).to(this[variable][this['measurementSystem']]);
        }
        return this.formatValue(variable, value);
    },
    'formatValue': function (variable, value, units) {
        if (units) {
            value = Units.convert(value).from(units).to(this.getUnits(variable));
        }

        if (this[variable]['digits'] === undefined) {
            return value;
        }
        if (typeof this[variable]['digits'] === 'number') {
            return value.toFixed(this[variable]['digits']);
        }
        else {
            return value.toFixed(this[variable]['digits'][this['measurementSystem']]);
        }
    },
    // return variable value as string in desired measurement system including units
    'toStringWithUnits': function (variable, valueUnits, measurementSystem) {
        return this.toString(variable, valueUnits, measurementSystem) + this.getUnits(variable);
    },
    // return variable units for desired measurement system
    'getUnits': function (variable, measurementSystem) {
        if (measurementSystem !== undefined) {
            this.setMeasurementSystem(measurementSystem);
        }
        return this[variable][this['measurementSystem']];
    }
};