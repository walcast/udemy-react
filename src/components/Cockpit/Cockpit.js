import React from 'react'
import classes from './Cockpit.module.css';


const cockpit = (props) => {
    let subtitleClasses = [];
    
    let buttonClass = '';
    if(props.showPersons) {
        buttonClass = classes.red;
    }

    if(props.persons.length <= 2) {
      subtitleClasses.push( classes.red);
    }
    if(props.persons.length <= 1) {
      subtitleClasses.push(classes.bold);
    }

    
    return (
        <div className={classes.cockpit}>
            <h1>{props.title}</h1>
            <p className={subtitleClasses.join(' ')}>This is really working!</p>
            <button className={buttonClass} onClick={() => props.clicked() }>Show Persons</button>
        </div>
    );

};

export default cockpit;