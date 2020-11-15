/**
 * Base class for hourly point forecast charts
 * */
class NOAAHourlyChartBase {
    constructor(variables, options = {}) {
        this.settings = Object.assign({}, NOAAHourlyChartBase.defaults, options);
        this.variables = variables;
        this.variableKeys = Object.keys(this.variables);
    }

    draw(chartGroup, labelGroup, legendGroup, data, timeScale, plotWidth, timeStepWidth, timeStepMinutes) {
        this.chartGroup = chartGroup;
        this.labelGroup = labelGroup;
        this.legendGroup = legendGroup;

        this.data = data;
        this.timeScale = timeScale;
        // visible width & height
        this.viewWidth = this.settings['width'];
        this.viewHeight = this.settings['height'];
        // plot width & height
        this.plotWidth = plotWidth;
        this.plotHeight = this.viewHeight;

        this.timeStepWidth = timeStepWidth;
        this.timeStepMinutes = timeStepMinutes;

        // append plot view - g element containing the entire plot
        this.plot = this.chartGroup.append('g')
            .attr('class', 'plot');

        this.variablesWithData = this.variableKeys.filter(v => this.data.some(d => !isNaN(d[v])));

        this.valueExtent = this.getValuesExtent();
        if (this.valueExtent[0] < this.valueExtent[1]) {
            this.valueExtent[0] -= this.settings['valueExtentPadding'];
            this.valueExtent[1] += this.settings['valueExtentPadding'];
        }
        else {
            this.valueExtent[0] += this.settings['valueExtentPadding'];
            this.valueExtent[1] -= this.settings['valueExtentPadding'];
        }

        // create value scale
        // y scale is determined by height
        this.valueScale = d3.scaleLinear().range([this.plotHeight, 0]).domain(this.valueExtent);

        this.appendTimeAxis();
        this.appendValueAxis();
        this.appendRefValueAxis();

        // append line legend
        this.appendLineLegends(this.variablesWithData);

        // append data
        this.appendData();

        // finally append plot border to SVG
        this.labelGroup.append('line')
            .attr('x1', 0)
            .attr('x2', this.viewWidth)
            .attr('y1', this.viewHeight)
            .attr('y2', this.viewHeight)
            .attr('class', 'frame');
    }

    getValuesExtent() {
        let min = this.settings['valueAxisMin'],
            max = this.settings['valueAxisMax'];

        if (min === null) {
            min = d3.min(this.data, d => d3.min(this.variablesWithData.filter(v => d[v] !== null).map(v => d[v])));
        }
        if (max === null) {
            max = d3.max(this.data, d => d3.max(this.variablesWithData.filter(v => d[v] !== null).map(v => d[v])));
        }
        return [min, max];
    }

    getValueAxisTicks() {
        return null;
    }

    valueTickFormat(d) {
        return NOAAVariable.formatValue(this.variablesWithData[0], d) + (this.settings['valueTickUnits'] ? this.settings['valueTickUnits'] : '');
    }

    appendValueAxis() {
        const self = this;

        //append Y axis and grid lines to SVG - this is a fixed layer
        let ticks;
        if (this.valueExtent[0] === this.valueExtent[1]) {
            ticks = [this.valueExtent[0]];
        }
        else {
             ticks = this.getValueAxisTicks();
        }
        let axis = d3.axisRight(this.valueScale)
            .tickValues(ticks)
            .tickSize(this.plotWidth)
            .tickFormat(d => this.valueTickFormat.call(self, d));

        this.plot.append('g')
            .attr('class', 'axis axis-values grid')
            .call(function (g) {
                g.call(axis);
                g.select('.domain').remove();

                var valueAxisLabels = self.labelGroup
                    .append('g')
                    .attr('class', 'axis axis-labels');
                g.selectAll('.tick').each(function () {
                    var clone = this.cloneNode(true);
                    clone.removeChild(clone.querySelector('line'));
                    valueAxisLabels.node().appendChild(clone);
                });
                valueAxisLabels.selectAll('.tick text').attr('x', self.settings['textPadding']);
                valueAxisLabels.selectAll('.tick text').clone(true).attr('text-anchor', 'end').attr('x', self.viewWidth - self.settings['textPadding']);
                g.selectAll('.tick text').remove();
            });
    }

    resizeValueAxisLabels() {
        if (this.labelGroup) {
            this.labelGroup.select('.axis-labels').selectAll('text[text-anchor="end"]').attr('x', this.viewWidth - this.settings['textPadding']);
            this.labelGroup.select('line').attr('x2', this.viewWidth);
        }
    }

    appendRefValueAxis() {
        if (!this.settings['refValues']) {
            return;
        }

        const self = this;

        //append Y axis and grid lines to SVG - this is a fixed layer
        let axis = d3.axisRight(this.valueScale)
            .tickValues(this.settings['refValues'].filter(v => v > (self.valueExtent[0] + self.settings['valueExtentPadding']) && v < (self.valueExtent[1] - self.settings['valueExtentPadding'])))
            .tickSize(this.plotWidth)
            .tickFormat(d => self.valueTickFormat.call(self, d));

        this.plot.append('g')
            .attr('class', 'axis axis-values ref-values')
            .call(function (g) {
                g.call(axis);
                g.select('.domain').remove();

                if (self.settings['showRefValueLabel']) {
                    var valueAxisLabels = self.labelGroup
                        .append('g')
                        .attr('class', 'axis axis-labels');
                    g.selectAll('.tick').each(function () {
                        var clone = this.cloneNode(true);
                        clone.removeChild(clone.querySelector('line'));
                        valueAxisLabels.node().appendChild(clone);
                    });
                    valueAxisLabels.selectAll('.tick text').attr('x', self.settings['textPadding']);
                    valueAxisLabels.selectAll('.tick text').clone(true).attr('text-anchor', 'end').attr('x', self.viewWidth - self.settings['textPadding']);
                    g.selectAll('.tick text').remove();
                }
            });
    }

    getTimeAxisTicks() {
        let start, end, ticks = [];
        if (this.timeScale.domain()[0] < this.timeScale.domain()[1]) {
            start = this.timeScale.domain()[0].getTime();
            end = this.timeScale.domain()[1].getTime();
        }
        else {
            start = this.timeScale.domain()[1].getTime();
            end = this.timeScale.domain()[0].getTime();
        }

        while (start <= end) {
            ticks.push(new Date(start));
            start += this.timeStepMinutes * 60000;
        }

        return ticks;
    }

    appendTimeAxis() {
        let timeValues,
            formatTime,
            xAxisHours,
            xAxisDays,
            tickValuesDays;

        // append X axis with hours at the bottom of movable plot group
        timeValues = this.getTimeAxisTicks();
        formatTime = d3.timeFormat(this.settings['timeTickFormat']);
        xAxisHours = d3.axisTop(this.timeScale)
            // skip first and last value
            .tickValues(timeValues.filter((t, index) => index % this.settings['timeLabelEverySteps'] === 0))
            .tickFormat(formatTime);

        this.plot.append('g')
            .attr('class', 'axis axis-hours grid')
            .call(g => {
                g.call(xAxisHours);
                g.select('.domain').remove();
                g.selectAll('.tick text').attr('y', this.viewHeight - this.settings['textPadding']);
                g.selectAll('.tick line').remove();
            });

        const timeDomain = this.timeScale.domain();
        const inverted = timeDomain[0] > timeDomain[1];

        // append X axis with days at the top of movable plot group
        formatTime = d3.timeFormat(this.settings['dayTickFormat']);
        tickValuesDays = timeValues.filter(d => d.getHours() === 0);
        if (inverted) {
            const timeMax = d3.max(timeValues);
            if (timeMax.getHours() > 6) {
                tickValuesDays.splice(0, 0, timeMax);
            }
        }
        else {
            const timeMin = d3.min(timeValues);
            if (timeMin.getHours() < 18) {
                tickValuesDays.splice(0, 0, timeMin);
            }
        }

        xAxisDays = d3.axisTop(this.timeScale)
            // skip first and last value
            .tickValues(tickValuesDays)
            .tickFormat(d => {
                if (inverted && d.getHours() === 0) {
                    return formatTime(new Date(d.getTime() - 8.64e+7));
                }
                return formatTime(d);
            });

        this.plot.append('g')
            .attr('class', 'axis axis-days')
            .call(g => {
                g.call(xAxisDays);
                // text left of tick mark
                g.attr('text-anchor', 'start');
                // remove axis line
                g.select('.domain').remove();
                // move text below axis line and shift to left of tick mark
                g.selectAll('.tick text')
                    .attr('alignment-baseline', 'hanging')
                    .attr('y', this.settings['textPadding'])
                    .attr('dx', this.settings['textPadding']);

                g.selectAll('.tick line').attr('y2', g.selectAll('.tick text').node().getBBox().height);

                if (timeValues[0].getHours() !== 0) {
                    g.select('.tick line:first-child').remove();
                }
            });
    }

    formatLegendText(variable) {
        let units = NOAAVariable.getUnits(variable);
        if (this.settings['valueMultiplier'] && this.settings['valueMultiplier'] > 1) {
            units = 'x' + this.settings['valueMultiplier'] + units;
        }
        return NOAAVariable[variable]['title'] + (units ? ' (' + units + ')' : '');
    }

    appendLineLegends(variables) {
        let x = this.viewWidth,
            legend, text, box, width,
            padding = this.settings['textPadding'];

        variables.forEach(variable => {
            if (!this.data.some(d => d[variable] !== null)) {
                return;
            }

            legend = this.legendGroup
                .append('g')
                .attr('id', `legend-${variable}`)
                .attr('class', 'legend');

            if (this.variables[variable]['visible'] === false) {
                legend.classed('legend-hidden', true);
            }

            text = legend
                .append('text')
                .attr('alignment-baseline', 'hanging')
                .attr('x', padding)
                .attr('y', padding)
                .text(this.formatLegendText(variable));
            box = text.node().getBBox();
            width = box.width + 2 * padding;
            x -= width;
            legend.insert('rect', 'text')
                .attr('class', `fill-${variable} stroke-${variable}`)
                .attr('width', width)
                .attr('height', box.height + padding);
            legend.attr('transform', 'translate(' + x + ', 0)');

            legend.on('click', () => {
                d3.event.stopPropagation();
                this.toggleVariable(variable);
            });
        });
    }

    resizeLegends() {
        if (this.legendGroup) {
            let x = this.viewWidth,
                width;
            this.legendGroup.selectAll('.legend').each(function() {
                width = this.getClientRects()[0]['width'];
                x -= width;
                d3.select(this).attr('transform', 'translate(' + x + ', 0)');
            });
        }
    }

    setSize(width, height) {
        this.viewWidth = this.settings['width'] = width;
        this.viewHeight = this.settings['height'] = height;
        this.resize();
    }

    resize() {
        this.resizeLegends();
        this.resizeValueAxisLabels();
    }

    hideVariable(variable) {
        this.plot.select(`g#${variable}`).attr('visibility', 'hidden');
        this.legendGroup.select(`g#legend-${variable}`).classed('legend-hidden', true);
        this.variables[variable]['visible'] = false;
    }

    showVariable(variable) {
        this.plot.select(`g#${variable}`).attr('visibility', 'visible');
        this.legendGroup.select(`g#legend-${variable}`).classed('legend-hidden', false);
        this.variables[variable]['visible'] = true;
    }

    toggleVariable(variable) {
        if (this.variables[variable]['visible'] === false) {
            this.showVariable(variable);
        }
        else {
            this.hideVariable(variable);
        }
    }

    appendData() {
        this.appendLines();
    }

    appendLines() {
        this.variablesWithData.forEach(variable => this.appendLine(variable));
    }

    filterValueData(variable, d) {
        return d[variable] !== null;
    }

    appendValueMarkers(variable, entry) {
        entry.append('circle')
            .attr('class', 'line-marker stroke-' + variable + ' fill-' + variable)
            .attr('cx', d => this.timeScale(d['time']))
            .attr('cy', d => this.valueScale(d[variable]))
            .attr('r', this.settings['markerSize'] / 2);
    }

    appendValueLineLabels(g, variable) {
        var dy, alignmentBaseline,
            position = this.settings['valuePosition'][variable];

        if (position === undefined) {
            position = this.settings['valuePosition']['default'];
        }
        if (position === undefined) {
            position = 'top';
        }

        if (position === 'alternate') {
            this.appendAlternatingValueLineLabels(g, variable);
            return;
        }
        else if (position === 'bottom') {
            alignmentBaseline = 'hanging';
            dy = this.settings['valuePadding'] + this.settings['markerSize'];
        }
        else {
            alignmentBaseline = 'auto';
            dy = -this.settings['valuePadding'] - this.settings['markerSize'];
        }

        g.selectAll('.line-label')
            .data(this.data.filter(d => this.filterValueData(variable, d)).filter((d, i) => this.settings['valueLabelInterval'] === 1 || (i + this.settings['valueLabelIntervalShift']) % this.settings['valueLabelInterval'] === 0))
            .enter()
            .append('text')
            .attr('class', 'line-label fill-' + variable)
            .attr('x', d => this.timeScale(d['time']))
            .attr('y', d => this.valueScale(d[variable]))
            .attr('alignment-baseline', alignmentBaseline)
            .attr('dy', dy)
            .attr('text-anchor', 'middle')
            .html(d => this.formatValueLabel(variable, d));
    }

    appendAlternatingValueLineLabels(g, variable) {
        var self = this,
            position = 'bottom',
            dy, alignmentBaseline;

        this.data.filter(d => self.filterValueData(variable, d)).forEach((d, index) => {
            if (self.settings['valueLabelInterval'] === 1 || (index + self.settings['valueLabelIntervalShift']) % self.settings['valueLabelInterval'] === 0) {
                if (position === 'bottom') {
                    alignmentBaseline = 'hanging';
                    dy = this.settings['valuePadding'] + this.settings['markerSize'];
                    position = 'top';
                }
                else {
                    alignmentBaseline = 'auto';
                    dy = -this.settings['valuePadding'] - this.settings['markerSize'];
                    position = 'bottom';
                }

                g.append('text')
                    .attr('class', 'line-label fill-' + variable)
                    .attr('x', self.timeScale(d['time']))
                    .attr('y', self.valueScale(d[variable]))
                    .attr('alignment-baseline', alignmentBaseline)
                    .attr('dy', dy)
                    .attr('text-anchor', 'middle')
                    .html(self.formatValueLabel(variable, d));
            }
        });
    }

    appendLine(variable, data) {
        if (data === undefined) {
            data = this.data;
        }

        let line = d3.line()
            .defined(d => this.filterValueData(variable, d))
            .x(d => this.timeScale(d['time']))
            .y(d => this.valueScale(d[variable]));

        //
        if (this.settings['curve'] !== null) {
            line.curve(this.settings['curve']);
        }

        let g = this.plot.append('g').attr('id', variable);

        if (this.variables[variable]['visible'] === false) {
            g.attr('visibility', 'hidden');
        }

        g.append('path')
            .datum(data)
            .attr('class', 'line stroke-' + variable)
            .attr('d', line);

        if (this.settings['showMarker'] > 0) {
            this.appendValueMarkers(variable,
                g.selectAll('.line-marker')
                    .data(data.filter(d => this.filterValueData(variable, d)))
                    .enter());
        }

        if (this.settings['showValues'] > 0) {
            this.appendValueLineLabels(g, variable);
        }
    }

    formatValueLabel(variable, d) {
        return NOAAVariable.formatValue(variable, d[variable]);
    }

    appendLoader(group, x, y, height) {

        const loaderWidth = 135,
            loaderHeight = 140;

        let loader = group.append('g').attr('class', 'loader').html(
            '<rect y="10" width="15" height="120" rx="6"> \
            <animate attributeName="height" \
                begin="0.5s" dur="1s" \
                values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" \
                repeatCount="indefinite" /> \
            <animate attributeName="y" \
                begin="0.5s" dur="1s" \
                values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" \
                repeatCount="indefinite" /> \
        </rect> \
            <rect x="30" y="10" width="15" height="120" rx="6"> \
                <animate attributeName="height" \
                    begin="0.25s" dur="1s" \
                values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" \
                repeatCount="indefinite" /> \
                <animate attributeName="y" \
                    begin="0.25s" dur="1s" \
            values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" \
            repeatCount="indefinite" /> \
            </rect> \
            <rect x="60" width="15" height="140" rx="6"> \
                <animate attributeName="height" \
                    begin="0s" dur="1s" \
            values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" \
            repeatCount="indefinite" /> \
                <animate attributeName="y" \
                    begin="0s" dur="1s" \
            values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" \
            repeatCount="indefinite" /> \
            </rect> \
            <rect x="90" y="10" width="15" height="120" rx="6"> \
                <animate attributeName="height" \
                    begin="0.25s" dur="1s" \
            values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" \
            repeatCount="indefinite" /> \
                <animate attributeName="y" \
                    begin="0.25s" dur="1s" \
            values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" \
            repeatCount="indefinite" /> \
            </rect> \
            <rect x="120" y="10" width="15" height="120" rx="6"> \
                <animate attributeName="height" \
                    begin="0.5s" dur="1s" \
            values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" \
            repeatCount="indefinite" /> \
                <animate attributeName="y" \
                    begin="0.5s" dur="1s" \
                values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" \
                repeatCount="indefinite" /> \
            </rect>');

        let scale = height / loaderHeight;
        loader.attr('transform', `translate(${x - (loaderWidth * scale) / 2}, ${y - height / 2}) scale(${scale})`);

        return loader;
    }
}

NOAAHourlyChartBase.defaults = {
    // SVG height in px
    'height': 130,
    // SVG width in px
    'width': 500,
    // format for hours of the time axis
    'timeTickFormat': '%H:%M',
    'curve': null,
    // value extent is determined from data values
    // these options allow to override one or both extremes
    'valueAxisMin': null,
    'valueAxisMax': null,
    // the units ove the value ticks
    'valueTickUnits': null,
    // format for days of the time axis
    'dayTickFormat': '%a, %b %e %Y',
    // text padding used for axis, legend
    'textPadding': 3,
    // if true, draw value marker along value line
    'showMarker': true,
    // value marker along value line
    'markerSize': 4,
    // if true number values are shown in plot
    'showValues': true,
    // padding between value marker and value text
    'valuePadding': 2,
    // position of value text, can be specified per variable
    'valuePosition': {
        'default': 'top'
    },
    // show hour label every x hours
    'timeLabelEverySteps': 3,
    // show value label every n-th value
    'valueLabelInterval': 2,
    // 
    'valueLabelIntervalShift': 1,
    // zoom callback
    'zoom': null,
    // no data callback
    'noData': null,
    // reference values to show on value axis as dashed line
    'refValues': null,
    // if true value for reference line will be shown
    'showRefValueLabel': false,
    // value to add to value extent on each end
    'valueExtentPadding': 10,
    // if > 1, values will be shown as multiplies of valueMultiplier
    'valueMultiplier': 1,
    'verticalScrollTarget': null
};
