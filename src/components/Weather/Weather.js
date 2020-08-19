import React from 'react';
import './Weather.scss';

const Weather = ({description, city, country, error, temperature, icon}) => {
  return (
    <div className="weather-block">
      {city && country && <p>{city}, {country}</p>}
      {temperature && <p className="wheather-block__t">{temperature}  °C</p>}
      {description && 
        <div className="weather-block__descr">
          <span className={`${icon} weather-block__icon`} />
          <p>{description}</p>
        </div>
      }
      {error && <p>{error}</p>}
    </div>
  )
}

export default Weather;
