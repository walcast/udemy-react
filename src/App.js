import React, {Component} from 'react';
import classes from './App.module.css';
import Person from './Person/Person'


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
    let buttonClass = '';

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click = {() => this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age}
            key={person.id}
            change={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div> 
      );
      buttonClass = classes.red;
    }

    let subtitleClasses = [];

    if(this.state.persons.length <= 2) {
      subtitleClasses.push( classes.red);
    }
    if(this.state.persons.length <= 1) {
      subtitleClasses.push(classes.bold);
    }

    return (
        <div className={classes.app}>
          <h1>Hi, I'am a react App</h1>
          <p className={subtitleClasses.join(' ')}>This is really working!</p>
          <button className={buttonClass} alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
        </div>
    );
  }
}


export default App;
