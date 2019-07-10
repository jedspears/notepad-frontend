import React, { useState } from 'react'

export const weather = {
  clear: {
    light1: '#fafff4',
    light2: '#edd58e',
  },
  rain: {
    light1: '#76c9ff',
    light2: '#c2ae74',
  },
  snow: {
    light1: '#e2fffc',
    light2: '#e9e7b7',
  },
  sleet: {
    light1: '#b3cac8',
    light2: '#e4cfc6',
  },
  wind: {
    light1: '#efefef',
    light2: '#d0e0e3',
  },
  fog: {
    light1: '#d9d9d9',
    light2: '#bcb6ca',
  },
  cloudy: {
    light1: '#b7b7b7',
    light2: '#bec9b0',
  },
  partlyCloudy: {
    light1: '#cccccc',
    light2: '#e7d0a2',
  },
};

export const WeatherContext = React.createContext([{}, ()=>{}]);

export const WeatherProvider = (props) => {
  const [state, setState] = useState(weather.clear);

  const setStateWithKey = (key) => {
    setState(weather[key])
  }

  return (
    <WeatherContext.Provider value={[state, setStateWithKey]}>
      {props.children}
    </WeatherContext.Provider>
  );
}
