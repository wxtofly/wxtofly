var PageWindgrams = function (options) {

    var self = this,
        settings,
        defaults = {
            'windgramLoad': null,
            'blipspot': true
        };

    settings = $.extend({}, defaults, options);

    var offCanvas = $('.container-offcanvas'),
        icon,
        selectedSite = getLocationHash(),
        windgramsMenu,
        divPointForecast,
        site;

    divPointForecast = $('#point-forecast');

    function toggleMenu() {
        if (icon !== undefined) {
            offCanvas.toggleClass('active');
            icon.toggleClass("fa-chevron-right");
            icon.toggleClass("fa-chevron-left");
        }
    }

    $('#navbar').navbar({
        'init': function () {

            this.getContainer().prepend('<button type="button" class="navbar-toggler" data-toggle="offcanvas"><i class="fas fa-chevron-right"></i></span>');
            icon = $('button[data-toggle="offcanvas"] i', this.getContainer());

            $('button[data-toggle="offcanvas"]', this.getContainer()).click(function (e) {
                toggleMenu();
            });

            $('body').swipe({
                swipeLeft: function (event, direction, distance, duration, fingerCount) {
                    if (offCanvas.hasClass('active')) {
                        toggleMenu();
                    }
                },
                swipeRight: function (event, direction, distance, duration, fingerCount) {
                    if (!offCanvas.hasClass('active')) {
                        toggleMenu();
                    }
                },
                excludedElements: $.fn.swipe.defaults.excludedElements + ", #noaa-forecast, .blipspot"
            });
        }
    });

    function showPointForecast(site) {
        divPointForecast.pointForecast(site.lat, site.lon, {
            'spinner': false,
            'forecast': {
                'show': true,
                'collapse': true,
                'spinner': true
            },
            'discussion': {
                'show': true,
                'collapse': true,
                'maxHeight': 300,
                'spinner': true
            },
            'hourlyChart': {
                'show': false
            },
        });
    }

    function windgramLoad() {
        $('#windgrams').windgrams(site, {
            'load': function (e) {
                if (typeof settings['windgramLoad'] === 'function') {
                    settings['windgramLoad'].call(this, e);
                }
            },
            'blipspot': settings['blipspot']
        });
        divPointForecast.empty();
        if (site['country'] === 'USA') {
            showPointForecast(site);
        }
    }

    RunJobs({
        'onLoaded': function (e) {
            SitesGeoJson({
                'regions': e.regions,
                'onLoaded': function (e) {
                    windgramsMenu = $('#windgrams-menu').windgramsMenu(e.sites, {
                        'click': function (e) {
                            site = e.site;
                            windgramLoad();
                            toggleMenu();
                            $(document).scrollTop(0);
                        },
                        'activeSiteName': selectedSite
                    });

                    if (!selectedSite) {
                        toggleMenu();
                    }
                    else {
                        site = windgramsMenu.getActiveSite();
                        windgramLoad();
                    }
                }
            });
        }
    });
}