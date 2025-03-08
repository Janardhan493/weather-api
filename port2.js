const apiKey = "828e0c4a4c923ee8294d359d58748965"; // Replace with your OpenWeather API Key

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found!");
            return;
        }

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temperature").innerText = `🌡 Temperature: ${data.main.temp}°C`;
        document.getElementById("description").innerText = `🌥 ${data.weather[0].description}`;
        document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").innerText = `🌬 Wind Speed: ${data.wind.speed} m/s`;

        // Set weather icon
        const iconCode = data.weather[0].icon;
        document.getElementById("weatherIcon").src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    } catch (error) {
        alert("Error fetching weather data!");
    }
}
