import React from 'react';
import UserNote from '../components/UserNote'
import '../UserNotesContainer.css'

function UserNotesContainer(props) {

  const renderNotes = () => {
    console.log(props)
    return (
      props.user.notes.map(note =>  
        <UserNote
          key={note.id}
          {...note}
        />
      )
    )
  }

  return (
    <div id="notes-container">
      {renderNotes()}
    </div>
  )
}

export default UserNotesContainer