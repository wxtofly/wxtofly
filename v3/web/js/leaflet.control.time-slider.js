L.Control.TimeSlider = L.Control.extend({
    options: {
        'position': 'bottomleft',
        'startAt': 0,
        'speed': 500,
        'pauseOnHover': true,
        'startPaused': true,
        'cycleInterval': 5000,
        'pointerFormat': 'ddd HH:mm',
        'dateFormat': 'dddd MMM-DD',
        'timeFormat': 'HH:mm',
        'buttonWidth': 40,
        'play': false,
        'playContent': 'Play',
        'pauseContent': 'Pause',
    },

    initialize: function (dateTimes, options) {
        this._dateTimes = dateTimes;
        L.Control.prototype.initialize.call(this, options);
        this._currentIndex = this.options['startAt'];
    },

    _frame: null,
    _slidee: null,
    _dateTimes: null,
    _timeBox: null,
    _sly: null,
    _playButton: null,
    _currentIndex: 0,
    _playing: false,

    _togglePlay: function () {
        if (this._playing) {
            this._playButton.innerHTML = this.options['playContent'];
            this._playing = false;
        }
        else {
            this._playButton.innerHTML = this.options['pauseContent'];
            this._playing = true;
        }
        this._sly.toggle();
    },

    onAdd: function (map) {
        var container,
            frame,
            timeBoxContainer,
            timeBox;

        container = L.DomUtil.create('div', 'leaflet-control leaflet-control-time-slider');
        L.DomEvent.disableClickPropagation(container);

        this._playing = false;
        if (this.options['play']) {
            this._playButton = L.DomUtil.create('button', 'time-slider-button time-slider-button-left', container);
            this._playButton.innerHTML = this.options['playContent'];
            this._playButton.style.width = this.options['buttonWidth'].toString() + 'px';
            L.DomEvent.on(this._playButton, 'click', this._togglePlay, this);
        }

        this._frame = L.DomUtil.create('div', 'time-slider-frame', container);

        this._slidee = L.DomUtil.create('ul', 'clearfix', this._frame);

        this._addDateTimes(this._dateTimes);

        timeBoxContainer = L.DomUtil.create('div', 'time-slider-time-box-container', container);
        if (this._playButton) {
            timeBoxContainer.style.left = this.options['buttonWidth'].toString() + 'px';
        }
        this._timeBox = L.DomUtil.create('div', 'time-slider-time-box', timeBoxContainer);
        this._timeBox.innerText = ' ';
        L.DomUtil.create('div', 'time-slider-time-box-pointer', timeBoxContainer);

        L.DomEvent.on(container, 'mouseover', function (e) {
            map.dragging.disable();
        });

        L.DomEvent.on(container, 'mouseout', function (e) {
            map.dragging.enable();
        });

        L.DomEvent.on(container, 'pointerdown', function (e) {
            map.dragging.disable();
        });

        L.DomEvent.on(container, 'pointerup', function (e) {
            map.dragging.enable();
        });

        $(window).on('resize.time-slider', { timeSlider: this}, function (e) {
            e.data.timeSlider._setContainerWidth();
            if (e.data.timeSlider._sly) {
                e.data.timeSlider._sly.reload();
            }
        });

        return container;
    },

    onRemove: function (map) {
        this._destroySly();
        $(window).off('resize.time-slider');
    },

    addTo: function (map) {
        var ret = L.Control.prototype.addTo.call(this, map);
        this._setContainerWidth();
        this._initSly();
        return ret;
    },

    _setContainerWidth: function () {
        var width = this.options['width'];
        if (width === undefined) {
            width = $(this._map.getContainer()).width();
        }
        $(this.getContainer()).width(width);
    },

    _initSly: function () {

        $('li', this._slidee).each(function (index, element) {
            $(element).width(Math.ceil($(element).outerWidth()));
        });

        var slyOptions = {
            'slidee': this._slidee,
            'horizontal': true,
            'itemNav': 'forceCentered',
            'smart': true,
            'activateOn': 'click',
            'activateMiddle': true,
            'mouseDragging': true,
            'touchDragging': true,
            'startAt': this.options['startAt'],
            'speed': this.options['speed'],
            'startPaused': this.options['startPaused'],
            'pauseOnHover': this.options['pauseOnHover'],
            'cycleInterval': this.options['cycleInterval'],
        },
            self = this,
            labelWidth,
            label,
            lastLabel,
            li;

        if (this.options['play']) {
            slyOptions['cycleBy'] = 'items';
        }

        this._sly = new Sly(this._frame, slyOptions);
        this._sly.init();

        this._sly.on('move', (function (timeSlider) { return function (eventName) { timeSlider._onMoveHandler.call(timeSlider, eventName); } })(this));
        this._sly.on('active', (function (timeSlider) { return function (eventName, itemIndex) { timeSlider._onActiveHandler.call(timeSlider, eventName, itemIndex); } })(this));

        $('li', this._slidee).each(function (index, element) {
            li = $(element);
            label = li.children('.time-slider-day-label');
            if (label.length == 1) {
                if (lastLabel) {
                    lastLabel.width(labelWidth);
                }
                labelWidth = 0;
                lastLabel = label;
            }
            labelWidth += self._sly.items[index].size;
        });
        if (lastLabel) {
            lastLabel.width(labelWidth);
        }
    },

    _onMoveHandler: function (eventName) {
        var itemIndex,
            datetime = this._dateTimes[itemIndex];

        itemIndex = Math.min(this._dateTimes.length - 1, Math.max(0, Math.floor((this._sly.pos.cur - this._sly.pos.start) / (this._sly.pos.end - this._sly.pos.start) * this._dateTimes.length)));
        datetime = this._dateTimes[itemIndex];

        this._timeBox.innerText = moment(datetime).format(this.options['pointerFormat']);
    },

    _onActiveHandler: function (eventName, itemIndex) {
        this._currentIndex = itemIndex;
        this.fire('active', {
            'datetime': this._dateTimes[itemIndex],
            'itemIndex': itemIndex
        });
    },

    _destroySly: function () {
        this._sly.destroy();
        this._sly = null;
    },

    _addDateTimes: function () {
        var self = this,
            item,
            currDate,
            alt = true,
            addDayLabel = false;

        this._dateTimes.sort(function (a, b) {
            var aTime = a.getTime(),
                bTime = b.getTime();

            if (aTime == bTime) {
                return 0;
            }
            else if (aTime > bTime) {
                return 1;
            }
            return -1;
        });

        self._dates = [];

        this._dateTimes.forEach(function (datetime, index) {

            if (currDate !== datetime.toDateString()) {
                alt = !alt;
                addDayLabel = true;
            }

            currDate = datetime.toDateString();
            item = L.DomUtil.create('li', alt ? 'time-slider-item time-slider-item-alt' : 'time-slider-item', self._slidee);
            item.innerHTML = '<span>' + moment(datetime).format(self.options['timeFormat']) + '</span>'
            if (addDayLabel) {
                item.innerHTML += '<div class="time-slider-day-label">' + moment(datetime).format(self.options['dateFormat']) + '</div>';
                addDayLabel = false;
            }
        });
    },

    setDateTimes: function (dateTimes) {
        this._dateTimes = dateTimes;
        this._currentIndex = this.options['startAt'];
        if (this._sly) {
            this._destroySly();
            L.DomUtil.empty(this._slidee);
            this._addDateTimes();
            this._initSly();
        }
    },

    setCycleInterval: function (interval) {
        this.options['cycleInterval'] = interval;
        if (this._sly) {
            this._sly.set('cycleInterval', interval);
        }
    },

    getCurrent: function () {
        return this._dateTimes[this._currentIndex];
    }
});

L.extend(L.Control.TimeSlider.prototype, L.Evented.prototype);

//constructor registration
L.control.timeSlider = function (dateTimes, options) {
    return new L.Control.TimeSlider(dateTimes, options);
};