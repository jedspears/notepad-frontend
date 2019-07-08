import React from 'react';
import { useState } from 'react';


function UserLogin(props) {

  const[userData, setUserData] = useState({username: "", password: "", lat: 40, lng: -74})

  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userData)
    fetch('http://localhost:3000/api/v1/users', {
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
    <form onSubmit={(e)=>handleSubmit(e)}>
      <input
        onChange={(e)=>handleChange(e)}
        value={userData.username}
        placeholder="Username"
        name="username">
      </input> 
      <input
        onChange={(e)=>handleChange(e)}
        value={userData.password}
        type="password"
        placeholder="Password"
        name="password">
      </input> 
      <input
        type="submit">
      </input>
    </form>
  );
}

export default UserLogin;