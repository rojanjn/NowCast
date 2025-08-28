const apiKey = "YOUR_API_KEY_HERE";

const iconImg = document.getElementById('weather-icon');
const loc = document.querySelector('#location');
const tempC = document.querySelector('.c');
const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');
const sunriseDOM = document.querySelector('.sunrise');
const sunsetDOM = document.querySelector('.sunset');

window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const long = position.coords.longitude;
            const lat = position.coords.latitude;

            const base = `http://localhost:3000/weather?lat=${lat}&lon=${long}`;

            fetch(base)
                .then((response) => {
                    return response.json();
                })
                .then(data => {
                    const { temp } = data.main;
                    const place = data.name;
                    const { description, icon } = data.weather[0];
                    const { sunrise, sunset } = data.sys;

                    const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
                    const fahrenheit = (temp * 9) / 5 + 32;

                    const sunriseGMT = new Date(sunrise * 1000);
                    const sunsetGMT = new Date(sunset * 1000);

                    iconImg.src = iconURL;
                    loc.textContent = place;
                    desc.textContent = description;
                    tempC.textContent = `${temp.toFixed(2)} °C`;
                    tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
                    sunriseDOM.textContent = sunriseGMT.toLocaleTimeString();
                    sunsetDOM.textContent = sunsetGMT.toLocaleTimeString();
                })
                .catch(() => {
                    loc.textContent = "Weather fetch failed.";
                    desc.textContent = "No info available.";
                });
        }, () => {
            loc.textContent = "Location access denied.";
            desc.textContent = "Please allow location.";
        });
    } else {
        loc.textContent = "Geolocation not supported.";
    }
});
