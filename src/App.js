import React, {Component} from 'react';
import './App.css';
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

  nameChangeHandler = (event) => {
    this.setState({
      persons:[
        {id:'wer', name:'Max', age:28},
        {id:'dsd', name:event.target.value, age:29},
        {id:'fas', name:'Stephanie', age:27}
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    //slice returns a copy instead of a reference
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.togglePersons;
      this.setState({showPersons: !doesShow});
  }

  render(){
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click = {() => this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age}
            key={person.id}/>
          })}
        </div> 
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'am a react App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}


export default App;
