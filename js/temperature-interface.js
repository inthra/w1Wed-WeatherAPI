var apiKey = require('./../.env').apiKey;
var Weather = require('./../js/temperature.js').Weather;

$(document).ready(function(){
  $('#celcius').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      var newWeather = new Weather(response.main.temp);
      $('.showWeather').text("The temperature in " + city + " is " + newWeather.celciusConversion() + "° Celcius.");
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
      $('.showWeather').text("The temperature in " + city + " is " + newWeather.fahrenheitConversion() + "° Fahrenheit.");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
