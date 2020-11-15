var Units = {
    time: {
        metric: {
            anchor: 'ms',
            ms: {
                toImperial: value => value
            },
            s: {
                toAnchor: v => v * 1000,
                fromAnchor: v => v / 1000
            },
            minutes: {
                toAnchor: v => v * 60000,
                fromAnchor: v => v / 60000
            },
            hours: {
                toAnchor: v => v * 360000,
                fromAnchor: v => v / 360000
            }
        },
        imperial: {
            anchor: 'ms',
            ms: {
                toImperial: value => value
            },
            s: {
                toAnchor: v => v * 1000,
                fromAnchor: v => v / 1000
            },
            minutes: {
                toAnchor: v => v * 60000,
                fromAnchor: v => v / 60000
            },
            hours: {
                toAnchor: v => v * 360000,
                fromAnchor: v => v / 360000
            }
        }
    },
    length: {
        metric: {
            anchor: 'm',
            m: {
                toImperial: function (value) {
                    return value * 3.280839895;
                }
            },
            mm: {
                toAnchor: function (value) {
                    return value / 1000;
                },
                fromAnchor: function (value) {
                    return value * 1000;
                }
            },
            cm: {
                toAnchor: function (value) {
                    return value / 100;
                },
                fromAnchor: function (value) {
                    return value * 100;
                }
            },
            km: {
                toAnchor: function (value) {
                    return value * 1000;
                },
                fromAnchor: function (value) {
                    return value / 1000;
                }
            }
        },
        imperial: {
            anchor: 'ft',
            ft: {
                toMetric: function (value) {
                    return value * 0.3048;
                }
            },
            in: {
                toAnchor: function (value) {
                    return value / 12;
                },
                fromAnchor: function (value) {
                    return value * 12;
                }
            },
            miles: {
                toAnchor: function (value) {
                    return value * 5280.0;
                },
                fromAnchor: function (value) {
                    return value / 5280.0;
                }
            }
        }
    },
    temperature: {
        metric: {
            anchor: 'C',
            C: {
                toImperial: function (value) {
                    return (9 / 5) * value + 32;
                }
            },
            K: {
                toAnchor: function (value) {
                    return value - 273.15;
                },
                fromAnchor: function (value) {
                    return value + 273.15;
                }
            }
        },
        imperial: {
            anchor: 'F',
            F: {
                toMetric: function (value) {
                    return (value - 32) * (5 / 9);
                }
            }
        }
    },
    speed: {
        metric: {
            anchor: 'm/s',
            'm/s': {
                toImperial: function (value) {
                    return value * 196.8503937;
                }
            },
            'km/h': {
                toAnchor: function (value) {
                    return value / 3.6;
                },
                fromAnchor: function (value) {
                    return value * 3.6;
                }
            },
            'cm/s': {
                toAnchor: function (value) {
                    return value / 100;
                },
                fromAnchor: function (value) {
                    return value * 100;
                }
            }
        },
        imperial: {
            anchor: 'ft/min',
            'ft/min': {
                toMetric: function (value) {
                    return value / 196.8503937;
                }
            },
            'mph': {
                toAnchor: function (value) {
                    return value * 88;
                },
                fromAnchor: function (value) {
                    return value / 88;
                }
            },
            'kt': {
                toAnchor: function (value) {
                    return value / 0.00987473;
                },
                fromAnchor: function (value) {
                    return value * 0.00987473;
                }
            },
            'kn': {
                toAnchor: function (value) {
                    return value / 0.00987473;
                },
                fromAnchor: function (value) {
                    return value * 0.00987473;
                }
            }
        }
    },
    percentage: {
        metric: {
            anchor: '%',
            '%': {
                toImperial: function (value) {
                    return value;
                }
            }
        },
        imperial: {
            anchor: '%',
            '%': {
                toMetric: function (value) {
                    return value;
                }
            }
        }
    },
    direction: {
        metric: {
            anchor: 'deg',
            'deg': {
                toImperial: function (value) {
                    return value;
                }
            }
        },
        imperial: {
            anchor: 'deg',
            'deg': {
                toMetric: function (value) {
                    return value;
                }
            }
        }
    },
    'specific energy': {
        metric: {
            anchor: 'J/kg',
            'J/kg': {
                toImperial: function (value) {
                    return value;
                }
            }
        },
        imperial: {
            anchor: 'J/kg',
            'J/kg': {
                toMetric: function (value) {
                    return value;
                }
            }
        }
    },
    'pressure': {
        metric: {
            anchor: 'Pa',
            'Pa': {
                toImperial: function (value) {
                    return value;
                }
            },
            'hPa': {
                toAnchor: function (value) {
                    return value * 100;
                },
                fromAnchor: function (value) {
                    return value / 100;
                }
            },
            'mbar': {
                toAnchor: function (value) {
                    return value * 100;
                },
                fromAnchor: function (value) {
                    return value / 100;
                }
            }
        },
        imperial: {
            anchor: 'Pa',
            'Pa': {
                toImperial: function (value) {
                    return value;
                }
            },
            'mbar': {
                toAnchor: function (value) {
                    return value * 100;
                },
                fromAnchor: function (value) {
                    return value / 100;
                }
            }
        }
    },
    'irradiance': {
        metric: {
            anchor: 'W/m2',
            'W/m2': {
                toImperial: function (value) {
                    return value;
                }
            }
        },
        imperial: {
            anchor: 'W/m2',
            'W/m2': {
                toMetric: function (value) {
                    return value;
                }
            }
        }
    },
    'convert': function (value) {
        this.value = value;
        return this;
    },
    'from': function (units) {
        this.inUnitInfo = this.findUnits(units);
        return this;
    },
    'to': function (units) {

        if (this.inUnitInfo.units === units) {
            return this.value;
        }

        // find unit info for the passed in units and the conversion
        var outUnitInfo = this.findUnits(units);
        if (this.inUnitInfo.measure !== outUnitInfo.measure) {
            throw new Error('In and out units are not from the same measure group');
        }

        // convert value to anchor value
        var anchorUnits = null;
        var anchorValue = null;
        if (this.inUnitInfo.measureUnits[this.inUnitInfo.units].toAnchor) {
            anchorValue = this.inUnitInfo.measureUnits[this.inUnitInfo.units].toAnchor(this.value);
        }
        else {
            anchorValue = this.value;
        }

        if (this.inUnitInfo.system === outUnitInfo.system) {
            return outUnitInfo.measureUnits[units].fromAnchor(anchorValue);
        }

        var transformValue = null;
        if (this.inUnitInfo.system === 'metric') {
            transformValue = this.inUnitInfo.measureUnits[this.inUnitInfo.measureUnits.anchor].toImperial(anchorValue);
        }
        else {
            transformValue = this.inUnitInfo.measureUnits[this.inUnitInfo.measureUnits.anchor].toMetric(anchorValue);
        }
        return outUnitInfo.measureUnits[units].fromAnchor ? outUnitInfo.measureUnits[units].fromAnchor(transformValue) : transformValue;
    },
    'findUnits': function (units) {
        for (var measure in this) {
            if (this.hasOwnProperty(measure)) {
                if (this[measure].metric[units]) {
                    return {
                        measureUnits: this[measure].metric,
                        system: 'metric',
                        measure: measure,
                        units: units
                    };
                }
                else if (this[measure].imperial[units]) {
                    return {
                        measureUnits: this[measure].imperial,
                        system: 'imperial',
                        measure: measure,
                        units: units
                    };
                }
            }
        }
        throw new Error('Unable to find unit info for ' + units);
    }
};
