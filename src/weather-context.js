import React, { useState } from 'react'

export const weather = {
  clear: {
    light1: '#fafff4',
    light2: '#edd58e',
    text: '#014',
  },
  rain: {
    light1: '#cff',
    light2: '#f00',
    text: '#014',
  },
  snow: {
    light1: '#e2fffc',
    light2: '#e9e7b7',
    text: '#014',
  },
  sleet: {
    light1: '#b3cac8',
    light2: '#e4cfc6',
    text: '#014',
  },
  wind: {
    light1: '#efefef',
    light2: '#d0e0e3',
    text: '#014',
  },
  fog: {
    light1: '#d9d9d9',
    light2: '#bcb6ca',
    text: '#014',
  },
  cloudy: {
    light1: '#b7b7b7',
    light2: '#bec9b0',
    text: '#014',
  },
  partlyCloudy: {
    light1: '#cccccc',
    light2: '#e7d0a2',
    text: '#014',
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
