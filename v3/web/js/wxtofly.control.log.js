var LogControl = function (container, url, options) {

    var self = this,
        settings,
        defaults = {
            'success': null,
            'refresh': false,
            'interval': 30,
            'noCache': true
        },
        type,
        container,
        header,
        headerRow,
        body,
        table,
        name,
        refresh = false,
        latest,
        debugSwitch,
        interval,
        showDebug = false;

    settings = $.extend({}, defaults, options);

    name = url.slice(url.lastIndexOf('/') + 1);
    interval = parseInt(settings['interval']);
    container.addClass('log');

    header = $('<div class="log-header"></div>');
    container.append(header);
    headerRow = appendRow(appendContainer(header));
    headerRow.append('<div class="col-auto">File: <strong>' + name + '</strong></div>');

    body = $('<div class="log-body"></div>');
    container.append(body);

    if (url.endsWith('.csv')) {
        type = 'csv';
    }
    else {
        type = 'text';
    }

    function getLog() {
        var logUrl = url;
        if (settings['noCache']) {
            logUrl += '?' + (new Date()).getTime();
        }
        console.log('log: ' + logUrl);
        $.get(logUrl, loadLogData, 'text');
    }

    function loadLogData(data) {
        if (type === 'csv') {
            messages = getMessages(data);

            if (!messages || messages.length == 0) {
                return;
            }

            if (table === undefined) {
                table = $('<table></table>');
                body.append(table);
                messages.reverse();
                latest = messages[0]['time'].getTime();
                messages.forEach(function (message) {
                    table.append(getMessageRow(message));
                });
                if (typeof settings['success'] === 'function') {
                    settings['success'].call(this, {
                        'data': data,
                        'type': type,
                        'messages': messages,
                    });
                }
            }
            else {
                if (messages[0]['time'].getTime() > latest) {
                    table.empty();
                    debugSwitch.parent().parent().remove();
                    debugSwitch = undefined;
                }
                messages.forEach(function (message) {
                    if (message['time'].getTime() > latest) {
                        table.prepend(getMessageRow(message));
                    }
                });
                latest = messages[messages.length - 1]['time'].getTime();
            }

            if (debugSwitch === undefined) {
                debugSwitch = createDebugSwitchIfNeeded();
            }
            showHideDebugMessages();
        }
        else {
            addTextLog(data);
        }
    }

    function addTextLog(text) {
        var pre = $('<pre />');
        body.append(pre);
        pre.text(text);
    }

    function getMessages(data) {
        var messages = [];
        $.each($.csv.toArrays(data), function () {
            messages.push({
                'time': moment(this[0], 'YYYY-MM-DD HH:mm:ss,SSS').toDate(),
                'level': this[1],
                'message': this[2],
            });
        });
        return messages;
    }

    function getMessageRow(message) {
        var tr = $('<tr/>');
        switch (message['level']) {
            case "ERROR":
                tr.append('<td class="log-icon log-icon-error"><i class="fas fa-exclamation-circle"></i></td>');
                break;
            case "WARNING":
                tr.append('<td class="log-icon log-icon-warning"><i class="fas fa-exclamation-triangle"></i></td>');
                break;
            case "INFO":
                tr.append('<td class="log-icon log-icon-info"><i class="fas fa-check-circle"></i></td>');
                break;
            case "DEBUG":
                tr.append('<td class="log-icon log-icon-debug"><i class="fas fa-wrench"></i></td>');
                hasDebugMessage = true;
                break;
            default:
                tr.append('<td class="log-icon"></td>');
        }

        tr.append('<td class="log-timestamp">' + moment(message['time']).format('HH:mm:ss.SSS') + '</td>');
        tr.append('<td class="log-message">' + message['message'] + '</td>');
        return tr;
    }

    function showHideDebugMessages() {
        if (debugSwitch) {
            showDebug = debugSwitch.prop('checked');
            if (showDebug) {
                $('td.log-icon-debug', table).parent().show();
            }
            else {
                $('td.log-icon-debug', table).parent().hide();
            }
        }
    }

    function createDebugSwitchIfNeeded() {
        var input, div, col;

        if ($('td.log-icon-debug', table).length > 0) {
            input = $('<input type="checkbox" class="custom-control-input" id="debug-' + name + '">');
            col = appendCol(headerRow, 'col-auto');
            div = $('<div class="custom-control custom-switch"></div>');
            div.append(input);
            div.append('<label class="custom-control-label" for="debug-' + name + '">Show debug messages</label>');
            col.append(div);

            input.on('change', { input: input }, function (e) {
                showHideDebugMessages(e.data.input);
            });

            input.prop('checked', showDebug);
        }
        return input;
    }

    getLog();
    if (settings['refresh'] && !isNaN(interval) && interval > 0) {
        setInterval(getLog, interval * 1000);
    }
}

$.fn.logControl = function (url, options) {
    return new LogControl(this, url, options);
}