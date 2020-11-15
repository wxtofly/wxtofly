var LocalStorageUtil = function (namespace) {

    var self = this,
        ns = '';

    if (namespace) {
        ns = namespace + '.';
    }

    this.get = function (key, defaultValue) {
        if (typeof defaultValue !== undefined && !this.isSet(key)) {
            return defaultValue;
        }
        var value = localStorage.getItem(ns + key);
        if (!isNaN(Number(value))) {
            return Number(value);
        }
        else if (value.toLowerCase() === 'true') {
            return true;
        }
        else if (value.toLowerCase() === 'false') {
            return false;
        }
        return value;
    };

    this.set = function (key, data) {
        if (data !== this.get(key)) {
            localStorage.setItem(ns + key, data);
            this.emit('change', {
                'setting': key,
                'value': data
            });
        }
    };

    this.isSet = function (key) {
        return localStorage.getItem(ns + key) !== null;
    };

    this.remove = function (key) {
        localStorage.removeItem(ns + key);
    };

    this.getSubStorage = function (name) {
        return new LocalStorageUtil(ns + name);
    };

    function setCheckboxValue(input, key, defaultValue) {
        if (self.isSet(key)) {
            input.prop('checked', self.get(key));
        }
        else if (typeof defaultValue !== undefined) {
            input.prop('checked', defaultValue);
        }
        input.on('change', { key: key, input: input }, function (e) {
            self.set(e.data.key, e.data.input.prop('checked'));
        });
    }

    this.setInputValue = function (input, key, defaultValue) {
        if (input.is('[type="checkbox"]')) {
            setCheckboxValue(input, key, defaultValue);
        }
        else {
            if (this.isSet(key)) {
                input.val(this.get(key));

                if (input.is('select') && !input.val()) {
                    input.val(defaultValue);
                }
            }
            else if (typeof defaultValue !== undefined) {
                input.val(defaultValue);
            }
            input.on('change', { key: key, input: input }, function (e) {
                self.set(e.data.key, e.data.input.val());
            });
        }
    };

    this._handlers = {};

    this.on = function (key, handler) {
        // create an empty array for the event key
        if (this._handlers[key] === undefined) {
            this._handlers[key] = [];
        }
        // save the callback in the array for the event key
        this._handlers[key].push(handler);
    };

    this.emit = function (key, event) {
        var i;
        // if the key exists
        if (this._handlers[key] !== undefined) {
            // iterate through the callbacks for the event key
            for (i = 0; i < this._handlers[key].length; i++) {
                // trigger the callbacks with all provided params
                this._handlers[key][i](event);
            }
        }
    };
};