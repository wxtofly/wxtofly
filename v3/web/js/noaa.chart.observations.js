class NOAAObservationsChart extends NOAAChart {
    constructor(element, observations, timezone, latlon, charts, options = {}) {
        super(element, timezone, latlon, charts, options);
        this.observations = observations;
    }

    getTimeHourCeil(date) {
        let ceil = new Date(date);
        ceil.setMilliseconds(0);
        ceil.setMinutes(0);
        ceil.setHours(ceil.getHours() + 1);
        return ceil;
    }

    getTimeHourFloor(date) {
        let floor = new Date(date);
        floor.setMilliseconds(0);
        floor.setMinutes(0);
        return floor;
    }

    determineTimeStep() {
        let avgStep = this.data.map((d, index) => {
            if (index < this.data.length - 1) {
                return Math.abs(d['time'].getTime() - this.data[index + 1]['time'].getTime());
            }
            else {
                return 0;
            }
        }).reduce((a, b) => a + b, 0) / (this.data.length - 1) / 60000;

        avgStep = Math.round(avgStep / 10) * 10;

        return avgStep;
    }

    getTimeExtent() {
        // calculate data extents
        let timeExtent = d3.extent(this.data, d => d['time']);
        //modify time extent to include extra hour on each end
        timeExtent = [
            this.getTimeHourCeil(timeExtent[1]),
            this.getTimeHourFloor(timeExtent[0])
        ];

        this.settings['timeStepMinutes'] = this.determineTimeStep();

        timeExtent[0].setMinutes(timeExtent[0].getMinutes() + this.settings['timeStepMinutes'] * this.settings['timePaddingSteps']);
        timeExtent[1].setMinutes(timeExtent[1].getMinutes() - this.settings['timeStepMinutes'] * this.settings['timePaddingSteps']);
        return timeExtent;
    }

    getData() {
        let i,
            d,
            variable,
            key,
            data = [],
            variablesDict = {};

        for (key in this.charts) {
            if (this.charts[key]['chart'] === undefined) {
                continue;
            }

            this.charts[key]['variables'] = {};
            for (let v in this.charts[key]['chart'].variables) {
                if (v in variablesDict) {
                    this.charts[key]['variables'][v] = variablesDict[v];
                }
                else {
                    this.charts[key]['variables'][v] = {
                        'hasValues': false
                    };
                    variablesDict[v] = this.charts[key]['variables'][v];
                }
            }
        }

        this.observations.forEach(observation => {
            if (this.filterTime(observation['timestamp'].milliseconds)) {
                d = {
                    'time': observation['timestamp'].toTimezone(this.timezone)
                };

                for (variable in variablesDict) {
                    if (observation['values'][variable]) {

                        // some variable values are unit-less, for example haines index
                        if (observation['values'][variable].unit) {
                            d[variable] = NOAAVariable.convert(variable, observation['values'][variable]);
                        }
                        else {
                            d[variable] = observation['values'][variable].value;
                        }
                        variablesDict[variable]['hasValues'] = true;
                    }
                    else {
                        d[variable] = null;
                    }
                }
                data.push(d);
            }
        });

        return data;
    }
}
