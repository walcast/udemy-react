import React, {Component} from 'react';
import styled from 'styled-components'
import './App.css';
import Person from './Person/Person'

const StyledButton = styled.button `
  background-color: ${props => props.alt? 'red': 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
    &:hover {
      background-color: ${props => props.alt? 'salmon': 'lightgreen'};
      color: black;
  }
`;

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
    }

    let classes = [];
    
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hi, I'am a react App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Switch Name</StyledButton>
          {persons}
        </div>
    );
  }
}


export default App;
