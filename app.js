const apiKey = '7d1d2d91ce374e1ba5fa9bf7a4dce522'; 
const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';

const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const weatherCondition = document.getElementById('weather-condition');
const weatherIcon = document.getElementById('weather-icon');
const forecastData = document.getElementById('forecast-data');
const currentWeatherElement = document.getElementById('current-weather');
const forecastElement = document.getElementById('forecast');

searchBtn.addEventListener('click', searchWeather);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchWeather();
    }
});

function searchWeather() {
    const city = cityInput.value;
    if (city) {
        fetchCurrentWeather(city);
        fetchForecast(city);
    }
}

async function fetchCurrentWeather(city) {
    try {
        const response = await fetch(`${currentWeatherUrl}?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        console.log('Current weather data:', data);

        displayCurrentWeather(data);
    } catch (error) {
        console.error('Error fetching current weather:', error);
        showError('Unable to fetch weather data. Please try again.');
    }
}

function displayCurrentWeather(data) {
    cityName.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherCondition.textContent = data.weather[0].description;
    weatherIcon.className = `fas ${getWeatherIcon(data.weather[0].icon)} weather-icon`;

    anime({
        targets: currentWeatherElement,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        easing: 'easeOutCubic'
    });
}

async function fetchForecast(city) {
    try {
        const response = await fetch(`${forecastUrl}?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        console.log('Forecast data:', data);

        displayForecast(data);
    } catch (error) {
        console.error('Error fetching forecast:', error);
        showError('Unable to fetch forecast data. Please try again.');
    }
}

function displayForecast(data) {
    forecastData.innerHTML = '';
    const dailyForecasts = data.list.filter(item => item.dt_txt.includes('12:00:00'));

    dailyForecasts.slice(0, 5).forEach((day, index) => {
        const forecastItem = document.createElement('div');
        forecastItem.classList.add('glass', 'p-4', 'text-center', 'rounded-xl');
        
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        
        forecastItem.innerHTML = `
            <h4 class="text-lg font-semibold text-white glow">${dayName}</h4>
            <i class="fas ${getWeatherIcon(day.weather[0].icon)} text-4xl my-3 text-yellow-300 weather-icon"></i>
            <p class="text-2xl font-bold text-white glow">${Math.round(day.main.temp)}°C</p>
            <p class="text-sm text-black-200">${day.weather[0].description}</p>
        `;
        
        forecastData.appendChild(forecastItem);

        anime({
            targets: forecastItem,
            opacity: [0, 1],
            translateY: [20, 0],
            delay: index * 100,
            duration: 1000,
            easing: 'easeOutCubic'
        });
    });

    anime({
        targets: forecastElement,
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutCubic'
    });
}

function getWeatherIcon(iconCode) {
    const iconMap = {
        '01d': 'fa-sun',
        '01n': 'fa-moon',
        '02d': 'fa-cloud-sun',
        '02n': 'fa-cloud-moon',
        '03d': 'fa-cloud',
        '03n': 'fa-cloud',
        '04d': 'fa-cloud',
        '04n': 'fa-cloud',
        '09d': 'fa-cloud-showers-heavy',
        '09n': 'fa-cloud-showers-heavy',
        '10d': 'fa-cloud-sun-rain',
        '10n': 'fa-cloud-moon-rain',
        '11d': 'fa-bolt',
        '11n': 'fa-bolt',
        '13d': 'fa-snowflake',
        '13n': 'fa-snowflake',
        '50d': 'fa-smog',
        '50n': 'fa-smog'
    };

    return iconMap[iconCode] || 'fa-question';
}

function showError(message) {
    // You can implement a more sophisticated error display here
    alert(message);
}