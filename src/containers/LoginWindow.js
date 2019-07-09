import React from 'react';
import UserLoginContainer from './UserLoginContainer'
import '../LoginWindow.css'

function LoginWindow(props) {

  return (
    <div id="login-window">
      <h1 id="header1">Reactive</h1>
      <h1 id="header2">Pretty</h1>
      <UserLoginContainer
        setCurrentUser={props.setCurrentUser}
      />
    </div>
  )
}

export default LoginWindow