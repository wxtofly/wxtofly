L.Title = L.Class.extend({
    options: {
        'position': 'top',
    },

    _map: null,
    _container: null,

    initialize: function (text, options) {
        this._text = text;
        L.Util.setOptions(this, options);
    },

    addTo: function (map) {
        var elements;

        this._map = map;

        elements = map.getContainer().getElementsByClassName('leaflet-control-container');

        if (this.options['position'] === 'top') {
            this._container = L.DomUtil.create('div', 'leaflet-top leaflet-title', elements[0]);
        }
        else if (this.options['position'] === 'bottom') {
            this._container = L.DomUtil.create('div', 'leaflet-bottom leaflet-title', elements[0]);
        }

        this.setTitle(this._text);

        return this;
    },

    remove: function () {
        this._map = null;
        L.DomUtil.remove(this._container);
    },

    setTitle: function (text) {
        this._text = text;
        this._container.innerHTML = '<div>' + text + '</div>';
    }
});

L.title = function (text, options) {
    return new L.Title(text, options);
};