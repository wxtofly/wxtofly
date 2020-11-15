L.OrderedControlsMap = L.Map.extend({

    _controls: {},

    addControl: function (control, index) {
        var position = control.getPosition(),
            addControls = [],
            i;

        if (this._controls[position] === undefined) {
            this._controls[position] = [];
        }

        if (this._controls[position][index] && this._controls[position][index]['onmap']) {
            this._controls[position][index]['control'].remove();
        }
        this._controls[position][index] = {
            'control': control,
            'onmap': true
        }

        for (i = index + 1; i < this._controls[position].length; i++) {
            if (this._controls[position][i] && this._controls[position][i]['onmap']) {
                this._controls[position][i]['control'].remove();
            }
        }

        L.Map.prototype.addControl.call(this, control);

        for (i = index + 1; i < this._controls[position].length; i++) {
            if (this._controls[position][i] && this._controls[position][i]['onmap']) {
                this._controls[position][i]['control'].addTo(this);
            }
        }
    },

    removeControl: function (control) {
        var position = control.getPosition(),
            i;

        for (i = 0; i < this._controls[position].length; i++) {
            if (this._controls[position][i] && this._controls[position][i]['control'] === control) {
                this._controls[position][i]['onmap'] = false;
            }
        }

        L.Map.prototype.removeControl.call(this, control);
    }

});

L.orderedControlsMap = function (element, options) {
    return new L.OrderedControlsMap(element, options);
}