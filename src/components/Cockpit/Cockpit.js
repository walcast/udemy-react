import React, {useEffect, useRef} from 'react'
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';


const Cockpit = (props) => {

  const toggleButtonRef = useRef(null);

  //  Combines componentDidMount and componenDidUpdate
  //  Will run in every render cycle
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // http request
    /*const timeout = setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);*/
    toggleButtonRef.current.click();

    return () => {
      //clearTimeout(timeout);
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

    if(props.personsLength <= 2) {
      subtitleClasses.push( classes.red);
    }
    if(props.personsLength <= 1) {
      subtitleClasses.push(classes.bold);
    }

    
    return (
        <div className={classes.cockpit}>
            <h1>{props.title}</h1>
            <p className={subtitleClasses.join(' ')}>This is really working!</p>
            <button ref={toggleButtonRef} className={buttonClass} onClick={() => props.clicked() }>Show Persons</button>
            <AuthContext.Consumer>
              {(context) => <button onClick={() => context.login() }>Login</button>}
            </AuthContext.Consumer>
            
        </div>
    );

};

export default Cockpit;