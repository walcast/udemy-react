import React, {useEffect} from 'react'
import classes from './Cockpit.module.css';


const Cockpit = (props) => {
  //  Combines componentDidMount and componenDidUpdate
  //  Will run in every render cycle
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // http request
    const timeout = setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);

    return () => {
      clearTimeout(timeout);
      console.log('[Cockpit.js] cleanup work in useEffects');
    }

  }, []);//[] only runs first time or in unmounts

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffects');
    };

  });
  
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

export default Cockpit;