import React from 'react'
import { useState } from 'react';

export default function Home() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showDetails, setShowDetails] = useState(true)

    const handleLogin = () => {
    console.log(username, password)
    setShowDetails()
  }

  return (
    <div>
              <h2>Working with State and Hooks</h2>
      {
        !showDetails &&
        <div>
          <h5>{username}</h5>
          <h5>{password}</h5>
        </div>
      }
      
      
      <div>
        <input type="text" placeholder="Enter UserName" onChange={(e) => setUsername(e.target.value) }/> <br></br>
        <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/> <br></br>
        <button onClick={handleLogin}>Submit</button>
      </div>

    </div>
  )
}
