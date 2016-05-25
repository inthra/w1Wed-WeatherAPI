var apiKey = require('./../.env').apiKey;
var Weather = require('./../js/weather.js').Weather;

$(document).ready(function(){
  $('#celcius').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");

    var requestedWeather = new Weather();

    $.get(requestedWeather.getWeather(city)).then(function(response) {
      requestedWeather.kelvin = response.main.temp;
      $('.showWeather').text("The temperature in " + city + " is " + requestedWeather.celciusConversion() + "° Celcius.");
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
      $('.showWeather').text(error.responseJSON.message);
    });
  });

  $('#fahrenheit').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      var newWeather = new Weather(response.main.temp);
      $('.showWeather').text("The temperature 5-day forecast in " + city + " is " + newWeather.fahrenheitConversion() + "° Fahrenheit.");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
