let cityInput = document.querySelector("#city");
let searchBtn = document.querySelector("#searchbutton");
let cityNameEl = document.querySelector(".cityname");
let todayEl = document.querySelector(".today");
let tempEl = document.querySelector(".temp");
let windEl = document.querySelector(".wind");
let humidityEl = document.querySelector(".humidity");
// let uvIndexEl   = document.querySelector("#uvindex");
// let weatherCards = document.querySelector(".card-deck");
let todayEl2 = document.querySelector(".date");
let tempEl2 = document.querySelector(".temp2");
let windEl2 = document.querySelector(".wind2");
let humidityEl2 = document.querySelector(".humidity2");
let todayEl3 = document.querySelector(".date3");
let tempEl3 = document.querySelector(".temp3");
let windEl3 = document.querySelector(".wind3");
let humidityEl3 = document.querySelector(".humidity3");

//fetch()

searchBtn.addEventListener("click", function(event) {
    event.preventDefault();

    let citySearch = cityInput.value
    console.log(citySearch)
})
//     getLatestTemp(citySearch)
    
// })

// function getLatestTemp(value) {
//     console.log("cityInput value inside getLatestTemp", value)
//     console.log(value);
    
    let weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Charlotte&appid=78e465147d98ed2de5b5d10f98a4ff8f&units=imperial";
    
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

        todayEl2.textContent = weather.list[7].dt_txt; 
        tempEl2.textContent = "Temp: " + weather.list[7].main.temp + " F";
        windEl2.textContent = "Wind Speed: " + weather.list[7].wind.speed + " MPH";
        humidityEl2.textContent = "Humidity: " + weather.list[7].main.humidity + "%";

        todayEl3.textContent = weather.list[14].dt_txt; 
        tempEl3.textContent = "Temp: " + weather.list[14].main.temp + " F";
        windEl3.textContent = "Wind Speed: " + weather.list[14].wind.speed + " MPH";
        humidityEl3.textContent = "Humidity: " + weather.list[14].main.humidity + "%";

       


        


        // return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=78e465147d98ed2de5b5d10f98a4ff8f&units=imperial`)  
        

        // fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=78e465147d98ed2de5b5d10f98a4ff8f&units=imperial")
        // .then(function (response) {
        //     return response.json();
        // })
        // .then(function (weather) {
        //     console.log(weather);
    })
     

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






 