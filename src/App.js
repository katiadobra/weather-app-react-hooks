import React, { useState } from 'react';
import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';
import Titles from './components/Titles/Titles';
import './App.scss';

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

      let descr = apiData.weather[0].description;
      let weatherIcon = '';

      if (descr.includes('sun')) {
        weatherIcon = 'sunny';
      } else if (descr.includes('clouds')) {
        weatherIcon = 'cloudy';
      } else if (descr.includes('rain')) {
        weatherIcon = 'rainy';
      } else if (descr.includes('starry')) {
        weatherIcon = 'starry';
      } else if (descr.includes('snow')) {
        weatherIcon = 'snowy';
      } else if (descr.includes('storm')) {
        weatherIcon = 'stormy';
      }

      if (city && country) {
        setWeather({
          data: apiData,
          city: apiData.city,
          country: apiData.sys.country,
          description: apiData.weather[0].description,
          temperature: Math.round(apiData.main.temp),
          icon: weatherIcon,
          error: ""
        })
      } else {
        setWeather({
          data: '',
          city: '',
          country: '',
          description: '',
          temperature: '',
          icon: '',
          error: "Please type a city and country"
        })
      }
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="title-container">
              <Titles />
            </div>

            <div className="form-container">
              <Form getWeather={fetchData} />
              <Weather
                city={weather.city}
                country={weather.country}
                description={weather.description}
                temperature={weather.temperature}
                icon={weather.icon}
                error={weather.error}
              />
              {console.log('weather.data', weather.data)}
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default App;
