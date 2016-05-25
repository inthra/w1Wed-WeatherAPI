var apiKey = require('./../.env').apiKey;
var Weather = require('./../js/weather.js').Weather;

$(document).ready(function(){
  $('#weatherLocation').click(function(){

    //get user input
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");

    // var currentWeather = new Weather(anyInformationYouWant);



    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%.");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
    $.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showForecast').append("The 5-day forecast for humidity in " + city + " is " + response.list[0].main.humidity + "%, ");
      $('.showForecast').append(response.list[1].main.humidity + "%, ");
      $('.showForecast').append(response.list[2].main.humidity + "%, ");
      $('.showForecast').append(response.list[3].main.humidity + "%, ");
      $('.showForecast').append(response.list[4].main.humidity + "%.");
    }).fail(function(error) {
      $('.showForecast').text(error.responseJSON.message);
    });
  });
});
