var apiKey = require('./../.env').apiKey;
var Weather = require('./../js/weather.js').Weather;

$(document).ready(function(){
  $('#weatherLocation').click(function(){

// get user input
    var city = $('#location').val();
    $('#location').val("");

    $('.showWeather').text("The city you have chosen is " + city + ".");

    var requestedWeather = new Weather();
// get humidity related to the city
    $.get(requestedWeather.getWeather(city)).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%.");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
// get 5-days forecast humidity
    $.get(requestedWeather.getForecast(city)).then(function(response) {
      $('.showForecast').append("The 5-day forecast for humidity in " + city + " is:");
      for (var i = 0; i <= 4; i++) {
        $('.showForecast').append("<li>" + "Day " + (i + 1) + ": " + response.list[i].main.humidity + "%" + "</li>");
      }
    }).fail(function(error) {
      $('.showForecast').text(error.responseJSON.message);
    });
  });
});
