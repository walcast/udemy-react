import React, {Component}  from 'react';
import Person from './Person/Person'

class Persons extends Component {
    /*static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }*/

    shouldComponentUpdate(nextProps, nextStage) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevUpdate) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate'); 
        console.log(snapshot);
    }
    /*Run when component is removed*/
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    } 

    render (){
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {    
            return (
            <Person
                key={person.id}
                click = {() => this.props.clicked(index)} 
                name={person.name} 
                age={person.age}
                change={(event) => this.props.changed(event, person.id)}/>
            )
        });
    }
};

export default Persons;