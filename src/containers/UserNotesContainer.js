import React from 'react';
import UserNote from '../components/UserNote'

function UserNotesContainer() {

  const renderNotes = (props) => {
    props.notes.map(note => 
      <UserNote
        {...note}
      />
    )
  }

  return (
    <div>
      {renderNotes()}
    </div>
  )
}

export default UserNotesContainer