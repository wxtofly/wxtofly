var NOAAForecastPeriod = function (container, forecastPeriod, options) {

    var defaults = {
        'click': null
        },
        settings,
        img,
        div;

    settings = Object.assign({}, defaults, options);

    container.addClass('period');
    if (forecastPeriod.isDaytime) {
        container.addClass('daytime');
    }
    else {
        container.addClass('night');
    }

    container.append('<p class="period-name">' + forecastPeriod.name + '</p>');
    img = $('<img src="' + forecastPeriod.icon + '"></img>');
    container.append('<p class="icon"></p>').append(img);
    container.append('<p class="short-description">' + forecastPeriod.shortForecast + '</p>');

    img.click(function (e) {
        if (typeof settings['click'] === 'function') {
            settings['click'].call(this, forecastPeriod);
        }
        e.stopPropagation();
    });

    div = $('<div class="temp-wind"></div>');
    container.append(div);
    div.append('<p class="temp"><span class="temp ' +
        (forecastPeriod.isDaytime ? 'high"><i class="fas fa-temperature-high"></i>' : 'low"><i class="fas fa-temperature-low"></i>') + ' ' +
        NOAAVariable.toStringWithUnits('temperature', forecastPeriod.temperature) + '</span>' +
        (forecastPeriod.temperatureTrend === 'falling' ? '<span class="temp-trend"><i class="fas fa-arrow-down"></i></span>' : '') + 
        (forecastPeriod.temperatureTrend === 'rising' ? '<span class="temp-trend"><i class="fas fa-arrow-up"></i></span>' : '') + 
        '</p>');
    div.append('<p class="wind"><span><i class="fas fa-wind"></i> ' + forecastPeriod.windSpeed + ' ' + forecastPeriod.windDirection + '</span></p>');
};

$.fn.noaaForecastPeriod = function (forecastPeriod, options) {
    return new NOAAForecastPeriod(this, forecastPeriod, options);
};