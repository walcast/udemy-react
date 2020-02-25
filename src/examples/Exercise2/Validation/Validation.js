import React from 'react'

const validation = (props) => {
    let message = 'Text too short';

    if(props.length > 5) {
        message = "Text long enought";
    }

    return (
        <p>{message}</p>
    )
};

export default validation;