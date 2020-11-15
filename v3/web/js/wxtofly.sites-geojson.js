/*
 * Helper class to load sites from all regions
 * 
 */

var FeatureSite = function (feature, region, domain) {
    this.sources = [{
        'region': region,
        'domain': feature['properties']['domain_id']
    }];
    this.country = feature['properties']['country'];
    this.state = feature['properties']['state'];
    this.area = feature['properties']['area'];
    this.name = feature['properties']['name'];
    this.lon = feature['geometry']['coordinates'][0];
    this.lat = feature['geometry']['coordinates'][1];
};

var SitesGeoJson = function (options) {

    var self = this,
        settings,
        defaults = {
            'regions': null,
            'onLoaded': null
        },
        sitesDict = {},
        sites = [];

    settings = $.extend({}, defaults, options);

    function createDeferreds() {
        var deferred,
            deferreds = [],
            url;

        $.each(settings['regions'], function (regionIndex, region) {
            deferred = $.Deferred();
            url = getRegionPath(region) + '/sites.geo.json';
            console.log(url);
            (function (deferred) {
                $.ajax({
                    dataType: "json",
                    url: url,
                    context: {
                        'region': region
                    },
                }).always(deferred.resolve);
            })(deferred);

            deferreds.push(deferred);
        });

        return deferreds;
    }

    $.when.apply($, createDeferreds()).then(function () {
        var contexts,
            objects;

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
                addSiteFeatures(args[0]['features'], contexts[i]['region']);
            }
        });

        if (typeof settings['onLoaded'] === 'function') {
            settings['onLoaded'].call(self, {
                'sites': sites
            });
        }
    });

    function addNewSiteDict(site) {
        sitesDict[site.name] = {}
        sitesDict[site.name][site.lat] = {};
        sitesDict[site.name][site.lat][site.lon] = site;
        sites.push(site);
    }

    function addSiteFeatures(features, region) {
        var site;

        $.each(features, function (index, feature) {
            site = new FeatureSite(this, region);

            if (sitesDict[site.name] === undefined) {
                addNewSiteDict(site);
            }
            else if (sitesDict[site.name][site.lat] === undefined) {
                addNewSiteDict(site);
            }
            else if (sitesDict[site.name][site.lat][site.lon] === undefined) {
                addNewSiteDict(site);
            }
            else {
                sitesDict[site.name][site.lat][site.lon].sources.push({
                    'region': region,
                    'domain': feature['properties']['domain_id']
                });
                sitesDict[site.name][site.lat][site.lon].sources.sort(function (a, b) {
                    if (a.domain < b.domain) {
                        return 1;
                    }
                    else {
                        return -1;
                    }
                });
            }
        })
    }

    this.getSites = function () {
        return sites;
    }
}
