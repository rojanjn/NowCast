# NowCast – Weather App  

NowCast is a simple weather app that fetches live weather data based on your current location.  
It uses the **OpenWeather API** (via a backend proxy) to display:  
- Current temperature in °C and °F  
- Location name  
- Weather description & icon  
- Sunrise & sunset times  

⚠️ **Note:** This project is still a work-in-progress — debugging and refinements are ongoing.  

---

## Features
- Uses browser geolocation to get your coordinates  
- API key is safely hidden in a backend `.env` file  
- Displays weather icon, temperature, and conditions  
- Shows sunrise and sunset times  

---

## Project Structure
.

├── backend/

│ └── server.js # Express server to proxy OpenWeather requests

├── index.html # Frontend markup

├── script.js # Frontend logic

├── style.css # Styling

├── .env # API key (ignored in Git)

└── README.md

---


## ⚙️ Setup & Usage

### 1. Clone the repo
```bash
git clone https://github.com/your-username/nowcast-weather.git
cd nowcast-weather
```

---

### Debugging Status

This project is currently in progress. Some issues under review:

- Occasional Weather fetch failed errors
- Testing different environments (local vs GitHub Pages)
- Improving error messages
