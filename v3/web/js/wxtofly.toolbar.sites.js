var ToolbarSites = function (options) {

    var self = this,
        settings,
        defaults = {
            'panel': null,
            'regions': null,
            'map': null,
            'layerControl': null,
            'toolbarControl': null,
            'toolbarActionName': null
        },
        divMenuWindgrams,
        menuWindgrams,
        modalWindgrams,
        selectedSite,
        sitesLayer,
        lastMarker,
        storageUtil = wxtoflyLocalStorage.getSubStorage('sites');

    settings = $.extend({}, defaults, options);

    divMenuWindgrams = $('#windgrams-menu', settings['panel']);
    modalWindgrams = $('#modal-windgrams');

    function getSiteMarkerIcon(highlight) {
        return highlight ? redIcon : blueIcon;
    }

    function highlightSite(marker) {
        if (lastMarker !== undefined) {
            lastMarker.setIcon(getSiteMarkerIcon(false));
            lastMarker.setZIndexOffset(0);
        }
        lastMarker = marker;
        marker.setIcon(getSiteMarkerIcon(true));
        marker.setZIndexOffset(1000);
    }

    function selectSite(site) {
        highlightSite(site.marker);
        settings['map'].closePopup();
        site.marker.openPopup();
        settings['map'].panTo(L.latLng(site.lat, site.lon));
    }

    function showWindgrams(e) {
        $('#windgrams', modalWindgrams).windgrams(e.site, {
            'days': 3,
            'blipspot': true
        });
        $('.modal-header h5', modalWindgrams).text(e.site['name']);
        modalWindgrams.modal('show');
    }

    function addSites(sites) {
        var markers = [];
        $.each(sites, function (i, site) {
            site.marker = L.marker([site.lat, site.lon], {
                icon: getSiteMarkerIcon(false)
            });
            site.marker.site = site;
            markers.push(site.marker);
        });

        sitesLayer = L.featureGroup(markers);
        sitesLayer.eachLayer(function (layer) {
            layer.bindTooltip(layer.site.name);
            layer.bindPopup('<div id="current-windgram"></div>', {
                'maxWidth': 600,
                'className': 'popup-site',
                'autoPan': false
            });
        });
        sitesLayer.on('click', function (e) {
            e['site'] = e.layer.site;
            highlightSite(e.layer);
        });
        sitesLayer.on('popupopen', function (e) {
            $('div#current-windgram', e.popup.getElement()).windgrams(e.layer.site, {
                'days': 1,
                'click': showWindgrams
            });
            settings['map'].panTo(L.latLng(e.layer.site.lat, e.layer.site.lon));
            menuWindgrams.setActive(e.layer.site.name);
            location.hash = '#' + e.layer.site.name;
        });
        settings['layerControl'].addOverlay(sitesLayer, 'Sites');

        sitesLayer.on('remove', function (e) {
            settings['toolbarControl'].setActionDisabled(settings['toolbarActionName'], true);
            storageUtil.set('visible', false);
        });

        sitesLayer.on('add', function (e) {
            settings['toolbarControl'].setActionDisabled(settings['toolbarActionName'], false);
            storageUtil.set('visible', true);
        });

        if (storageUtil.get('visible', true)) {
            sitesLayer.addTo(settings['map']);
        }
    }

    SitesGeoJson({
        'regions': settings['regions'],
        'onLoaded': function (e) {
            if (e.sites && e.sites.length > 0) {
                menuWindgrams = divMenuWindgrams.windgramsMenu(e.sites, {
                    'click': function (e) {
                        selectSite(e.site);
                    }
                });
                addSites(e.sites);
            }
            else {
                settings['toolbarControl'].setActionDisabled(settings['toolbarActionName'], true);
            }

            selectedSite = getLocationHash();
            if (selectedSite) {
                var site;
                menuWindgrams.setActive(selectedSite);
                site = menuWindgrams.getActiveSite();
                highlightSite(site.marker);
                settings['map'].panTo(L.latLng(site.lat, site.lon));
            }
        }
    });
};