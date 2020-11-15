var BYTE_SIZE_UNITS = ['B', 'kB', 'MB', 'GB'];

function formatForecastDate(forecastDate) {
    return String(forecastDate.getUTCFullYear()) + String(forecastDate.getUTCMonth() + 1).padStart(2, '0') + String(forecastDate.getUTCDate()).padStart(2, '0');
}

function addDay(date) {
    date.setDate(date.getDate() + 1);
}

var wxtoflyLocalStorage = new LocalStorageUtil('wxtofly');

function getRegionPath(region) {
    return 'regions/' + region;
}

function appendContainer(element) {
    var container = $('<div class="conatiner"></div>');
    element.append(container);
    return container;
}

function appendRow(element) {
    var row = $('<div class="row"></div>');
    element.append(row);
    return row;
}

function appendCol(element, colClass) {
    var col = $('<div class="' + colClass + '"></div>');
    element.append(col);
    return col;
}

function getLocationHash() {
    if (!location.hash) {
        return null;
    }

    if (location.hash.length > 1) {
        return location.hash.substr(1);
    }

    return '';
}

function copyStringToClipboard(str) {
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
}

function formatByteSize(bytes) {
    var resource_size = bytes;
    var i = 0;
    for (i = 0; i < BYTE_SIZE_UNITS.length; i++) {
        var new_resource_size = resource_size / 1024;
        if (new_resource_size < 1) {
            return parseFloat(resource_size).toFixed(2) + ' ' + BYTE_SIZE_UNITS[i];
        }
        resource_size = new_resource_size;
    }
    return parseFloat(resource_size).toFixed(1) + ' ' + BYTE_SIZE_UNITS[i - 1];
}

// global LocalStorage settings
var wxToFlySettings = new LocalStorageUtil('wxtofly');

function fetchXML(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url);

        xhr.setRequestHeader('Accept', 'text/xml');
        xhr.setRequestHeader('Accept', 'application/xml');
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseXML);
            } else {
                reject(xhr);
            }
        };

        xhr.onerror = () => {
            reject(xhr);
        };

        xhr.send();
    });
}