import React from 'react';
import Weather from '../components/Weather'

function WeatherContainer(props) {

  return (
    <div>
      <Weather
        weather={props.weather}
      />
    </div>
  )
}

export default WeatherContainer