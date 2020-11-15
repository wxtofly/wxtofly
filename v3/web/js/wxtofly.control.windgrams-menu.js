var WindgramsMenu = function (container, sites, options) {

    var self = this,
        settings,
        defaults = {
            'click': null,
            'activeSiteName': null,
        },
        sites,
        activeSite,
        LOCAL_STORAGE_KEY = 'wxtofly_windgrams_favorites';

    settings = $.extend({}, defaults, options);

    this.activeSiteName = settings['activeSiteName'];

    var root = {
        parent: null,
        states: [],
        activeNode: null
    };

    var favorites = {};

    // add favorites item
    root["favorites"] = {
        name: "Favorites",
        parent: root,
        sites: []
    };

    // site item click handler
    function siteOnClick(e) {
        if (typeof settings['click'] === 'function') {
            settings['click'].call(this, e);
        }
    }

    function addFavorites(site) {
        if ((!favorites[site['name']]) || favorites[site['name']] == 0) {
            if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
                localStorage.setItem(LOCAL_STORAGE_KEY, localStorage.getItem(LOCAL_STORAGE_KEY) + ";" + site['name']);
            } else {
                localStorage.setItem(LOCAL_STORAGE_KEY, site['name']);
            }
            root.favorites.sites.push(site);
        }
        favorites[site['name']] = 1;
    }

    function removeFavorites(site) {
        if (favorites[site['name']]) {
            favorites[site['name']] = 0;
            localStorage.removeItem(LOCAL_STORAGE_KEY);
            var localStorageItem;
            for (key in favorites) {
                if (favorites.hasOwnProperty(key) && favorites[key] == 1) {
                    if (localStorageItem) {
                        localStorageItem += ";" + key;
                    } else {
                        localStorageItem = key;
                    }
                }
            }
            localStorage.setItem(LOCAL_STORAGE_KEY, localStorageItem)

            var sites = [];
            for (var i = 0; i < root.favorites.sites.length; i++) {
                if (root.favorites.sites[i]['name'] != site['name']) {
                    sites.push(root.favorites.sites[i]);
                }
            }
            root.favorites.sites = sites;
        }
    }

    function loadFavorites() {
        var localStorageItem = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (localStorageItem) {
            var siteNames = localStorageItem.split(";");
            for (var i = 0; i < siteNames.length; i++) {
                favorites[siteNames[i]] = 1;
            }
        }
    }

    function sortItems(a, b) {
        if (a['name'] < b['name'])
            return -1;
        if (a['name'] > b['name'])
            return 1;
        return 0;
    }

    function createFavoritesNode(open) {
        if (open) {
            return $('<a href="#" class="list-group-item list-group-item-action favorites d-flex align-items-center justify-content-between"><i class="float-right fas fa-chevron-left"></i><span><i class="fas fa-star"></i> Favorites</span></a>');
        }
        else {
            return $('<a href="#" class="list-group-item list-group-item-action favorites d-flex align-items-center justify-content-between"><span><i class="fas fa-star"></i> Favorites</span><i class="float-right fas fa-chevron-right"></i></a>');
        }
    }

    function createSiteNode(name) {
        return $('<a href="#' + name + '" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">' + name.replace(/_/g, " ") + '<i class="float-right ' + ((favorites[name]) ? "fas fa-star" : "far fa-star") + '"></i></a>');
    }

    function createGroupNode(name, className, open) {
        if (open) {
            return $('<a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center ' + className + '"><i class="float-right fas fa-chevron-left"></i>' + name + '</a>');
        }
        else {
            return $('<a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center ' + className + '">' + name + ' <i class="float-right fas fa-chevron-right"></i></a>');
        }
    }

    function draw() {

        var sidebarDiv = container;
        sidebarDiv.addClass('windgrams-menu');
        sidebarDiv.addClass('list-group');
        sidebarDiv.html("");

        if (root.activeNode != root.favorites) {
            var item = createFavoritesNode(false);
            sidebarDiv.append(item);
            item.on('click', function (e) {
                e.stopPropagation();
                root.favorites.parent = root.activeNode;
                root.activeNode = root.favorites;
                draw();
            });
        }

        if (root.activeNode == root) {
            for (var i = 0; i < root.states.length; i++) {
                var item = createGroupNode(root.states[i].name, 'state', false);
                sidebarDiv.append(item);
                item.on('click', (function (node) {
                    return function (e) {
                        e.stopPropagation();
                        root.activeNode = node;
                        draw();
                    };
                })(root.states[i]));
            }
        }
        else {
            if (root.activeNode == root.favorites) {
                root.favorites.sites.sort(sortItems);
            }

            var item = (root.activeNode == root.favorites) ? createFavoritesNode(true) : createGroupNode(root.activeNode.name, 'state', true);
            sidebarDiv.append(item);
            item.on('click', function (e) {
                e.stopPropagation();
                root.activeNode = root.activeNode.parent;
                draw();
            });

            if (root.activeNode.sites) {
                root.activeNode.sites.sort(sortItems);
                for (var i = 0; i < root.activeNode.sites.length; i++) {
                    var item = createSiteNode(root.activeNode.sites[i]['name']);

                    $('i', item).on('click', (function (site) {
                        return function (e) {
                            e.stopPropagation();
                            if (favorites[site['name']] && (favorites[site['name']] == 1)) {
                                $(this).removeClass("fas");
                                $(this).addClass("far");
                                removeFavorites(site);
                            }
                            else {
                                $(this).removeClass("far");
                                $(this).addClass("fas");
                                addFavorites(site);
                            }
                            if (root.activeNode == root.favorites) {
                                draw();
                            }
                            e.stopPropagation();
                            e.preventDefault();
                        };
                    })(root.activeNode.sites[i]));

                    sidebarDiv.append(item);
                    item.on('click', (function (site) {
                        return function (e) {
                            activeSite = site;
                            e.stopPropagation();
                            $(this).parent().find(".active").removeClass("active");
                            $(this).addClass("active");
                            self.activeSiteName = site['name'];
                            e.site = site;
                            siteOnClick(e);
                        };
                    })(root.activeNode.sites[i]));

                    if (self.activeSiteName == root.activeNode.sites[i]['name']) {
                        activeSite = root.activeNode.sites[i];
                        $(item).parent().find(".active").removeClass("active");
                        $(item).addClass("active");
                    }
                }
            }

            if (root.activeNode.areas) {
                root.activeNode.areas.sort(sortItems);
                for (var i = 0; i < (root.activeNode.areas.length); i++) {
                    var item = createGroupNode(root.activeNode.areas[i].name, 'area', false);
                    sidebarDiv.append(item);
                    item.on('click', (function (node) {
                        return function () {
                            root.activeNode = node;
                            draw();
                        };
                    })(root.activeNode.areas[i]));
                }
            }
        }
    }

    function createSiteNodes(sites) {
        for (var i = 0; i < sites.length; i++) {

            var state = sites[i]["state"];
            if (!state) {
                continue;
            }

            var stateNode = root[state];

            if (!stateNode) {
                stateNode = {
                    name: state,
                    parent: root,
                    sites: [],
                    areas: []
                };
                root[state] = stateNode;
                root.states.push(stateNode);
            }

            if (favorites[sites[i]['name']]) {
                root.favorites.sites.push(sites[i]);
            }

            var area = sites[i]["area"];
            if (!area) {
                stateNode.sites.push(sites[i]);
            }
            else {
                var areaNode = stateNode[area];
                if (!areaNode) {
                    areaNode = {
                        name: area,
                        parent: stateNode,
                        sites: []
                    };
                    stateNode[area] = areaNode;
                    stateNode.areas.push(areaNode);
                }
                areaNode.sites.push(sites[i]);
            }

            if (self.activeSiteName == sites[i]['name']) {
                root.activeNode = areaNode;
                activeSite = sites[i];
            }
        }

        if (!root.activeNode) {
            root.activeNode = root;
        }
    };

    this.setActive = function (name) {
        this.activeSiteName = name;
        //must find the containing node
        for (var i = 0; i < root.states.length; i++) {
            for (var j = 0; j < root.states[i].sites.length; j++) {
                if (root.states[i].sites[j].name == name) {
                    activeSite = root.states[i].sites[j];
                    root.activeNode = root.states[i];
                    draw();
                    return;
                }
            }
            for (var j = 0; j < root.states[i].areas.length; j++) {
                for (var k = 0; k < root.states[i].areas[j].sites.length; k++) {
                    if (root.states[i].areas[j].sites[k].name == name) {
                        activeSite = root.states[i].areas[j].sites[k];
                        root.activeNode = root.states[i].areas[j];
                        draw();
                        return;
                    }
                }
            }
        }
    }

    this.getActiveSite = function () {
        return activeSite;
    }

    // initialization
    // load favorites
    loadFavorites();
    // create nodes
    createSiteNodes(sites);
    draw();
}

$.fn.windgramsMenu = function (sites, options) {
    return new WindgramsMenu(this, sites, options);
}