var NOAAErrorControl = function (container, error) {
    let text;
    if (typeof error === 'string') {
        text = error;
    }
    else if (error.detail) {
        text = 'NOAA API Error: ' + error.detail;
    }
    else {
    console.log(error);
    text = 'Error';
}

    container.append('<div class="noaa-error alert alert-danger m-2" role="alert"><i class="fas fa-frown mr-1"></i>' + text + '</div>');
};

$.fn.noaaError = function (error) {
    return NOAAErrorControl(this, error);
};