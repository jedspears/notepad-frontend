import React from 'react';
import { useState, useEffect } from 'react';
import Notepad from './components/Notepad';
import UserNotesContainer from './containers/UserNotesContainer'
import ThemedComponent from './components/ThemedComponent'
import UserLoginContainer from './containers/UserLoginContainer'
import WeatherContainer from './containers/WeatherContainer'
import './App.css';

function App() {

  const[notes, setNotes] = useState([])
  const[user, setUser] = useState({})
  const[loggedIn, setLoggedIn] = useState(false)

  useEffect(()=> {
    if (user.notes) {
      setNotes(user.notes)
    }
  }, [user])

  const checkLogIn = () => {
    if (loggedIn) {
      return (
        <div>
          <ThemedComponent currentWeather={user.weather}/>
          <Notepad
            addNote={addNote}
            user={user}
          />
          <UserNotesContainer
            notes={notes}
          />
          <WeatherContainer
            weather={user.weather}
          />
        </div>
      )
    } else {
      return (
        <UserLoginContainer
          setCurrentUser={setCurrentUser}
        />
      )
    }
  }

  const addNote = (note) => {
    setNotes([...notes, note])
  }

  const setCurrentUser = (newUser) => {
    setUser(newUser)
    setLoggedIn(true)
  }

  return (
    <div className="App">
      {checkLogIn()}
    </div>
  );
}

export default App;
