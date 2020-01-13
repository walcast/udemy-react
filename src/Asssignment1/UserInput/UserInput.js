import React from 'react'

const userInput = (props) => {
    return <input onChange={props.change} value={props.text} type="text"/>
}

export default userInput;