L.Control.ResponsiveCoordinates = L.Control.extend({
    options: {
        'position': 'bottomleft',
        //template: '{lat} | {lng}',
        'template': '<div>{lat}</div><div>{lng}</div>',
        // https://en.wikipedia.org/wiki/ISO_6709
        'latlngFormat': 'DD', // DD, DM, DMS
        'latlngDesignators': true,
        'mode': 'auto', //auto, pointer, center
        'onMove': true,
        'textAlign': 'right',
        'border': true,
        'click': null,
        'contextmenu': null,
    },

    _container: null,
    _mode: null,
    _iconElement: null,
    _map: null,

    initialize: function (options) {
        L.Control.prototype.initialize.call(this, options);
    },

    _initPointerMode: function (map) {
        map.on('mousemove', this._onMouseMove, this);
        if (typeof this.options['contextmenu'] === 'function') {
            map.on('contextmenu', this._onContextMenu, this);
        }
    },

    _removePointerMode: function (map) {
        map.off('mousemove', this._onMouseMove, this);
        map.off('contextmenu', this._onContextMenu, this);
    },

    _initCenterMode: function (map) {
        // create a DOM element and put it into overlayPane
        this._iconElement = L.DomUtil.create('div', 'leaflet-control-coordinates-icon leaflet-zoom-hide');
        map.createPane('coordinates').appendChild(this._iconElement);

        // add a viewreset event listener for updating icon's position
        map.on('viewreset', this._onReset, this);
        map.on('move', this._onMapMove, this);
        map.on('moveend', this._onMapMoveEnd, this);

        this._setIconPosition();
    },

    _removeCenterMode: function (map) {
        L.DomUtil.remove(map.getPane('coordinates'));
        map.off('viewreset', this._onReset, this);
        map.off('move', this._onMapMove, this);
        map.off('moveend', this._onMapMoveEnd, this);
    },

    _determineMode: function () {
        if (window.matchMedia("(hover:hover)").matches) {
            return 'pointer'
        }
        else {
            return 'center'
        }
    },

    _setIconPosition: function () {
        // update icon's position
        var pos = this._map.latLngToLayerPoint(this._map.getCenter());
        L.DomUtil.setPosition(this._iconElement, pos);
    },

    _onMouseMove: function (e) {
        this._updateCoordinates(e.latlng);
    },

    _onReset: function (e) {
        this._setIconPosition()
    },

    _onMapMove: function (e) {
        if (this.options['onMove']) {
            this._setIconPosition();
            this._updateCoordinates(this._map.getCenter());
        }
    },

    _onMapMoveEnd: function (e) {
        this._setIconPosition();
        this._updateCoordinates(this._map.getCenter());
    },

    _onContextMenu: function (e) {
        if (typeof this.options['contextmenu'] === 'function') {
            this.options['contextmenu'].call(this, e);
        }
    },

    _onClick: function (e) {
        if (typeof this.options['click'] === 'function') {
            this.options['click'].call(this, e);
        }
    },

    onAdd: function (map) {

        this._map = map;

        if (this.options['mode'] === 'auto') {
            this._mode = this._determineMode();
        }
        else {
            this._mode = this.options['mode'];
        }

        if (this._mode === 'center') {
            this._initCenterMode(map);
        }
        else if (this._mode === 'pointer') {
            this._initPointerMode(map);
        }

        this._container = L.DomUtil.create('div', 'leaflet-bar leaflet-touch leaflet-control leaflet-control-coordinates');
        L.DomEvent.disableClickPropagation(this._container);
        this._container.style.textAlign = this.options['textAlign'];
        if (!this.options['border']) {
            L.DomUtil.addClass(this._container, 'no-border');
        }

        L.DomEvent.on(this._container, 'click', this._onClick, this);

        this._updateCoordinates(map.getCenter());
        return this._container;
    },

    onRemove: function (map) {
        L.DomEvent.off(this._container, 'click', this._onClick, this);

        if (this._mode === 'center') {
            this._removeCenterMode(map);
        }
        else if (this._mode === 'pointer') {
            this._removePointerMode(map);
        }
    },

    _updateCoordinates: function (latlng) {
        this._container.innerHTML = L.Util.template(
            this.options['template'],
            this._getLatLngCoord(latlng)
        );
    },

    _getLatLngCoord: function (latLng) {

        var latlng = L.latLng(latLng.lat, latLng.lng),
            lat,
            lng,
            deg,
            min;

        // 180 degrees & negative
        if (latlng.lng < 0) {
            latlng.lng_neg = true;
            latlng.lng = Math.abs(latlng.lng);
        }
        else {
            latlng.lng_neg = false;
        }

        if (latlng.lat < 0) {
            latlng.lat_neg = true;
            latlng.lat = Math.abs(latlng.lat);
        }
        else {
            latlng.lat_neg = false;
        }

        if (latlng.lng > 180) {
            latlng.lng = 360 - latlng.lng;
            latlng.lng_neg = !latlng.lng_neg;
        }

        // format
        if (this.options.latlngFormat === 'DM') {
            deg = parseInt(latlng.lng);
            lng = deg + '&deg; ' + this._format('00.000', (latlng.lng - deg) * 60) + "'";
            deg = parseInt(latlng.lat);
            lat = deg + '&deg; ' + this._format('00.000', (latlng.lat - deg) * 60) + "'";
        }
        else if (this.options.latlngFormat === 'DMS') {
            deg = parseInt(latlng.lng);
            min = (latlng.lng - deg) * 60;
            lng = deg + '&deg; ' + this._format('00', parseInt(min)) + "' " + this._format('00.0', (min - parseInt(min)) * 60) + "''";
            deg = parseInt(latlng.lat);
            min = (latlng.lat - deg) * 60;
            lat = deg + '&deg; ' + this._format('00', parseInt(min)) + "' " + this._format('00.0', (min - parseInt(min)) * 60) + "''";
        }
        else { // 'DD'
            lng = this._format('#0.00000', latlng.lng) + '&deg;';
            lat = this._format('##0.00000', latlng.lat) + '&deg;';
        }

        return {
            'lng': (!this.options.latlngDesignators && latlng.lng_neg ? '-' : '') + lng + (this.options.latlngDesignators ? (latlng.lng_neg ? ' W' : ' E') : ''),
            'lat': (!this.options.latlngDesignators && latlng.lat_neg ? '-' : '') + lat + (this.options.latlngDesignators ? (latlng.lat_neg ? ' S' : ' N') : '')
        };
    },

    /**
     * @preserve IntegraXor Web SCADA - JavaScript Number Formatter
     * http://www.integraxor.com/
     * author: KPL, KHL
     * (c)2011 ecava
     * Dual licensed under the MIT or GPL Version 2 licenses.
     */
    ////////////////////////////////////////////////////////////////////////////////
    // param: Mask & Value
    ////////////////////////////////////////////////////////////////////////////////
    _format: function (m, v) {
        if (!m || isNaN(+v)) {
            return v; //return as it is.
        }
        //convert any string to number according to formation sign.
        var v = m.charAt(0) == '-' ? -v : +v;
        var isNegative = v < 0 ? v = -v : 0; //process only abs(), and turn on flag.

        //search for separator for grp & decimal, anything not digit, not +/- sign, not #.
        var result = m.match(/[^\d\-\+#]/g);
        var Decimal = (result && result[result.length - 1]) || '.'; //treat the right most symbol as decimal 
        var Group = (result && result[1] && result[0]) || ',';  //treat the left most symbol as group separator

        //split the decimal for the format string if any.
        var m = m.split(Decimal);
        //Fix the decimal first, toFixed will auto fill trailing zero.
        v = v.toFixed(m[1] && m[1].length);
        v = +(v) + ''; //convert number to string to trim off *all* trailing decimal zero(es)

        //fill back any trailing zero according to format
        var pos_trail_zero = m[1] && m[1].lastIndexOf('0'); //look for last zero in format
        var part = v.split('.');
        //integer will get !part[1]
        if (!part[1] || part[1] && part[1].length <= pos_trail_zero) {
            v = (+v).toFixed(pos_trail_zero + 1);
        }
        var szSep = m[0].split(Group); //look for separator
        m[0] = szSep.join(''); //join back without separator for counting the pos of any leading 0.

        var pos_lead_zero = m[0] && m[0].indexOf('0');
        if (pos_lead_zero > -1) {
            while (part[0].length < (m[0].length - pos_lead_zero)) {
                part[0] = '0' + part[0];
            }
        }
        else if (+part[0] == 0) {
            part[0] = '';
        }

        v = v.split('.');
        v[0] = part[0];

        //process the first group separator from decimal (.) only, the rest ignore.
        //get the length of the last slice of split result.
        var pos_separator = (szSep[1] && szSep[szSep.length - 1].length);
        if (pos_separator) {
            var integer = v[0];
            var str = '';
            var offset = integer.length % pos_separator;
            for (var i = 0, l = integer.length; i < l; i++) {

                str += integer.charAt(i); //ie6 only support charAt for sz.
                //-pos_separator so that won't trail separator on full length
                if (!((i - offset + 1) % pos_separator) && i < l - pos_separator) {
                    str += Group;
                }
            }
            v[0] = str;
        }

        v[1] = (m[1] && v[1]) ? Decimal + v[1] : "";
        return (isNegative ? '-' : '') + v[0] + v[1]; //put back any negation and combine integer and fraction.
    }
});

//constructor registration
L.control.responsiveCoordinates = function (options) {
    return new L.Control.ResponsiveCoordinates(options);
};