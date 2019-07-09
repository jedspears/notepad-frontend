import React from 'react';
import '../UserNote.css'

function UserNote(props) {

  return (
     <li  id="col-item" className="collection-item avatar">
       <span className="title">{props.title}</span>
       <p>first line</p>
    </li>
  );
}

export default UserNote;
