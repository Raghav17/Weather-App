if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;

$.getJSON("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=914249b375fbaddf5998fbb11d6af557", function(json){
$(".place").append(json.name + "," + " " + json.sys.country);

var temperatureinC = Math.round(json.main.temp - 273);
var temperatureinF = Math.round((temperatureinC*(9/5)) + 32);
$("#tempa").append(temperatureinC);

$("a").click(function(click) {
  var a = $("a").text();
  if (a === "C") {
    $("#tempa").text(temperatureinF);
    $(this).text("F")
  } else {
    $("#tempa").text(temperatureinC);
    $(this).text("C")
  }
});


$("#mainWeather").append(json.weather[0].main +" " );
$(".icon").html("<img src='http://openweathermap.org/img/w/" + json.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
  

    });
  });
}