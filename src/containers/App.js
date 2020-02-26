import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons:[
      {id:'yui', name:'Max', age:28},
      {id:'dsw', name:'Manu', age:29},
      {id:'qeg', name:'Stephanie', age:26}
    ],
    otherState:'Some other value',
    showPersons:false, 
    showCockpit:true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate () {
    console.log('[App.js] componentDidUpdate');
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
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render(){
    console.log('[App.js] render');
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangeHandler}/>
    }

    return (
        <div className={classes.app}>
          <button onClick={() => this.setState({showCockpit:!this.state.showCockpit})}>Show Cockpit</button>
          {this.state.showCockpit ? 
            <Cockpit
            title = {this.props.appTitle} 
            showPersons = {this.state.showPersons} 
            persons = {this.state.persons}
            clicked = {this.togglePersonsHandler}/>
           : null }
          {persons}
        </div>
    );
  }
}


export default App;
