class NOAAForecastDiscussionControl extends NOAAControl {
    constructor(container, point, options) {
        const defaults = {
            'maxHeight': null
        };

        super(container, $.extend({}, defaults, options));

        this.point = point;
        if (this.settings['maxHeight']) {
            this.container.css({
                'max-height': this.settings['maxHeight']
            });
        }
        this.container.addClass('discussion');
        this.getData();
    }

    draw() {
        super.draw();

        this.header.text(this.discussion.header);

        this.discussion.sections.forEach(section => this.appendSection(section));
        this.containerElement.querySelector('.discussion-section .discussion-section-body').classList.add('show');
    }

    appendSection(section) {
        let sectionContainer = $('<div class="discussion-section"></div>');
        this.body.append(sectionContainer);

        let sectionHeader = $('<div class="discussion-section-header"><button class="btn btn-link" type="button">' + section['header'] + '</button></div>');
        sectionContainer.append(sectionHeader);
        
        let sectionBody = $('<div class="discussion-section-body collapse"></div>');
        sectionContainer.append(sectionBody);

        section['text'].split('\n').forEach(text => {
            sectionBody.append('<p>' + text + '</p>');
        });

        sectionHeader.click(() => {
            this.containerElement.querySelectorAll('.discussion-section .discussion-section-body').forEach(e => {
                if (sectionBody[0] !== e) {
                    $(e).collapse('hide');
                }
            });
            sectionBody.collapse('toggle');
        });
    }

    getData() {
        this.showSpinner('Obtaining Area Forecast Discussion...');

        this.point.office.getAreaForecastDiscussion().then(data => {
            data[0].getProductText().then((data) => {
                this.discussion = new NOAADiscussion(data.productText);
                this.draw();
            }, this.noaaError);
        });
    }
}

$.fn.noaaForecastDiscussion = function (point, options) {
    return new NOAAForecastDiscussionControl(this, point, options);
};