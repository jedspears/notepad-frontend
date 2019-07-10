import React from 'react';
import { useState, useEffect } from 'react'
import '../Notepad.css'

function Notepad(props) {

  // const[noteData, setNoteData] = useState({title: "", content: "", user_id: props.user.id})
  // const[noteId, setNoteId] = useState(null)


  // useEffect(() => {
  //   if(props.selectedNote) {
  //     setNoteData(props.selectedNote)
  //   }
  // }, [props.selectedNote])

  // const createNote = () => {
  //   fetch('http://localhost:3000/api/v1/notes', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({noteData})
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     props.selectNote(data)
  //     props.addNote(data)
  //   })
  // }

  // const updateNote = (noteData) => {
  //   fetch(`http://localhost:3000/api/v1/notes/${props.selectedNote.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify(noteData)
  //   })
  // }

  return (
    <div>
      <form>
        <input
          id="note-title"
          placeholder="Title" 
          onChange={(e)=>props.handleChange(e)}
          type="text" 
          value={props.selectedNote.title}
          name="title">
        </input>
        <div className="input-field" ></div>
          <textarea 
            id="the-note"
            className="materialize-textarea"
            onChange={(e)=>props.handleChange(e)}
            type="textArea" 
            value={props.selectedNote.content}
            name="content">
          </textarea>
        <div/>
      </form>
    </div>
  );
}

export default Notepad;
