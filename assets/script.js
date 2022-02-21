//Not the prettiest code but it is functional. Only stores one city in local storage. The UVindex is not in box that changes colors.

//global variables to be used for the current and five day forecast data
let cityInput = document.querySelector("#city");
let searchBtn = document.querySelector("#searchbutton");
let prevCities = document.querySelector(".previousCities");
let pastCitiesEl = document.querySelector(".pastCities");
let cityNameEl = document.querySelector(".cityname");
let todayEl = document.querySelector(".today");
let tempEl = document.querySelector(".temp");
let windEl = document.querySelector(".wind");
let humidityEl = document.querySelector(".humidity");


priorSearch();
// retrieve cities from local storage. converting to object with json.parse
function priorSearch() {
    
    pastCitiesEl.textContent = JSON.parse(localStorage.getItem("citySearch")) || [];
    
    let citySearch = [];
    
    for (let i = 0; i < citySearch.length; i++) {
        
        pastCitiesEl.append("<button type='submit' class='btn btn-pastCities'>" + citySearch[i]+ "</button>");
        
    }
    
}
//function to grab the current weather information and giving its value to the cityInput variable.
function getExistingWeather(value) {
    console.log("cityInput value inside getExistingWeather", value)
    console.log(value);   
    
    //fetching api for the current weather information using value from function to choose city
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + value + "&exclude=hourly" + "&appid=78e465147d98ed2de5b5d10f98a4ff8f&units=imperial") 

    //returning promise and headers and body will be converted to json
    .then(function (response) {
        return response.json();
    })
    
    .then(function (climate) {
        console.log(climate);
        
        //retrieving latitude and longitude from api for access to the uv index
        let lat = climate.city.coord.lat
        console.log(lat);
        let lon = climate.city.coord.lon
        console.log(lon);
        
        //retrieving weather icon information for current weather and 5 day forecast using icon url
        let iconEl = document.querySelector("#climateIcon");
        let iconEl2 = document.querySelector(".climateIcon2");
        let iconEl3 = document.querySelector(".climateIcon3");
        let iconEl4 = document.querySelector(".climateIcon4");
        let iconEl5 = document.querySelector(".climateIcon5");
        let iconEl6 = document.querySelector(".climateIcon6");
        
        let iconImage = climate.list[0].weather[0].icon
        let iconImage2 = climate.list[5].weather[0].icon
        let iconImage3 = climate.list[13].weather[0].icon
        let iconImage4 = climate.list[21].weather[0].icon
        let iconImage5 = climate.list[29].weather[0].icon
        let iconImage6 = climate.list[37].weather[0].icon
            
        iconEl.src="http://openweathermap.org/img/wn/" + iconImage + ".png";
        iconEl2.src="http://openweathermap.org/img/wn/" + iconImage2 + ".png";
        iconEl3.src="http://openweathermap.org/img/wn/" + iconImage3 + ".png";
        iconEl4.src="http://openweathermap.org/img/wn/" + iconImage4 + ".png";
        iconEl5.src="http://openweathermap.org/img/wn/" + iconImage5 + ".png";
        iconEl6.src="http://openweathermap.org/img/wn/" + iconImage6 + ".png";

        //fetching one call url where uv index is located
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon +"&exclude={part}&appid=78e465147d98ed2de5b5d10f98a4ff8f&units=imperial")
        .then(function (response) {
                return response.json();
        })
        .then(function (oneCallindex) {
        //console.log(oneCallindex.current.uvi);    
                
        //defining result for uv index and adding to the card for current weather
        let uvResult = parseInt(oneCallindex.current.uvi)
            console.log(uvResult);
                
        // let $uvResult = $("<button class= 'btn btnUvindex'>");
        // $uvResult.addClass(".colcontainer uvResult");
        // $("uvInfoEl").append($uvResult);
        let uvInfoEl = document.querySelector(".uvInfo");
                
        uvInfoEl.textContent = "UV Index: " + uvResult
 
        //using moment to format the current date
        let currentDate = moment().format("MM/DD/YYYY")
            console.log(currentDate);
    
        //rendering current weather data and five day forecast data to container and cards using assigned global variables
        cityNameEl.textContent = climate.city.name;
        todayEl.textContent = currentDate; 
        tempEl.textContent = "Temp: " + climate.list[0].main.temp + " F";
        windEl.textContent = "Wind: " + climate.list[0].wind.speed + " MPH";
        humidityEl.textContent = "Humidity: " + climate.list[0].main.humidity + "%";
      
        
let todayEl2 = document.querySelector(".date");
let tempEl2 = document.querySelector(".temp2");
let windEl2 = document.querySelector(".wind2");
let humidityEl2 = document.querySelector(".humidity2");
    todayEl2.textContent = climate.list[5].dt_txt; 
    tempEl2.textContent = "Temp: " + climate.list[5].main.temp + " F";
    windEl2.textContent = "Wind: " + climate.list[5].wind.speed + " MPH";
    humidityEl2.textContent = "Humidity: " + climate.list[5].main.humidity + "%";
    
let todayEl3 = document.querySelector(".date3");
let tempEl3 = document.querySelector(".temp3");
let windEl3 = document.querySelector(".wind3");
let humidityEl3 = document.querySelector(".humidity3");
    todayEl3.textContent = climate.list[13].dt_txt; 
    tempEl3.textContent = "Temp: " + climate.list[13].main.temp + " F";
    windEl3.textContent = "Wind: " + climate.list[13].wind.speed + " MPH";
    humidityEl3.textContent = "Humidity: " + climate.list[13].main.humidity + "%";
        
let todayEl4 = document.querySelector(".date4");
let tempEl4 = document.querySelector(".temp4");
let windEl4 = document.querySelector(".wind4");
let humidityEl4 = document.querySelector(".humidity4");
    todayEl4.textContent = climate.list[21].dt_txt; 
    tempEl4.textContent = "Temp: " + climate.list[21].main.temp + " F";
    windEl4.textContent = "Wind: " + climate.list[21].wind.speed + " MPH";
    humidityEl4.textContent = "Humidity: " + climate.list[21].main.humidity + "%";
       
let todayEl5 = document.querySelector(".date5");
let tempEl5 = document.querySelector(".temp5");
let windEl5 = document.querySelector(".wind5");
let humidityEl5 = document.querySelector(".humidity5");
    todayEl5.textContent = climate.list[29].dt_txt; 
    tempEl5.textContent = "Temp: " + climate.list[29].main.temp + " F";
    windEl5.textContent = "Wind: " + climate.list[29].wind.speed + " MPH";
    humidityEl5.textContent = "Humidity: " + climate.list[29].main.humidity + "%";

let todayEl6 = document.querySelector(".date6");
let tempEl6 = document.querySelector(".temp6");
let windEl6 = document.querySelector(".wind6");
let humidityEl6 = document.querySelector(".humidity6");
    todayEl6.textContent = climate.list[37].dt_txt; 
    tempEl6.textContent = "Temp: " + climate.list[37].main.temp + " F";
    windEl6.textContent = "Wind: " + climate.list[37].wind.speed + " MPH";
    humidityEl6.textContent = "Humidity: " + climate.list[37].main.humidity + "%";
    })
    })
}
    //on click for search button when city name input in the placeholder buttton
    searchBtn.addEventListener("click", function(event) {
        event.preventDefault();
        
    let citySearch = cityInput.value
    console.log(citySearch)
        
    getExistingWeather(citySearch)
        
        
    //store searched cities in local storage using stringify so it is converted to a string and appending to li element.  
    localStorage.setItem("citySearch", JSON.stringify(citySearch));
    citySearch.push(pastCitiesEl)
       
    //pastCitiesEL.textContent = citySearch;
    //li.appendChild(citySearch)
    })
    
    
    
   





 