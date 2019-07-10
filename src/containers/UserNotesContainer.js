import React from 'react';
import UserNote from '../components/UserNote'
import '../UserNotesContainer.css'

function UserNotesContainer(props) {

  const renderNotes = () => {
    console.log(props.notes)
    return (
      props.notes.map(note =>  
        <UserNote
          selectNote={props.selectNote}
          selectedNote={props.selectedNote}
          key={note.id}
          note={note}
        />
      )
    )
  }

  return (
    <div id="notes-container">
      <ul className="collection">
        {renderNotes()}
      </ul>
    </div>
  )
}

export default UserNotesContainer