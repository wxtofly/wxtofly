var Windgrams = function (container, site, options) {

    var self = this,
        settings,
        defaults = {
            'days': 3,
            'click': null,
            'load': null,
            'error': null,
            'blipspot': true
        },
        notAvailable = false,
        spinner;

    settings = $.extend({}, defaults, options);

    container.addClass('windgrams');
    container.empty();
    spinner = container.spinnerControl('Loading Windgrams ...');
    spinner.show();
    container.show();

    function appendError() {
        container.append('<div class="alert alert-danger m-2" role="alert"><i class="fas fa-frown mr-1"></i>No windgram available</div>');
    }

    function checkAnyVisible() {
        if (notAvailable) {
            return;
        }

        notAvailable = $('img:visible', container).length === 0;
        if (notAvailable) {
            appendError();
        }
    }

    function loadWindgram() {
        var deferreds = [],
            random,
            forecastDate = new Date(),
            dateString,
            url,
            dayUrls = {},
            i;

        random = forecastDate.getTime();

        for (i = 0; i < settings['days']; i++) {
            dateString = formatForecastDate(forecastDate);

            site.sources.forEach(function (source) {

                (function (deferred) {
                    deferreds.push(deferred);
                    url = [getRegionPath(source['region']), 'windgrams', dateString, 'metadata.json?' + random].join('/');
                    console.log('windgrams metadata: ' + url);

                    $.ajax({
                        dataType: "json",
                        url: url,
                        context: {
                            'day': i,
                            'date': dateString,
                            'region': source['region'],
                            'domain': source['domain']
                        }
                    }).always(deferred.resolve);
                })($.Deferred());

            });

            addDay(forecastDate);
        }

        $.when.apply($, deferreds).then(function () {
            var contexts,
                objects,
                imgData = new Array(settings['days']),
                i,
                img,
                blipspotContainer,
                eventData;

            if (Array.isArray(this)) {
                contexts = this;
                objects = arguments;
            }
            else {
                contexts = [this];
                objects = [arguments];
            }

            $.each(objects, function (i, args) {
                if (args[1] === 'success') {
                    if (dayUrls[contexts[i]['date']] === undefined || dayUrls[contexts[i]['date']]['domain'] < contexts[i]['domain']) {
                        dayUrls[contexts[i]['date']] = contexts[i];
                        imgData[contexts[i]['day']] = {
                            'url': [
                                getRegionPath(contexts[i]['region']),
                                'windgrams',
                                contexts[i]['date'],
                                args[0]['current'],
                                site.name + '.png'].join('/'),
                            'date': contexts[i]['date'],
                            'region': contexts[i]['region']
                        };
                    }
                }
            });

            container.empty();

            for (i = 0; i < imgData.length; i++) {
                if (imgData[i]) {
                    console.log('windgrams url: ' + imgData[i]['url']);
                    img = $('<img src="' + imgData[i]['url'] + '"></img>');
                    if (settings['blipspot']) {
                        blipspotContainer = $('<div style="display: none;"></div>');
                    }
                    eventData = {
                        'day': i,
                        'url': imgData[i]['url'],
                        'date': imgData[i]['date'],
                        'region': imgData[i]['region'],
                        'site': site,
                        'container': container,
                        'img': img,
                        'blipspotContainer': blipspotContainer
                    };

                    img.on("error", eventData, function (e) {
                        $(this).hide();
                        if (settings['blipspot']) {
                            blipspotContainer.remove();
                        }
                        checkAnyVisible();
                        if (typeof settings['error'] === 'function') {
                            $.extend(e, e.data);
                            settings['error'].call(img, e);
                        }
                    });

                    img.on('click', eventData, function (e) {
                        if (typeof settings['click'] === 'function') {
                            $.extend(e, e.data);
                            settings['click'].call(img, e);
                        }
                        if (settings['blipspot']) {
                            e.data['blipspotContainer'].show();
                            e.data['img'].hide();
                        }
                    });

                    img.on('load', eventData, function (e) {
                        if (typeof settings['load'] === 'function') {
                            $.extend(e, e.data);
                            settings['load'].call(img, e);
                        }
                    });

                    container.append(img);
                    if (settings['blipspot']) {
                        blipspotContainer.blipspot(imgData[i]['url'].replace('.png', '.json'), { });
                        container.append(blipspotContainer);
                        blipspotContainer.on('click', eventData, function (e) {
                            e.data['blipspotContainer'].hide();
                            e.data['img'].show();
                        });
                    }
                }
                else {
                    break;
                }
            }
        }).always(function () {
            spinner.remove();
            checkAnyVisible();
        });
    }

    loadWindgram();
};

$.fn.windgrams = function (site, options) {
    return new Windgrams(this, site, options);
};
