var RASPVariable = {
    // default measurement system
    'measurementSystem': 'imperial',
    geophgt: {
        // units used WRF/RASP model
        model: 'm',
        // desired units for metric measurement system
        metric: 'm',
        // desired units for imperial measurement system
        imperial: 'ft',
        // number of digits to display
        digits: 0
    },
    terhgt: {
        model: 'm',
        metric: 'm',
        imperial: 'ft',
        digits: 0
    },
    blcloudpct: {
        model: '%',
        metric: '%',
        imperial: '%',
        digits: 0
    },
    blcwbase: {
        model: 'm',
        fillValue: -999,
        metric: 'm',
        imperial: 'ft',
        digits: 0
    },
    bltopvariab: {
        model: 'm',
        metric: 'm',
        imperial: 'ft',
        digits: 0
    },
    bltopwind: {
        model: 'm/s',
        metric: 'km/h',
        imperial: 'mph',
        digits: 0
    },
    blwindshear: {
        model: 'm/s',
        metric: 'km/h',
        imperial: 'mph',
        digits: 1
    },
    blwind: {
        model: 'm/s',
        metric: 'km/h',
        imperial: 'mph',
        digits: 0
    },
    bsratio: {
        model: '',
        metric: '',
        imperial: '',
        digits: 0
    },
    cape: {
        model: 'J/kg',
        metric: 'J/kg',
        imperial: 'J/kg',
        digits: 1
    },
    dbl: {
        model: 'm',
        metric: 'm',
        imperial: 'ft',
        digits: 0
    },
    dwcrit: {
        model: 'm',
        metric: 'm',
        imperial: 'ft',
        digits: 0
    },
    hbl: {
        model: 'm',
        metric: 'm',
        imperial: 'ft',
        digits: 0
    },
    height: {
        model: 'm',
        metric: 'm',
        imperial: 'ft',
        digits: 0
    },
    hglider: {
        model: 'm',
        metric: 'm',
        imperial: 'ft',
        digits: 0
    },
    hwcrit: {
        model: 'm',
        metric: 'm',
        imperial: 'ft',
        digits: 0
    },
    mslpress: {
        model: 'hPa',
        metric: 'mbar',
        imperial: 'mbar',
        digits: 0
    },
    rain1: {
        model: 'mm',
        metric: 'mm',
        imperial: 'in',
        digits: 1
    },
    sfcdewpt: {
        model: 'C',
        metric: 'C',
        imperial: 'F',
        digits: 0
    },
    sfcshf: {
        model: 'W/m2',
        metric: 'W/m2',
        imperial: 'W/m2',
        digits: 0
    },
    sfcsun: {
        model: 'W/m2',
        fillValue: -999,
        metric: 'W/m2',
        imperial: 'W/m2',
        digits: 0
    },
    sfcsunpct: {
        model: '%',
        metric: '%',
        imperial: '%',
        digits: 0
    },
    sfctemp: {
        model: 'C',
        metric: 'C',
        imperial: 'F',
        digits: 0
    },
    umet: {
        model: 'm/s',
        metric: 'km/h',
        imperial: 'mph',
        digits: 3
    },
    metwind: {
        model: 'm/s',
        metric: 'km/h',
        imperial: 'mph',
        digits: 0
    },
    metwind10: {
        model: 'm/s',
        metric: 'km/h',
        imperial: 'mph',
        digits: 0
    },
    vmet: {
        model: 'm/s',
        metric: 'km/h',
        imperial: 'mph',
        digits: 3
    },
    wblmaxmin: {
        model: 'cm/s',
        metric: 'm/s',
        imperial: 'ft/min',
        digits: 1
    },
    wstar: {
        model: 'm/s',
        metric: 'm/s',
        imperial: 'ft/min',
        digits: 1
    },
    zblcl: {
        model: 'm',
        metric: 'm',
        imperial: 'ft',
        digits: 0
    },
    zblcldif: {
        model: 'm',
        metric: 'm',
        imperial: 'ft',
        digits: 0
    },
    zsfclcl: {
        model: 'm',
        metric: 'm',
        imperial: 'ft',
        digits: 0
    },
    zsfclcldif: {
        model: 'm',
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
    'convert': function (variable, value, units) {
        if (!this[variable]['model']) {
            return value;
        }
        return Units.convert(value).from(this[variable]['model']).to(units);
    },
    // return variable value as string in desired measurement system
    'toString': function (variable, value, measurementSystem) {
        if (measurementSystem !== undefined) {
            this.setMeasurementSystem(measurementSystem);
        }
        if (this[variable] === undefined) {
            throw new Error('"' + variable + '" is not recognized variable name');
        }
        if (isNaN[value]) {
            throw new Error('value is not a number');
        }
        if (this[variable]['fillValue'] !== undefined && value === this[variable]['fillValue']) {
            return '-';
        }
        if (this[variable]['model'] !== this[variable][this['measurementSystem']]) {
            value = Units.convert(value).from(this[variable]['model']).to(this[variable][this['measurementSystem']]);
        }
        return value.toFixed(this[variable]['digits']);
    },
    // return variable value as string in desired measurement system including units
    'toStringWithUnits': function (variable, value, measurementSystem) {
        return this.toString(variable, value, measurementSystem) + this.getUnits(variable);
    },
    // return variable units for desired measurement system
    'getUnits': function (variable, measurementSystem) {
        if (measurementSystem !== undefined) {
            this.setMeasurementSystem(measurementSystem);
        }
        return this[variable][this['measurementSystem']];
    }
};