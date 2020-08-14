import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './components/Character'
import styled from 'styled-components';
import './App.css';

export const AlienContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  `;

export const Container = styled.div`
  margin: 10px auto;
  padding: 10px;
  height: 400px;
  width: 250px;
  border-radius: 4px solid lime;
  background-color: ;
  `;

  const Title = styled.h1`
   text-align: center;
   color: white;
   font-size: 3rem;

 `;




const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

    const [ characters, setCharacters ] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log('We made it Morty');
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log('Oh no Rick', err);
      });
  }, []);

  return (
    <div className="App">
      <Title>Wanted on Earth for interdimensional crimes: </Title>
      <AlienContainer>
      {characters.map(character => {
        return (
          <Character 
            key={character.id}
            name={character.name}
            image={character.image}
            location={character.location.name}
          />
        );
      })}
      </AlienContainer>
    </div>
  );
}

export default App;