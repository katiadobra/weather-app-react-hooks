import React from 'react';
import './Weather.scss';

const Weather = ({description, city, country, error, temperature}) => {
  return (
    <div className="weather-block text_container">
      {/* degrees */}
      {temperature && 
        <p className="degrees weather-block__t">{temperature} °C</p>
      }
      {/* place */}
      {city && country && 
        <div className="place">{city}, {country}</div>
      }
      {/* description */}
      {description && 
        <div className="weather-block__descr">
          <div className="weather">{description}</div>
        </div>
      }
      {error && 
        <p>{error}</p>
      }
    </div>
  )
}

export default Weather;
