L.Control.Toolbar = L.Control.extend({
    options: {
        'position': 'topleft',
        'buttonOffset': 0,
        'bottomOffset': 0
    },

    defaultAction: {
        'name': null,
        'awesomeIcon': null,
        'className': null,
        'tooltip': null,
        'panel': null,
        'hideOnMapClick': true,
        'onClick': null,
        'disabled': false
    },

    _actions: null,
    _actionDict: null,
    _activeAction: null,

    initialize: function (actions, options) {
        this._actions = actions;
        L.Control.prototype.initialize.call(this, options);
    },

    _onMapClickHandler: function () {
        if (this._activeAction && this._activeAction['hideOnMapClick']) {
            this.hidePanel();
        }
    },

    hidePanel: function () {
        if (this._activeAction) {
            this._activeAction['panel'].hide();
            this._activeAction = null;
        }
    },

    getAction: function (nameOrIndex) {
        if (typeof nameOrIndex === 'string') {
            return this._actionDict[nameOrIndex];
        }
        else {
            return this._actions[nameOrIndex];
        }
    },

    setActionDisabled: function (nameOrIndex, disabled) {
        var action = this.getAction(nameOrIndex);
        action['disabled'] = disabled;
        if (disabled) {
            action.button.addClass('disabled');
            if (action['panel'].is(':visible')) {
                action['panel'].hide();
            }
        }
        else {
            action.button.removeClass('disabled');
        }
    },

    onAdd: function (map) {
        var self = this,
            container,
            actionButton,
            action,
            i;

        this._actionDict = {};

        container = L.DomUtil.create('div', 'leaflet-control leaflet-bar leaflet-control-toolbar');

        for (i = 0; i < this._actions.length; i++) {
            action = L.Util.extend({}, self.defaultAction, this._actions[i]);
            this._actions[i] = action;

            if (action['name']) {
                self._actionDict[action['name']] = action;
            }

            actionButton = L.DomUtil.create('a', 'leaflet-control-toolbar-button', container);
            if (action['className']) {
                L.DomUtil.addClass(actionButton, action['className']);
            }
            if (action['awesomeIcon']) {
                actionButton.innerHTML = '<i class="' + action['awesomeIcon'] + '"></i>';
            }
            actionButton.href = '#';
            if (action['tooltip']) {
                actionButton.title = action['tooltip'];
            }

            action.button = $(actionButton);
            if (action['disabled']) {
                action.button.addClass('disabled');
            }

            action.button.on('click', { action: action }, function (e) {
                var offset;
                e.stopPropagation();
                e.preventDefault();

                if (e.data.action['disabled']) {
                    return;
                }

                if (e.data.action['panel']) {
                    if (e.data.action['panel'].is(':visible')) {
                        e.data.action['panel'].hide();
                        self._activeAction = null;
                    }
                    else {
                        self.hidePanel();
                        offset = e.data.action.button.offset();

                        if (self.options['position'] === 'topleft') {
                            e.data.action['panel'].css({
                                'top': offset.top.toString() + 'px',
                                'left': (offset.left + e.data.action.button.width() + self.options['buttonOffset']).toString() + 'px',
                                'max-height': ($(window).height() - offset.top - self.options['bottomOffset']).toString() + 'px',
                            });
                        }
                        else {
                            throw "not implemented";
                        }
                        e.data.action['panel'].show();
                        self._activeAction = e.data.action;
                    }
                }

                if (typeof e.data.action['onClick'] === 'function') {
                    e.data.action['onClick'].call(e.data.action, e);
                }
            });
        }

        map.on('click', this._onMapClickHandler, this);

        return container;
    },

    onRemove: function (map) {
        map.off('click', this._onMapClickHandler, this);
    },

});

L.extend(L.Control.Toolbar.prototype, L.Evented.prototype);

//constructor registration
L.control.toolbar = function (actions, options) {
    return new L.Control.Toolbar(actions, options);
};