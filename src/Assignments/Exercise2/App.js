import React, {Component} from 'react';
import Validation from './Validation/Validation'
import Char from './Char/Char'


class App extends Component {
    state = {
        userInput:''
    }

    inputChangeHandler = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }
    deleteCharHandler = index => {
        let textArray = this.state.userInput.split('');
        textArray.splice(index, 1);
        this.setState({userInput:textArray.join('')})
    }

    render() {
        const charList = this.state.userInput.split('').map((char, index) => {
            return <Char click = {() => this.deleteCharHandler(index)} character={char} key={index}/>
        })

        return (
            <div>
                <input onChange = {(event) => this.inputChangeHandler(event)} value={this.state.userInput}></input>
                
                <p>{this.state.userInput.length}</p>
                
                <Validation length= {this.state.userInput.length}/>
                <div>
                    {charList}
                </div>
            </div>
        )
    }
}

export default App;