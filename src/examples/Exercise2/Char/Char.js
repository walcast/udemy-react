import React from 'react'
import './Char.css';

const char = (props) => {

    return (
        <p onClick={props.click} className="Char">{props.character}</p>
    )
};

export default char;