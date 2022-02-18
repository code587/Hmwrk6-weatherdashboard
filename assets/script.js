let cityInput = document.querySelector("#city");
let searchBtn = document.querySelector("#searchbutton");
let prevCities = document.querySelector("#previousCities");
let cityNameEl = document.querySelector(".cityname");
let todayEl = document.querySelector(".today");
let tempEl = document.querySelector(".temp");
let windEl = document.querySelector(".wind");
let humidityEl = document.querySelector(".humidity");
// let uvIndexEl   = document.querySelector("#uvindex");
let todayEl2 = document.querySelector(".date");
let tempEl2 = document.querySelector(".temp2");
let windEl2 = document.querySelector(".wind2");
let humidityEl2 = document.querySelector(".humidity2");
let todayEl3 = document.querySelector(".date3");
let tempEl3 = document.querySelector(".temp3");
let windEl3 = document.querySelector(".wind3");
let humidityEl3 = document.querySelector(".humidity3");
let todayEl4 = document.querySelector(".date4");
let tempEl4 = document.querySelector(".temp4");
let windEl4 = document.querySelector(".wind4");
let humidityEl4 = document.querySelector(".humidity4");
let todayEl5 = document.querySelector(".date5");
let tempEl5 = document.querySelector(".temp5");
let windEl5 = document.querySelector(".wind5");
let humidityEl5 = document.querySelector(".humidity5");
let todayEl6 = document.querySelector(".date6");
let tempEl6 = document.querySelector(".temp6");
let windEl6 = document.querySelector(".wind6");
let humidityEl6 = document.querySelector(".humidity6");

priorSearch();

function priorSearch() {
    
    prevCities.textContent = localStorage.getItem("citySearch");
    
}
    
    function getCurrentWeather(value) {
        console.log("cityInput value inside getCurrentWeather", value)
        console.log(value);
        
        let weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + value + "&exclude=hourly" + "&appid=78e465147d98ed2de5b5d10f98a4ff8f&units=imperial";
        
        fetch(weatherURL) 
        .then(function (response) {
            return response.json();
        })
        .then(function (weather) {
            console.log(weather);
            
            
            cityNameEl.textContent = weather.city.name;
            todayEl.textContent = weather.list[0].dt_txt; 
            tempEl.textContent = "Temp: " + weather.list[0].main.temp + " F";
            windEl.textContent = "Wind Speed: " + weather.list[0].wind.speed + " MPH";
            humidityEl.textContent = "Humidity: " + weather.list[0].main.humidity + "%";
            
            todayEl2.textContent = weather.list[5].dt_txt; 
            tempEl2.textContent = "Temp: " + weather.list[5].main.temp + " F";
            windEl2.textContent = "Wind Speed: " + weather.list[5].wind.speed + " MPH";
            humidityEl2.textContent = "Humidity: " + weather.list[5].main.humidity + "%";
            
            todayEl3.textContent = weather.list[13].dt_txt; 
            tempEl3.textContent = "Temp: " + weather.list[13].main.temp + " F";
            windEl3.textContent = "Wind Speed: " + weather.list[13].wind.speed + " MPH";
            humidityEl3.textContent = "Humidity: " + weather.list[13].main.humidity + "%";
            
            todayEl4.textContent = weather.list[21].dt_txt; 
            tempEl4.textContent = "Temp: " + weather.list[21].main.temp + " F";
            windEl4.textContent = "Wind Speed: " + weather.list[21].wind.speed + " MPH";
            humidityEl4.textContent = "Humidity: " + weather.list[21].main.humidity + "%";
            
            todayEl5.textContent = weather.list[29].dt_txt; 
            tempEl5.textContent = "Temp: " + weather.list[29].main.temp + " F";
            windEl5.textContent = "Wind Speed: " + weather.list[29].wind.speed + " MPH";
            humidityEl5.textContent = "Humidity: " + weather.list[29].main.humidity + "%";
            
            todayEl6.textContent = weather.list[37].dt_txt; 
            tempEl6.textContent = "Temp: " + weather.list[37].main.temp + " F";
            windEl6.textContent = "Wind Speed: " + weather.list[37].wind.speed + " MPH";
            humidityEl6.textContent = "Humidity: " + weather.list[37].main.humidity + "%";
            
        })
    }
    
    searchBtn.addEventListener("click", function(event) {
        event.preventDefault();
        
        let citySearch = cityInput.value
        console.log(citySearch)
        
        getCurrentWeather(citySearch)
        
        localStorage.setItem("citySearch", citySearch)
        prevCities.textContent = citySearch;
        li.appendChild(prevCities)
        
    })
        


        // return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=78e465147d98ed2de5b5d10f98a4ff8f&units=imperial`)  
        

        // fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=78e465147d98ed2de5b5d10f98a4ff8f&units=imperial")
        // .then(function (response) {
        //     return response.json();
        // })
        // .then(function (weather) {
        //     console.log(weather);
    

    // .then(function (response) {
        //     return response.json();
        // })
        // .then(function (oneCalluvi) {
    //     console.log(oneCalluvi);
    // })



// function getUVIndex(value) {
//     console.log(value);
//     let latitude = weather.city.coord.lat 
//     let longitude = weather.city.coord.lon
//     let coords = {lat: latitude, lon: longitude}
//     console.log(coords);
   
//     let oneCalluvi = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=78e465147d98ed2de5b5d10f98a4ff8f&units=imperial"

//     fetch(oneCalluvi)
//     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (uv) {
        //         uvIndexEl.textContent = "UV Index: " + weather.list[0].uvi;
        //     })
        //     console.log(oneCalluvi); 
// }








//console.log("GETUVINDEX",data) //is giving me all the data still need to pluck out the uvi
// for (let i = 0; i < weatherWeek.length; i++) {
// console.log("GET WEATHER WEEK",weather);
// console.log(weather.city.coord);






 