if (NOAA.hourlyChart === undefined) {
    NOAA.hourlyChart = {};
}

class NOAAChart {
    constructor(element, timezone, latlon, charts, options = {}) {
        this.element = element;
        this.timezone = timezone;
        this.latlon = latlon;
        this.charts = charts;
        this.margin = {
            'left': 0,
            'right': 0,
            'top': 0,
            'bottom': 0
        };
        this.settings = Object.assign({}, NOAAChart.defaults, options);
        if (this.settings['showChartControls'] === true) {
            this.margin.right = this.settings['controlButtonWidth'];
        }
        this.svgWidth = this.settings['width'];
        this.chartAreaWidth = this.svgWidth - this.margin['left'] - this.margin['right'];
    }

    draw() {
        this.appendCharts();

        // finally append border to SVG
        this.borderRect = this.groupChartArea.append('rect')
            .attr('x', this.margin['left'])
            .attr('y', this.margin['top'])
            .attr('width', this.chartAreaWidth)
            .attr('height', this.chartAreaHeight)
            .attr('class', 'frame');

        // add zoom
        this.addZoom();
        this.addPagination();
    }

    getTimeExtent() {
        return undefined;
    }

    getPlotWidth() {
        let hours = Math.floor(Math.abs(this.timeExtent[0] - this.timeExtent[1]) / (this.settings['timeStepMinutes'] * 60000));
        return (hours + 1) * this.settings['timeStepWidth'];
    }

    appendNight() {
        this.groupNight = this.groupTime.append('g')
            .attr('class', 'night');

        let start, end;
        if (this.timeExtent[0] < this.timeExtent[1]) {
            start = this.timeExtent[0];
            end = this.timeExtent[1];
        }
        else {
            start = this.timeExtent[1];
            end = this.timeExtent[0];
        }

        var currDate = start,
            prevDate = new Date(start.getTime() - 8.64e+7);
        var currSunCalc = SunCalc.getTimes(currDate, this.latlon.lat, this.latlon.lon),
            prevSunCalc = SunCalc.getTimes(prevDate, this.latlon.lat, this.latlon.lon),
            x,
            width;
        while (prevDate.getTime() < end.getTime()) {
            //draw rectangle
            x = this.timeScale(prevSunCalc.sunset);
            width = this.timeScale(currSunCalc.sunrise) - x;
            if (width < 0) {
                x += width;
                width = Math.abs(width);
            }
            this.groupNight.append('rect')
                .attr('x', x)
                .attr('y', 0)
                .attr('width', width)
                .attr('height', this.chartAreaHeight);

            prevSunCalc = currSunCalc;
            prevDate = currDate;
            currDate = new Date(currDate.getTime() + 8.64e+7);
            currSunCalc = SunCalc.getTimes(currDate, this.latlon.lat, this.latlon.lon);
        }
    }

    appendTimeGrid() {
        const groupTimeGrid = this.groupTime.append('g')
            .attr('class', 'axis axis-hours grid');

        let x;
        let start, end;
        if (this.timeExtent[0] < this.timeExtent[1]) {
            start = this.timeExtent[0];
            end = this.timeExtent[1];
        }
        else {
            start = this.timeExtent[1];
            end = this.timeExtent[0];
        }

        start = start.getTime();
        end = end.getTime();

        while (start <= end) {
            x = this.timeScale(new Date(start));
            groupTimeGrid.append('line')
                .attr('x1', x)
                .attr('x2', x)
                .attr('y1', 0)
                .attr('y2', this.chartAreaHeight);
            start += this.settings['timeStepMinutes'] * 60000;
        }
    }

    appendCharts() {
        let key;

        // create chart objects
        for(key in this.charts) {
            this.charts[key]['chart'] = this.getChart(key);
        }

        // get data
        this.data = this.getData();

        this.timeExtent = this.getTimeExtent();
        this.plotWidth = this.getPlotWidth();
        this.timeScale = d3.scaleTime().range([0, this.plotWidth]).domain(this.timeExtent);

        this.drawCharts();
    }

    filterTime(time) {
        return true;
    }

    getData() {
        return undefined;
    }

    getChartOptions(name) {
        return Object.assign({}, this.charts[name], {
            'width': this.chartAreaWidth,
            'height': this.settings['chartHeight']
        });
    }

    getChart(name) {
        let chart;

        switch (name) {
            case 'temperature': {
                chart = NOAA.hourlyChart.temperature(this.getChartOptions(name));
                break;
            }
            case 'sky': {
                chart = NOAA.hourlyChart.sky(this.getChartOptions(name));
                break;
            }
            case 'probabilityOfThunder': {
                chart = NOAA.hourlyChart.probabilityOfThunder(this.getChartOptions(name));
                break;
            }
            case 'surfaceWind': {
                chart = NOAA.hourlyChart.surfaceWind(this.getChartOptions(name));
                break;
            }
            case 'transportWind': {
                chart = NOAA.hourlyChart.transportWind(this.getChartOptions(name));
                break;
            }
            case 'twentyFootWind': {
                chart = NOAA.hourlyChart.twentyFootWind(this.getChartOptions(name));
                break;
            }
            case 'weather': {
                chart = NOAA.hourlyChart.weather(null, this.getChartOptions(name));
                break;
            }
            case 'precipitationRain': {
                chart = NOAA.hourlyChart.precipitationRain(this.getChartOptions(name));
                break;
            }
            case 'precipitationSnow': {
                chart = NOAA.hourlyChart.precipitationSnow(this.getChartOptions(name));
                break;
            }
            case 'fog': {
                chart = NOAA.hourlyChart.fog(this.getChartOptions(name));
                break;
            }
            case 'snowLevel': {
                chart = NOAA.hourlyChart.snowLevel(this.getChartOptions(name));
                break;
            }
            case 'mixingHeight': {
                chart = NOAA.hourlyChart.mixingHeight(this.getChartOptions(name));
                break;
            }
            case 'ceilingHeight': {
                chart = NOAA.hourlyChart.ceilingHeight(this.getChartOptions(name));
                break;
            }
            case 'visibility': {
                chart = NOAA.hourlyChart.visibility(this.getChartOptions(name));
                break;
            }
            case 'tide': {
                const station = NOAA.TidesAndCurrents.stations.findClosest(this.latlon);

                if (this.settings['maxTideStationDistance'] &&
                    this.settings['maxTideStationDistance'] > 0 &&
                    station['distance'].value > this.settings['maxTideStationDistance']) {
                    return undefined;
                }

                chart = NOAA.hourlyChart.tidePredictions(
                    station,
                    this.getChartOptions(name));
                break;
            }
            case 'lightningActivityAndHainesIndex': {
                chart = NOAA.hourlyChart.lightningActivityAndHainesIndex(this.getChartOptions(name));
                break;
            }
            case 'lowVisibilityOccurrenceRiskIndex': {
                chart = NOAA.hourlyChart.lowVisibilityOccurrenceRiskIndex(this.getChartOptions(name));
                break;
            }
            case 'davisStabilityIndex': {
                chart = NOAA.hourlyChart.davisStabilityIndex(this.getChartOptions(name));
                break;
            }
            case 'turnerStabilityIndex': {
                chart = NOAA.hourlyChart.turnerStabilityIndex(this.getChartOptions(name));
                break;
            }
            case 'atmosphericDispersionIndex': {
                chart = NOAA.hourlyChart.atmosphericDispersionIndex(this.getChartOptions(name));
                break;
            }
            case 'redFlagThreatIndex': {
                chart = NOAA.hourlyChart.redFlagThreatIndex(this.getChartOptions(name));
                break;
            }
            case 'pressure': {
                chart = NOAA.hourlyChart.pressure(this.getChartOptions(name));
                break;
            }
            case 'significantWaveHeight': {
                chart = NOAA.hourlyChart.significantWaveHeight(this.getChartOptions(name));
                break;
            }
            case 'windWaveHeight': {
                chart = NOAA.hourlyChart.windWaveHeight(this.getChartOptions(name));
                break;
            }
            case 'primarySwell': {
                chart = NOAA.hourlyChart.primarySwell(this.getChartOptions(name));
                break;
            }
            case 'secondarySwell': {
                chart = NOAA.hourlyChart.secondarySwell(this.getChartOptions(name));
                break;
            }
            default:
                console.error(`Invalid chart name: ${name}`);
                break;
        }

        return chart;
    }

    getScrollHeight() {
        let scrollHeight = 0;
        this.chartsWithData.forEach(chart => {
            if (chart.__state['visible']) {
                scrollHeight += chart.__state['height'];
            }
        });
        return scrollHeight;
    }

    getSvgHeight() {

    }

    drawCharts() {
        let y = 0,
            order = 0,
            key,
            chart;
        this.chartsWithData = [];

        for (key in this.charts) {
            chart = this.charts[key]['chart'];

            if (chart === undefined) {
                continue;
            }

            if (key !== 'tide') {
                if (!Object.values(this.charts[key]['variables']).some(o => o.hasValues)) {
                    continue;
                }

                if (chart.weatherVariables !== undefined && chart.weatherVariables !== null) {
                    if (!Object.values(this.charts[key]['weatherVariables']).some(o => o.hasValues)) {
                        continue;
                    }
                }
            }

            this.chartsWithData.push(chart);
            chart.__state = {
                'name': key,
                'height': chart.settings['height'],
                'visible': this.charts[key]['visible'] || true,
                'order': order,
                'y': y
            };

            order++;

            if (chart.__state['visible']) {
                y += chart.__state['height'];
            }
        }

        // append SVG to DOM
        this.svg = d3.select(this.element).append('svg');
        this.clipPathRect = this.svg.append('defs')
            .append('clipPath')
            .attr('id', 'clip-path')
            .append('rect')
            .attr('x', this.margin['left'])
            .attr('y', this.margin['top']);

        this.resize();

        this.groupControls = this.svg.append('g')
            .attr('class', 'controls')
            .attr('transform', `translate(${this.chartAreaWidth}, 0)`);

        this.groupChartArea = this.svg.append('g')
            .attr('class', 'chart-area')
            .attr('clip-path', 'url(#clip-path)');

        this.groupTime = this.groupChartArea.append('g')
            .attr('class', 'time');

        // append plot view - g element containing the entire plot
        this.groupCharts = this.groupChartArea.append('g')
            .attr('class', 'charts');

        this.groupLabels = this.groupChartArea.append('g')
            .attr('class', 'labels');

        this.groupInteractive = this.groupChartArea.append('g')
            .attr('class', 'interactive');

        this.groupLegends = this.groupInteractive.append('g')
            .attr('class', 'legends');

        this.appendNight();
        this.appendTimeGrid();

        this.chartsWithData.forEach(chart => {

            const chartGroup = this.groupCharts
                .append('g')
                .attr('class', `chart-${chart.__state['name']}`)
                .attr('transform', `translate(0, ${chart.__state['y']})`);
            const labelGroup = this.groupLabels
                .append('g')
                .attr('class', `labels-${chart.__state['name']}`)
                .attr('transform', `translate(0, ${chart.__state['y']})`);
            const groupLegend = this.groupLegends
                .append('g')
                .attr('class', `legends-${chart.__state['name']}`)
                .attr('transform', `translate(0, ${chart.__state['y']})`);
            console.log(`chart: ${chart.__state['name']}`);
            this.drawChart(chart, chart.__state['name'], chartGroup, labelGroup, groupLegend);

            if (chart.__state['visible'] === false) {
                chartGroup.attr('visibility', 'hidden');
                labelGroup.attr('visibility', 'hidden');
                groupLegend.attr('visibility', 'hidden');
            }

            this.transitionComplete = true;

            if (this.settings['showChartControls']) {
                const groupControls = this.groupControls
                    .append('g')
                    .attr('class', `controls-${chart.__state['name']}`)
                    .attr('transform', `translate(0, ${chart.__state['y']})`);

                if (chart.__state['visible'] === false) {
                    groupControls.attr('visibility', 'hidden');
                }

                chart.__state['groupControls'] = groupControls;

                const buttonHeight = chart.__state['height'] / 6;
                let buttonY = buttonHeight / 2;

                this.appendControlButton(groupControls, 'f00d', buttonY, buttonHeight, chart, this.hideChart);
                buttonY += buttonHeight;
                this.appendControlButton(groupControls, 'f050', buttonY, buttonHeight, chart, this.moveChartTop, -90);
                buttonY += buttonHeight;
                this.appendControlButton(groupControls, 'f051', buttonY, buttonHeight, chart, this.moveChartUp, -90);
                buttonY += buttonHeight;
                this.appendControlButton(groupControls, 'f051', buttonY, buttonHeight, chart, this.moveChartDown, 90);
                buttonY += buttonHeight;
                this.appendControlButton(groupControls, 'f050', buttonY, buttonHeight, chart, this.moveChartBottom, 90);
            }
        });
    }

    appendControlButton(groupControls, unicode, y, height, chart, fnOnClick, rotate) {
        const controlButton = groupControls.append('g').classed('control-button', true);
        const width = this.settings['controlButtonWidth'];
        const x = 0;

        y = Math.round(y);
        height = Math.round(height);

        controlButton.append('rect')
            .attr('x', x)
            .attr('y', y)
            .attr('height', height)
            .attr('width', width);

        const text = controlButton.append('text')
            .attr('x', x + width / 2)
            .attr('y', y + height / 2)
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'middle')
            .html(`&#x${unicode}`);

        if (rotate !== undefined && rotate !== 0) {
            text.attr('transform', `rotate(${rotate}, ${x + width / 2}, ${y + height / 2})`);
        }

        controlButton.on('click', () => {
            fnOnClick.call(this, chart);
        });
    }

    drawChart(chart, name, chartGroup, labelGroup, legendGroup) {
        chart.draw(chartGroup, labelGroup, legendGroup, this.data, this.timeScale, this.plotWidth, this.settings['timeStepWidth'], this.settings['timeStepMinutes']);
    }

    async handleChartAreaClick() {
        await this.moveTime(d3.mouse(this.svg.node()));
    }

    moveTime(coords) {
        return new Promise((resolve, reject) => {
            const centerX = this.chartAreaWidth / 2;

            if (coords[0] > centerX) {
                this.translateX -= coords[0];
                this.translateX = Math.max(-this.plotWidth + this.chartAreaWidth, this.translateX);
            }
            else {
                this.translateX += this.chartAreaWidth - coords[0];
                this.translateX = Math.min(0, this.translateX);
            }

            let results = [];

            results.push(new Promise((resolve, reject) => {
                this.groupTime.transition().duration(750).attr('transform', `translate(${this.translateX}, 0)`).on('end', resolve);
            }));
            results.push(new Promise((resolve, reject) => {
                this.groupCharts.transition().duration(750).attr('transform', `translate(${this.translateX}, ${this.translateY})`).on('end', resolve);
            }));
            results.push(new Promise((resolve, reject) => {
                this.groupLabels.transition().duration(750).attr('transform', `translate(0, ${this.translateY})`).on('end', resolve);
            }));
            results.push(new Promise((resolve, reject) => {
                this.groupInteractive.transition().duration(750).attr('transform', `translate(0, ${this.translateY})`).on('end', resolve);
            }));
            results.push(new Promise((resolve, reject) => {
                this.groupControls.transition().duration(750).attr('transform', `translate(${this.chartAreaWidth}, ${this.translateY})`).on('end', resolve);
            }));

            this.svg.node().__zoom.x = this.translateX;

            Promise.all(results).then(resolve);
        });
    }

    async moveTimeToStart() {
        await this.moveTime([-this.plotWidth, 0]);
    }

    async moveTimeToForward() {
        await this.moveTime([this.chartAreaWidth, 0]);
    }

    async moveTimeToBackwards() {
        await this.moveTime([0, 0]);
    }

    async moveTimeToEnd() {
        await this.moveTime([this.plotWidth, 0]);
    }

    addPagination() {
        this.groupChartArea.on('click', () => this.handleChartAreaClick());
    }

    addZoom() {
        this.translateX = 0;
        this.translateY = 0;

        this.zoom = d3.zoom()
            .scaleExtent([1, 1])
            .translateExtent([
                [0, 0],
                [this.plotWidth, this.chartAreaHeight + Math.max(0, this.scrollHeight - this.chartAreaHeight)]
            ])
            .on('zoom', () => {

                this.translateX = Math.round(d3.event.transform.x);
                this.translateY = Math.round(d3.event.transform.y);

                this.groupInteractive.attr('transform', `translate(0, ${this.translateY})`);
                this.groupTime.attr('transform', `translate(${this.translateX}, 0)`);
                this.groupCharts.attr('transform', `translate(${this.translateX}, ${this.translateY})`);
                this.groupLabels.attr('transform', `translate(0, ${this.translateY})`);
                this.groupControls.attr('transform', `translate(${this.chartAreaWidth}, ${this.translateY})`);

                if (typeof this.settings['onZoom'] === 'function') {
                    this.settings['onZoom'].call(this, d3.event.transform);
                }
            });

        this.svg.call(this.zoom);
    }

    moveChartToY(chart, y) {

        let results = [];
        results.push(new Promise((resolve, reject) => {
            chart.chartGroup
                .transition().duration(750).attr('transform', `translate(0, ${y})`).on('end', resolve);
        }));
        results.push(new Promise((resolve, reject) => {
            chart.labelGroup
                .transition().duration(750).attr('transform', `translate(0, ${y})`).on('end', resolve);
        }));
        results.push(new Promise((resolve, reject) => {
            this.groupLegends.select(`.legend-${chart.__state['name']}`)
                .transition().duration(750).attr('transform', `translate(0, ${y})`).on('end', resolve);
        }));
        results.push(new Promise((resolve, reject) => {
            this.groupControls.select(`.controls-${chart.__state['name']}`)
                .transition().duration(750).attr('transform', `translate(0, ${y})`).on('end', resolve);
        }));
        return Promise.all(results);
    }

    async swapCharts(chart1, chart2) {
        await Promise.all([
            this.moveChartToY(chart1, chart2.__state['y']),
            this.moveChartToY(chart2, chart1.__state['y'])
        ]).then(() => {
            let order = chart1.__state['order'],
                y = chart1.__state['y'];
            chart1.__state['order'] = chart2.__state['order'];
            chart1.__state['y'] = chart2.__state['y'];
            chart2.__state['order'] = order;
            chart2.__state['y'] = y;
            this.transitionComplete = true;
        });
    }

    async moveChartUp(chart) {
        d3.event.stopPropagation();
        if (!this.transitionComplete) {
            return;
        }
        // find a visible chart with lower order
        let upperChart;
        this.chartsWithData.forEach(ch => {
            if (ch.__state['visible'] && ch.__state['order'] < chart.__state['order']) {
                if (upperChart === undefined) {
                    upperChart = ch;
                }
                else if (ch.__state['order'] > upperChart.__state['order']){
                    upperChart = ch;
                }
            }
        });

        if (upperChart !== undefined) {
            this.transitionComplete = false;
            this.swapCharts(chart, upperChart);
        }
    }

    async moveChartDown(chart) {
        d3.event.stopPropagation();
        if (!this.transitionComplete) {
            return;
        }
        // find a visible chart with higher order
        let lowerChart;
        this.chartsWithData.forEach(ch => {
            if (ch.__state['visible'] && ch.__state['order'] > chart.__state['order']) {
                if (lowerChart === undefined) {
                    lowerChart = ch;
                }
                else if (ch.__state['order'] < lowerChart.__state['order']) {
                    lowerChart = ch;
                }
            }
        });

        if (lowerChart !== undefined) {
            this.transitionComplete = false;
            this.swapCharts(chart, lowerChart);
        }
    }

    async moveChartTop(chart) {
        d3.event.stopPropagation();
        if (!this.transitionComplete) {
            return;
        }
        let upperCharts = this.chartsWithData.filter(ch => ch.__state['order'] < chart.__state['order']);

        if (upperCharts.length > 0) {
            upperCharts.sort((a, b) => {
                if (a.__state['order'] < b.__state['order']) {
                    return -1;
                }
                return 1;
            });

            let y = chart.__state['height'];
            let results = [
                this.moveChartToY(chart, 0)
            ];
            chart.__state['order'] = 0;
            chart.__state['y'] = 0;

            upperCharts.forEach(ch => {
                if (ch.__state['visible']) {
                    results.push(this.moveChartToY(ch, y));
                    ch.__state['y'] = y;
                    y += ch.__state['height'];
                }
                ch.__state['order'] += 1;
            });

            this.transitionComplete = false;
            await Promise.all(results).then(() => { this.transitionComplete = true; });
        }
    }

    async moveChartBottom(chart) {
        d3.event.stopPropagation();
        if (!this.transitionComplete) {
            return;
        }
        let lowerCharts = this.chartsWithData.filter(ch => ch.__state['order'] > chart.__state['order']);

        if (lowerCharts.length > 0) {
            lowerCharts.sort((a, b) => {
                if (a.__state['order'] < b.__state['order']) {
                    return -1;
                }
                return 1;
            });

            let y = chart.__state['y'];
            let order = chart.__state['order'];
            let results = [];
            lowerCharts.forEach(ch => {
                if (ch.__state['visible']) {
                    results.push(this.moveChartToY(ch, y));
                    ch.__state['y'] = y;
                    y += ch.__state['height'];
                }
                ch.__state['order'] = order;
                order++;
            });

            results.push(this.moveChartToY(chart, y));
            chart.__state['order'] = order;
            chart.__state['y'] = y;

            this.transitionComplete = false;
            await Promise.all(results).then(() => { this.transitionComplete = true; });
        }
    }

    async hideChart(chart) {
        d3.event.stopPropagation();
        if (!this.transitionComplete) {
            return;
        }

        chart.chartGroup.attr('visibility', 'hidden');
        chart.labelGroup.attr('visibility', 'hidden');
        chart.legendGroup.attr('visibility', 'hidden');
        if (chart.__state['groupControls'] !== undefined) {
            chart.__state['groupControls'].attr('visibility', 'hidden');
        }
        chart.__state['visible'] = false;
        this.resize();

        let lowerCharts = this.chartsWithData.filter(ch => ch.__state['order'] > chart.__state['order']);
        if (lowerCharts.length > 0) {
            lowerCharts.sort((a, b) => {
                if (a.__state['order'] < b.__state['order']) {
                    return -1;
                }
                return 1;
            });

            let y = chart.__state['y'];
            let results = [];
            lowerCharts.forEach(ch => {
                if (ch.__state['visible']) {
                    results.push(this.moveChartToY(ch, y));
                    ch.__state['y'] = y;
                    y += ch.__state['height'];
                }
            });

            results.push(this.resizeZoom());

            this.transitionComplete = false;
            await Promise.all(results).then(() => { this.transitionComplete = true; });
        }
    }

    showChart(chart) {

    }

    resizeZoom() {
        this.zoom.translateExtent([
            [0, 0],
            [this.plotWidth, this.chartAreaHeight + Math.max(0, this.scrollHeight - this.chartAreaHeight)]
        ]);

        this.svg.node().__zoom.y = Math.max(this.chartAreaHeight - this.scrollHeight, this.svg.node().__zoom.y);

        return new Promise((resolve, reject) => {
            this.svg.transition().duration(750).call(this.zoom.transform, this.svg.node().__zoom).on('end', resolve);
        });
    }

    resize() {
        this.scrollHeight = this.getScrollHeight();

        // calculate svg height
        this.svgHeight = Math.min(this.settings['height'], this.scrollHeight);
        this.chartAreaHeight = this.svgHeight - this.margin['top'] - this.margin['bottom'];

        // append SVG to DOM
        this.svg.attr('width', this.svgWidth).attr('height', this.svgHeight);
        this.clipPathRect.attr('width', this.chartAreaWidth).attr('height', this.chartAreaHeight);

        if (this.borderRect) {
            this.borderRect
                .attr('width', this.chartAreaWidth)
                .attr('height', this.chartAreaHeight);
        }

        // resize time group
        if (this.groupTime) {
            this.groupTime.select('.night').selectAll('rect').attr('height', this.chartAreaHeight);
            this.groupTime.select('.axis-hours').selectAll('line').attr('y2', this.chartAreaHeight);
        }

        // resize charts
        if (this.chartsWithData) {
            this.chartsWithData.forEach(ch => {
                ch.setSize(this.chartAreaWidth, this.settings['chartHeight']);
            });
        }

        if (this.groupControls) {
            this.groupControls.attr('transform', `translate(${this.chartAreaWidth}, 0)`);
        }
    }

    setSize(width, height) {
        this.settings['width'] = width;
        this.settings['height'] = height;

        this.svgWidth = this.settings['width'];
        this.chartAreaWidth = this.svgWidth - this.margin['left'] - this.margin['right'];

        this.resize();
    }
}

NOAAChart.defaults = {
    // SVG height in px
    'height': 300,
    // SVG width in px
    'width': 500,
    'chartHeight': 130,
    // side button size
    'buttonSize': 10,
    // width in px per hour
    'timeStepWidth': 20,
    // number of hours to add on each end of time axis
    'timePaddingSteps': 1,
    // number of hours to add on each end of time axis
    'timeStepMinutes': 60,
    'showChartControls': true,
    'controlButtonWidth': 15
};