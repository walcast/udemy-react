import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'


const App = props => {
    const [personState, setPersonState] = useState({
        persons:[
            {name:'Max', age:28},
            {name:'Manu', age:29},
            {name:'Stephanie', age:26}
          ],
          otherState:'Some other value'
    });

    const [otherState, setOtherState] = useState('some other value')

    console.log(personState, otherState);

    const switchNameHandler = () => {
        setPersonState({
          persons:[
            {name:'Maximilian', age:28},
            {name:'Manu', age:29},
            {name:'Stephanie', age:27}
          ]
        })
    }

    return (
      <div className="App">
        <h1>Hi, I'am a react App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>My hobbies: Racing</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );
  
}

export default App;
