import React from 'react';
//import {TemperatureContext} from '../temperature-context'
//import {TimeContext} from '../time-context'
import {WeatherContext, weather} from '../weather-context'

function ThemedComponent(props) {

  const context = React.useContext(WeatherContext)

  return (
    <div>
      <WeatherContext.Consumer>
        {value => {
          return <h1 >props.title</h1>
        }}

      </WeatherContext.Consumer>
      <p>props.content</p>
    </div>
  );
}


export default ThemedComponent;
