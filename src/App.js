import React from 'react';
import { useState, useEffect } from 'react';
// import Notepad from './components/Notepad';
// import UserNotesContainer from './containers/UserNotesContainer'
import UserLogin from './components/UserLogin'
import './App.css';

function App() {

  const[notes, setNotes] = useState([])
  const[user, setUser] = useState({})

  // useEffect(()=> {
  //   getUserNotes()
  // })

  const printUser = () => {
    console.log(user)
  }

  const setCurrentUser = (user) => {
    setUser(user)
  }

  const getUserNotes = () => {
    fetch('http://localhost:3000/api/v1/users/:id/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }

  return (

    <div className="App">
      {printUser()}
      <UserLogin
        setCurrentUser={()=>setCurrentUser()}
      />
      
    </div>
  );
}

export default App;
