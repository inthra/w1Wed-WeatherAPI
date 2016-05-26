var apiKey = require('./../.env').apiKey;
var Weather = require('./../js/weather.js').Weather;

$(document).ready(function(){
// celcius section
  $('#celcius').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");

    var requestedWeather = new Weather();

    $.get(requestedWeather.getWeather(city)).then(function(response) {
      requestedWeather.kelvin = response.main.temp;
      $('.showWeather').text("The temperature in " + city + " is " + requestedWeather.celciusConversion() + "°C.");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });

    $.get(requestedWeather.getForecast(city)).then(function(response) {
      $('.showForecast').append("The 5-day forecast for temperature in " + city + " is:");
      for (var i = 0; i <= 4; i++) {
        requestedWeather.kelvin = response.list[i].main.temp;
        $('.showForecast').append("<li>" + "Day " + (i + 1) + ": " + requestedWeather.celciusConversion() + "°C" + "</li>");
      }
    }).fail(function(error) {
      $('.showForecast').append(error.responseJSON.message);
    });
  });
// fahrenheit section
  $('#fahrenheit').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");

    var requestedWeather = new Weather();

    $.get(requestedWeather.getWeather(city)).then(function(response) {
      requestedWeather.kelvin = response.main.temp;
      $('.showWeather').text("The temperature in " + city + " is " + requestedWeather.fahrenheitConversion() + "°F.");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });

    $.get(requestedWeather.getForecast(city)).then(function(response) {
      $('.showForecast').append("The 5-day forecast for temperature in " + city + " is:");
      for (var k = 0; k <= 4; k++) {
        requestedWeather.kelvin = response.list[k].main.temp;
        $('.showForecast').append("<li>" + "Day " + (k + 1) + ": " + requestedWeather.fahrenheitConversion() + "°F" + "</li>");
      }
    }).fail(function(error) {
      $('.showForecast').append(error.responseJSON.message);
    });
  });
});
