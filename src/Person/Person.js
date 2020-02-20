import React from 'react'
import styled from 'styled-components';

// import './Person.css';


const StyledDiv = styled.div`
    width: 60%;
    margin: 20px auto;
    border: 1px solid #eeeeee;
    box-shadow: 0 2px 3px #cccccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 700px) {
        width: 450px;
    }
`;

const person = (props) => {
    return (
        <StyledDiv>
            <p onClick={props.click}>I' am {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </StyledDiv>
    )
};

export default person;