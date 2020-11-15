class NOAAControl {
    constructor(container, options) {

        this.settings = $.extend(true, {}, NOAAControl.defaults, options);
        this.spinner = null;

        NOAAVariable.setMeasurementSystem(wxToFlySettings.get('measurementSystem', 'imperial'));
        container.addClass('noaa-control');

        this.header = $('<div class="noaa-control-header"></div>');
        this.body = $('<div class="noaa-control-body"></div>');
        this.footer = $('<div class="noaa-control-footer"></div>');

        container.append(this.header);
        container.append(this.body);
        container.append(this.footer);

        this.container = container;
        this.containerElement = container[0];
    }

    stopSpinner() {
        if (this.spinner) {
            this.spinner.remove();
            this.spinner = null;
        }
    }

    noaaError(error) {
        this.stopSpinner();
        this.container.noaaError(error);
        if (typeof this.settings['onError'] === 'function') {
            this.settings['onError'].apply(this, arguments);
        }
    }

    draw() {
        this.stopSpinner();

        this.body.empty();
        this.header.empty();
        this.footer.empty();
    }

    showSpinner(text) {
        if (this.settings['spinner']) {
            this.spinner = this.body.spinnerControl(text).show();
        }
    }

    getData() {
    }
}

NOAAControl.defaults = {
    'spinner': true,
    'width': 500,
    'height': 300,
    // callbacks
    'onError': null
};