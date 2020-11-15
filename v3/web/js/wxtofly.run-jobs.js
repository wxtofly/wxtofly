var RunJob = function (name) {
    var parts = name.split('+');

    this.name = name;
    this.region = parts[0];
    this.init_time = parseInt(parts[1]);
}

var RunJobs = function (options) {

    var jobsJsonUrl = 'json/jobs.json',
        self = this,
        settings,
        defaults = {
            onLoaded: null
        },
        machineJobs = {},
        regions = {},
        job;

    settings = $.extend({}, defaults, options);

    $.get(jobsJsonUrl + '?' + (new Date()).getTime(), function (data) {
        $.each(data, function () {

            $.each(this['jobs'], function () {
                job = new RunJob(this);
                if (regions[job.region] === undefined) {
                    regions[job.region] = null;
                }
            });

            if (machineJobs[this['machine']] === undefined) {
                machineJobs[this['machine']] = this['jobs'];
            }
        });

        self.machines = Object.keys(machineJobs);
        self.regions = Object.keys(regions);

        if (settings['onLoaded'] !== null) {
            settings['onLoaded'].call(self, {
                'regions': self.regions,
                'machines': self.machines,
                'machineJobs': machineJobs
            });
        }
    })
}