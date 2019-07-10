import React from 'react';
import UserNote from '../components/UserNote'
import '../UserNotesContainer.css'
import {WeatherContext} from '../weather-context'

function UserNotesContainer(props) {

  const [weather, setWeather] = React.useContext(WeatherContext)

  const renderNotes = () => {
    console.log(props.notes)
    return (
      props.notes.map(note =>
        <UserNote
          selectNote={props.selectNote}
          selectedNote={props.selectedNote}
          key={note.id}
          note={note}
          style={{backgroundColor: weather.accent}}
        />
      )
    )
  }

  return (
    <div id="notes-container" style={{backgroundColor: weather.accent}}>
      <ul id="note-collection" className="collection">
        {renderNotes()}
      </ul>
    </div>
  )
}

export default UserNotesContainer
