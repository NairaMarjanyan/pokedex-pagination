import React, {useEffect, useState} from "react";
import DataTable from "./components/UI/DataTable";
import Image from "./components/Image";
import InputSearch from "./components/UI/InputSearch";
import pokemonImage from "./assets/images/pokemon.png"

import styles from './App.module.scss';

function App() {
    const [pokemonsData, setPokemonsData] = useState([]);
    const [searchPokemon, setSearchPokemon] = useState("");

    const columns = [
        {
            name: "Avatar",
            selector: (row) => <Image row={row}/>,
            left: true
        },
        {
            name: "Name",
            selector: (row) => row.name
        },
        {
            name: "ID",
            selector: (row) => row.id
        },
        {
            name: "Color",
            selector: (row) => row.color
        },
         {
            name: "Type",
            selector: (row) => row.type
        },
        {
            name: "Height",
            selector: (row) => row.height
        },
        {
            name: "Weight",
            selector: (row) => row.weight,
            right: true
        }
    ];


    useEffect(()=>{
      Promise.all(Array.from({length: 150}, (_, i) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
          .then(response => response.json())
          .then(({  name, game_indices, types, weight, height, id, sprites }) => ({
            name,
            color: game_indices[1].version.name,
            type: types[0].type.name,
            weight,
            height,
            img: sprites.front_default,
            id
        }))
    )).then(setPokemonsData)
}, [])

    function handleChange(event)  {
        setSearchPokemon(event.target.value)
    }

    const filteredData = !searchPokemon ? pokemonsData : pokemonsData.filter(pokemon => pokemon.type.toLowerCase().includes(searchPokemon.toLowerCase()))

  return (
    <div className={styles.App}>
        <header>
            <img src={pokemonImage} alt="pokemon-text"  width="300px" height="120px"/>
        </header>
        <div className={styles.Input}>
            <InputSearch onChange={handleChange} value={searchPokemon} />
        </div>
        <DataTable data={filteredData} columns={columns} />
    </div>
  );
}

export default App;
