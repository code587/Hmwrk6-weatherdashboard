let cityInput = document.querySelector("#city");
let searchBtn = document.querySelector("#searchbutton");
let prevCities = document.querySelector(".previousCities");
let cityNameEl = document.querySelector(".cityname");
let todayEl = document.querySelector(".today");
let tempEl = document.querySelector(".temp");
let windEl = document.querySelector(".wind");
let humidityEl = document.querySelector(".humidity");
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
    
    prevCities.textContent = JSON.parse(localStorage.getItem("citySearch")) || [];

}
    
    function getExistingWeather(value) {
        console.log("cityInput value inside getExistingWeather", value)
        console.log(value);   
        
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + value + "&exclude=hourly" + "&appid=78e465147d98ed2de5b5d10f98a4ff8f&units=imperial") 
        .then(function (response) {
            return response.json();
        })
        .then(function (climate) {
            console.log(climate);
            //console.log(climate.list[0].weather[0].icon);
            
            let lat = climate.city.coord.lat
            console.log(lat);
            let lon = climate.city.coord.lon
            console.log(lon);
            //let imageEl = document.createElement("img")
            let iconEl = document.querySelector("#climateIcon");
            let iconImage = climate.list[0].weather[0].icon
            console.log(iconImage);
            iconEl.src="http://openweathermap.org/img/wn/" + iconImage + ".png";

            fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon +"&exclude={part}&appid=78e465147d98ed2de5b5d10f98a4ff8f&units=imperial")
            .then(function (response) {
                return response.json();
            })
            .then(function (oneCallindex) {
                //console.log(oneCallindex.current.uvi);    
                
                let uvResult = oneCallindex.current.uvi
                console.log(uvResult);
                
                let uvInfoEl = document.querySelector(".uvInfo");
                uvInfoEl.textContent = "UV Index: " + uvResult;
                
                let currentDate = moment().format("MM/DD/YYYY")
                console.log(currentDate);
                



                
            cityNameEl.textContent = climate.city.name;
            todayEl.textContent = currentDate; 
            tempEl.textContent = "Temp: " + climate.list[0].main.temp + " F";
            windEl.textContent = "Wind: " + climate.list[0].wind.speed + " MPH";
            humidityEl.textContent = "Humidity: " + climate.list[0].main.humidity + "%";
            
            todayEl2.textContent = climate.list[5].dt_txt; 
            tempEl2.textContent = "Temp: " + climate.list[5].main.temp + " F";
            windEl2.textContent = "Wind: " + climate.list[5].wind.speed + " MPH";
            humidityEl2.textContent = "Humidity: " + climate.list[5].main.humidity + "%";
            
            todayEl3.textContent = climate.list[13].dt_txt; 
            tempEl3.textContent = "Temp: " + climate.list[13].main.temp + " F";
            windEl3.textContent = "Wind: " + climate.list[13].wind.speed + " MPH";
            humidityEl3.textContent = "Humidity: " + climate.list[13].main.humidity + "%";
            
            todayEl4.textContent = climate.list[21].dt_txt; 
            tempEl4.textContent = "Temp: " + climate.list[21].main.temp + " F";
            windEl4.textContent = "Wind: " + climate.list[21].wind.speed + " MPH";
            humidityEl4.textContent = "Humidity: " + climate.list[21].main.humidity + "%";
            
            todayEl5.textContent = climate.list[29].dt_txt; 
            tempEl5.textContent = "Temp: " + climate.list[29].main.temp + " F";
            windEl5.textContent = "Wind: " + climate.list[29].wind.speed + " MPH";
            humidityEl5.textContent = "Humidity: " + climate.list[29].main.humidity + "%";
            
            todayEl6.textContent = climate.list[37].dt_txt; 
            tempEl6.textContent = "Temp: " + climate.list[37].main.temp + " F";
            windEl6.textContent = "Wind: " + climate.list[37].wind.speed + " MPH";
            humidityEl6.textContent = "Humidity: " + climate.list[37].main.humidity + "%";
        })
    })
}
    searchBtn.addEventListener("click", function(event) {
        event.preventDefault();
        
        let citySearch = cityInput.value
        console.log(citySearch)
        
        getExistingWeather(citySearch)
       
        localStorage.setItem("city", JSON.stringify(citySearch))
        prevCities.textContent = citySearch;
        li.appendChild("<button class='btn btn-dark prevCities'>"+ city + "</button>")
        
    })

    
    
   





 