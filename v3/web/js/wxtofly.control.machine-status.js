var MachineStatus = function (container, machine, jobs, options) {

    var self = this,
        settings,
        defaults = {
            'interval': 60,
            'showStatus': true,
            'showsJobs': true,
            'showsLog': true,
        },
        divMachine,
        divMachineBody,
        divMachineHeader,
        tableMachineStatus,
        divJobsContainer,
        interval;

    settings = $.extend({}, defaults, options);
    interval = parseInt(settings['interval']);

    divMachine = $('<div class="card machine-status"></div>');
    container.append(divMachine);

    divMachineHeader = $('<h5 class="card-header">' + machine + '</h5>');
    divMachine.append(divMachineHeader);

    divMachineBody = $('<div class="card-body"></div>');
    divMachine.append(divMachineBody);

    tableMachineStatus = $('<table class="table-machine-status"></table>');
    divMachineBody.append(tableMachineStatus);

    if (settings['showsJobs']) {
        //divMachineBody.append('<span>Jobs:</span>');
        divJobsContainer = $('<div class="mt-1"></div>');
        divJobsContainer.machineJobs(machine);
        divMachineBody.append(divJobsContainer);
    }

    function getStatusRow(name, value, cellClass, iconClass) {
        var html;
        tr = $('<tr/>');
        tr.append('<td>' + name + ':</td>');

        html = '<td';
        if (cellClass !== undefined) {
            html += ' class="' + cellClass + '"';
        }
        if (iconClass !== undefined) {
            html += '><i class="' + iconClass + '"></i';
        }
        tr.append(html + '><b>' + value + '</b></td>');
        return tr;
    }

    function getStatusAlertRow(name, value) {
        return getStatusRow(name, value, 'status-error', 'fas fa-exclamation-circle');
    }

    function getStatusOkRow(name, value) {
        return getStatusRow(name, value, 'status-ok', 'fas fa-check-circle');
    }

    function getStatusWarningRow(name, value) {
        return getStatusRow(name, value, 'status-warning', 'fas fa-exclamation-triangle');
    }

    function loadHeartbeatData(data) {
        var timestamp = (new Date).getTime();

        tableMachineStatus.empty();

        if ((timestamp - (data["timestamp"] * 1000)) > 900000) {
            tableMachineStatus.append(getStatusAlertRow('Status', 'Offline'));
        }
        else {
            tableMachineStatus.append(getStatusOkRow('Status', 'Online'));
        }

        if (data['os']['system'] == 'Linux') {
            tableMachineStatus.append(getStatusRow('OS', data['os']['distname'] + ' ' + data['os']['version']));
        }

        tableMachineStatus.append(getStatusRow('CPU', data['cpu']['model']));
        tableMachineStatus.append(getStatusRow('CPU count', data['cpu']['count']));

        tableMachineStatus.append(getStatusRow('Disk Size', formatByteSize(data['disk']['total'])));
        if (data["disk"]["usage"] > 90) {
            tableMachineStatus.append(getStatusAlertRow('Disk Usage', data["disk"]["usage"] + '%'));
        }
        else if (data["disk"]["usage"] > 70) {
            tableMachineStatus.append(getStatusWarningRow('Disk Usage', data["disk"]["usage"] + '%'));
        }
        else {
            tableMachineStatus.append(getStatusOkRow('Disk Usage', data["disk"]["usage"] + '%'));
        }

        tableMachineStatus.append(getStatusRow('Memory Size', formatByteSize(data['memory']['total'])));
        if (data["memory"]["usage"] > 90) {
            tableMachineStatus.append(getStatusAlertRow('Memory Usage', data["memory"]["usage"] + '%'));
        }
        else if (data["memory"]["usage"] > 70) {
            tableMachineStatus.append(getStatusWarningRow('Memory Usage', data["memory"]["usage"] + '%'));
        }
        else {
            tableMachineStatus.append(getStatusOkRow('Memory Usage', data["memory"]["usage"] + '%'));
        }

        tableMachineStatus.append(getStatusRow('Jobs', jobs.join(', ')));
    }

    function getMachineLog() {

        var logContainer = $('<div class="collapse" id="logs-' + machine + '"></div>');
        logContainer.logControl('logs/' + machine + '.csv', {
            'noCache': true,
            'refresh': true,
            'interval': 30,
            'success': function (e) {
                // add logs button
                divMachineHeader.append('<button class="btn btn-primary btn-sm float-right" type="button" data-toggle="collapse" data-target="#logs-' +
                    machine + '" aria-expanded="false" aria-controls="logs-' + machine + '">Log</button>');
                divMachineBody.append(logContainer);
            }
        });
    }

    function getHeartbeat() {
        var url = 'json/heartbeat/' + machine + '.json?' + new Date().getTime();
        console.log('heartbeat: ' + url);
        $.getJSON(url, function (data) {
            loadHeartbeatData(data);
        });
    }

    if (settings['showStatus']) {
        getHeartbeat();

        if (!isNaN(interval) && interval > 0) {
            setInterval(getHeartbeat, parseInt(interval) * 1000);
        }
    }

    if (settings['showLog']) {
        getMachineLog();
    }
};

$.fn.machineStatus = function (machine, jobs, options) {
    return new MachineStatus(this, machine, jobs, options);
};
