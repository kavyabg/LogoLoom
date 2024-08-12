// document.getElementById('getWeather').addEventListener('click', fetchWeather);

document.addEventListener('DOMContentLoaded', fetchWeather);

async function fetchWeather() {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.innerHTML = 'Fetching weather data...';

    const apiKey = '30d084cfadfaa8eb3145a85f6f00f6d0'; // Replace with your OpenWeatherMap API key
    const location = 'Bengaluru'; // You can change this to any location
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        weatherInfoDiv.innerHTML = 'Failed to fetch weather data: ' + error.message;
    }
}

function displayWeather(data) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.innerHTML = `
    <div class="extra-space">
        <h2>Current Weather in ${data.name}</h2>
        <p>Temperature:</p> <p class="temp"> ${data.main.temp}°C</p>
        <p>Condition: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        </div>
    `;
}
