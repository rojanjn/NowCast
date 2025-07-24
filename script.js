// OpenWeatherAPI 
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const iconImg = document.getElementById('weather-icon');
const loc = document.querySelector('#location');
const tempC = document.querySelector('.c');
const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');
const sunriseDOM = document.querySelector('.sunrise');
const sunsetDOM = document.querySelector('.sunset');

// executing user's location upon load
window.addEventListener('load', () => {
    let long;
    let lat;

    // accessing geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const base = `https://api.openweathermap.org/data/2.5/weatherlat=${lat}&lon=${long}&appid=${api}&units=metric`;

            console.log(base);

            fetch(base).then((response) => {
                return response.json();
            })
                .then((data) => {
                    const { temp } = data.main;
                    const place = data.name;
                    const { description, icon } = data.weather[0];
                    const { sunrise, sunset } = data.sys;

                    const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`

                    const fahrenheit = (temp * 9) / 5 + 32;

                    const sunriseGMT = new Data(sunrise * 1000);
                    const sunsetGMT = new Data(sunset * 1000);

                    // interacting with DOM
                    iconImg.src = iconURL;
                    loc.textContent = `${place}`;
                    desc.textContent = `${description}`;
                    tempC.textContent = `${temp.toFixed(2)} °C`;
                    tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
                    sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleDateString()}`;
                    sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
            });
        });
    }
});




