var SpinnerControl = function (container, text, options) {

    var self = this,
        settings,
        defaults = {
        },
        spinnerContainer,
        spinner;

    settings = $.extend({}, defaults, options);

    this.remove = function () {
        if (spinner) {
            spinner.stop();
        }
        if (spinnerContainer) {
            spinnerContainer.remove();
            spinnerContainer = null;
        }
        return this;
    };

    this.show = function () {
        if (spinnerContainer) {
            this.remove();
        }
        spinnerContainer = $('<div class="wxtofly-control-spinner"></div>');
        if (text) {
            spinnerContainer.append('<span>' + text + '</span>');
        }
        spinner = new Spinner({
            lines: 12, // The number of lines to draw
            length: 5, // The length of each line
            width: 3, // The line thickness
            radius: 8, // The radius of the inner circle
            scale: 1, // Scales overall size of the spinner
            top: '50%', // Top position relative to parent
            left: '30px', // Left position relative to parent
            position: 'relative' // Element positioning
        }).spin(spinnerContainer.get(0));
        container.append(spinnerContainer);

        return this;
    };
};

$.fn.spinnerControl = function (text, options) {
    return new SpinnerControl(this, text, options);
};