L.Alert = L.Class.extend({
    options: {
        'position': 'center',
        'duration': 0,
        'level': 'info'
    },

    _text: null,
    _map: null,
    _container: null,
    _flexContainer: null,
    _alert: null,

    initialize: function (text, options) {
        this._text = text;
        L.Util.setOptions(this, options);
    },

    addTo: function (map) {
        var elements;
        this._map = map;

        elements = map.getContainer().getElementsByClassName('leaflet-alert-container');
        if (elements.length === 0) {
             this._container = L.DomUtil.create('div', 'leaflet-alert-container', map.getContainer());
       }
        else {
            this._container = elements[0];
        }

        return this;
    },

    remove: function () {
        this._map = null;
        L.DomUtil.remove(this._container);
    },

    open: function () {
        this._flexContainer = L.DomUtil.create('div', 'leaflet-alert-flex', this._container);

        this._alert = L.DomUtil.create('div', 'leaflet-alert leaflet-alert-' + this.options['level'], this._flexContainer);
        this._alert.innerHTML = '<span class="closebtn">&times;</span>';
        this._alert.innerHTML += this._text;
        this._alert.addEventListener("", this.close);
        L.DomEvent.disableClickPropagation(this._alert);
        L.DomEvent.on(this._alert, 'click', function () {
            L.DomEvent.on(this._alert, 'transitionend', function () {
                L.DomUtil.remove(this._flexContainer);
            }, this);
            this._alert.style.opacity = 0;
        }, this);

        if (this.options['duration'] > 0) {
            setTimeout(function (self) {
                self.close();
            }, this.options['duration'] * 1000, this);
        }
    },

    close: function () {
        if (this._alert) {
            this._alert.click();
        }
    }
});

L.alert = function (text, options) {
    return new L.Alert(text, options);
};