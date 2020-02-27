import React, { Fragment } from 'react'
import classes from './Person.module.css';
import wrapClass from '../../../hoc/wrapClass';



const person = (props) => {
    console.log('[Person.js] rendering...');
    return (
        <Fragment>
            <p onClick={props.click}>I' am {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </Fragment>
    )
};

export default wrapClass(person, classes.person);