import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons:[
      {id:'yui', name:'Max', age:28},
      {id:'dsw', name:'Manu', age:29},
      {id:'qeg', name:'Stephanie', age:26}
    ],
    otherState:'Some other value',
    showPersons:false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons:persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.togglePersons;
      this.setState({showPersons: !doesShow});
  }

  render(){

    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.state.nameChangeHandler}/>
    }

    return (
        <div className={classes.app}>
          <Cockpit
            title = {this.props.appTitle} 
            showPersons = {this.state.showPersons} 
            persons = {this.state.persons}
            clicked = {this.togglePersonsHandler}/>
          {persons}
        </div>
    );
  }
}


export default App;
