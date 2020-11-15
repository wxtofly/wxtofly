L.Control.PlotLegend = L.Control.extend({
    options: {
        'position': 'topright',
        'plorUrl': null,
        'type': 'side',
        'maxWidth': null,
        'maxHeight': null,
    },

    _img: null,
    _expandButton: null,

    initialize: function (options) {
        L.Control.prototype.initialize.call(this, options);
    },

    _getLegendUrl: function () {
        if (this.options['type'] === 'foot') {
            return this.options['plotUrl'].replace(/\.body\.png$/, '.foot.png');
        }
        else if (this.options['type'] === 'side') {
            return this.options['plotUrl'].replace(/\.body\.png$/, '.side.png');
        }
        return null; 
    },

    setPlotUrl: function (url) {
        this.options['plotUrl'] = url;
        if (this._img) {
            this._img.src = this._getLegendUrl();
        }
    },

    _toPixels: function (value) {
        return value.toString() + 'px';
    },

    _setImgStyle: function (option, style) {
        if (this.options[option]) {
            if (typeof this.options[option] === 'function') {
                this._img.style[style] = this._toPixels(this.options[option].call(this));
            }
            else {
                this._img.style[style] = this._toPixels(this.options[option]);
            }
        }
    },

    _setMaxHeight: function () {
        this._setImgStyle('maxHeight', 'maxHeight');
    },

    _setMaxWidth: function () {
        this._setImgStyle('maxWidth', 'maxWidth');
    },

    _setSize: function () {
        this._setMaxWidth();
        this._setMaxHeight();
    },

    onAdd: function (map) {
        var self = this,
            legendUrl,
            container;

        container = L.DomUtil.create('div', 'leaflet-control leaflet-bar leaflet-control-plot-legend');

        this._expandButton = L.DomUtil.create('a', 'leaflet-control-plot-legend-button', container);
        if (this.options['position'].startsWith('bottom')) {
            this._expandButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
        }
        else {
            this._expandButton.innerHTML = '<i class="fas fa-chevron-down"></i>';
        }
        this._expandButton.href = '#';
        this._expandButton.style.display = 'none';

        this._img = L.DomUtil.create('img', 'plot-legend-' + this.options['type'], container);
        this._img.src = this._getLegendUrl();
        this._setSize();

        L.DomEvent.on(this._img, 'click', function (e) {
            this._expandButton.style.display = null;
            this._img.style.display = 'none';
        }, this);

        L.DomEvent.on(this._expandButton, 'click', function (e) {
            L.DomEvent.stop(e);
            this._expandButton.style.display = 'none';
            this._img.style.display = null;
        }, this);

        L.DomEvent.on(window, 'resize', this._setSize, this);

        return container;
    },

    onRemove: function (map) {
        L.DomEvent.off(window, 'resize', this._setSize, this);
        this._img = null;
        this._expandButton = null;
    },

});

L.control.plotLegend = function (options) {
    return new L.Control.PlotLegend(options);
};