import React from 'react';
import UserNote from '../components/UserNote'
import '../UserNotesContainer.css'

function UserNotesContainer(props) {

  const renderNotes = () => {
    return (
      props.notes.map(note =>  
        <UserNote
          selectNote={props.selectNote}
          selectedNoteId={props.selectedNoteId}
          key={note.id}
          note={note}
        />
      )
    )
  }

  return (
    <div id="notes-container">
      <ul id="note-collection" className="collection">
        {renderNotes()}
      </ul>
    </div>
  )
}

export default UserNotesContainer