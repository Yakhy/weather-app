const form = document.getElementById('form')
const degree = document.getElementById('degree')
const min = document.getElementById('min')
const wind = document.getElementById('wind')
const city = document.getElementById('city')
const max = document.getElementById('max')
const input = document.getElementById('input')
const feels = document.getElementById('feels')



form.addEventListener('submit', getWeatherData)

function getWeatherData(e) {
    e.preventDefault()
    const cityName = input.value
// API
    const url = 'https://api.openweathermap.org/data/2.5/'
    const api_key = 'f6d333d1aa794759110a77a915496d8e'
    // let cityName = 'London'
    
    // Fetch Function
    fetch(`${url}weather?q=${cityName}&units=metric&appid=${api_key}`)
    .then((weather) => {
        return weather.json()
    })
    
    .then(getWeather)
    
    function getWeather(data) {
    input.value = ''
    console.log(data);

    degree.textContent = `${Math.round(data.main.temp)}`
    min.textContent = `min ${Math.round(data.main.temp_min)}`
    max.textContent = `max ${Math.round(data.main.temp_max)}`
    wind.textContent = `Wind ${Math.round(data.wind.deg)} mph`
    city.textContent = data.name
    feels.textContent = `Feels like ${Math.floor(data.main.feels_like)}`
    }
    
}



 
