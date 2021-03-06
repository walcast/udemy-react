import React, { Fragment, Component } from 'react'
import classes from './Person.module.css';
import wrapClass from '../../../hoc/wrapClass';
import AuthContext from '../../../context/auth-context';


class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;
    
    componentDidMount(){
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render (){
        console.log('[Person.js] rendering...');
        return (
            <Fragment>
                {<span>{this.context.authenticated?'Authenticated!': 'Please log in'}</span>}
                <p onClick={this.props.click}>I' am {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name}
                /*ref={(inputElement) => this.inputElement = inputElement}*/
                ref={this.inputElementRef}/>
            </Fragment>
        )
    }
};

export default wrapClass(Person, classes.person);