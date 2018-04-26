//Local Weather JavaScript
var API_KEY = "111991a5aed16efa05ae841d5bd5b52b";
var cel = false;
var wd;

function displayTemp(fTemp, c) {
  if(c) return Math.round((fTemp - 32) * (5/9)) + "&#176;" + " C";
  return Math.round(fTemp) + "&#176;" + " F"
}

function render(wd, cel) { 
      var currentLocation = wd.name;
      var currentWeather = wd.weather[0].description;
      var currentTemp = displayTemp(wd.main.temp, cel);
      var high = displayTemp(wd.main.temp_max, cel);
      var low = displayTemp(wd.main.temp_min, cel);
      
      $('#location').html(currentLocation);
      $('#temp').html(currentTemp);
      $('#description').html(currentWeather);
      $('#high-low').html(high + " / "  + low);
  
   if(currentWeather == 'clear sky') {
    $('body').css('background-image', 'linear-gradient( rgba(20,20,20,.9),rgba(20,20,20, .1)) ,url(https://source.unsplash.com/6gBJYHJim9o)');

  } else if(currentWeather == 'few clouds', 'overcast clouds'){
    $('body').css('background-image', 'linear-gradient( rgba(20,20,20,.9),rgba(20,20,20, .1)), url(https://source.unsplash.com/yvruQt6JXjc)');
  } else if(currentWeather == 'scattered clouds'){
    $('body').css('background-image', 'linear-gradient( rgba(20,20,20,.9),rgba(20,20,20, .1)), url(https://source.unsplash.com/gXG_2TpSBOc)');
  } else if(currentWeather == 'broken clouds'){
    $('body').css('background-image', 'linear-gradient( rgba(20,20,20,.9),rgba(20,20,20, .1)), url(https://source.unsplash.com/auMjWDfTFhI)');
  } else if(currentWeather == 'shower rain', 'light rain'){
    $('body').css('background-image', 'linear-gradient( rgba(20,20,20,.9),rgba(20,20,20, .1)), url(https://source.unsplash.com/Ix1TiS-E17E)');
  } else if(currentWeather == 'rain'){
    $('body').css('background-image', 'linear-gradient( rgba(20,20,20,.9),rgba(20,20,20, .1)), url(https://source.unsplash.com/v3UZKbMaTGk)');
  } else if(currentWeather == 'thunderstorm'){
    $('body').css('background-image', 'linear-gradient( rgba(20,20,20,.9),rgba(20,20,20, .1)), url(https://source.unsplash.com/in9-n0JwgZ0)');
  } else if(currentWeather == 'snow'){
    $('body').css('background-image', 'linear-gradient( rgba(20,20,20,.9),rgba(20,20,20, .1)), url(https://source.unsplash.com/hXcGZg3rAkU)');
  } else if(currentWeather == 'mist'){
    $('body').css('background-image', 'linear-gradient( rgba(20,20,20,.9),rgba(20,20,20, .1)), url(https://source.unsplash.com/kbKEuU-YEIw)');
  } else {
    $('body').css('background-image', 'linear-gradient( rgba(20,20,20,.9),rgba(20,20,20, .1)), url(https://source.unsplash.com/3l3RwQdHRHg)');
  } 
}

$(function(){
  var loc;
  $.getJSON('https://ipinfo.io', function(d){
    console.log("assigning the data...")
    loc = d.loc.split(',');
    console.log(loc);
    
    $.getJSON('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?units=imperial&lat='+loc[0]+'&lon='+loc[1]+'&appid='+API_KEY, function(apiData){
     wd = apiData;

     render(apiData, cel);
     
     $('#toggle').click(function(){
       cel = !cel;
       render(wd, cel);
     })
            
    })
    
  })
 
})