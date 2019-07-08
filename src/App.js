import React from 'react';
import { useState } from 'react';
import Notepad from './components/Notepad';
import UserNotesContainer from './containers/UserNotesContainer'
import './App.css';

function App() {

  const[notes, setNotes] = useState([])

  return (
    <div className="App">
      <Notepad/>
      {/* <UserNotesContainer
        notes={notes}
      /> */}
    </div>
  );
}

export default App;
