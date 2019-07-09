import React from 'react';
import '../Weather.css'

function Weather(props) {

  return (
    <div>
      <h1 id="temp">{props.weather.temp}</h1>
      <h3 id="summary">{props.weather.summary}</h3>
    </div>
  )
}

export default Weather