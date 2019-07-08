import React from 'react';
import { useState, useEffect } from 'react'

function Notepad() {

  const[noteData, setNoteData] = useState({title: "", content: ""})
  const[noteId, setNoteId] = useState(null)

  useEffect((noteData) => {
    createNote(noteData)
  }, [])

  useEffect((noteData) => {
    updateNote(noteData)
  }, [noteData])

  const handleChange = (e) => {
    setNoteData({...noteData, [e.target.name]:e.target.value})
  }

  const createNote = (noteData) => {
    fetch('http://localhost:3000/api/v1/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(noteData)
    })
    .then(res => res.json())
    .then(data => setNoteId(data.id))
  }

  const updateNote = (noteData) => {
    fetch(`http://localhost:3000/api/v1/notes/${noteId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(noteData)
    })
  }

  const print = () => {
    console.log(noteData.content, noteData.title)
  }

  return (
    <div>
      {print()}
      <form>
        <input 
          onChange={(e)=>handleChange(e)}
          type="text" 
          value={noteData.title}
          name="title">
        </input>
        <input 
          onChange={(e)=>handleChange(e)}
          type="textField" 
          value={noteData.content}
          name="content">
        </input>
      </form>
    </div>
  );
}

export default Notepad;