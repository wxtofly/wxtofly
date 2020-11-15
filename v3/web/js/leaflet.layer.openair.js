L.Layer.OpenAir = L.GeoJSON.extend({
    options: {
    },

    initialize: function (url, options) {
        L.GeoJSON.prototype.initialize.call(this, null, options);
        $.get(url, function (data) {
            parseOpenAir(data);
        }, 'text');
    },

    onAdd: function (map) {
    },

    onRemove: function (map) {
    },

});

//constructor registration
L.openAir = function (url, options) {
    return new L.Layer.OpenAir(url, options);
};