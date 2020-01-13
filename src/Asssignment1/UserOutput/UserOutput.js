import React from 'react'
import UserInput from '../UserInput/UserInput';
import "./UserOutput.css"

const userOutput = (props) => {
    return (
        <div className="useroutput">
            <UserInput text={props.username} change={props.change}/>
            <p>{props.paragraph1}</p>
            <p>{props.paragraph2}</p>
        </div>
    )
}

export default userOutput;