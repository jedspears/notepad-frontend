import React from 'react';
import { useState, useEffect } from 'react';
import Notepad from './components/Notepad';
import UserNotesContainer from './containers/UserNotesContainer'
import UserLogin from './components/UserLogin'
import './App.css';

function App() {

  const[notes, setNotes] = useState([])
  const[user, setUser] = useState({})
  const[loggedIn, setLoggedIn] = useState(false)

  // useEffect(()=> {
  //   getUserNotes()
  // }, [notes])

  const checkLogIn = () => {
    if (loggedIn) {
      return (
          <Notepad
            addNote={()=>addNote()}
            user={user}
          />
      )
    } else {
      return (
        <UserLogin
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


  const getUserNotes = () => {
    fetch('http://localhost:3000/api/v1/users/:id/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }

  return (
    <div className="App">
      {checkLogIn()}
    </div>
  );
}

export default App;
