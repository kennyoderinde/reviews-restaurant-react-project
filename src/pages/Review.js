import React from "react";
import { useState } from 'react';

const MathOperate = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginDetail, setLoginDetail] = useState(false)

    const handleLogin = () => {
        console.log(email, password)
        setLoginDetail(true)
    } 

    return(
        <div>

            <h3>Working with state and hooks(MathOperation PAGE)</h3>            
            {
            !loginDetail &&
            <div>
                <h4>{email}</h4>
                <h4>{password}</h4>
            </div>
            }
            <input type="text" 
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.email)}/>
            
            <input type="password" 
            placeholder="Enter Email"
            onChange={(e) => setPassword(e.target.password)}/>
            
            <button onClick={handleLogin}>Submit</button>
        </div>
    )
}
export default MathOperate