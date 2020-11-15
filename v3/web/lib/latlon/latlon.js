/* @preserve
 * LatLon v1.0, a JS library for parsing and formatting coordinates.
 * (c) 2019-2020 Jiri Richter
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.LatLon = {}));
}(this, function (exports) { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function getLatLngCoord(_lat, _lng, options) {
    var latlng = {
      lat: _lat,
      lng: _lng
    },
        lat,
        lng,
        deg,
        min; // 180 degrees & negative

    if (latlng.lng < 0) {
      latlng.lng_neg = true;
      latlng.lng = Math.abs(latlng.lng);
    } else {
      latlng.lng_neg = false;
    }

    if (latlng.lat < 0) {
      latlng.lat_neg = true;
      latlng.lat = Math.abs(latlng.lat);
    } else {
      latlng.lat_neg = false;
    }

    if (latlng.lng > 180) {
      latlng.lng = 360 - latlng.lng;
      latlng.lng_neg = !latlng.lng_neg;
    } // format


    if (options['format'] === 'DM') {
      deg = parseInt(latlng.lng);
      lng = deg + '&deg; ' + _format('00.' + '0'.repeat(options['digits']), (latlng.lng - deg) * 60) + "'";
      deg = parseInt(latlng.lat);
      lat = deg + '&deg; ' + _format('00.' + '0'.repeat(options['digits']), (latlng.lat - deg) * 60) + "'";
    } else if (options['format'] === 'DMS') {
      deg = parseInt(latlng.lng);
      min = (latlng.lng - deg) * 60;
      lng = deg + '&deg; ' + _format('00', parseInt(min)) + "' " + _format('00.0', (min - parseInt(min)) * 60) + "''";
      deg = parseInt(latlng.lat);
      min = (latlng.lat - deg) * 60;
      lat = deg + '&deg; ' + _format('00', parseInt(min)) + "' " + _format('00.0', (min - parseInt(min)) * 60) + "''";
    } else {
      // 'DD'
      lng = _format('#0.' + '0'.repeat(options['digits']), latlng.lng) + '&deg;';
      lat = _format('##0.' + '0'.repeat(options['digits']), latlng.lat) + '&deg;';
    }

    return {
      'lng': (!options['designators'] && latlng.lng_neg ? '-' : '') + lng + (options['designators'] ? latlng.lng_neg ? ' W' : ' E' : ''),
      'lat': (!options['designators'] && latlng.lat_neg ? '-' : '') + lat + (options['designators'] ? latlng.lat_neg ? ' S' : ' N' : '')
    };
  }
  /**
      * @preserve IntegraXor Web SCADA - JavaScript Number Formatter
      * http://www.integraxor.com/
      * author: KPL, KHL
      * (c)2011 ecava
      * Dual licensed under the MIT or GPL Version 2 licenses.
      */
  ////////////////////////////////////////////////////////////////////////////////
  // param: Mask & Value
  ////////////////////////////////////////////////////////////////////////////////


  function _format(m, v) {
    if (!m || isNaN(+v)) {
      return v; //return as it is.
    } //convert any string to number according to formation sign.


    var v = m.charAt(0) === '-' ? -v : +v;
    var isNegative = v < 0 ? v = -v : 0; //process only abs(), and turn on flag.
    //search for separator for grp & decimal, anything not digit, not +/- sign, not #.

    var result = m.match(/[^\d\-\+#]/g);
    var Decimal = result && result[result.length - 1] || '.'; //treat the right most symbol as decimal 

    var Group = result && result[1] && result[0] || ','; //treat the left most symbol as group separator
    //split the decimal for the format string if any.

    var m = m.split(Decimal); //Fix the decimal first, toFixed will auto fill trailing zero.

    v = v.toFixed(m[1] && m[1].length);
    v = +v + ''; //convert number to string to trim off *all* trailing decimal zero(es)
    //fill back any trailing zero according to format

    var pos_trail_zero = m[1] && m[1].lastIndexOf('0'); //look for last zero in format

    var part = v.split('.'); //integer will get !part[1]

    if (!part[1] || part[1] && part[1].length <= pos_trail_zero) {
      v = (+v).toFixed(pos_trail_zero + 1);
    }

    var szSep = m[0].split(Group); //look for separator

    m[0] = szSep.join(''); //join back without separator for counting the pos of any leading 0.

    var pos_lead_zero = m[0] && m[0].indexOf('0');

    if (pos_lead_zero > -1) {
      while (part[0].length < m[0].length - pos_lead_zero) {
        part[0] = '0' + part[0];
      }
    } else if (+part[0] === 0) {
      part[0] = '';
    }

    v = v.split('.');
    v[0] = part[0]; //process the first group separator from decimal (.) only, the rest ignore.
    //get the length of the last slice of split result.

    var pos_separator = szSep[1] && szSep[szSep.length - 1].length;

    if (pos_separator) {
      var integer = v[0];
      var str = '';
      var offset = integer.length % pos_separator;

      for (var i = 0, l = integer.length; i < l; i++) {
        str += integer.charAt(i); //ie6 only support charAt for sz.
        //-pos_separator so that won't trail separator on full length

        if (!((i - offset + 1) % pos_separator) && i < l - pos_separator) {
          str += Group;
        }
      }

      v[0] = str;
    }

    v[1] = m[1] && v[1] ? Decimal + v[1] : "";
    return (isNegative ? '-' : '') + v[0] + v[1]; //put back any negation and combine integer and fraction.
  }

  var defaults = {
    //template: '{lat} | {lng}',
    'template': '{lat} {lng}',
    // https://en.wikipedia.org/wiki/ISO_6709
    'format': 'DD',
    // DD, DM, DMS
    'designators': true,
    'digits': 3
  };
  function format(a, b, c) {
    var lat, lng, options;

    if (Array.isArray(a)) {
      lat = a[0];
      lng = a[1];
      options = b;
    } else if (typeof a === 'number') {
      lat = a;
      lng = b;
      options = c;
    } else if (_typeof(a) === 'object') {
      lat = a['lat'];
      lng = 'lon' in a ? a['lon'] : a['lng'];
      options = b;
    }

    var settings = Object.assign({}, defaults, options);
    var latlng = getLatLngCoord(lat, lng, settings);
    return settings['template'].replace(/\{lat\}/g, latlng['lat']).replace(/\{lng\}/g, latlng['lng']);
  }

  var CoordinateNumber = function CoordinateNumber(coordinateNumbers) {
    coordinateNumbers = this.normalizeCoordinateNumbers(coordinateNumbers);
    this.degrees = coordinateNumbers[0], this.minutes = coordinateNumbers[1], this.seconds = coordinateNumbers[2], this.milliseconds = coordinateNumbers[3];
    this.sign = this.normalizedSignOf(this.degrees);
    this.degrees = Math.abs(this.degrees);
  };

  CoordinateNumber.prototype.normalizeCoordinateNumbers = function (coordinateNumbers) {
    var currentNumber, i, j, len, normalizedNumbers;
    normalizedNumbers = [0, 0, 0, 0];

    for (i = j = 0, len = coordinateNumbers.length; j < len; i = ++j) {
      currentNumber = coordinateNumbers[i];
      normalizedNumbers[i] = parseFloat(currentNumber);
    }

    return normalizedNumbers;
  };

  CoordinateNumber.prototype.normalizedSignOf = function (number) {
    if (number >= 0) {
      return 1;
    } else {
      return -1;
    }
  };

  CoordinateNumber.prototype.detectSpecialFormats = function () {
    if (this.degreesCanBeSpecial()) {
      if (this.degreesCanBeMilliseconds()) {
        return this.degreesAsMilliseconds();
      } else if (this.degreesCanBeDegreesMinutesAndSeconds()) {
        return this.degreesAsDegreesMinutesAndSeconds();
      } else if (this.degreesCanBeDegreesAndMinutes()) {
        return this.degreesAsDegreesAndMinutes();
      }
    }
  };

  CoordinateNumber.prototype.degreesCanBeSpecial = function () {
    var canBe;
    canBe = false;

    if (!this.minutes && !this.seconds) {
      canBe = true;
    }

    return canBe;
  };

  CoordinateNumber.prototype.degreesCanBeMilliseconds = function () {
    var canBe;

    if (this.degrees > 909090) {
      canBe = true;
    } else {
      canBe = false;
    }

    return canBe;
  };

  CoordinateNumber.prototype.degreesAsMilliseconds = function () {
    this.milliseconds = this.degrees;
    return this.degrees = 0;
  };

  CoordinateNumber.prototype.degreesCanBeDegreesMinutesAndSeconds = function () {
    var canBe;

    if (this.degrees > 9090) {
      canBe = true;
    } else {
      canBe = false;
    }

    return canBe;
  };

  CoordinateNumber.prototype.degreesAsDegreesMinutesAndSeconds = function () {
    var newDegrees;
    newDegrees = Math.floor(this.degrees / 10000);
    this.minutes = Math.floor((this.degrees - newDegrees * 10000) / 100);
    this.seconds = Math.floor(this.degrees - newDegrees * 10000 - this.minutes * 100);
    return this.degrees = newDegrees;
  };

  CoordinateNumber.prototype.degreesCanBeDegreesAndMinutes = function () {
    var canBe;

    if (this.degrees > 360) {
      canBe = true;
    } else {
      canBe = false;
    }

    return canBe;
  };

  CoordinateNumber.prototype.degreesAsDegreesAndMinutes = function () {
    var newDegrees;
    newDegrees = Math.floor(this.degrees / 100);
    this.minutes = this.degrees - newDegrees * 100;
    return this.degrees = newDegrees;
  };

  CoordinateNumber.prototype.toDecimal = function () {
    var decimalCoordinate;
    decimalCoordinate = this.sign * (this.degrees + this.minutes / 60 + this.seconds / 3600 + this.milliseconds / 3600000);
    return decimalCoordinate;
  };

  var Validator = function Validator() {};

  Validator.prototype.isValid = function (coordinates) {
    var isValid;
    isValid = true;

    try {
      this.validate(coordinates);
      return isValid;
    } catch (error) {
      isValid = false;
      return isValid;
    }
  };

  Validator.prototype.validate = function (coordinates) {
    this.checkContainsNoLetters(coordinates);
    this.checkValidOrientation(coordinates);
    return this.checkNumbers(coordinates);
  };

  Validator.prototype.checkContainsNoLetters = function (coordinates) {
    var containsLetters;
    containsLetters = /(?![neswd])[a-z]/i.test(coordinates);

    if (containsLetters) {
      throw new Error('Coordinate contains invalid alphanumeric characters.');
    }
  };

  Validator.prototype.checkValidOrientation = function (coordinates) {
    var validOrientation;
    validOrientation = /^[^nsew]*[ns]?[^nsew]*[ew]?[^nsew]*$/i.test(coordinates);

    if (!validOrientation) {
      throw new Error('Invalid cardinal direction.');
    }
  };

  Validator.prototype.checkNumbers = function (coordinates) {
    var coordinateNumbers;
    coordinateNumbers = coordinates.match(/-?\d+(\.\d+)?/g);
    this.checkAnyCoordinateNumbers(coordinateNumbers);
    this.checkEvenCoordinateNumbers(coordinateNumbers);
    return this.checkMaximumCoordinateNumbers(coordinateNumbers);
  };

  Validator.prototype.checkAnyCoordinateNumbers = function (coordinateNumbers) {
    if (coordinateNumbers.length === 0) {
      throw new Error('Could not find any coordinate number');
    }
  };

  Validator.prototype.checkEvenCoordinateNumbers = function (coordinateNumbers) {
    var isUnevenNumbers;
    isUnevenNumbers = coordinateNumbers.length % 2;

    if (isUnevenNumbers) {
      throw new Error('Uneven count of latitude/longitude numbers');
    }
  };

  Validator.prototype.checkMaximumCoordinateNumbers = function (coordinateNumbers) {
    if (coordinateNumbers.length > 6) {
      throw new Error('Too many coordinate numbers');
    }
  };

  var Coordinates = function Coordinates(coordinateString) {
    this.coordinates = coordinateString;
    this.latitudeNumbers = null;
    this.longitudeNumbers = null;
    this.validate();
    this.parse();
  };

  Coordinates.prototype.validate = function () {
    var validator;
    validator = new Validator();
    return validator.validate(this.coordinates);
  };

  Coordinates.prototype.parse = function () {
    this.groupCoordinateNumbers();
    this.latitude = this.extractLatitude();
    return this.longitude = this.extractLongitude();
  };

  Coordinates.prototype.groupCoordinateNumbers = function () {
    var coordinateNumbers, numberCountEachCoordinate;
    coordinateNumbers = this.extractCoordinateNumbers(this.coordinates);
    numberCountEachCoordinate = coordinateNumbers.length / 2;
    this.latitudeNumbers = coordinateNumbers.slice(0, numberCountEachCoordinate);
    return this.longitudeNumbers = coordinateNumbers.slice(0 - numberCountEachCoordinate);
  };

  Coordinates.prototype.extractCoordinateNumbers = function (coordinates) {
    return coordinates.match(/-?\d+(\.\d+)?/g);
  };

  Coordinates.prototype.extractLatitude = function () {
    var latitude;
    latitude = this.coordinateNumbersToDecimal(this.latitudeNumbers);

    if (this.latitudeIsNegative()) {
      latitude = latitude * -1;
    }

    return latitude;
  };

  Coordinates.prototype.extractLongitude = function () {
    var longitude;
    longitude = this.coordinateNumbersToDecimal(this.longitudeNumbers);

    if (this.longitudeIsNegative()) {
      longitude = longitude * -1;
    }

    return longitude;
  };

  Coordinates.prototype.coordinateNumbersToDecimal = function (coordinateNumbers) {
    var coordinate, decimalCoordinate;
    coordinate = new CoordinateNumber(coordinateNumbers);
    coordinate.detectSpecialFormats();
    decimalCoordinate = coordinate.toDecimal();
    return decimalCoordinate;
  };

  Coordinates.prototype.latitudeIsNegative = function () {
    var isNegative;
    isNegative = this.coordinates.match(/s/i);
    return isNegative;
  };

  Coordinates.prototype.longitudeIsNegative = function () {
    var isNegative;
    isNegative = this.coordinates.match(/w/i);
    return isNegative;
  };

  Coordinates.prototype.getLatitude = function () {
    return this.latitude;
  };

  Coordinates.prototype.getLongitude = function () {
    return this.longitude;
  };

  function parse(str) {
    var coordinates = new Coordinates(str);
    coordinates.parse();
    return [coordinates.latitude, coordinates.longitude];
  }

  exports.format = format;
  exports.parse = parse;

  Object.defineProperty(exports, '__esModule', { value: true });

  var oldLatLon = window.LatLon;
  exports.noConflict = function() {
  	window.LatLon = oldLatLon;
  	return this;
  }

  // Always export us to window global (see #2364)
  window.LatLon = exports;

}));
//# sourceMappingURL=latlon.js.map
