let cityInput = document.querySelector("#city");
let searchBtn = document.querySelector("#searchbutton");
let cityNameEl = document.querySelector("#cityname");
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
    
    getCurrentWeather(citySearch)
    
})

function getCurrentWeather(value) {
    console.log("cityInput value inside getcurrentweather", value)
    console.log(value);
    
    let weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + value + "&cnt=1" + "&appid=78e465147d98ed2de5b5d10f98a4ff8f&units=imperial";
    
    console.log(weatherURL)
    fetch(weatherURL) 
    .then(function (response) {
        return response.json();
    })
    .then(function (weather) {
        
        cityNameEl.textContent = weather.city.name;
        todayEl.textContent = weather.list[0].dt_txt; 
        tempEl.textContent = "Temp: " +weather.list[0].main.temp + " F";
        windEl.textContent = "Wind Speed: " + weather.list[0].wind.speed + " MPH";
        humidityEl.textContent = "Humidity: " + weather.list[0].main.humidity + "%";
    })
}

function getUVIndex(weather) {
    let oneCallURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=78e465147d98ed2de5b5d10f98a4ff8f&units=imperial"

    console.log(oneCallURL);
    let latitude = weather.city.coord.lat 
    let longitude = weather.city.coord.lon
    let coords = {lat: latitude, lon: longitude};
    console.log(coords);
}



// let todayDate = moment()
// $("#today").text(today.format("dddd, MMMM D, YYYY"));
// console.log(todayDate);
// // let currentDate = moment().format("M, D, YYYY")
// // // $("currentDayEl").text(todayDate.format("M, D, YYYY"));
// // console.log(currentDate);

// .then(function (response) {
    //     return response.json();
    // })
    // .then(function (weather) {
        
        //     cityNameEl.textContent = weather.city.name;
        //     todayEl.textContent = weather.list[i].dt_txt; 
        //     tempEl.textContent = "Temp: " +weather.list[i].main.temp + " F";
        //     windEl.textContent = "Wind Speed: " + weather.list[i].wind.speed + " MPH";
        //     humidityEl.textContent = "Humidity: " + weather.list[i].main.humidity + "%";
        // })
        
        
        function getWeatherweek (value) {
            console.log("cityInput value inside getcurrentweather", value)
            console.log(value);
            
            
            let weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + value + "&cnt=1" + "&appid=78e465147d98ed2de5b5d10f98a4ff8f&units=imperial";
            console.log(weatherURL)
            
            fetch(weatherURL) 
            .then(function (response) {
                return response.json();
            })
            .then(function (weather) {
                
                cityNameEl.textContent = weather.city.name;
                todayEl.textContent = weather.list[0].dt_txt; 
                tempEl.textContent = "Temp: " +weather.list[0].main.temp + " F";
                windEl.textContent = "Wind Speed: " + weather.list[0].wind.speed + " MPH";
                humidityEl.textContent = "Humidity: " + weather.list[0].main.humidity + "%";
            })
        }
        
        
        
        
        
        // let oneCallURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + coords.lat + "&lon=" + coords.lon + "&appid=78e465147d98ed2de5b5d10f98a4ff8f& units=imperial";
        // console.log(oneCallURL);













            
// //             console.log("GET WEATHER WEEK",weather);
// //             console.log(weather.city.coord);
// //         })
// // }


// // function weekForecast () {
// //     for (let i = 0; i < weatherWeek.length; i++) {

















// function getUVIndex(weather) {
//     let oneCallURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=78e465147d98ed2de5b5d10f98a4ff8f&units=imperial"

//     console.log(oneCallURL);
//     // let oneCallURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + coords.lat + "&lon=" + coords.lon + "&appid=78e465147d98ed2de5b5d10f98a4ff8f& units=imperial";
//     // console.log(oneCallURL);
//     let latitude = weather.city.coord.lat 
//     let longitude = weather.city.coord.lon
//     let coords = {lat: latitude, lon: longitude};
//     console.log(coords);
// }




//     // then(function (data) {
//     //     console.log("GET UV INDEX",data) // is giving me all the data still need to pluck out the uvi
    
//     // })


  
