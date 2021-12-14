let cityInput = document.querySelector("#city");
let searchBtn = document.querySelector("#searchbutton");
let cityNameEl = document.querySelector("#cityname");
let todayEl = document.querySelector(".today");
let tempEl = document.querySelector(".temp");
let windEl = document.querySelector(".wind");
let humidityEl = document.querySelector(".humidity");
let uvIndexEl   = document.querySelector("#uvindex");
let weatherCards = document.querySelector(".card-deck");

searchBtn.addEventListener("click", function(event) {
    event.preventDefault();

    let citySearch = cityInput.value
    console.log(citySearch)
  
    // let todayDate = moment()
    // $("#today").text(today.format("dddd, MMMM D, YYYY"));
    // console.log(todayDate);
    // // let currentDate = moment().format("M, D, YYYY")
    // // // $("currentDayEl").text(todayDate.format("M, D, YYYY"));
    // // console.log(currentDate);

    getCurrentWeather(citySearch)
  
})
   
function getCurrentWeather(value) {
    console.log("cityInput value inside getcurrentweather", value)
    console.log(value);
    
    let weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + value + "&cnt=1" + "&appid=78e465147d98ed2de5b5d10f98a4ff8f&units=imperial";
    console.log(weatherUrl)

    fetch(weatherUrl) 
        .then(function (response) {
            return response.json();
        })
        .then(function (weather) {
            
            cityNameEl.textContent = weather.city.name;
            todayEl.textContent = weather.list[0].dt_txt; 
            tempEl.textContent = "Temp: " +weather.list[0].main.temp + " F";
            windEl.textContent = "Wind Speed: " + weather.list[0].wind.speed + " MPH";
            humidityEl.textContent = "Humidity: " + weather.list[0].main.humidity + "%";

            console.log("GET CURRENT WEATHER",weather);
            console.log(weather.city.coord);
        })
}

function getUVIndex(weather) {
    let oneCallURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=78e465147d98ed2de5b5d10f98a4ff8f&units=imperial"

    console.log(oneCallURL);
    // let oneCallURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + coords.lat + "&lon=" + coords.lon + "&appid=78e465147d98ed2de5b5d10f98a4ff8f& units=imperial";
    // console.log(oneCallURL);
    let latitude = weather.city.coord.lat 
    let longitude = weather.city.coord.lon
    let coords = {lat: latitude, lon: longitude};
    console.log(coords);
}




    // then(function (data) {
    //     console.log("GET UV INDEX",data) // is giving me all the data still need to pluck out the uvi
    
    // })


  

//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

//WHEN I view the UV index
//THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city