import React from 'react';
import { useState, useEffect } from 'react';
import Notepad from './components/Notepad';
import UserNotesContainer from './containers/UserNotesContainer'
import LoginWindow from './containers/LoginWindow'
import './App.css';

function App() {

  const[notes, setNotes] = useState([])
  const[user, setUser] = useState({})
  const[loggedIn, setLoggedIn] = useState(false)

  // useEffect(()=> {
  //   getUserNotes()
  // }, [])

  const checkLogIn = () => {
    if (loggedIn) {
      return (
        <div>
          <Notepad
            addNote={()=>addNote()}
            user={user}
          />
          <UserNotesContainer
            user={user}
          />
        </div>
      )
    } else {
      return (
        <LoginWindow
          setCurrentUser={setCurrentUser}
        />
      )
    }
  }

  const addNote = (note) => {
    setNotes([...notes, note])
    console.log(notes)
  }

  const setCurrentUser = (newUser) => {
    setUser(newUser)
    setLoggedIn(true)
    // getUserNotes()
  }


  // const getUserNotes = () => {
  //   fetch(`http://localhost:3000/api/v1/users/${user.id}`)
  //     .then(res => res.json())
  //     .then(data => setNotes(data.notes))
  // }

  return (
    <div className="App">
      {checkLogIn()}
    </div>
  );
}

export default App;
