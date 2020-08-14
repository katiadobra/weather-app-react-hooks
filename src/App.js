import React, { useState } from 'react';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {
  const [weather, setWeather] = useState([]);
  const APIKEY = '7123b0eb63f6d1cd0dd2b3ae1f5be143';

  async function fetchData(e) {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    e.preventDefault();
    const apiData = 
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${APIKEY}`)
      .then(res => res.json())
      .then(data => data)
    
      setWeather({
        data: apiData,
        city: apiData.city,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        temperature: apiData.main.temp,
        error: ""
      })
  }

  return (
    <div className="App">
      <header>
        <h3>Weather App</h3>
      </header>
      <Form getWeather={fetchData} />
      <Weather
        description={weather.description}
        city={weather.city}
        country={weather.country}
        error={weather.error}
        temperature={weather.temperature}
      />
      {console.log('weather', weather)}
      {console.log('weather.data', weather.data)}
    </div>
  );
}

export default App;
