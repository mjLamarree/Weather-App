const weatherCardCity = document.getElementById('weatherCardCity')
const weatherCardCurrentTemp = document.getElementById('weatherCardCurrentTemp')
const weatherCardCloudCoverage = document.getElementById('weatherCardCloudCoverage')
const weatherCardMaxMinTemp = document.getElementById('weatherCardMaxMinTemp')


//needs to be updated with placeholder for fetch link, will need to intergrate API for city name to lat long
async function getWeather(){
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=7c718d10bb6da76a31c5194ce833087c')

    if(!response.ok){
        let message = `An error has occured: ${response.status}`
        throw new Error(message);
    }

    const weatherData = await response.json();
    return weatherData;
}


getWeather().then(function(data){
   console.log(data)
   weatherCardCity.textContent = data.name
   weatherCardCurrentTemp.textContent = data.main.temp
   weatherCardMaxMinTemp.textContent = `High of ${data.main.temp_max} , Low of ${data.main.temp_min}`
   weatherCardCloudCoverage.textContent = data.weather[0].description
})