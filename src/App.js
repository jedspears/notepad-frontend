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
  const[selectedNote, setSelectedNote] = useState({title: "", content: "", user_id: user.id, id:null})

  useEffect(()=> {
    if (user.notes) {
      setNotes(user.notes)
    }
  }, [user])

  useEffect(() => {
    if (loggedIn) {
      if (selectedNote.id) {
        updateNote()
      } else {
        createNote()
      }
    }
  }, [selectedNote, loggedIn])

  const createNote = () => {
    fetch('http://localhost:3000/api/v1/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({title: "", content: "", user_id: user.id})
    })
    .then(res => res.json())
    .then(data => {
      setSelectedNote(data)
      addNote(data)
    })
  }

  const updateNote = () => {
    console.log(selectedNote)
    fetch(`http://localhost:3000/api/v1/notes/${selectedNote.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(selectedNote)
    })
  }

  const handleChange = (e) => {
    setSelectedNote({...selectedNote, [e.target.name]:e.target.value})
  }

  const checkLogIn = () => {
    if (loggedIn) {
      return (
        <div>
          <ThemedComponent currentWeather={user.weather}/>
          <Notepad
            addNote={addNote}
            user={user}
            selectedNote={selectedNote}
            handleChange={handleChange}
            createNote={createNote}
          />
          <UserNotesContainer
            selectedNote={selectedNote}
            notes={notes}
            selectNote={selectNote}
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

  const selectNote = (newNote) => {
    updateNote()
    setSelectedNote(newNote)
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
