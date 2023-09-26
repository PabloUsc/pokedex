import { useState } from 'react';
import './App.css';
import PokeCard from './components/poke-card/PokeCard';
import PokeDetails from './components/poke-details/PokeDetails';

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  console.log(selectedPokemon);

  const pokemons = Array.from({length: 20}, (_,index) => {
    return {
      
      name: 'pikachu', 
      id: index, 
      img: '', 
      stats:{
        height: 70,
        weight: 10,
        ability: 'overgrow',
        hp: 5,
        attack: 10,
        defense: 12,
        sa: 15,
        sd: 5,
        speed: 7,
      },
    }
  });

  return (
    <div className="App">
      <ul id='poke-grid'>
        {
          pokemons.map((pokemon,index) => (
            <PokeCard key={index} data={pokemon} onClick={() => setSelectedPokemon(index)}/>
          ))
        }
      </ul>
      <PokeDetails/>
    </div>
  );
}

export default App;
