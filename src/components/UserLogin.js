import React from 'react';
import '../UserLogin.css'
import { useState } from 'react';


function UserLogin(props) {

  const[userData, setUserData] = useState({username: "", password: "", lat: 40, lng: -74})

  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/api/v1/users/${userData.username}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => props.setCurrentUser(data))
  }

  return (
    <form id="login-form"onSubmit={(e)=>handleSubmit(e)}>
      <input
        id="login-field1"
        onChange={(e)=>handleChange(e)}
        value={userData.username}
        placeholder="Username"
        name="username">
      </input> 
      <input
        id="login-field2"
        onChange={(e)=>handleChange(e)}
        value={userData.password}
        type="password"
        placeholder="Password"
        name="password">
      </input> 
      <button className="btn waves-effect waves-light" type="submit" name="action" id="soobmit">Submit
        <i className="material-icons right"></i>
      </button>
    </form>
  );
}

export default UserLogin;