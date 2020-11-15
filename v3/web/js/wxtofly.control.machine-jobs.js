var MachineJobs = function (container, machine, options) {

    var self = this,
        settings,
        defaults = {
            'interval': 60,
            'cols': 4,
        },
        interval,
        jobs,
        jobInfoContainers = {};

    settings = $.extend({}, defaults, options);
    interval = parseInt(settings['interval']);

    container.addClass('container-fluid');

    function getJobsInfo() {
        var url = 'logs/' + machine + '.jobs.json?' + new Date().getTime();
        console.log('jobs: ' + url);
        $.getJSON(url, function (data) {
            loadJobsInfo(data);
        });
    }

    function loadJobsInfo(data) {
        var colCount = settings['cols'],
            colClass = 'col-md-' + parseInt(12 / 4),
            col,
            row,
            card,
            header;

        if (jobs === undefined) {
            jobs = Object.keys(data);
            container.empty();
            jobs.forEach(function (job) {
                if (colCount == settings['cols']) {
                    row = $('<div class="row"></div>');
                    container.append(row);
                    colCount = 0;
                }
                col = $('<div></div>').addClass(colClass);
                row.append(col);
                card = $('<div class="card job-info"></div>');
                linkLogs = $('<a href="logs.html#' + job + '"></a>');
                header = $('<h6 class="card-header">' + job + '</h6>');
                card.append(linkLogs);
                linkLogs.append(header);
                col.append(card);

                jobInfoContainers[job] = {
                    'container': $('<div class="card-body"></div>'),
                    'card': card,
                    'header': header
                };
                card.append(jobInfoContainers[job]['container']);

                colCount++;
            });
        }
        jobs.forEach(function (job) {
            jobInfoContainers[job]['container'].empty();
            appendJobInfo(jobInfoContainers[job]['container'], data[job]);

            $('i', jobInfoContainers[job]['header']).remove();
            jobInfoContainers[job]['header'].removeClass();
            jobInfoContainers[job]['header'].addClass('card-header job-info-state-' + data[job]['state']);
        });
    }

    function formatTimestamp(time) {
        return moment(new Date(time)).format('HH:mm:ss');
    }

    function formatDuration(start, end) {
        var diff = end - start,
            hours, minutes, seconds, reminder;
            
        seconds = diff / 1000;
        hours = parseInt(seconds / 3600);
        remainder = seconds % 3600;
        minutes = parseInt(remainder / 60);
        seconds = parseInt(remainder % 60);

        return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    }

    function appendInfo(container, name, value) {
        container.append('<div><span class="job-info-name">' + name + ':</span><span class="job-info-value">' + value + '</span></div>');
    }

    function appendRunStage(container, jobInfo, stage) {
        if (jobInfo['run']) {
            if (jobInfo['run'][stage]) {
                if (jobInfo['run'][stage]['end']) {
                    appendInfo(container, stage + ' (total)', formatDuration(jobInfo['run'][stage]['start'], jobInfo['run'][stage]['end']));
                }
                else if (jobInfo['run'][stage]['start']) {
                    appendInfo(container, stage + ' (start)', formatTimestamp(jobInfo['run'][stage]['start']));
                }
            }
        }
    }

    function appendJobInfo(container, jobInfo) {
        appendInfo(container, 'State', jobInfo['state']);
        
        container.addClass('job-info-state-' + jobInfo['state']);
        //<i class="fas fa-clock"></i>
        //<i class="fas fa-running"></i>
        //<i class="fas fa-check-circle"></i>
        //<i class="fas fa-exclamation-circle"></i>

        if (jobInfo['start']) {
            appendInfo(container, 'Start', formatTimestamp(jobInfo['start']));
            if (jobInfo['end']) {
                appendInfo(container, 'End', formatTimestamp(jobInfo['end']));
                appendInfo(container, 'Total', formatDuration(jobInfo['start'], jobInfo['end']));
            }
        }

        appendRunStage(container, jobInfo, 'wrf');
        appendRunStage(container, jobInfo, 'postprocess');

        appendInfo(container, 'Published', formatByteSize(jobInfo['published']));
    }

    if (!isNaN(interval) && interval > 0) {
        setInterval(getJobsInfo, parseInt(interval) * 1000);
    }

    getJobsInfo();
};

$.fn.machineJobs = function (machine, options) {
    return new MachineJobs(this, machine, options);
};
