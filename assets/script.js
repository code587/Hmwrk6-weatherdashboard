let cityInput = document.querySelector("#city");
let searchBtn = document.querySelector("#searchbutton");
let cityNameEl = document.querySelector(".cityname");
let todayEl = document.querySelector(".today");
let tempEl = document.querySelector(".temp");
let windEl = document.querySelector(".wind");
let humidityEl = document.querySelector(".humidity");
let uvIndexEl   = document.querySelector("#uvindex");
let weatherCards = document.querySelector(".card-deck");
let todayEl2 = document.querySelector(".date");
let tempE2 = document.querySelector(".temp2");
let windEl2 = document.querySelector(".wind2");
let humidityEl2 = document.querySelector(".humidity2");

//fetch()

searchBtn.addEventListener("click", function(event) {
    event.preventDefault();

    let citySearch = cityInput.value
    console.log(citySearch)
    
    weatherWeek(citySearch)
    
})

function weatherWeek(value) {
    console.log("cityInput value inside getWeatherweek", value)
    console.log(value);
    
    let weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + value + "&cnt=1" + "&appid=78e465147d98ed2de5b5d10f98a4ff8f&units=imperial";
    
    console.log(weatherURL)
    fetch(weatherURL) 
    .then(function (response) {
        return response.json();
    })
    .then(function weekForecast () {
        for (let i = 0; i < weatherWeek.length; i++) {
        console.log("GET WEATHER WEEK",weather);
        console.log(weather.city.coord);
        
        cityNameEl.textContent = weatherWeek.city.name;
        todayEl.textContent = weatherWeek.list[i].dt_txt; 
        tempEl.textContent = "Temp: " + weatherWeek.list[i].main.temp + " F";
        windEl.textContent = "Wind Speed: " + weatherWeek.list[i].wind.speed + " MPH";
        humidityEl.textContent = "Humidity: " + weatherWeek.list[i].main.humidity + "%";
    }
})

function getUVIndex(weather) {
    console.log(oneCallURL);
    let latitude = weather.city.coord.lat 
    let longitude = weather.city.coord.lon
    let coords = {lat: latitude, lon: longitude};
    console.log(coords);

    let oneCallURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=78e465147d98ed2de5b5d10f98a4ff8f&units=imperial"

    console.log(oneCallURL); 

    fetch(oneCallURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("GET UV INDEX",data) // is giving me all the data still need to pluck out the uvi
        uvIndexEl.textContent = "UV Index: " + weather.list[0].uvi;
    })
}
}







 