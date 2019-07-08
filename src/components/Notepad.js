import React from 'react';
import { useState, useEffect } from 'react'
import '../Notepad.css'

function Notepad(props) {

  const[noteData, setNoteData] = useState({title: "", content: "", user_id: props.user.id})
  const[noteId, setNoteId] = useState(null)

  useEffect((noteData) => {
    createNote(noteData)
  }, [])

  useEffect((noteData) => {
    updateNote(noteData)
  }, [noteData])

  const createNote = () => {
    fetch('http://localhost:3000/api/v1/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({noteData})
    })
    .then(res => res.json())
    .then(data => setNoteId(data.id))
    .then(data => props.addNote(data))
  }

  const updateNote = (noteData) => {
    fetch(`http://localhost:3000/api/v1/notes/${noteId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({noteData})
    })
  }

  const handleChange = (e) => {
    setNoteData({...noteData, [e.target.name]:e.target.value})
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
        <div className="input-field" ></div>
          <textarea 
            id="thenote"
            className="materialize-textarea"
            onChange={(e)=>handleChange(e)}
            type="textArea" 
            value={noteData.content}
            name="content">
          </textarea>
        <div/>
      </form>
    </div>
  );
}

export default Notepad;
