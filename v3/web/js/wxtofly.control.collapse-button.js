class CollapseButton {
    constructor(button, target, options) {
        this.firstShow = true,
        this.settings = Object.assign({}, CollapseButton.defaults, options),
        this.isCollapsed;
        this.button = button;
        this.target = target;

        this.button.addClass('collapse-button');

        this.target.addClass('collapse');

        if (!this.settings['collapsed']) {
            this.target.addClass('show');
        }

        this.isCollapsed = !this.target.is('.show');
        this.firstShow = this.isCollapsed;

        this.button.html(this.button.text() + '<i class="ml-1 far"></i>');
        this.setIcon();

        let self = this;
        this.button.click(function (e) {
            if (self.isCollapsed) {
                self.show();
            }
            else {
                self.hide();
            }
        });
    }

    hide() {
        this.target.collapse('hide');
        if (typeof this.settings['hide'] === 'function') {
            this.settings['hide'].call(this);
        }
        this.isCollapsed = true;
        this.setIcon();
    }

    show() {
        this.target.collapse('show');
        if (this.firstShow) {
            if (typeof this.settings['firstShow'] === 'function') {
                this.settings['firstShow'].call(this);
            }
            this.firstShow = false;
        }
        if (typeof this.settings['show'] === 'function') {
            this.settings['show'].call(this);
        }
        this.isCollapsed = false;
        this.setIcon();
    }

    reset() {
        this.firstShow = true;
        if (this.settings['collapsed']) {
            this.hide();
        }
        else {
            this.show();
        }
    }

    setIcon() {
        if (this.isCollapsed) {
            $('i', this.button).addClass('fa-plus-square').removeClass('fa-minus-square');
        }
        else {
            $('i', this.button).removeClass('fa-plus-square').addClass('fa-minus-square');
        }
    };
}

CollapseButton.defaults = {
    'collapsed': true,
    'show': null,
    'hide': null,
    'firstShow': null
};

$.fn.collapseButton = function (target, options) {
    return new CollapseButton(this, target, options);
};
