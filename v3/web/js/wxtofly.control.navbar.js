var Navbar = function (container, options) {
    var self = this,
        defaults = {
            'init': null,
            'custom': false
        },
        settings,
        container,
        tempContainer,
        contactLink = '&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#106;&#105;&#114;&#105;&#95;&#114;&#105;&#99;&#104;&#116;&#101;&#114;&#64;&#104;&#111;&#116;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;';

    settings = $.extend({}, defaults, options);

    if (settings['custom']) {
        tempContainer = $('<div></div>');
        tempContainer.load('navbar.html', function (data) {
            container.append($('div.navbar-collapse', tempContainer).html());
            init();
        });
    }
    else {
        container.addClass("navbar sticky-top navbar-expand-lg navbar-light bg-light navbar-wxtofly");
        container.empty();
        container.load('navbar.html', init);
    }

    function init() {
        $('a[data-action="disclaimer"]', container).click(function (e) {
            e.preventDefault();
            Disclaimer().show();
        });
        $('a[data-action="settings"]', container).click(function (e) {
            e.preventDefault();
            SettingsDialog().show();
        });
        if (typeof settings['init'] === 'function') {
            settings['init'].call(self);
        }
        appendHash();
        setContact();
    }

    function setContact() {
        var href = $('<div>').html(contactLink).text();
        $('a[data-action="contact"]', container).attr('href', href);
    }

    this.getContainer = function () {
        return container;
    }

    function appendHash() {
        var href;
        $('a.nav-link[data-hash]', container).each(function () {
            href = this.href;
            if (href.indexOf('#') != -1) {
                href = href.substring(0, href.indexOf('#'));
            }
            this.href = href + location.hash;
        });
    }

    window.onhashchange = function (e) {
        appendHash();
    }

    return this;
}

$.fn.navbar = function (options) {
    return new Navbar(this, options);
}