var Weather = function(kelvin) {
  this.kelvin = kelvin;
};

Weather.prototype.celciusConversion = function() {
  this.celcius = this.kelvin - 273.15;
  return this.celcius.toFixed(2);
};

Weather.prototype.fahrenheitConversion = function() {
  this.fahrenheit = (this.kelvin * (9/5) - 459.67);
  return this.fahrenheit.toFixed(2);
};

// Weather.prototype.getForecast = function(numberOfDays) {
//
//
// };

exports.Weather = Weather;
