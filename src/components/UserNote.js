import React from 'react';
import '../UserNote.css'

function UserNote(props) {
  console.log(props)
  const renderNote = () => {
    if (props.id === props.selectedNote.id) {
      console.log(props.selectedNote.title)
      return (
        <li id="col-item" className="collection-item avatar">
          <span id="note-title" className="title">{props.selectedNote.title}</span>
          <p>first line</p>
        </li>
      )
    } else {
      return (
        <li onClick={()=>props.selectNote()} id="col-item" className="collection-item avatar">
          <span id="note-title" className="title">{props.title}</span>
          <p>first line</p>
        </li>
      )
    }
  }

  return (
    <div>{renderNote()}</div>
  )
}

export default UserNote;
