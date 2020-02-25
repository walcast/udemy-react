import React, {Component} from 'react';
import UserOutput from './UserOutput/UserOutput';




class App extends Component {
    state = {
        username:'Jhon'
    }

    nameChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        })
      }

    render() {
        return (
            <div>
                <UserOutput change={this.nameChangeHandler} username={this.state.username} paragraph1="34 minutes to complete" paragraph2="10,995 student solutions" />
                <UserOutput change={this.nameChangeHandler} username={this.state.username} paragraph1="Skill level: All Levels" paragraph2="By the numbers" />
            </div>
        )
    }
}

export default App;