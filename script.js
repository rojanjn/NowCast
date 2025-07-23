// OpenWeatherAPI 
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

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
            });
        });
    }
});




