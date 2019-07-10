import React from 'react';
import '../Weather.css'
import {WeatherContext} from '../weather-context'

function Weather(props) {

  const [weather, setWeather] = React.useContext(WeatherContext)

  return (
    <div>
      <h1 id="temp">{props.weather.temp}</h1>
      <h3 id="summary"
      style={{color: weather.accent}}>{props.weather.summary}</h3>
    </div>
  )
}

export default Weather
