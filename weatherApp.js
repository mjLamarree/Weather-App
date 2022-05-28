

window.fetch('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=7c718d10bb6da76a31c5194ce833087c')
.then(response=>{
    return response.json();
}).then(json=>{
    console.log(json)
})