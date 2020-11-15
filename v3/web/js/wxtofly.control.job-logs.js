var JobLogs = function (container, job, options) {

    var self = this,
        settings,
        defaults = {
            'interval': 60,
            'collapse': true
        },
        interval,
        body,
        header;

    settings = $.extend({}, defaults, options);
    interval = parseInt(settings['interval']);
    container.addClass('card');
    container.addClass('job-logs');

    header = $('<h5 class="card-header">' + job + '</h5>');
    container.append(header);

    body = $('<div class="card-body"></div>');

    if (settings['collapse']) {
        body.addClass('collapse');
        header.click(function () {
            body.collapse('toggle');
        });
    }
    else {
        
    }
    container.append(body);

    function encodeJobName() {
        return job.replace(':', '.').replace('+', '.p.');
    }

    function getLogList() {
        var url = ['logs', encodeJobName(), 'logs.json'].join('/');
        console.log('logs: ' + url);
        $.getJSON(url, function (data) {
            loadLogList(data['logs']);
        });
    }

    function loadLogList(logs) {
        var divButton;
        logs.sort();
        logs.forEach(function (log) {
            divButton = $('<div />');
            body.append(divButton);

            createLogEntry(log, divButton, body);
        });
    }

    function getId(log) {
        return (job + log).replace(/[^a-zA-Z0-9]/g, '_');
    }

    function createLogEntry(log, buttonContainer, logContainer) {
        var button,
            divCollapse;

        button = $('<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse-' + getId(log) + '">' + log + '</button>');
        buttonContainer.append(button);
        divCollapse = $('<div class="collapse" id="collapse-' + getId(log) + '"></div>');
        logContainer.append(divCollapse);

        divCollapse.on('show.bs.collapse', { div: divCollapse }, function (e) {
            if (e.data.div.data('logControl') === undefined) {
                e.data.div.data('logControl', e.data.div.logControl(['logs', encodeJobName(), log].join('/'), {
                    'refresh': false
                }));
            }
        });
    }

    getLogList();
};

$.fn.jobLogs = function (job, options) {
    return new JobLogs(this, job, options);
};
