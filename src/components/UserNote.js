import React from 'react';
import '../UserNote.css'
import {WeatherContext} from '../weather-context'

function UserNote(props) {

  const [weather, setWeather] = React.useContext(WeatherContext)

  console.log(props)
  const renderNote = () => {
    if (props.note.id === props.selectedNote.id) {
      console.log(props.selectedNote.title)
      return (
        <li
          id="baba"
          className="collection-item avatar"
          style={{backgroundColor: weather.background, color: weather.text}}
        >
          <i id="selected-note-icon" class="material-icons circle" style={{backgroundColor: weather.accent, boxShadow: '4px 4px  4px white, -4px 4px 4px white, 4px -4px 4px white, -4px -4px 4px white'}}>note</i>
          <span id="note-card-title" className="title" >
            {props.selectedNote.title ? props.selectedNote.title : "Untitled"}
          </span>
          <p>first line</p>
        </li>
      )
    } else {
      return (
        <li
        id="gaga"
        onClick={()=>props.selectNote(props.note)}
        className="collection-item avatar"
        style={{backgroundColor: weather.text, color: weather.background}}
        >
          <i id="note-icon" class="material-icons circle" style={{backgroundColor: weather.accent}}>note</i>
          <span id="note-card-title" className="title" >
            {props.note.title ? props.note.title : "Untitled"}
          </span>
        </li>
      )
    }
  }

  return (
    <div>{renderNote()}</div>
  )
}

export default UserNote;
