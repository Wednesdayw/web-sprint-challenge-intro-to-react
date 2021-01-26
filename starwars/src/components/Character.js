// Write your Character component here
import React from 'react';
import styled from "styled-components"
import { Container } from '../App'

const P = styled.p`
    ${props =>
        props.type === 'name' &&
       `font-size: 20px;
        font-family: sans-serif; 
        color: blue;
        background: black;
        `
    }

    ${props =>
        props.type === 'location' &&
       `font-size: 20px;
        font-family: sans-serif; 
        color: lime;
        background: black; 
        `
    }
`;

const Character = (props) => {
    return (
            <Container>
                <img src={props.image} alt='Morty watch out for the aliens'/>
                <P type='name'>{props.name}</P>
                <P type='location'>Originally from: {props.location}</P>
            </Container>
        
    )
}

export default Character;