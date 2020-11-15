class NOAAControlChart extends NOAAControl {
    constructor(container, options) {
        const defaults = {
            'charts': {},
            'width': 500,
            'height': 300,
            'chartHeight': 130,
            'showTimeControls': true,
            'showChartControls': true
        };
        super(container, $.extend({}, defaults, options));
        this.container.addClass('chart');
    }

    getChartWidth() {
        return this.settings['width'];
    }

    getChartHeight() {
        return this.settings['height'] - this.header.outerHeight() - this.footer.outerHeight();
    }

    draw() {
        super.draw();

        this.chartContainer = $('<div class="chart-container"></div>');
        this.body.append(this.chartContainer);

        this.chartElement = this.chartContainer[0];
        

        if (this.settings['showTimeControls']) {
            let buttonGroup = $('<div class="chart-nav"></div>');
            this.footer.append(buttonGroup);
            let button1 = $('<button type="button"><i class="fas fa-fast-backward"></i></button>');
            buttonGroup.append(button1);
            let button2 = $('<button type="button"><i class="fas fa-step-backward"></i></button>');
            buttonGroup.append(button2);
            let button3 = $('<button type="button"><i class="fas fa-step-forward"></i></button>');
            buttonGroup.append(button3);
            let button4 = $('<button type="button"><i class="fas fa-fast-forward"></i></button>');
            buttonGroup.append(button4);

            button1.click(() => this.chart.moveTimeToStart());
            button2.click(() => this.chart.moveTimeToBackwards());
            button3.click(() => this.chart.moveTimeToForward());
            button4.click(() => this.chart.moveTimeToEnd());
        }

        this.container.css({
            'height': `${this.settings['height']}px`
        });
    }

    setSize(width, height) {
        if (this.chart !== undefined) {
            this.chart.setSize(width, height);
        }
    }
}
