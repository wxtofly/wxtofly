L.Waypoints = L.LayerGroup.extend({
    options: {
    },

    initialize: function (waypoints, options) {
        var layers = [];
        if (waypoints) {
            waypoints.forEach(function (waypoint) {
                layers.push(L.marker(L.latLng(waypoint.lat, waypoint.lon)));
            });
        }
        L.LayerGroup.prototype.initialize.call(this, layers, options);
    },

    onAdd: function (map) {
    },

    onRemove: function (map) {
    },

});

//constructor registration
L.waypoints = function (waypoints, options) {
    return new L.Waypoints(waypoints, options);
};

L.Waypoint = L.Class.extend({

    name: null,
    latitude: null,
    longitude: null,
    altitude: null,
    description: null,

    initialize: function (name, latitude, longitude, altitude, description) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
        this.description = description;
    }
})

L.waypoint = function (name, latitude, longitude, altitude, description) {
    return new L.Waypoint(name, latitude, longitude, altitude, description);
}

L.Waypoints.Parser = L.Class.extend({
    initialize: function () { },
    parse: function() { },
    getFieldValue: function (field) {
        if (field === undefined) {
            return null;
        }
        return field.trim();
    },
    readLines: function (data, start, fn) {
        var i,
            lines = data.split('\n');

        for (i = start; i < lines.length; i++) {
            fn.call(this, line.trim());
        }
    }
})

L.Waypoints.Parser.Ozi = L.Waypoints.Parser.extend({
    parse: function (data) {
        var waypoints = [];
        this.readLines(data, 4, function (line) {
            waypoints.push(this.parseLine(line));
        });
    },
    parseLine = function (line) {
        var fields = line.split(',');
        return L.waypoint(
            this.getFieldValue(fields[0]),
            this.getFieldValue(fields[1]),
            this.getFieldValue(fields[2]),
            this.getFieldValue(fields[14]),
            this.getFieldValue(fields[10])
        );
    }
})

L.Waypoints.Parser.Geo = L.Waypoints.Parser.extend({
    parse: function (data) {
        var waypoints = [];
        this.readLines(data, 1, function (line) {
            waypoints.push(this.parseLine(line));
        });
    },
    parseLine = function (line) {
        var fields = line.split(',');
        return L.waypoint(
            this.getFieldValue(fields[0]),
            this.getFieldValue(fields[1]),
            this.getFieldValue(fields[2]),
            this.getFieldValue(fields[14]),
            this.getFieldValue(fields[10])
        );
    }
})
L.Waypoints.getParser = function (data) {
    if (typeof data !== 'string') {
        return null;
    }

    if (data.startsWith('OziExplorer Waypoint File')) {
        return new L.Waypoints.Parser.Ozi();
    }
    if (data.startsWith('OziExplorer Waypoint File')) {
        return new L.Waypoints.Parser.Ozi();
    }
    return null;
}


L.Waypoints.parse = function (data) {
    return L.Waypoints.getParser().parse();
}
