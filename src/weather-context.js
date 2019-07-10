import React, { useState } from 'react'

export const weather = {
  default: {
    background: '#171617',
    accent: '#C990F0',
    text: '#D7E1F5',
  },
  clear: {
    background: '#fafff4',
    accent: '#F0B890',
    text: '#1F1914',
  },
  rain: {
    background: '#D7E1F5',
    accent: '#9098F0',
    text: '#14171F',
  },
  snow: {
    background: '#e2fffc',
    accent: '#90D0F0',
    text: '#2E3538',
  },
  sleet: {
    background: '#9FC6C2',
    accent: '#70C2AD',
    text: '#171C1B',
  },
  wind: {
    background: '#efefef',
    accent: '#E0B8B8',
    text: '#382E2E',
  },
  fog: {
    background: '#BCBCCD',
    accent: '#7B5FBB',
    text: '#efefef',
  },
  cloudy: {
    background: '#6a6a67',
    accent: '#C0D7A2',
    text: '#fafff4',
  },
  partlyCloudy: {
    background: '#cccccc',
    accent: '#D5AD5D',
    text: '#260D0D',
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
