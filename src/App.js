import { useEffect, useState } from 'react';
import './App.css';
import PokeCard from './components/poke-card/PokeCard';
import PokeDetails from './components/poke-details/PokeDetails';

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState(0);

  const [pokemons, setPokemons] = useState(Array.from({length: 20}, (_,index) => {
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
  }));

  const getPokeData = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
    const data = await response.json();
    const results = data.results;

    for (let index = 0; index < results.length; index++) {     
      const pokemon = results[index];
      const pokeData = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon.name);
      const pokeJson = await pokeData.json();
      results[index] = pokeJson;
    }
    setPokemons(results);
    
  }

  useEffect(() => getPokeData, []);

  return (
    <div className="App">
      <ul id='poke-grid'>
        {
          pokemons.map((pokemon,index) => (
            <PokeCard key={index} data={pokemon} onClick={() => setSelectedPokemon(index)}/>
          ))
        }
      </ul>
      <PokeDetails pokemon={pokemons[selectedPokemon]}/>
    </div>
  );
}

export default App;
