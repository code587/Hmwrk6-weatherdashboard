
let cityInput = document.querySelector("#city");
let currentDayEl = document.querySelector("#currentday");
let tempEl = document.querySelector("#temp");
let windEl = document.querySelector("#wind");
let humidityEl = document.querySelector("#humidity");
let uvIndexEl   = document.querySelector("#uvindex");
let searchBtn = document.querySelector("#searchBtn");

//GIVEN a weather dashboard with form inputs
//WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
searchBtn.addEventListener("click", function(event){
    event.preventDefault();

    let citySearch = cityInput.value
    console.log(citySearch)
    getCurrentWeather(citySearch)
})
   

function getCurrentWeather(value) {
    console.log("cityInput value inside getcurrentweather", value)

    let weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + value + "&appid=78e465147d98ed2de5b5d10f98a4ff8f&units=imperial";

    console.log(weatherUrl)
    
   fetch(weatherUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (weather) {

            console.log("GET CURRENT WEATHER",weather)
    currentDayEl.textContent = weather.city.name;
            tempEl.textContent = "Temperature: " +weather.list[0].main.temp + "F";
            windEl.textContent = "Wind Speed: " + weather.list[0].wind.speed + "MPH";
            humidityEl.textContent = "Humidity: " + weather.list[0].main.humidity + "%";
            
            let coords = {
               lat: weather.city.coord.lat,
               lon: weather.city.coord.lon
            }

            getUVIndex(coords)
        })
 }
        
 function getUVIndex(coords){

    let weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + coords.lat + "&lon=" + coords.lon + "&units=imperial&appid=78e465147d98ed2de5b5d10f98a4ff8f"

    fetch(weatherUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("GET UV INDEX",data)
 })

}

 






//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

//WHEN I view the UV index
//THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city