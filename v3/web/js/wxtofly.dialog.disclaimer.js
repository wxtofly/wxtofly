var Disclaimer = function () {
    var self = this;

    this.show = function () {

        if (Disclaimer.container === undefined) {
            Disclaimer.container = $('<div class="modal fade" tabindex="-1" role="dialog"></div >');
            Disclaimer.container.load('disclaimer.html', function () {
                $('body').append(Disclaimer.container);
                Disclaimer.container.modal();
            });
        }
        else {
            Disclaimer.container.modal();
        }
    }

    this.hide = function () {
        Disclaimer.container.modal('hide');
    }

    return this;
}