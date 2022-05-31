const weatherCardCity = document.getElementById('weatherCardCity')
const weatherCardCurrentTemp = document.getElementById('weatherCardCurrentTemp')
const weatherCardCloudCoverage = document.getElementById('weatherCardCloudCoverage')
const weatherCardMaxMinTemp = document.getElementById('weatherCardMaxMinTemp')

//add functionality for converting city name to lat,lon and temp to farenheight
function getWeatherData(){
    async function getWeather(lat,lon){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7c718d10bb6da76a31c5194ce833087c`)

    if(!response.ok){
        let message = `An error has occured: ${response.status}`
        throw new Error(message);
    }

    const weatherData = await response.json();
    return weatherData;
}

getWeather(35,139).then(function(data){
   console.log(data)
   weatherCardCity.textContent = data.name
   weatherCardCurrentTemp.textContent = data.main.temp
   weatherCardMaxMinTemp.textContent = `High of ${data.main.temp_max} , Low of ${data.main.temp_min}`
   weatherCardCloudCoverage.textContent = data.weather[0].description
})
}

