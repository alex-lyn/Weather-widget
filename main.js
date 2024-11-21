const keyApi = "f5c685420730e047568cad02fad8baab";
const city = "Kyiv";

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}&units=metric`);
        const data = await response.json();
        updateWidget(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function updateWidget(data) {
    const dateTime = new Date();

    document.querySelector(".data-time").textContent = dateTime.toLocaleString();
    document.querySelector(".temperature").textContent = `Температура: ${data.main.temp}°C`;
    document.querySelector(".feels-like").textContent = `Чувствуется как: ${data.main.feels_like}°C`;
    document.querySelector(".condition").textContent = `Состояние: ${data.weather[0].description}`;
    document.querySelector(".humidity").textContent = `Влажность: ${data.main.humidity}%`;
    document.querySelector(".pressure").textContent = `Давление: ${data.main.pressure} hPa`;
    document.querySelector(".wind").textContent = `Ветер: ${data.wind.speed} m/s ${data.wind.deg}`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".refresh").addEventListener("click", fetchWeather);
    fetchWeather();
})