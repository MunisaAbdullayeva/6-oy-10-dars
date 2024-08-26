let input = document.querySelector('input')
let button = document.querySelector('button')
let bgImage = document.querySelector('#bgImage')
let city = document.querySelector('#city')
let weathericon = document.querySelector('#weathericon')
let temperature = document.querySelector('#temp')
let wind = document.querySelector('#wind')
let time = document.querySelector('#time')
let description = document.querySelector('#description')

let cityName = 'Tashkent'

button.addEventListener('click', () => {
    cityName = input.value;
    requestWeatherData()
})

async function requestWeatherData() {
    const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '4bdaea4c4bmsh895d4bc152721bcp10ea5bjsn8a328f889571',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        const weatherIcon = `https://openweathermap.org/img/wn/${result.weather[0].icen}@4x.png`
        weathericon.src = weatherIcon;

        city.textContent = result.name;
        temperature.textContent = `${result.main.temp}°C`;
        wind.textContent = `Wind: ${result.wind.speed} m/s`;
        description.textContent = result.weather[0].description;
    } catch (error) {
        console.error(error);
    }
}

requestWeatherData()
